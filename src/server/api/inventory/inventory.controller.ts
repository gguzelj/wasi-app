import { Request, Response, NextFunction } from 'express';

export class InventoryController {
  public static async getInventory(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    // Read Excel file, call and external api, etc
    try {
      const res = [];
      response.json(res);
    } catch (err) {
      next(err);
    }
  }
}
