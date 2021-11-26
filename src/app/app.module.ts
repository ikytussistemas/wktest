import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ConfigModule } from './config/config.module';
import { ConfirmModule } from './components/confirm';
import { HomeComponent } from './pages/home/home.component';
import { LoadingModule } from './components/loading';
import { ToastModule } from './components/toast';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    ConfigModule,
    HttpClientModule,
    ConfirmModule.forRoot(),
    LoadingModule.forRoot(),
    ToastModule.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-Br' },
    { provide: BUCKET, useValue: 'wk-marketplace.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
