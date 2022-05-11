export class Logger {
    static Error(error) {
        console.log('ERROR', error.status, e.message)
    }
    static Warning(message) {
        console.log('WARNING', message)
    }
    static Success(message) {
        console.log('SUCCESS', message)
    }
}