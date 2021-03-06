/* istanbul ignore file */
/*
  This file cannot be unit tested because it interacts with the file system
*/

import { IFileService } from "../file.service.interface";
import { readFileSync } from "fs";

export class FSFileService implements IFileService {

  private static readonly UTF8 = "utf8";
  
  readFile(path: string): string {
    return readFileSync(path, FSFileService.UTF8);
  }
}
