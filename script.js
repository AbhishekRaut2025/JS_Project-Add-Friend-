var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var check = 0;



btn.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "lime";
        btn.innerHTML = "Remove Friend"
        check = 1;
    } else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend"
        check = 0;
    }

}) 



const background = document.getElementById("background");

function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 6 + 4; // 4px to 10px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = `-10px`;

    particle.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5-10s
    particle.style.animationDelay = `${Math.random() * 2}s`;

    background.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);
}

// Generate particles continuously
setInterval(createParticle, 300);
