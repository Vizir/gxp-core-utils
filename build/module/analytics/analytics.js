import app from "firebase/app";
import "firebase/analytics";
export class FirebaseAnalytics {
    static firebaseAnalytics;
    static initializeAnalytics(firebaseConfig) {
        app.initializeApp(firebaseConfig);
        this.firebaseAnalytics = app.analytics();
    }
    static logEvent(message) {
        this.firebaseAnalytics.logEvent(message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FuYWx5dGljcy9hbmFseXRpY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDO0FBQy9CLE9BQU8sb0JBQW9CLENBQUM7QUFJNUIsTUFBTSxPQUFPLGlCQUFpQjtJQUNwQixNQUFNLENBQUMsaUJBQWlCLENBQTBCO0lBRW5ELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxjQUFxQztRQUNyRSxHQUFHLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBZTtRQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRiJ9