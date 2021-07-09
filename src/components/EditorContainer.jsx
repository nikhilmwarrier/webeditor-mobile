import React, { useEffect, useState } from "react";
import Editor from "./Editor";

function EditorContainer({ openEditor, currentValue }) {
	const [html, setHtml] = useState("");
	const [css, setCss] = useState("");
	const [javascript, setJavascript] = useState("");

	useEffect(() => {
		const html_localstorage = localStorage.getItem("webeditor-project_default--html");
		const css_localstorage = localStorage.getItem("webeditor-project_default--css");
		const js_localstorage = localStorage.getItem("webeditor-project_default--javascript");
		if (html_localstorage) setHtml(html_localstorage);
		if (css_localstorage) setCss(css_localstorage);
		if (js_localstorage) setJavascript(js_localstorage);
	}, []);

	useEffect(() => {
		document.querySelectorAll(".ace_editor").forEach(e => e.classList.add("hidden"));
		document.querySelector(`#editor-${openEditor}`).classList.remove("hidden");
		document.querySelector(`#editor-${openEditor}`).firstChild.focus();
		return () => document.querySelectorAll(".ace_editor").forEach(e => e.classList.add("hidden"));
	}, [openEditor]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			currentValue(html, css, javascript);
		}, 250);
		return () => clearTimeout(timeout);
	}, [html, css, javascript]);

	return (
		<div className="editor-container">
			<Editor mode={"html"} value={html} handleChange={setHtml} />
			<Editor mode={"css"} value={css} handleChange={setCss} />
			<Editor mode={"javascript"} value={javascript} handleChange={setJavascript} />
		</div>
	);
}

export default EditorContainer;
