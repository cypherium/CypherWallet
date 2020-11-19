# City Charge

This project is a cross-platform App developed based on the Cordova Framework, which can be compiled to Android, ios, Web and other platforms. Cordova is a cross-platform development framework that provides native capabilities through plug-ins, and the UI and logic parts via Typescript.

# Environment Installation

The following is an example of a MAC computer to introduce the environment installation process of this project. If it is another system, please check the installation method of relevant software online

1. The node. Directly to/Node's official website (https://nodejs.org/en/download/), please download the installation package to corresponding.
When the installation is complete, it can be run in the terminal

` ` `
node -v
v10.18.1
npm -v
6.13.4
` ` `

To test if the installation is successful, Node must be v10!!

2. Ionic, installation of Cordova

` ` `
npm install -g ionic@latest
npm intall -g cordova@latest
` ` `

After successful installation,

` ` `
ionic -v
cordova -v
` ` `

The version number should display correctly.

3. Installation of Android Studio Please refer to [Android Studio website] (HTTP: / / https://developer.android.com/studio/? & gclid = EAIaIQobChMI4Zegt8nj5QIVjamWCh38FQLjEAAYASAAEgL6Q_D_BwE) download and install, after opening, click on the Tools menu = > the SDK Manager, download and install the Android SDK - 28.

4. Xcode installation: search Xcode directly in the app Store.
5. Modify IP address before debugging, SRC/environments/environment. Prod. Ts.
export const environment = {
production: true,
requestTimeout: 15000,
AppServerUrl: "", //APPServer API.
cypherium: {
Provider: 'http://127.0.0.1:18004',// change to blockchain server address and port number
pledgeContractAddr: '0x0000000000000000000000000000000000000081',
pledgeContractAbi: null,
privateKey: ''
}
};


# Project commissioning

Project debugging including Web, Android, ios.

Web-based debugging

Running Ionic Serve opens the link automatically in the browser and all changes are hot-updated to the browser without a manual refresh.

` ` `
Compile ionic Cordova build Browser
` ` `
Because the > back-end interface is not currently configured across domains, front-end access is required to turn off chrome's security Settings. Exit Chrome completely, and then start using the ** -opena "Google Chrome" --args --disable-web-security --user-data-dir _** command line

Debugging based on Android Studio

If you need to debug your plug-in, use native debugging. The commands to add and compile the project are as follows:

` ` `
Ionic Cordova Platform add Android@Latest
Ionic Cordova Platform RM Android has been deleted
Check ionic Cordova Platform LS
Ionic Cordova build Android --prod --release
Run to device Ionic Cordova Run Android
` ` `

You can open the project directory under the project directory, platforms/ Android directory, with Android Studio, and then conduct Android debugging

Xcode-based debugging

If you need to debug your plug-in, use native debugging. The commands to add and compile the project are as follows:

` ` `
Ionic Cordova Platform add ios@Latest project has been added
Ionic Cordova Platform RM ios has been deleted
Check ionic Cordova Platform LS
Ionic Cordova Prepare ios --prod --release
` ` `

