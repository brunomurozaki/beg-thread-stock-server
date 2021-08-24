
export class RestHelper {

    path: string;
    handler: any;

    constructor(path: string, handler: any) {
        this.path = path;
        this.handler = handler;
    }

}