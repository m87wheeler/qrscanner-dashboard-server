import { addPackagingCount } from "../controllers/packaging-count/add-packaging-count";
import { SocketEvent, SocketResponseType } from "../types";

export const ACTION_EVENT = {
  [SocketEvent.record_item]: async (id: string) => {
    const response: SocketResponseType = await addPackagingCount(id);
    return response;
  },
};
