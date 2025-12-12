export function initFinder() {

    const finderData = {
        name: "Users",
        folderImage: "./images/folder.png",
        children: [
            {
                name: "Seonjin",
                folderImage: "./images/folder.png",
                children: [
                    {
                        name: "Apps",
                        folderImage: "./images/folder.png",
                        children: [
                            { name: "Calculator", type: "App", image: './images/calculator.png' },
                            { name: "Weather", type: "App", image: './images/weather.png' },
                            { name: "Finder", type: "App", image: "./images/folder.png" },
                        ]
                    },
                    {
                        name: "Desktop",
                        image: "./images/folder.png",
                        children: [
                            {
                                name: "Profile",
                                folderImage: "./images/Profile.png",
                                type: "preview",
                                image: "./images/profile_photo.jpg",
                                hoverImage: './images/resume_image.jpg',
                                myName: "Kim Seon Jin",
                                certificate: "1종보통면허, 컴퓨터그래픽스운용기능사, 웹디자인기능사",
                                email: "ydsmj4571@gmail.com",
                                number: "010-3367-4571",
                                skills: [
                                    { name: "HTML / CSS", level: "웹 페이지 구조와 스타일링 기본 원리를 이해하고 있으며, 반응형 레이아웃 구성과 웹 표준·접근성 기초를 바탕으로 간단한 웹 UI를 제작할 수 있습니다." },
                                    { name: "JavaScript / jQuery", level: "DOM 조작, 이벤트 처리 등 웹 동작의 핵심 개념을 익혔습니다. JavaScript로 기본적인 인터랙션 구현이 가능하며, jQuery를 활용한 UI 효과 및 동적 요소 처리 경혐이 있습니다." },
                                    { name: "Python", level: "기본 문법과 프로그래밍 기초 개념을 익혔습니다. 자로형, 조건문, 반복문, 함수 활용 등 논리적 문제 해결 기반을 갖추고 있습니다." },
                                    { name: "C", level: "절차지향 프로그래밍과 메모리 관리 개념을 이해하고 있습니다. 포인터, 구조체, 동적 메모리 할당 등 기본기를 중심으로 탄탄한 기초 프로그래밍 역량을 배운 적 있습니다." },
                                    { name: "C++", level: "객체지향 프로그래밍의 원리와 가삼 함수, 오버로딩, 템플릿 등 고급 기능을 학습했습니다. 복잡한 구조를 체계적으로 표현하는 방법을 익혔습니다." },
                                    { name: "Java", level: "OOP 핵심 개념(클래스, 상속, 다형성)에 대한 이해를 바탕으로 예외 처리, 인터페이스, 컬렉션 프레임워크 등 언어의 주요 기능을 실습하며 기초 역량을 익혔습니다." },
                                    { name: "JSP", level: "Java 기반 서버 사이드 렌더링 방식으로 동적 페이지를 구성하는 방법을 학습했습니다. Oracle DB 연동 및 간단한 데이터 처리에 대해 학습했습니다." },
                                    { name: "Spring", level: "Spring MVC 구조와 요청-응답 흐름에 대해서 배우고, 의존성 주입(DI) 기반의 애플리케이션 구성과 기본적인 서버 기능 구현을 학습한 경험 있습니다." },
                                ]
                            },

                            {
                                name: "Design",
                                folderImage: "./images/Design.png",
                                children: [
                                    { name: "여행사 홈페이지", type: "preview", image: './images/design/trip_web.jpg', explain: '두바이의 여행상품을 소개하는 홈페이지를 일러스트/포토샵으로 제작' },
                                    { name: "아이폰 웹 페이지", type: "preview", image: './images/design/iphone_web.jpg', explain: '아이폰 소개 페이지를 일러스트/포토샵으로 제작' },
                                    { name: "엔제리너스 웹 페이지", type: "preview", image: './images/design/angelinus_main.jpg', explain: '엔제리너스 웹 페이지 레이아웃 디자인 작업' },
                                    { name: "일러스트 배너 1", type: "preview", image: './images/design/illust_banner1.jpg', explain: '웹 배너를 일러스트로 제작' },
                                    { name: "일러스트 배너 2", type: "preview", image: './images/design/illust_banner2.jpg', explain: '웹 배너를 일러스트로 제작' },
                                    { name: "헬스장 웹 배너", type: "preview", image: './images/design/gym_banner.jpg', explain: '웹 배너를 포토샵으로 제작' },
                                    { name: "비스포크 웹 배너", type: "preview", image: './images/design/bespoke_banner.jpg', explain: '웹 배너를 포토샵으로 제작' },
                                    { name: "서브웨이 인스타", type: "preview", image: './images/design/subway_insta.jpg', explain: '인스타 피드 이미지 제작' },
                                    { name: "서브웨이 웹 배너", type: "preview", image: './images/design/subway_banner.jpg', explain: '웹 배너 이미지 제작' },
                                    { name: "크림 웹 배너", type: "preview", image: './images/design/kream_banner.jpg', explain: '웹 배너 이미지 제작' },
                                    { name: "뇌새김 웹 배너", type: "preview", image: './images/design/study_banner.jpg', explain: '웹 배너 이미지 제작' },
                                    { name: "low poly art", type: "preview", image: './images/design/low_poly_art.jpg', explain: '로우 폴리 아트 기반으로 적용해 만든 이미지' },
                                    { name: "마리오 gif", type: "preview", image: './images/design/mario.gif', explain: '포토샵에서 타임라인 기능을 이용해 만든 gif 파일' },
                                    { name: "gym gif", type: "preview", image: './images/design/power.gif', explain: '포토샵에서 타임라인 기능을 이용해 만든 gif 파일' },
                                ],
                            },

                            {
                                name: "Projects",
                                folderImage: "./images/Projects.png",
                                children: [
                                    { name: "Ando Tadao", type: "preview", image: "./images/Ando_Page.jpg", explain: '일본의 한 건축가 ‘안도 다다오’의 작품에 대해 소개하는 사이트를 자체 제작', timeline: '2023.09.13 - 2023.12.02', link: './andotadao/index.html' },
                                    { name: "Angelinus", type: "preview", image: "./images/angelinus.jpg", explain: '엔제리너스 카페의 홈페이지를 리뉴얼하여 제작', timeline: '2024.02.15 - 2024.03.10', link: './angelinus/index.html' },
                                    { name: "Musign", type: "preview", image: "./images/musign.jpg", explain: '인터넷 강의를 들으며 제작한 반응형 웹 뮤자인 홈페이지 제작', timeline: '2023-12.17 - 2024.01.22', link: './musign/index.html' },
                                    { name: "Monami", type: "preview", image: "./images/monami.jpg", explain: '모나미 홈페이지를 리뉴얼하여 제작', timeline: '2025.07.22 - 2025.09.13', link: './monami/index.html' },
                                ],
                            },

                            {
                                name: "Tools",
                                folderImage: "./images/Tools.png",
                                children: [
                                    { name: "VSCode", type: "preview", image: './images/tools/tool-vscode.png', level: '능숙하게 사용', explain: 'HTML, CSS, JavaScript, Python 등 다양한 언어를 학습할 때 주력으로 사용. 웹 개발 기초를 다지며 확장 프로그램 활용법을 익혔습니다.' },
                                    { name: "InteliJ", type: "preview", image: './images/tools/tool-intellij.png', level: '사용 경험 있음', explain: 'Java 프로그래밍 기초를 배우는 과정에서 접했습니다. IDE 환경에 대한 이해도를 높이는 계기가 되었습니다.' },
                                    { name: "eclipse", type: "preview", image: './images/tools/tool-eclipse.png', level: '사용 경험 있음', explain: 'JSP, Oracle DB, Spring 프레임워크 등 백엔드 기술 스택을 학습하며 사용해 보았습니다. 개발 환경 설정 경험이 있습니다.' },
                                    { name: "android studio", type: "preview", image: './images/tools/tool-android-studio.png', level: '사용 경험 있음', explain: 'XML 레이아웃과 Java를 활용하여 안드로이드 앱의 기본 구조를 만들어보는 실습을 진행했습니다.' },
                                    { name: "Xcode", type: "preview", image: './images/tools/tool-xcode.png', level: '사용 경험 있음', explain: 'Mac 환경에서 C, C++ 등 기초 프로그래밍 언어의 컴파일 및 실행 과정을 학습하며 사용법을 익혔습니다.' },
                                    { name: "Photoshop", type: "preview", image: './images/tools/tool-photo.png', level: '능숙하게 사용', explain: '컴퓨터그래픽스 운용기능사 자격증 취득 과정에서 이미지 편집 및 보정 기술을 배웠습니다.' },
                                    { name: "Illustrator", type: "preview", image: './images/tools/tool-illust.png', level: '능숙하게 사용', explain: '웹디자인/컴퓨터그래픽스 자격증 취득 시 활용했습니다. 벡터 이미지 제작의 기초를 다졌습니다.' },
                                    { name: "Indesign", type: "preview", image: './images/tools/tool-indesign.png', level: '사용 경험 있음', explain: '포트폴리오 제작 등 간단한 편집 디자인 실습 시 사용해 보았습니다.' },
                                    { name: "AdobeXD", type: "preview", image: './images/tools/tool-xd.png', level: '사용 경험 있음', explain: 'UI/UX 디자인 개인 학습 목적으로 사용하며 간단한 화면 설계 및 프로토타입 제작 원리를 익혔습니다.' },
                                    { name: "Figma", type: "preview", image: './images/tools/tool-figma.png', level: '사용 경험 있음', explain: '웹 페이지 제작 스터디 과정에서 UI 디자인 툴로 활용했습니다. 협업 툴의 기본 개념을 이해하고 있습니다.' },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    };

    /* DOM */
    const finderWindow = document.querySelector('.window.finder');
    if (!finderWindow) return;

    const content = finderWindow.querySelector('.content');
    const finderClose = finderWindow.querySelector('.close');

    if (finderClose) {
        finderClose.addEventListener('click', () => {
            finderWindow.classList.remove('active');
            content.innerHTML = '';
        });
    }

    function callOpenApp(appName, path = null) {
        if (window.WindowControls?.openApp) {
            window.WindowControls.openApp(appName, { path });
        }
    }

    function callActivateDock(appName) {
        if (window.WindowControls?.setActiveDockIcon) {
            window.WindowControls.setActiveDockIcon(appName);
        }
    }

    /* Finder tree 탐색 */
    function getNodeByPath(path) {
        if (!path || path.length === 0) return null;
        let node = finderData;
        for (const name of path) {
            if (node.name === name) continue;
            node = node.children?.find(c => c.name === name);
            if (!node) return null;
        }
        return node;
    }


    /* ----------------------------------------------------------
     * openPath — preview 분기 포함, scroll 복구
     * ---------------------------------------------------------- */
    function openPath(path = []) {

        const folderNameEl = finderWindow.querySelector('.folder-name');
        const folderIconEl = finderWindow.querySelector('.folder-icon');

        if (!path || path.length === 0) {
            content.innerHTML = '';
            renderColumn([finderData], 0, null, []);
            folderNameEl.textContent = 'Root';
            folderIconEl.style.backgroundImage = `url(./images/folder.png)`;
            return;
        }

        window.Finder.currentPath = path;

        const currentNode = getNodeByPath(path);
        const currentName = path[path.length - 1];

        folderNameEl.textContent = currentName;

        const iconURL = currentNode?.folderImage || currentNode?.image || './images/folder.png';
        folderIconEl.style.backgroundImage = `url(${iconURL})`;

        content.innerHTML = '';
        renderColumn([finderData], 0, path[0], []);

        for (let depth = 1; depth < path.length; depth++) {
            const parentPath = path.slice(0, depth);
            const parentNode = getNodeByPath(parentPath);
            renderColumn(parentNode?.children || [], depth, path[depth], parentPath);
        }

        const lastNode = getNodeByPath(path);

        if (lastNode && lastNode.type === "preview") {
            renderPreview(lastNode, path.length, path);
        }

        else if (lastNode?.children?.length > 0) {
            renderColumn(lastNode.children, path.length, null, path);
        }

        else if (!lastNode?.children || lastNode.children.length === 0) {
            renderPreview(lastNode, path.length, path);
        }

        // 오른쪽으로 자동 스크롤
        setTimeout(() => {
            content.scrollLeft = content.scrollWidth;
        }, 0);

    }


    /* ----------------------------------------------------------
     * Column
     * ---------------------------------------------------------- */
    function renderColumn(items, level, selectedName, pathPrefix) {

        Array.from(content.children).forEach((child, idx) => {
            if (idx >= level) child.remove();
        });

        const ul = document.createElement('ul');
        ul.classList.add('finder-columns');

        const isMobile = window.innerWidth <= 768;

        // 모바일 Back 버튼
        if (pathPrefix.length >= 1 && isMobile) {
            const backLi = document.createElement('li');
            backLi.classList.add('folder', 'back-item');
            backLi.innerHTML = `
                        <img src="./images/folder.png" class="list-picture">
                        <span>...</span>
                    `;
            backLi.addEventListener('click', () => {
                const parentPath = pathPrefix.slice(0, -1);
                if (pathPrefix.length === 1 && pathPrefix[0] === 'Users') openPath([]);
                else openPath(parentPath);
            });
            ul.appendChild(backLi);
        }

        items.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('folder');

            const iconSrc =
                item.folderImage ||
                item.image ||
                (item.type === "App"
                    ? `./images/${item.name.toLowerCase()}.png`
                    : "./images/folder.png");

            li.innerHTML = `
                <img src="${iconSrc}" class="list-picture">
                <span>${item.name}</span>
                <div class="column-arrow"> &gt; </div>
            `;

            // 선택 강조
            if (selectedName === item.name && !isMobile) li.classList.add('selected');

            /* -----------------------------------------
             * ★ 수정됨: Finder 내부에서 App을 클릭하면
             *   직접 창을 조작하지 않고 AppCore.openApp 로 통합
             * ----------------------------------------- */
            li.addEventListener('click', (e) => {
                e.stopPropagation();

                const newPath = [...pathPrefix, item.name];

                if (item.type === 'App') {

                    const appName = item.name.toLowerCase();

                    // Finder가 스스로 자기창을 건드리지 않도록 AppCore에 위임
                    callOpenApp(appName);

                    // Dock active
                    callActivateDock(appName);

                    return;
                }

                // 폴더 탐색
                openPath(newPath);
            });

            ul.appendChild(li);
        });

        content.appendChild(ul);
    }

    /* ----------------------------------------------------------
     * Preview (분기별 property 렌더링)
     * ---------------------------------------------------------- */
    function renderPreview(item, level, path = []) {

        Array.from(content.children).forEach((child, idx) => {
            if (idx >= level) child.remove();
        });

        const parentName = path[path.length - 2];
        let propertyHTML = "";

        if (item.name === "Profile") {
            initSkillTooltip();
            const skillsHTML = item.skills.map(skill => `
                <span class='skill-item' data-level="${skill.level}">
                    ${skill.name}
                </span>
                `)
                .join('');

            propertyHTML = `
                <div class="property"><div class="key">Name</div><div class="value">${item.myName}</div></div>
                <div class="property"><div class="key">Certificate</div><div class="value">${item.certificate}</div></div>
                <div class="property"><div class="key">Email</div><div class="value">${item.email}</div></div>
                <div class="property"><div class="key">Number</div><div class="value">${item.number}</div></div>
                <div class="property"><div class="key">Skills</div><div class='value skills-list'>${skillsHTML}</div></div>
                `;
        }

        else if (parentName === "Design") {
            propertyHTML = `
                <div class="property"><div class="key">Name</div><div class="value">${item.name}</div></div>
                <div class="property"><div class="key">Explain</div><div class="value">${item.explain}</div></div>
            `;
        }

        else if (parentName === "Projects") {
            propertyHTML = `
                <div class="property"><div class="key">Name</div><div class="value">${item.name}</div></div>
                <div class="property"><div class="key">Explain</div><div class="value">${item.explain}</div></div>
                <div class="property"><div class="key">Timeline</div><div class="value">${item.timeline}</div></div>
                <a href="${item.link}" class="move-link">구경하기</a>
            `;
        }

        else if (parentName === "Tools") {
            propertyHTML = `
                <div class="property"><div class="key">Name</div><div class="value">${item.name}</div></div>
                <div class="property"><div class="key">Level</div><div class="value">${item.level}</div></div>
                <div class="property"><div class="key">Explain</div><div class="value">${item.explain}</div></div>
            `;
        }

        const previewContainer = document.createElement('div');
        previewContainer.classList.add('finder-preview');

        previewContainer.innerHTML = `
            <div class="preview">
                <img src="${item.image}" class="preview-image" data-name="${item.name}" data-parent="${parentName}"/>
                <div class="property-container">${propertyHTML}</div>
            </div>
        `;

        const backBtn = document.createElement('button');
        backBtn.classList.add('preview-closeBtn');
        backBtn.textContent = '←';
        backBtn.addEventListener('click', () => {
            if (path.length > 1) openPath(path.slice(0, -1));
        });

        previewContainer.prepend(backBtn);
        content.appendChild(previewContainer);
    }

    function initSkillTooltip() {
        let tooltip = null;

        document.addEventListener("mouseover", function (e) {
            if (!finderWindow.classList.contains('active')) return;

            if (!e.target.classList.contains("skill-item")) return;

            const skill = e.target;
            const text = skill.dataset.level || "설명 없음";

            if (tooltip) tooltip.remove();

            tooltip = document.createElement("div");
            tooltip.className = "skill-tooltip";
            tooltip.innerHTML = text;
            document.body.appendChild(tooltip);

            tooltip.style.opacity = "1";

            requestAnimationFrame(() => {
                const rect = skill.getBoundingClientRect();
                const tt = tooltip.getBoundingClientRect();

                let left = rect.left + rect.width / 2 - tt.width / 2;
                let top = rect.top - tt.height - 12;

                if (left < 8) left = 8;
                if (left + tt.width > window.innerWidth - 8)
                    left = window.innerWidth - tt.width - 8;

                if (top < 8)
                    top = rect.bottom + 12;

                tooltip.style.left = left + "px";
                tooltip.style.top = top + "px";
            });
        }, true);

        document.addEventListener("mouseout", function (e) {
            if (!finderWindow.classList.contains('active')) return;

            if (!e.target.classList.contains("skill-item")) return;
            if (tooltip) {
                tooltip.remove();
                tooltip = null;
            }
        }, true);
    }

    /* ----------------------------------------------------------
     * app-grid 연동 복구
     * ---------------------------------------------------------- */
    const apps = document.querySelectorAll('.app');

    apps.forEach(app => {
        app.addEventListener('click', () => {
            const targetApp = app.dataset.app;
            if (!targetApp) return;

            if (targetApp === 'finder') {
                const folderName = app.querySelector('.app-name')?.textContent?.trim();
                let targetPath;

                if (folderName === 'Profile') {
                    targetPath = ["Users", "Seonjin", "Desktop", "Profile"];
                }
                else if (folderName === 'Design') {
                    targetPath = ["Users", "Seonjin", "Desktop", "Design"];
                }
                else if (folderName === 'Projects') {
                    targetPath = ["Users", "Seonjin", "Desktop", "Projects"];
                }
                else if (folderName === 'Tools') {
                    targetPath = ["Users", "Seonjin", "Desktop", "Tools"];
                }
                else {
                    targetPath = ["Users", "Seonjin", "Desktop"];
                }

                window.WindowControls.openApp("finder", { path: targetPath });
                return;
            }

            window.WindowControls.openApp(targetApp);
        });
    });

    /* ============================================================
    * Quick Look 이미지 확대 기능
    * ============================================================ */
    document.addEventListener("click", (e) => {
        const img = e.target.closest('.preview-image');
        if (!img) return;
        if (img.dataset.name === 'Profile') return;
        if (img.dataset.parent === 'Tools') return;
        /* ============================================================
         * Quick Look
         * ============================================================ */
        function openQuickLook(img) {
            const rect = img.getBoundingClientRect();
            const scrollTop = window.scrollY;
            const scrollLeft = window.scrollX;

            const overlay = document.createElement("div");
            overlay.className = "quicklook-overlay";

            const container = document.createElement("div");
            container.className = "quicklook-container";

            const header = document.createElement("div");
            header.className = "quicklook-header";
            header.innerHTML = `
                <span class="quicklook-close">✕</span>
                <span class="quicklook-name">${img.dataset.name}</span>
            `;

            const bigImg = document.createElement("img");
            bigImg.src = img.src;

            container.appendChild(header);
            container.appendChild(bigImg);
            overlay.appendChild(container);
            document.body.appendChild(overlay);

            const startX = rect.left + rect.width / 2 + scrollLeft;
            const startY = rect.top + rect.height / 2 + scrollTop;

            container.style.position = "absolute";
            container.style.left = startX + "px";
            container.style.top = startY + "px";
            container.style.transform = "translate(-50%, -50%) scale(0.1)";
            container.style.transition = "transform 0.25s ease, left 0.25s ease, top 0.25s ease";

            requestAnimationFrame(() => {
                container.style.left = "50%";
                container.style.top = "50%";
                container.style.transform = "translate(-50%, -50%) scale(1)";
                container.style.opacity = '1';
            });

            function closeQuickLook() {
                container.style.left = startX + "px";
                container.style.top = startY + "px";
                container.style.transform = "translate(-50%, -50%) scale(0.1)";

                setTimeout(() => overlay.remove(), 250);
            }

            overlay.addEventListener("click", (e) => {
                if (
                    e.target.classList.contains("quicklook-close") ||
                    e.target.classList.contains("quicklook-overlay")
                ) {
                    closeQuickLook();
                }
            });

            document.addEventListener("keydown", function escClose(ev) {
                if (ev.key === "Escape") {
                    closeQuickLook();
                    document.removeEventListener("keydown", escClose);
                }
            });
        }

        openQuickLook(img);
    });

    window.Finder = { openPath, finderData, getNodeByPath };
    window.dispatchEvent(new Event('FinderReady'));
}