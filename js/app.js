setUpDownloadPageAsImage();

function setUpDownloadPageAsImage() {
	document
		.getElementById("download-page-as-image")
		.addEventListener("click", function () {
			html2canvas(document.getElementById("content")).then(function (canvas) {
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
// 
// function checkShowTitle() {
// 
//       // Get the checkbox
//       var checkBox = document.getElementById("showTitle");
//       // Get the output text
//       var text = document.getElementById("inputTitle");
//     
//     
//         
//       // If the checkbox is checked, display the output text
//       if (checkBox.checked == true){
//             text.style.display == "block";
//       } else if (checkBox.checked == false) {
//           text.style.display == "none"
//       } else {
//         text.style.display = "none";
//       }
//       
//     }