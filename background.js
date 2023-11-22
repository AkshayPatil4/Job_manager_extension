chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveJob") {
    const jobData = {
      jobRole: request.jobRole,
      companyName: request.companyName,
      timestamp: request.timestamp,
    };

    // Send data to your Firebase API
    sendDataToFirebaseAPI(jobData);
  }
});

function sendDataToFirebaseAPI(jobData) {
  // Replace with your Firebase API endpoint and authentication method
  const apiUrl = "YOUR_FIREBASE_API_ENDPOINT";
  const apiKey = "YOUR_API_KEY";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(jobData),
  })
  .then(response => response.json())
  .then(data => console.log("Data sent to Firebase:", data))
  .catch(error => console.error("Error sending data to Firebase:", error));
}
