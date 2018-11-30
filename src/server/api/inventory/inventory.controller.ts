import { Request, Response, NextFunction } from 'express';
import { RankingService } from './ranking.service';

export class InventoryController {
  public static async getInventory(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    // Read Excel file, call and external api, etc
    const { page, nick, size } = request.query;
    const rankingService = new RankingService();
    try {
      const res = await rankingService.getRanking(page, nick, size);
      response.json(res);
    } catch (err) {
      next(err);
    }
  }
}
