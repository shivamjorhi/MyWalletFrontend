import {Component} from '@angular/core';
import {Router} from '@angular/router';

import { Account } from '../account.model'
import {AccountService} from '../account.service';

@Component({
    selector: 'trans',
    templateUrl: './transfer.html'
})

export class TransferComponent{

    account: Account = new Account();
    from:number;
    to:number;
    amount:number;
    constructor(private router: Router, private accountService: AccountService){
    }

    public transferMoney(){
        this.accountService.transferMoney(this.from,this.to,this.amount).subscribe(
            data=>{
                console.log("Transferred")
              }
        )
    }
}