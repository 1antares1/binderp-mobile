import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

/**
 * Own
 */
//#region components
import { AppComponent } from "./app.component";
import { HomePageComponent } from "../pages/home/home";
import { ListPageComponent } from "../pages/list/list";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
//#endregion

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        ListPageComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(AppComponent),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        AppComponent,
        HomePageComponent,
        ListPageComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }
    ]
})
export class AppModule {
    //
}
