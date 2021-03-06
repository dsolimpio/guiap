import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, ActionSheetController } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { AnunciePage } from '../pages/anuncie/anuncie';
import { TabsPage } from '../pages/tabs/tabs';
import { GuiaPage } from '../pages/guia/guia';
import { GuiaDetalhePage } from '../pages/guia-detalhe/guia-detalhe';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data'; 


@NgModule({
  declarations: [
    MyApp,
    AnunciePage,
    TabsPage,
    GuiaPage,
    GuiaDetalhePage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnunciePage,
    TabsPage,
    GuiaPage,
    GuiaDetalhePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
