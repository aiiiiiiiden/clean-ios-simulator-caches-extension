import * as vscode from 'vscode';
import { exec, ExecException } from 'child_process';
import * as os from 'os';

function isMacOS(): boolean {
  return os.platform() === 'darwin';
}

interface WindowInterface {
  showErrorMessage(message: string): void;
  showInformationMessage(message: string): void;
}

class VSCodeWindow implements WindowInterface {
  showErrorMessage(message: string): void {
    vscode.window.showErrorMessage(message);
  }

  showInformationMessage(message: string): void {
    vscode.window.showInformationMessage(message);
  }
}

function cleanIosSimulatorCaches(window: WindowInterface): void {
  exec('rm -rf ~/Library/Developer/CoreSimulator/Caches', (error: ExecException | null, stdout: string, stderr: string) => {
    if (error) {
      window.showErrorMessage(`Error cleaning caches: ${error.message}`);
      return;
    }
    window.showInformationMessage('iOS Simulator caches cleaned successfully!');
  });
}

function registerCleanCachesCommand(context: vscode.ExtensionContext, window: WindowInterface): void {
  const disposable = vscode.commands.registerCommand('extension.aiiiiiiiden.cleanIosSimulatorCaches', () => {
    if (!isMacOS()) {
      window.showErrorMessage('This command is only supported on macOS.');
      return;
    }

    cleanIosSimulatorCaches(window);
  });

  context.subscriptions.push(disposable);
}

export function activate(context: vscode.ExtensionContext) {
  const window = new VSCodeWindow();
  registerCleanCachesCommand(context, window);
}

export function deactivate() {}

export { isMacOS, cleanIosSimulatorCaches, WindowInterface, registerCleanCachesCommand };