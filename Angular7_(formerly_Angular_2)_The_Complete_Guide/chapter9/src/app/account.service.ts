import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'active'
        },
        {
          name: 'Hidden Account',
          status: 'active'
        }
      ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {}

    addAccount(name: string, status: string){
        this.accounts.push({ name: name, status: status });
        this.loggingService.logStatusChanged(status);
    }

    updateStatus(id: number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChanged(status);
    }
}
