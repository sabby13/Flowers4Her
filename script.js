const letter = document.getElementById("letter");
const hint = document.getElementById("hint");

const letterWrapper = document.getElementById("letterWrapper");
const textArea = document.getElementById("textArea");
const videoOverlay = document.getElementById("videoOverlay");
const flowerVideo = document.getElementById("flowerVideo");

const message = "lucky is to have you .";

let stage = 0;

/* CLICK HANDLER */


letter.addEventListener("click", () => {
    if (stage === 0) {
        stage = 1;
        hint.style.display = "none";
        letter.src = "assets/L2.png";
        letter.classList.add("l2-hover");
        createHeartBurst();
    } 
    else if (stage === 1) {
        stage = 2;
        startSet2();
    }
});

/* SET 2 START */
function startSet2() {
    letter.style.display = "none";

    letterWrapper.style.display = "block";
    typeText();

    setTimeout(() => {
        videoOverlay.classList.add("show");
        letterWrapper.classList.add("fade-out");

        setTimeout(() => {
            letterWrapper.style.display = "none";
        }, 1500);

    }, 6500);

    flowerVideo.src = "assets/flowers.mp4";
    flowerVideo.play();
}

/* TYPE EFFECT */
function typeText() {
    let i = 0;
    textArea.textContent = "";

    function type() {
        if (i < message.length) {
            textArea.textContent += message[i++];
            setTimeout(type, 60 + Math.random() * 90);
        }
    }
    type();
}

/* HEART BURST */
function createHeartBurst() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    for (let i = 0; i < 110; i++) {
        const heart = document.createElement("img");
        heart.src = "assets/heart.png";
        heart.classList.add("heart");
        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 300 + 100;

        heart.style.left = `${cx - 25}px`;
        heart.style.top = `${cy - 25}px`;

        heart.animate([
            { transform: "translate(0,0) scale(1)", opacity: 1 },
            {
                transform: `translate(${Math.cos(angle)*speed}px, ${Math.sin(angle)*speed}px) scale(0.5)`,
                opacity: 0
            }
        ], {
            duration: 1800,
            easing: "ease-out",
            fill: "forwards"
        });

        setTimeout(() => heart.remove(), 4000);
    }
}
