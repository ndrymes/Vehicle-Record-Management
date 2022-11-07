import { Request, Response, Router, NextFunction } from 'express';

import { VehiclesService } from 'src/services/vehicles';

interface VehiclesControllerOptions {
    vehiclesService: VehiclesService;
}

export class VehiclesController {
    private router: Router;
    constructor(private readonly options: VehiclesControllerOptions) {
        this.router = Router();
        this.router.post('/vehiclerecord', this.processVehicleRecord.bind(this));
    }

    getRouter(): Router {
        return this.router;
    }

    public async processVehicleRecord(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { vehicleId, timestamp } = req.body;

            const vehicle = await this.options.vehiclesService.get(vehicleId);

            const state = await this.options.vehiclesService.getVehicleState({ vehicleId, timestamp });

            return res.status(200).json({
                error: false,
                code: 200,
                message: 'Data gotten successfully',
                data: { vehicle, ...state }
            });
        } catch (error) {
            return next(error);
        }
    }
}
