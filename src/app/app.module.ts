
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { AppComponent } from './app.component';

import { AppConstantsModule } from './constants/_constants.module';
import { AppModelsModule } from './models/_models.module';
import { AppServicesModule } from './services/_services.module';
import { AppRoutingModule } from './routing/_routing.module';
import { AppViewsModule } from  './views/_views.module';


@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      FormsModule,

      //index-modules
      AppConstantsModule,
      AppModelsModule,
      AppServicesModule,
      //views
      AppViewsModule,

      //routes-module
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
