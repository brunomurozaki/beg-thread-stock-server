import { Event } from "@guiabolsobr/events-protocol/core/events";
import { EventProcessor } from "@guiabolsobr/events-protocol/server/eventProcessor";
import { buildResponseEventFor } from "@guiabolsobr/events-protocol/server/responseEventBuilder";
import { Request, Response, Router } from "express";
import { Controller } from "./rest-helper/Controller";
import { RestHelper } from "./rest-helper/RestHelper";

export class EventController implements Controller {

    constructor() {
        
    }

    get = [
        new RestHelper("/teste", function(req: Request, res: Response) {
            console.log(req.body);
            console.log("banana");
            res.sendStatus(201);
        })
    ];

    post = [
        new RestHelper("/events", function(req: Request, res: Response) {
            console.log("events");
            EventProcessor.processEvent(req.body)
        })
    ];

}

EventProcessor.addHandler("teste:event", 1, async (event: Event) => {
    return buildResponseEventFor(event);
});