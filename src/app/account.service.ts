import { loggingservices } from "./logging.service";
import{EventEmitter, Injectable} from "@angular/core";
 @Injectable()
export class AccountsService{  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusupdate = new EventEmitter<string>();
  constructor(private loggingservice:loggingservices){}
  addAccount(name:string ,status:string){
    this.accounts.push({name:name , status:status});
  this.loggingservice.loggingstatu(status);
  }
  onupdate(id:number,status:string){
    this.accounts[id].status= status;
   this.loggingservice.loggingstatu(status);
  }
  
  }