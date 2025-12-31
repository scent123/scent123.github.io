export function initWindowControls() {
    
    // 시스템 상수 및 설정
    const Z_INDEX_BASE = 1000;
    const ANIMATION_DURATION = 400;

    /* ============================================================
     * AppCore
     * ============================================================ */
    const AppCore = {
                updateDockIcon(appName, isActive) {
            const icon = document.querySelector(`.dock-icon[data-app="${appName}"]`);
            if (!icon) return;

            if (isActive) {
                icon.classList.add("active");
                if (window.innerWidth <= 768) icon.style.display = "flex";
            } else {
                icon.classList.remove("active");
                if (window.innerWidth <= 768) icon.style.display = "none";
            }
        },

        focusWindow(win) {
            if (!win) return;

            const allWindows = document.querySelectorAll('.window');
            const maxZ = Math.max(...Array.from(allWindows).map(w => parseInt(w.style.zIndex) || Z_INDEX_BASE));

            allWindows.forEach(w => w.classList.remove('focused'));
            win.classList.add('focused');

            if (parseInt(win.style.zIndex || 0) < maxZ || allWindows.length === 1) {
                win.style.zIndex = maxZ + 1;
            }

            const dockMenu = document.querySelector('.dock-menu');
            if (dockMenu?.classList.contains('active')) {
                dockMenu.classList.remove('active');
                document.querySelector('.dock-start')?.setAttribute('aria-expanded', 'false');
            }
        },

        /** 최소화 복구 */
        restoreWindow(win) {
            win.classList.remove('animating');
            win.style.display = 'flex';

            const { restoreWidth, restoreHeight, restoreLeft, restoreTop } = win.dataset;
            if (restoreWidth) win.style.width = restoreWidth;
            if (restoreHeight) win.style.height = restoreHeight;
            if (restoreLeft) win.style.left = restoreLeft;
            if (restoreTop) win.style.top = restoreTop;

            void win.offsetWidth;

            win.classList.add('animating');
            win.style.transform = "scale(1) translateY(0)";
            win.style.opacity = '1';
            win.classList.remove("is-minimizing");
            win.classList.add("active");

            setTimeout(() => win.classList.remove('animating'), ANIMATION_DURATION + 50);
            this.focusWindow(win);
        },

        openApp(appName, options = {}) {
            if (appName === "finder") return this.openFinder(options.path);

            const win = document.querySelector(`.window.${appName}`);
            if (!win) return;

            if (win.classList.contains("active") || win.classList.contains("is-minimizing")) {
                win.classList.contains("is-minimizing") ? this.restoreWindow(win) : this.focusWindow(win);
                this.updateDockIcon(appName, true);
                return;
            }

            win.style.display = 'flex';
            win.classList.add("active", "animating");
            win.style.opacity = "0";
            win.style.transform = "scale(0.95)";

            void win.offsetWidth;

            win.style.opacity = "1";
            win.style.transform = "scale(1)";
            
            this.updateDockIcon(appName, true);
            this.focusWindow(win);

            setTimeout(() => win.classList.remove("animating"), ANIMATION_DURATION);
        },

        /** Finder 전용 오픈 로직 (경로 제어 포함) */
        openFinder(path = null) {
            const win = document.querySelector(".window.finder");
            if (!win) return;

            const applyPath = () => {
                if (window.Finder?.openPath) {
                    const targetPath = path || window.Finder.currentPath || ["Users", "Seonjin", "Desktop"];
                    window.Finder.openPath(targetPath);
                }
            };

            if (win.classList.contains("active") || win.classList.contains("is-minimizing")) {
                if (path) applyPath();
                win.classList.contains("is-minimizing") ? this.restoreWindow(win) : this.focusWindow(win);
            } else {
                win.style.display = 'flex';
                win.classList.add('active', 'animating');
                win.style.opacity = "0";
                win.style.transform = "scale(0.95)";

                void win.offsetWidth;
                win.style.opacity = "1";
                win.style.transform = "scale(1)";

                applyPath();
                this.focusWindow(win);
                setTimeout(() => win.classList.remove('animating'), ANIMATION_DURATION);
            }
            this.updateDockIcon("finder", true);
        },

        /** 앱 종료 */
        closeApp(appName) {
            const win = document.querySelector(`.window.${appName}`);
            if (!win) return;

            win.classList.add("is-closing");
            setTimeout(() => {
                win.classList.remove("active", "is-closing", "animating", "focused");
                win.style.display = 'none';
                win.style.opacity = '';
                win.style.transform = '';
            }, 200);
            this.updateDockIcon(appName, false);
        }
    };

    /* ============================================================
     * Drag & Resize
     * ============================================================ */
    const windows = document.querySelectorAll(".window");

    windows.forEach(win => {
        const header = win.querySelector(".header");
        const handles = win.querySelectorAll(".resize-handle");

        let state = { isDragging: false, isResizing: false, handle: null };
        let offset = { x: 0, y: 0, w: 0, h: 0, l: 0, t: 0 };

        // 윈도우 클릭 시 최상단으로
        win.addEventListener("mousedown", () => AppCore.focusWindow(win));

        // 드래그 시작
        if (header) {
            header.addEventListener("mousedown", e => {
                if (e.target.closest(".remote")) return;
                state.isDragging = true;
                offset.x = e.clientX - win.offsetLeft;
                offset.y = e.clientY - win.offsetTop;
            });
        }

        // 리사이즈 시작
        handles.forEach(handle => {
            handle.addEventListener("mousedown", e => {
                e.preventDefault();
                if (win.classList.contains("is-zoomed")) return;
                state.isResizing = true;
                state.handle = Array.from(handle.classList).find(c => c !== 'resize-handle');
                offset.startX = e.clientX; offset.startY = e.clientY;
                offset.w = win.offsetWidth; offset.h = win.offsetHeight;
                offset.l = win.offsetLeft; offset.t = win.offsetTop;
            });
        });

        // 마우스 이동 핸들러
        document.addEventListener("mousemove", e => {
            if (state.isDragging && !win.classList.contains("is-zoomed")) {
                win.style.left = `${e.clientX - offset.x}px`;
                win.style.top = `${e.clientY - offset.y}px`;
            }

            if (state.isResizing) {
                let dx = e.clientX - offset.startX, dy = e.clientY - offset.startY;
                let nw = offset.w, nh = offset.h, nl = offset.l, nt = offset.t;

                if (state.handle.includes("right")) nw = offset.w + dx;
                if (state.handle.includes("left")) { nw = offset.w - dx; nl = offset.l + dx; }
                if (state.handle.includes("bottom")) nh = offset.h + dy;
                if (state.handle.includes("top")) { nh = offset.h - dy; nt = offset.t + dy; }

                if (nw > 300) { win.style.width = `${nw}px`; win.style.left = `${nl}px`; }
                if (nh > 200) { win.style.height = `${nh}px`; win.style.top = `${nt}px`; }
            }
        });

        document.addEventListener("mouseup", () => {
            state.isDragging = false;
            state.isResizing = false;
        });
    });

    /* ============================================================
     * UI Control Events
     * ============================================================ */
    
    // 닫기
    document.querySelectorAll(".remote .close").forEach(btn => {
        btn.addEventListener("click", () => {
            const win = btn.closest(".window");
            const app = win.dataset.app || win.classList[1];
            if (app === "calculator" && window.Calculator?.reset) window.Calculator.reset();
            AppCore.closeApp(app);
        });
    });

    // 최소화
    document.querySelectorAll(".remote .minimize").forEach(btn => {
        btn.addEventListener("click", () => {
            const win = btn.closest(".window");
            win.dataset.restoreWidth = win.style.width || win.offsetWidth + "px";
            win.dataset.restoreHeight = win.style.height || win.offsetHeight + "px";
            win.dataset.restoreLeft = win.style.left || win.offsetLeft + "px";
            win.dataset.restoreTop = win.style.top || win.offsetTop + "px";

            win.classList.add('animating');
            win.style.transform = "translateY(80vh) scale(0.25)";
            win.style.opacity = "0";
            win.classList.add("is-minimizing");

            setTimeout(() => {
                win.style.display = "none";
                win.classList.remove('animating', 'focused');
            }, 350);
        });
    });

    // 확대/축소
    document.querySelectorAll(".remote .zoom").forEach(btn => {
        btn.addEventListener("click", () => {
            const win = btn.closest(".window");
            if (win.classList.contains("calculator") || win.classList.contains("weather")) return;

            if (!win.classList.contains("is-zoomed")) {
                win.dataset.prevTop = win.style.top || win.offsetTop + "px";
                win.dataset.prevLeft = win.style.left || win.offsetLeft + "px";
                win.dataset.prevWidth = win.style.width || win.offsetWidth + "px";
                win.dataset.prevHeight = win.style.height || win.offsetHeight + "px";

                Object.assign(win.style, { top: '0', left: '0', width: '100vw', height: 'calc(100vh - 4rem)' });
                win.classList.add("is-zoomed");
            } else {
                Object.assign(win.style, {
                    top: win.dataset.prevTop, left: win.dataset.prevLeft,
                    width: win.dataset.prevWidth, height: win.dataset.prevHeight
                });
                win.classList.remove("is-zoomed");
            }
        });
    });

    /* ============================================================
     * Accessibility & Focus Management
     * ============================================================ */
    function setupFocusTrap(windowEl) {
        if (windowEl.dataset.focusTrapBound) return;
        windowEl.dataset.focusTrapBound = "true";

        windowEl.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;
            const focusables = windowEl.querySelectorAll('button:not([disabled]), [href], input, [tabindex="0"], .folder, .skill-item');
            if (!focusables.length) return;

            const first = focusables[0], last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        });
    }

    /** 앱 실행 시 시각적 포커스 가이드 */
    function handleInitialFocus(appName, options = {}) {
        const win = document.querySelector(`.window.${appName}`);
        if (!win) return;
        setupFocusTrap(win);

        if (appName === 'finder') {
            if (!options.path) {
                setTimeout(() => {
                    (win.querySelector('.folder.selected') || win.querySelector('.folder'))?.focus();
                }, 100);
            }
        } else {
            setTimeout(() => win.querySelector('.close')?.focus(), 300);
        }
    }

    // 빈 화면 클릭 시 포커스 해제
    document.addEventListener("mousedown", e => {
        const ignoreSelectors = ['.window', '.dock-menu', '.dock-icon', '.app'];
        if (!ignoreSelectors.some(s => e.target.closest(s))) {
            document.querySelectorAll('.window').forEach(w => w.classList.remove('focused'));
        }
    });

    /* ============================================================
     * Public API
     * ============================================================ */
    window.WindowControls = {
        openApp: (name, opt) => { AppCore.openApp(name, opt); handleInitialFocus(name, opt); },
        openFinder: (path) => { AppCore.openFinder(path); handleInitialFocus('finder', { path }); },
        closeApp: AppCore.closeApp.bind(AppCore),
        focusWindow: AppCore.focusWindow.bind(AppCore),
        setActiveDockIcon: (name) => AppCore.updateDockIcon(name, true),
        clearActiveDockIcon: (name) => AppCore.updateDockIcon(name, false)
    };
}