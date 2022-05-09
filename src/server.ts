import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import socket from "./socket";
import router from "./routes/qr-route";
import dotenv from "dotenv";
dotenv.config();

/** config */
const PORT = process.env.PORT || "4001";
const HOST = process.env.HOST;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

/** sever setup */
const server = express();
const httpServer = createServer(server);
const io = new Server(httpServer, {
  cors: {
    origin: CORS_ORIGIN,
    credentials: true,
  },
});

/** middleware */
server.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);
server.use(express.json());

/** routes */
server.use("/api", router);

httpServer.listen(PORT, () => {
  console.log(`[server]: Listening on ${HOST}:${PORT}`);
  socket({ io });
});
