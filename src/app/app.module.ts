import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { loggingservices } from './logging.service';
import { AccountsService } from './account.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AccountComponent, NewAccountComponent ],
 providers:[loggingservices,AccountsService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }