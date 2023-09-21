import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { MainBackgroundComponent } from './components/main-background/main-background.component';
import { ContentComponent } from './page/content/content.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainBackgroundComponent,
    ContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
