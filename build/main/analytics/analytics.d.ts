import "firebase/analytics";
import { FirebaseConfigOptions } from "./analyticsInterfaces";
export declare class FirebaseAnalytics {
    private static firebaseAnalytics;
    static initializeAnalytics(firebaseConfig: FirebaseConfigOptions): void;
    static logEvent(message: string): void;
}
