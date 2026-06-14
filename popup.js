"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("openArchive");

  openButton.addEventListener("click", () => {
    chrome.tabs.create({
      url: chrome.runtime.getURL("archive.html")
    });
  });
});
