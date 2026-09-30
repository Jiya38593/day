// ===============================
// PAGE NAVIGATION
// ===============================

const pages = [];

for (let i = 1; i <= 9; i++) {
    pages.push(document.getElementById("page" + i));
}

function goToPage(number) {

    pages.forEach(function(page) {
        page.classList.add("hidden");
    });

    pages[number - 1].classList.remove("hidden");

    // Start love meter when Page 6 opens
    if (number === 6) {
        startLoveMeter();
    }
}


// ===============================
// NO BUTTON - RUN AWAY
// ===============================

const noButton = document.getElementById("noButton");

if (noButton) {

    noButton.addEventListener("mouseover", function() {

        const x = Math.random() * 250 - 125;
        const y = Math.random() * 150 - 75;

        noButton.style.transform =
            "translate(" + x + "px, " + y + "px)";

    });

}


// ===============================
// LOVE METER
// ===============================

function startLoveMeter() {

    const fill = document.getElementById("meterFill");
    const text = document.getElementById("meterText");

    if (!fill || !text) return;

    // Reset
    fill.style.width = "0%";

    text.innerHTML =
        "Measuring love... 🫠🤍";

    // Fill meter
    setTimeout(function() {

        fill.style.width = "100%";

    }, 500);

    // Final message
    setTimeout(function() {

        text.innerHTML =
            "100% FULL ❤️";

    }, 3300);

}