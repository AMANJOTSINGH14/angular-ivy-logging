import { Component } from '@angular/core';
import{loggingservices} from '../logging.service';
import { AccountsService } from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
// providers: [loggingservices , AccountsService]
})
export class NewAccountComponent {

constructor(private loggingservice:loggingservices , private accountsService:AccountsService) {
this.accountsService.statusupdate.subscribe(
  (status:string) =>  alert('New status'+status)
)
}
  onCreateAccount(accountName: string, accountStatus: string) {
  this.accountsService.addAccount(accountName,accountStatus);
// this.loggingservice.loggingstatu(accountStatus);
  }
}
