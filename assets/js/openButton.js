function documentReady() {
  if (document.readyState === "interactive") {
    return Promise.resolve();
  } else {
    return new Promise((resolve) => {
      function handleChange() {
        if (document.readyState === "interactive") {
          resolve();
          document.removeEventListener("readystatechange", handleChange);
        }
      }

      document.addEventListener("readystatechange", handleChange);
    });
  }
}

fetch("https://app.hawaiibusplus.com/.netlify/functions/userdata", {
  credentials: "include",
}).then((res) => {
  if (res.ok) {
    return documentReady().then(() => {
      /** @type {HTMLAnchorElement} */
      const button = document.querySelector("#openApp");
      button.href = "https://app.hawaiibusplus.com/";
      button.textContent = "Open app";
    })
  }
});
