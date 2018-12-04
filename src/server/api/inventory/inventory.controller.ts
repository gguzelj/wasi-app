import { Request, Response, NextFunction } from 'express';
import readXlsxFile from 'read-excel-file/node'
import * as fs from "fs";
import * as path from "path";

export class InventoryController {
  public static async getInventory(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const excelPath = path.join(__dirname, './Inventario.xlsx');
      const res = await readXlsxFile(fs.createReadStream(excelPath));
      response.json(res.slice(1,res.length));
    } catch (err) {
      next(err);
    }
  }
}
