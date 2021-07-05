import { Component,Input } from '@angular/core';
import{loggingservices} from '../logging.service';
import { AccountsService } from '../account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
// providers: [loggingservices , AccountsService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
constructor(private loggingservice:loggingservices , private accountsService:AccountsService) {}


  onSetTo(status: string) {
    this.accountsService.onupdate(this.id , status);
//  this.loggingservice.loggingstatu(status);
this.accountsService.statusupdate.emit(status);
  }
}
