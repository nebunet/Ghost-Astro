//hahahaha 
const captchaWrapper = document.getElementById("captchaWrapper")
const blockBackground = document.getElementById("blockBackground")
const captchaImages = document.querySelectorAll("#rc-image-tile-img")

function createNewCaptcha() {
    //close all captchas first to prevent override
    closeAllCaptchas();
    blockBackground.style.display = "block";
    //select a random captcha then display it

    let captchaimage1
    let captchaimage2
    let captchaimage3
    let captchatxt
    let captchaNum = Math.floor(Math.random() * 10) //10 diff captchas
    console.log(captchaNum)

    switch (captchaNum) {
        case 1:
            captchaimage1 = "/assets/img/captcha/kindkid.png" //is always the correct image
            captchaimage2 = "/assets/img/captcha/bike.png"
            captchaimage3 = "/assets/img/captcha/cat.jpg"
            captchatxt = "cuties"
            break;
        case 2:
            captchaimage1 = "/assets/img/captcha/fettywap.png"
            captchaimage2 = "/assets/img/captcha/discord.png"
            captchaimage3 = "/assets/img/captcha/bike.png"
            captchatxt = "fetty wap"
            break;
        case 3:
            captchaimage1 = "/assets/img/captcha/irs.png"
            captchaimage2 = "/assets/img/captcha/fettywap.png"
            captchaimage3 = "/assets/img/captcha/kindkid.png"
            captchatxt = "stupid agencys"
            break;
        case 4:
            captchaimage1 = "/assets/img/captcha/lowtaperfade.png"
            captchaimage2 = "/assets/img/captcha/irs.png"
            captchaimage3 = "/assets/img/captcha/brave.png"
            captchatxt = "low taper fades"
            break;
        case 5:
            captchaimage1 = "/assets/img/captcha/woody.png"
            captchaimage2 = "/assets/img/captcha/discord.png"
            captchaimage3 = "/assets/img/captcha/kindkid.png"
            captchatxt = "woody"
            break;
        case 6:
            captchaimage1 = "/assets/img/captcha/cat.jpg"
            captchaimage2 = "/assets/img/captcha/woody.png"
            captchaimage3 = "/assets/img/captcha/github.png"
            captchatxt = "KITTY"
            break;
        case 7:
            captchaimage1 = "/assets/img/captcha/carter.png"
            captchaimage2 = "/assets/img/captcha/kindkid.png"
            captchaimage3 = "/assets/img/captcha/irs.png"
            captchatxt = "autistic children"
            break;
        case 8:
            captchaimage1 = "/assets/img/captcha/diddy.png"
            captchaimage2 = "/assets/img/captcha/kindkid.png"
            captchaimage3 = "/assets/img/captcha/discord.png"
            captchatxt = "diddy"
            break;
        case 9:
            captchaimage1 = "/assets/img/captcha/diddy.png"
            captchaimage2 = "/assets/img/captcha/kindkid.png"
            captchaimage3 = "/assets/img/captcha/discord.png"
            captchatxt = "diddy"
            break;
        case 10:
            captchaimage1 = "/assets/img/captcha/diddy.png"
            captchaimage2 = "/assets/img/captcha/kindkid.png"
            captchaimage3 = "/assets/img/captcha/discord.png"
            captchatxt = "diddy"
            break;
    }

    captchaImages.forEach(img => {
        let randnumb = Math.floor(Math.random() * 4)
        if (randnumb === 1) {
            img.src = captchaimage1
            img.setAttribute("data-correct", "true")
        } else if (randnumb === 2) {
            img.src = captchaimage2
            img.setAttribute("data-correct", "false")
        } else if (randnumb === 3) {
            img.src = captchaimage3
            img.setAttribute("data-correct", "false")
        } else {
            img.src = captchaimage1
            img.setAttribute("data-correct", "true")
        }

        captchaWrapper.style.display = "block";

        img.onclick = function () {
            if (img.style.maxWidth === "25px") {
                img.style.maxWidth = "50px";
            } else {
                img.style.maxWidth = "25px";
            }
        }
    });


    document.getElementById("rc-imageselect-strong").innerText = captchatxt
}

function displayCaptcha() {
    blockBackground.style.display = "block";
    captchaWrapper.style.display = "block";
}

function closeAllCaptchas() {
    captchaWrapper.style.display = "none";
    blockBackground.style.display = "none";

    captchaImages.forEach(img => {
        img.style.maxWidth = "100px";
    });
}

function submitCaptcha() {
    let correct = 0
    let incorrect = 0

    captchaImages.forEach(img => {
        if (img.style.maxWidth === "25px") {
            if (img.getAttribute("data-correct") === "true") {
                correct++;
            } else {
                incorrect++;
            }
        }
    });

    if (correct > 0 && incorrect === 0) {
        alert("Captcha passed!");
        closeAllCaptchas();
    } else {
        alert("Captcha failed!");
        createNewCaptcha();
    }
}

document.getElementById("submitCaptcha").onclick = function () {
    submitCaptcha();
}