import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChanged(status);
    this.accountService.statusUpdated.emit(status);
  }
}
