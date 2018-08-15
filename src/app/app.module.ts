import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchDirective } from './search.directive';
import { NgbdModalBasicComponent } from './ngbd-modal-basic/ngbd-modal-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchDirective,
    NgbdModalBasicComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { 



  
}
