document.addEventListener("DOMContentLoaded", function () {
    const shortenBtn = document.getElementById("shorten-btn");
    const longUrlInput = document.getElementById("long-url");
    const crossBtn = document.getElementById("crossBtn");
    const resultDiv = document.getElementById("result");

    function isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    }

    longUrlInput.addEventListener("input", function () {
        if (longUrlInput.value !== "") {
            crossBtn.style.display = "inline";
        } else {
            crossBtn.style.display = "none";
        }
    });

    crossBtn.addEventListener("click", function () {
        longUrlInput.value = "";
        crossBtn.style.display = "none";
        resultDiv.innerHTML = "";
    });

    shortenBtn.addEventListener("click", function () {
        const longUrl = longUrlInput.value;

        if (longUrl === "") {
            alert("Please enter a URL.");
            return;
        }

        if (!isValidURL(longUrl)) {
            alert("Invalid URL. Please enter a valid URL.");
            return;
        }

        const shortUrl = `https://short.url/${Math.floor(Math.random() * 100000)}`;
        resultDiv.innerHTML = `Shortened URL: <a href="${longUrl}" target="_blank">${shortUrl}</a>`;
    });
});
