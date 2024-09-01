const { exec } = require('child_process');
const { platform } = require('os');

/**
 * 在外部应用程序中打开
 * @param {Object} result 结果集
 */
function openInExternalApp(result) {
	const filePath = result.fsPath;
	let command;
	// 目前hbx只支持两个平台
	if (platform === 'darwin') {
		// MacOS
		command = `open "${filePath}"`;
	} else {
		// Windows
		command = `start "" "${filePath}"`;
	}
	openFile(command);
}

function openInVSCode(result) {
	const filePath = result.fsPath;
	openFile(`code ${filePath}`);
}

/**
 * 执行打开文件命令
 * @param {String} command 需要执行的命令
 */
function openFile(command) {
	// 使用默认应用程序打开文件
	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
		// console.log(`stdout: ${stdout}`);
		// console.error(`stderr: ${stderr}`);
	});
}

module.exports = {
	openInExternalApp,
	openInVSCode
};