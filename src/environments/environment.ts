// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    requestTimeout: 30000,
    appServerUrl: "http://35.232.249.84:8359", //APPServer API
    cypherium: {
        provider: 'http://34.66.103.10:8000',
        // provider: 'http://127.0.0.1:18004',
        pledgeContractAddr: '0x0000000000000000000000000000000000000081',
        pledgeContractAbi: null,
        privateKey: ''
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
