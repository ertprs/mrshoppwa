# Conference Ionic
Conference Ionic is a mobile app that provides all the information related to a conference aiming to enhance the attendee experience and boost the conference marketing.

## Dependecies, Run and Build

### Install Ionic CLI
To run this app you need to have Ionic CLI installed

```bash
$ sudo npm install -g @ionic/cli
```

You can revert back and restore any version of Ionic CLI by using the command:
```bash
$ sudo npm install -g @ionic/cli@{ionic_version}
```

eg:
```bash
$ sudo npm install -g @ionic/cli@5.0.0
```

### Install NodeJS dependencies
Run `npm install` to install all needed dependencies.

### Run the app
Use `ionic serve` to run the app for a browser preview

or

use `ionic serve --lab` to run the app in a browser on more platforms at the same time.

### Add a platform
```bash
$ ionic cordova platform add <platform>
```

Supported Cordova platforms:
```bash
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

### Build the app
```bash
$ ionic cordova build
```

### Emulate the app on simulator
iOS:
```bash
$ ionic cordova emulate ios
```

Android:
```bash
$ ionic cordova emulate android
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-ionic-webview** - This plugin makes Cordova use the WKWebView component instead of the default UIWebView component.
* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0.
* **cordova-plugin-statusbar** - Used to customize the iOS and Android StatusBar, alter the appearance of the status bar (color/style).
* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-splashscreen** - This plugin is required to work with splash screens. This plugin displays and hides a splash screen during application launch.
* **cordova-plugin-ionic-keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.

## Demo
* [Web demo](https://skounis.github.io/ionic-demo-conference/conference-5/)

## Documentation
* [Conference Ionic Quick Start Guide](https://docs.google.com/document/d/1eVYnvye0mY-Aw1AOUfyDuFDp5Y5SZoP3Rwzm4B7iMwk/edit?usp=sharing)

## Changelog
```
5.0 - May 5, 2020
- Initial release
```

## Credits
* [Ionic Framework](http://ionicframework.com/)

## Third Party Licenses
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
