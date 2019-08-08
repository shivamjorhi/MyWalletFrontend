import {Component} from '@angular/core';
import {Router} from '@angular/router';

import { Account } from '../account.model'
import {AccountService} from '../account.service';

@Component({
    selector: 'depo',
    templateUrl: './deposite.html'
})

export class DepositeComponent{

    account: Account = new Account();
    mobile:number;
    amount:number;
    constructor(private router: Router, private accountService: AccountService){
    }

    public depositeMoney(){
        this.accountService.depositeAccount(this.mobile,this.amount).subscribe(
            data=>{
                console.log("Deposited")
              }
        )
    }
}