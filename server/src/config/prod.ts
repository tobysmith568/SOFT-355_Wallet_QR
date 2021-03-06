import { AbstractConfig } from "./config.abstract";
import { ENV } from "./config";

export class ProdConfig extends AbstractConfig {
  constructor() {
    super();
    this.environment = ENV.prod;
    this.port = 8000;
    this.connectionString = process.env.DB_STRING_PROD;
    this.tokenSecret = process.env.TOKEN_SECRET_PROD;
  }
}
