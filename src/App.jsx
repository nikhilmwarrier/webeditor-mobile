import React, { useState } from "react";
import Tabs from "./components/Tabs";
import EditorContainer from "./components/EditorContainer";
import fileGenDl from "./fileGenDl";

function App() {
	const [currentTab, setCurrentTab] = useState("html");
	const [outputDoc, setOutputDoc] = useState("");

	const handleTabChange = tabName => setCurrentTab(tabName);

	const handleDownloadRequest = () => {
		console.log("incoming");
		fileGenDl(outputDoc, "text/html", "index.html");
	};

	const getCurrentValue = (html, css, javascript) => {
		localStorage.setItem("webeditor-project_default--html", html);
		localStorage.setItem("webeditor-project_default--css", css);
		localStorage.setItem("webeditor-project_default--javascript", javascript);
		const doc = `
		<html><head><style>${css}</style></head><body>${html}<script>${javascript}</script></body></html>
		`;
		setOutputDoc(doc);
	};
	return (
		<>
			<Tabs onTabChange={handleTabChange} defaultTab={currentTab} onDownloadRequest={handleDownloadRequest} />
			<EditorContainer openEditor={currentTab} currentValue={getCurrentValue} />
			<iframe sandbox="allow-scripts" frameBorder="0" srcDoc={outputDoc}></iframe>
		</>
	);
}

export default App;
