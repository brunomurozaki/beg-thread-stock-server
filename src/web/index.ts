import { Router } from "express";
import { EventController } from "./controllers/EventController";
import { Controller } from "./controllers/rest-helper/Controller";


var controllers = [
    new EventController()
]

export default function register(router: Router) {

    var controller: Controller;

    for(var i = 0; i < controllers.length; i++) {
        controller = controllers[i];
        
        for(var j = 0; j < controller.get.length; j++) {
            router.get(controller.get[j].path, controller.get[j].handler);
        }

        for(var k = 0; k < controller.post.length; k++) {
            router.post(controller.post[k].path, controller.post[k].handler);
        }
    }
}
