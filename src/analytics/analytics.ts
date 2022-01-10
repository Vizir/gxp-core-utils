import app from "firebase/app";
import "firebase/analytics";

import { FirebaseConfigOptions } from "./analyticsInterfaces";

export class FirebaseAnalytics {
  private static firebaseAnalytics: app.analytics.Analytics;

  public static initializeAnalytics(firebaseConfig: FirebaseConfigOptions) {
    app.initializeApp(firebaseConfig);
    this.firebaseAnalytics = app.analytics();
  }

  public static logEvent(message: string) {
    this.firebaseAnalytics.logEvent(message);
  }
}
