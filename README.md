# Clean iOS Simulator Caches

This VSCode extension adds a command to clean iOS simulator caches. It executes the command `rm -rf ~/Library/Developer/CoreSimulator/Caches` when triggered.

## Features

- Adds a command `Clean iOS Simulator Caches` to the VSCode command palette.
- Cleans the iOS simulator caches with a single click.

## Usage

1. Open the command palette (`Cmd+Shift+P` on macOS or `Ctrl+Shift+P` on Windows/Linux).
2. Search for `Clean iOS Simulator Caches`.
3. Click the command to clean the caches.

## Manual Installation

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to generate the `.vsix` file.
4. Open the folder in VSCode.
5. Press `F5` to launch the extension in a new VSCode window.
6. Install the generated `.vsix` file:
   - Open the command palette (`Cmd+Shift+P` on macOS or `Ctrl+Shift+P` on Windows/Linux).
   - Search for `Extensions: Install from VSIX...`.
   - Select the generated `.vsix` file and install it.

## License

MIT 