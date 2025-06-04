import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as os from 'os';

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('extension.aiiiiiiiden.cleanIosSimulatorCaches', () => {
    if (os.platform() !== 'darwin') {
      vscode.window.showErrorMessage('This command is only supported on macOS.');
      return;
    }

    exec('rm -rf ~/Library/Developer/CoreSimulator/Caches', (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(`Error cleaning caches: ${error.message}`);
        return;
      }
      vscode.window.showInformationMessage('iOS Simulator caches cleaned successfully!');
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {} 