document.addEventListener("DOMContentLoaded", function () {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith("es") ? "es" : userLang.startsWith("it") ? "it" : "en";
    const jsonFile = `./data/${lang}.json`;

    document.documentElement.lang = lang; // Aggiorna il tag <html> con la lingua giusta

    fetch(jsonFile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.querySelector(".hero-container h1").textContent = data.heroTitle;
            document.querySelector(".hero-container button").textContent = data.bookNowBtn;
            document.querySelector(".description h2").textContent = data.aboutTitle;

            const aboutDesc = document.querySelector(".description p");
            aboutDesc.innerHTML = `
                ${data.aboutDescription.part1}
                <br /><br />
                <i>${data.aboutDescription.qualitySmashburgers}</i><br />
                ${data.aboutDescription.smashDescription}
                <br /><br />
                <i>${data.aboutDescription.handmadePasta}</i><br />
                ${data.aboutDescription.pastaDescription}
            `;

            document.querySelector("footer p").innerHTML = data.contactInfo;

            const navItems = document.querySelectorAll(".nav-link");
            navItems[0].textContent = data.navHome;
            navItems[1].textContent = data.navAbout;
            navItems[2].textContent = data.navContact;
            navItems[3].textContent = data.navMenu;
        })
        .catch(error => console.error('Error loading JSON:', error));
});


document.getElementById("español").addEventListener("click", function () {
    changeLanguage("es");
});

document.getElementById("english").addEventListener("click", function () {
    changeLanguage("en");
});

document.getElementById("italiano").addEventListener("click", function () {
    changeLanguage("it");
});

function changeLanguage(lang) {
    const jsonFile = `./data/${lang}.json`;

    document.documentElement.lang = lang; // Aggiorna il tag <html> con la lingua giusta

    fetch(jsonFile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.querySelector(".hero-container h1").textContent = data.heroTitle;
            document.querySelector(".hero-container button").textContent = data.bookNowBtn;
            document.querySelector(".description h2").textContent = data.aboutTitle;

            const aboutDesc = document.querySelector(".description p");
            aboutDesc.innerHTML = `
                ${data.aboutDescription.part1}
                <br /><br />
                <i>${data.aboutDescription.qualitySmashburgers}</i><br />
                ${data.aboutDescription.smashDescription}
                <br /><br />
                <i>${data.aboutDescription.handmadePasta}</i><br />
                ${data.aboutDescription.pastaDescription}
            `;

            document.querySelector("footer p").innerHTML = data.contactInfo;

            const navItems = document.querySelectorAll(".nav-link");
            navItems[0].textContent = data.navHome;
            navItems[1].textContent = data.navAbout;
            navItems[2].textContent = data.navContact;
            navItems[3].textContent = data.navMenu;
        })
        .catch(error => console.error('Error loading JSON:', error));
}
