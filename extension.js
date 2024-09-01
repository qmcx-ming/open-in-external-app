var hx = require("hbuilderx");
const { openInExternalApp, openInVSCode } = require('./src');

//该方法将在插件激活的时候调用
function activate(context) {
	const externalApp = hx.commands.registerCommand('extension.openInExternalApp', (result) => {
		openInExternalApp(result);
		hx.window.setStatusBarMessage(`打开 ${result.fsPath}`, 3000);
	});
	const vsCode = hx.commands.registerCommand('extension.openInVSCode', (result) => {
		console.log(result);
		openInVSCode(result);
		hx.window.setStatusBarMessage(`在vscode中打开 ${result.fsPath}`, 3000);
	});
	//订阅销毁钩子，插件禁用的时候，自动注销该command。
	context.subscriptions.push(externalApp);
	context.subscriptions.push(vsCode);
}
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}
module.exports = {
	activate,
	deactivate
}