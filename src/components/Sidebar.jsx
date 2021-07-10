import React from "react";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="flex">
				<h3>Webeditor Mobile</h3>
				<p>Built and opensourced by nikhilmwarrier</p>
				<p>
					Install{" "}
					<a href="https://play.google.com/store/apps/details?id=org.pocketworkstation.pckeyboard&hl=en_IN&gl=US">
						Hacker's Keyboard
					</a>{" "}
					by Claudius Weiner <br /> for a better experience
				</p>
			</div>
			<a className="repo-link" href="https://github.com/nikhilmwarrier/webeditor-mobile">
				@nikhilmwarrier/webeditor-mobile
			</a>
		</div>
	);
}

export default Sidebar;
