"use strict";

const { EXPORT_PAGE_PATH } = globalThis.TabGroupVaultConstants;
const { createTab } = globalThis.TabGroupVaultBrowserApi;

document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("openExport");

  openButton.addEventListener("click", () => {
    createTab({
      url: chrome.runtime.getURL(EXPORT_PAGE_PATH)
    }).catch((error) => {
      console.error("Failed to open TabGroupVault export page.", error);
    });
  });
});
