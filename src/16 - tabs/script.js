[...document.querySelectorAll(".tab")].forEach(_ => {
  _.addEventListener("click", (e) => {
    if (e.target.dataset.active == "true") return;
    updateTabsColor(e.target);
    updateTabContentDisplay(e.target.dataset.tabIndex);
  })
})

function updateTabsColor(activeTab) {
  [...document.querySelectorAll(".tab")].forEach(e => {
    e.dataset.active = "false";
  })
  activeTab.dataset.active = "true";
}

function updateTabContentDisplay(activeTabIndex) {
  [...document.querySelectorAll(".tab-content")].forEach(e => {
    e.dataset.active = "false";
    if (e.dataset.tabContentIndex == activeTabIndex) {
      e.dataset.active = "true";
    }
  })
}