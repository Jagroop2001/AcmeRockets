let toggleBtn = document.querySelector(".toggle");
let clicks = 0;
toggleBtn.addEventListener("click", () => {
    clicks++;
    document.querySelector("body").classList.toggle("dark");
    document.querySelector(".form-container h2").classList.toggle("dark");
    document.querySelector(".form-container p").classList.toggle("dark");

    Array.from(document.querySelectorAll(".form-container label")).forEach((e) => {
        e.classList.toggle("dark");
    })

    if (clicks & 1) {
        toggleBtn.innerHTML = `<i class="fi fi-rr-eclipse-alt" style="font-size: 1.3rem;border-radius: 50%; position: relative; top: 9%;"></i>`;
    }
    else {
        toggleBtn.innerHTML = `<i class="fi fi-rs-moon" style="font-size: 1.3rem;border-radius: 50%; position: relative; top: 9%;"></i>`;
    }
})