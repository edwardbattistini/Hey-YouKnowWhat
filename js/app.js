var title = document.getElementById("inputTitle");
var checkbox = document.querySelector("input[name=title]");
var fontTypes = ["Comic Sans", "Helvetica", "Courier", "Impact", "Papyrus", "Lily Script One", "Verdana", "Tahoma", "Trebuchet MS", "Impact", "Times New Roman", "Didot", "Georgia", "American Typewriter", "Andalé Mono", "Courier", "Lucida Console", "Monaco", "Bradley Hand", "Brush Script MT", "Luminari", "Comic Sans MS", ];
var fontSizes = ["24px", "32px", "48px", "56px", "64px", "72px", ]

setUpDownloadPageAsImage();

function setUpDownloadPageAsImage() {
    document
        .getElementById("download-page-as-image")
        .addEventListener("click", function() {
            html2canvas(document.getElementById("content")).then(function(canvas) {
                console.log(canvas);
                simulateDownloadImageClick(canvas.toDataURL(), "hey-card.jpg");
            });
        });
}

function simulateDownloadImageClick(uri, filename) {
    var link = document.createElement("a");
    if (typeof link.download !== "string") {
        window.open(uri);
    } else {
        link.href = uri;
        link.download = filename;
        accountForFirefox(clickLink, link);
    }
}

function clickLink(link) {
    link.click();
}

function accountForFirefox(click) {
    // wrapper function
    let link = arguments[1];
    document.body.appendChild(link);
    click(link);
    document.body.removeChild(link);
}

const setBg = () => {

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const bg = document.getElementById("content")

    bg.style.backgroundColor = "#" + randomColor;

}

randomColour.addEventListener("click", setBg);
setBg();


function randomFont(e) {

    var selectedFont = fontTypes[Math.floor(Math.random() * fontTypes.length)];

    document.getElementById("inputTitle").style.fontFamily = selectedFont;
    document.getElementById("inputText").style.fontFamily = selectedFont;
}


function randomFontSize(e) {
    var randomSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];

    document.getElementById("inputTitle").style.fontSize = randomSize;
    document.getElementById("inputText").style.fontSize = randomSize;
}