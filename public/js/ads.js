async function popupAd() {
const adData = await fetch('/assets/ads/ads.json');
const adJson = await adData.json();
let selectedAd = adJson[Math.floor(Math.random() * adJson.length)];
console.log(adJson);
console.log(selectedAd);

const cname = selectedAd.title
const curl = selectedAd.curl
const cslogan = selectedAd.slogan
const cdesc = selectedAd.description
const cimage = selectedAd.iconID
const accent = selectedAd.accentColor

    const adContainer = document.createElement('div');
    const ad = document.createElement('div');
    const adTopBar = document.createElement('div'); 
    const adCloseButton = document.createElement('button');
    const adStrong = document.createElement('strong');
    const adImage = document.createElement('img');
    const adSlogan = document.createElement('span');
    const adDesc = document.createElement('p');

    //where the ad name goes
    adStrong.innerText = cname;
    adStrong.style.color = 'Black';
    adStrong.style.fontSize = '20px';
    adStrong.style.fontWeight = 'bold';

    //classnames
    adContainer.style.backgroundColor = accent;
    adContainer.classList.add('ad');
    ad.classList.add('ad-content');
    adTopBar.classList.add('ad-top-bar');
    adCloseButton.classList.add('ad-close');
    adImage.classList.add('ad-image');
    adSlogan.classList.add('slogan');
    adDesc.classList.add('ad-desc');

    //close button
    adCloseButton.innerText = 'X';
    adCloseButton.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.remove();
    });
    ad.onclick = function() {
        launch(curl);
    }

    //ad content
    adImage.src = `/assets/ads/icons/${cimage}.png`;
    adSlogan.innerText = cslogan;
    adDesc.innerText = cdesc;

    //place the ad randomly on the screen lmaaooo
    const randomL = Math.floor(Math.random() * window.innerWidth - 320);
    const randomT = Math.floor(Math.random() * window.innerHeight - 200);
    adContainer.style.left = `${randomL}px`;
    adContainer.style.top = `${randomT}px`;

    ad.appendChild(adSlogan);
    ad.appendChild(adDesc);
    ad.appendChild(adImage);
    adTopBar.appendChild(adStrong);
    adTopBar.appendChild(adCloseButton);
    adContainer.appendChild(adTopBar);
    adContainer.appendChild(ad);
    document.body.appendChild(adContainer);
    adContainer.style.display = 'block';
    adContainer.style.position = 'fixed';
    adContainer.style.zIndex = '9999';
}

function closeAd() {

}

//an ad will popup on the screen everytime popupAd() is called
document.addEventListener('DOMContentLoaded', function() {
popupAd();
});