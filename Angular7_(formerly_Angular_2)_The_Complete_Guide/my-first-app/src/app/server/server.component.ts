import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverStatus: string;
    serverNumber: number;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverNumber = Math.trunc((Math.random() * 100));
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
