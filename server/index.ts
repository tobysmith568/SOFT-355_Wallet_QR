import * as dotenv from "dotenv";
import { Server } from "./src/server";

dotenv.config();

const server = new Server();
server.initializeMiddlewares();
server.setUpDatabaseConnection();
server.initializeControllers();
server.initializeWebsockets();
server.listen();
