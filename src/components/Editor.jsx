import React from "react";
import AceEditor from "react-ace";
import { config } from "ace-builds";
import "ace-builds/src-min-noconflict/keybinding-vscode";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-prompt";
import "ace-builds/src-min-noconflict/ext-beautify";
import "ace-builds/src-min-noconflict/ext-emmet";

import Beautify from "ace-builds/src-min-noconflict/ext-beautify";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/snippets/javascript";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/css";

import "ace-builds/src-noconflict/theme-monokai";

config.setModuleUrl(
	"ace/mode/javascript_worker",
	"https://cdn.jsdelivr.net/npm/ace-builds@1.4.8/src-noconflict/worker-javascript.js"
);

config.setModuleUrl(
	"ace/mode/css_worker",
	"https://cdn.jsdelivr.net/npm/ace-builds@1.4.8/src-noconflict/worker-css.js"
);

config.setModuleUrl(
	"ace/mode/html_worker",
	"https://cdn.jsdelivr.net/npm/ace-builds@1.4.8/src-noconflict/worker-html.js"
);

function Editor({ mode, handleChange, value }) {
	return (
		<AceEditor
			mode={mode}
			theme="monokai"
			onChange={handleChange}
			value={value}
			name={`editor-${mode}`}
			commands={Beautify.commands}
			// editorProps={{ $blockScrolling: true }}
			fontSize={14}
			setOptions={{
				fontFamily: "Fira Mono",
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true,
				showLineNumbers: true,
				tabSize: 4,
				// animatedScroll: true,
				enableEmmet: true,
			}}
		/>
	);
}

export default Editor;
