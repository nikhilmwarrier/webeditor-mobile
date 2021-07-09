export default function fileGenDl(text, encoding, filename) {
	const dl_link = document.createElement("a");
	dl_link.setAttribute("href", `data:${encoding};charset=utf-8, ${encodeURIComponent(text)}`);
	dl_link.setAttribute("download", filename);

	dl_link.style.display = "none";
	document.body.appendChild(dl_link);

	dl_link.click();
	console.log("clicked");

	// document.body.removeChild(dl_link);
}
