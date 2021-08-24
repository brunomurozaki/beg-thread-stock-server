import { Event } from "@guiabolsobr/events-protocol/core/events";
import { EventProcessor } from "@guiabolsobr/events-protocol/server/eventProcessor";
import { buildResponseEventFor } from "@guiabolsobr/events-protocol/server/responseEventBuilder";

EventProcessor.addHandler("teste:event", 1, async (event: Event) => {
    return buildResponseEventFor(event);
});