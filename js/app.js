var title = document.getElementById("inputTitle");
var checkbox = document.querySelector("input[name=title]");


setUpDownloadPageAsImage();

function setUpDownloadPageAsImage() {
    document
        .getElementById("download-page-as-image")
        .addEventListener("click", function() {
            html2canvas(document.getElementById("content")).then(function(canvas) {
                console.log(canvas);
                simulateDownloadImageClick(canvas.toDataURL(), "file-name.png");
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

checkbox.addEventListener('change', function checkShowTitle() {
    if (this.checked) {
        console.log("Title is ON");
        title.style.display = 'block';
    } else {
        console.log("Title is OFF");
        title.style.display = 'none';
    }
});

const setBg = () => {
    const bg = document.getElementById("content")
    const content = bg

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    bg.style.backgroundColor = "#" + randomColor;
    content.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}

randomColour.addEventListener("click", setBg);
setBg();