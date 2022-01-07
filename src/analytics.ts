import app from "firebase/app";

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

let firebaseAnalytics: app.analytics.Analytics;

export const initializeFirebase = (firebaseConfig: firebaseConfigOptions) => {
  app.initializeApp(firebaseConfig);
  firebaseAnalytics = app.analytics();
};

export const logEvent = (message: string) => {
  firebaseAnalytics.logEvent(message);
};
