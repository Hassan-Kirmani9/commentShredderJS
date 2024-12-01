const vscode = require('vscode');

function activate(context) {

    console.log('Congratulations, your extension "comment-shredder-js-react-js" is now active!');

    const disposable = vscode.commands.registerCommand('comment-shredder-js-react-js.removeComments', function () {
        removeComments();
    });

    context.subscriptions.push(disposable);
}

function removeComments() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No active editor found!');
        return;
    }
//asdasd
    const document = editor.document;
    const fullText = document.getText();

    const singleLineCommentPattern = /\/\/.*$/gm;
    const multiLineCommentPattern = /\/\*[\s\S]*?\*\//gm;

    const cleanedText = fullText
        .replace(singleLineCommentPattern, '')   
        .replace(multiLineCommentPattern, '');  

    const edit = new vscode.WorkspaceEdit();
    edit.replace(document.uri, new vscode.Range(0, 0, document.lineCount, 0), cleanedText);
    vscode.workspace.applyEdit(edit);

    vscode.window.showInformationMessage('Comments removed!');
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
