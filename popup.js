function saveJob() {
  const jobRole = document.getElementById("jobRole").value;
  const companyName = document.getElementById("companyName").value;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    const message = {
      action: "saveJob",
      jobRole: jobRole,
      companyName: companyName,
    };
    chrome.tabs.sendMessage(activeTab.id, message);
  });
}
