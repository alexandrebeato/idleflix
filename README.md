<p align="center">
  <img src="assets/img/ee843d49f3ab299556e41fa72aeb57f1.png" /> 
</p>

IdleFlix is a simple application that prevents your computer from going into idle mode. It does this by simulating user activity at regular intervals, such as pressing a key or moving the mouse. If the computer is left idle for 5 minutes, the mouse automatically moves every second until you have some interaction with the computer again.

<p align="center">
  <img src="assets/img/screen.gif" /> 
</p>

## Download

You can download for Windows, Linux, and macOS from the links below:

- [Windows](https://github.com/alexandrebeato/idleflix/releases/download/v1.0.0/IdleFlix.exe)
- Linux (to be tested)
- MacOS (to be tested)

## Next features

| Status | Description | Progress | Version |
| :---: | :--- | :---: | :---: |
| 🚀 | Mouse movement check | Released | [v1.0.0](https://github.com/alexandrebeato/idleflix/releases/tag/v1.0.0) |
| 🛠️ | User custom settings | In progress |  v1.0.1 |
| 📝 | System tray icon | Backlog |  v1.0.2 |
| 📝 | Open in system startup | Backlog |  v1.0.3 |
| 📝 | Keyboard typing check | Backlog |  v1.1.0 |

## Getting started

You can run the application using the following commands:

```npm install && npm start```

## Manual build

You can manually build the application using electron-builder. You will need to have Node.js installed.

```electron-builder --win portable```

## Contributing

If you find a bug or have a feature request, please open an issue on GitHub. Pull requests are also welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
