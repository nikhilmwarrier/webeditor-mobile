import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Tabs({ onDownloadRequest, onTabChange, defaultTab }) {
	const [currentTab, setCurrentTab] = useState(defaultTab);
	const [sidebarVisible, setSidebarVisible] = useState(false);

	const handleTabClick = tabName => {
		setCurrentTab(tabName);
		onTabChange(tabName);
	};

	const handleDownload = () => {
		onDownloadRequest();
	};

	return (
		<div className="tabbar">
			<div className="menu" onClick={() => setSidebarVisible(!sidebarVisible)}>
				<span style={{ zIndex: 6 }} className="material-icons">
					menu
				</span>
			</div>
			<div className={currentTab === "html" ? "tab active" : "tab"} onClick={() => handleTabClick("html")}>
				HTML
			</div>
			<div className={currentTab === "css" ? "tab active" : "tab"} onClick={() => handleTabClick("css")}>
				CSS
			</div>
			<div className={currentTab === "javascript" ? "tab active" : "tab"} onClick={() => handleTabClick("javascript")}>
				JS
			</div>
			<div className="download-btn" title="Download code" onClick={handleDownload}>
				<span className="material-icons">download</span>
			</div>
			{sidebarVisible && <Sidebar />}
		</div>
	);
}

export default Tabs;
