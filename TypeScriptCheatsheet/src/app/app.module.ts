import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TSFunctionsComponent } from './tsfunctions/tsfunctions.component';
import { TSFuncOverloadComponent } from './tsfunc-overload/tsfunc-overload.component';
import { TSModulesComponent } from './tsmodules/tsmodules.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TSFunctionsComponent,
    TSFuncOverloadComponent,
    TSModulesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
