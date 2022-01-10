import "firebase/analytics";
export interface firebaseConfigOptions {
    apiKey: any;
    measurementId: any;
    authDomain: any;
    projectId: any;
    storageBucket: any;
    messagingSenderId: any;
    appId: any;
}
export declare const initializeFirebase: (firebaseConfig: firebaseConfigOptions) => void;
export declare const logEvent: (message: string) => void;
