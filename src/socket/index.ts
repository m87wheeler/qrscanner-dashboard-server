import { Server, Socket } from "socket.io";
import { SocketEvent } from "../types";
import { ACTION_EVENT } from "./action-events";

/** socket actions */
const socket = ({ io }: { io: Server }) => {
  console.log(`[socket]: Sockets enabled...`);

  io.on(SocketEvent.connection, (socket: Socket) => {
    console.log(`[socket]: User ${socket.id} connected...`);

    /** PACKAGING SOCKETS */
    socket.on(SocketEvent.record_item, async ({ id }) => {
      const response = await ACTION_EVENT[SocketEvent.record_item](id);
      io.emit(SocketEvent.item_recorded, response);
    });

    socket.on("disconnect", function () {
      console.log(`[socket]: User disconnected...`);
    });
  });
};

export default socket;
