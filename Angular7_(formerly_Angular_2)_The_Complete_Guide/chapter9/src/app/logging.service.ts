

export class LoggingService {
    logStatusChanged(status: string) {
        console.log('A server status has changed, new status :'+ status);
    }
}