chrome.runtime.sendMessage({ action: "getFirebaseConfig" }, (response) => {
    const firebaseConfig = response.firebaseConfig;
    initializeFirebase(firebaseConfig);
  
    const isJobPage = window.location.href.startsWith("https://www.linkedin.com/jobs/view/");
    if (isJobPage) {
      const jobTitle = document.querySelector(".jobs-apply-form-title").innerText.trim();
      const companyName = document.querySelector(".jobs-apply-form-company").innerText.trim();
  
      const timestamp = new Date().toISOString();
  
      const message = {
        action: "showPopup",
        jobRole: jobTitle,
        companyName: companyName,
        timestamp: timestamp,
      };
  
      chrome.runtime.sendMessage(message);
    }
  });
  
  function initializeFirebase(config) {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
  