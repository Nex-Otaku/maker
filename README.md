# Maker

Run commands from your **Makefile** selecting them from menu.

<!-- Image showing Maker in action -->

## Install

To use this tool, you need [NodeJS](https://nodejs.org/).

```
sudo npm install -g @nex_otaku/maker
```

## Run!

```
cd projects/my-cool-project
maker
```

## How it works

- Reads your Makefile in current directory
- Lists commands from Makefile in a nice menu

## Features

- Comment before a command is displayed as command name
- First mega feature
- Second mega feature
- Third mega feature

## Example Makefile
```bash
# Remove all temporary files from home
foreach ~/*.tmp rm

# List all files and directories in current directory
foreach . echo

# List current Git branch for all projects
foreach --directory ~/projects "cd <file> && git status | grep branch"

# Change all Windows line endings to Unix (CRLF to LF)
foreach --file --recursive ~/projects dos2unix
```
<!--
## Options

Option | Description
--- | ---
**-d, --directory** | Apply command only to directories
**-f, --file** | Apply command only to files
**-r, --recursive** | Search recursively
**--include-dot-directories** | Look inside directories with names started with dot - ".git", ".idea" etc. Ignoring these directories by default.
**--include-directories-ignored-by-git** | Do not use ".gitignore" rules. By default we skip all directories mentioned in ".gitignore".
-->

## To Be Done

 - Mark command as "Favorite"
 - Hide command from list
 - Nice example Makefile in README
 - Screenshot showing Maker in action


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © Nex Otaku.
