const handleTabContainer = (container=new HTMLDivElement) => {
    const tabBar = container.querySelector("#tabBar");
    const divContainer = container.querySelector("#tabDivContainer");

    let selectedTab = null;

    const setActiveButton = (tabName) => {
        tabBar.querySelector("button[selected]")?.toggleAttribute?.("selected", false);

        const button = tabBar.querySelector(`button[name=${tabName}]`);
        if (button) {
            button.toggleAttribute("selected", true);
        }
    }

    const setActiveTab = (tabName) => {
        divContainer.querySelector("div[selected]")?.toggleAttribute?.("selected", false);

        const tab = divContainer.querySelector(`div[name=${tabName}]`);
        if (tab) {
            tab.toggleAttribute("selected", true);
        }
    }

    const selectTab = (tabName) => {
        selectedTab = tabName;

        setActiveButton(tabName);
        setActiveTab(tabName);
    }

    const tabButtons = tabBar.querySelectorAll("button");
    for (let i = 0; i < tabButtons.length; i++) {
        const button = tabButtons.item(i);

        button.onclick = () => {
            const name = button.getAttribute("name");

            switch (name) {
                case "$d":
                    selectTab(null);
                    break;
                default:
                    selectTab(name);
            }
        }
    }

    selectTab(tabBar.querySelector("button[selected]")?.getAttribute?.("name") || divContainer.querySelector("div[selected]")?.getAttribute?.("name") || null);
}

const tabContainers = document.querySelectorAll("#tabContainer");
for (let i = 0; i < tabContainers.length; i++) {
    handleTabContainer(tabContainers.item(i));
}