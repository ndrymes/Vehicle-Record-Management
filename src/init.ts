import 'reflect-metadata'; // for TypeORM
import { getConnection, getCustomRepository } from 'typeorm';
import { connect } from 'src/db-connect';
import { HealthcheckController } from 'src/controllers/healthcheck';
import { HealthcheckService } from 'src/services/healthcheck';
import { VehiclesController } from 'src/controllers/vehicles';
import { VehiclesService } from 'src/services/vehicles';
import { StateLogsRepository } from 'src/repositories/stateLogs';
import { VehiclesRepository } from 'src/repositories/vehicles';

/**
 * Initialize all ENV values and dependencies here so that they are re-usable across web servers, queue runners and crons
 */
/* eslint-disable  @typescript-eslint/no-explicit-any */
export async function init(): Promise<Record<string, any>> {
    // repositories
    await connect();

    const stateLogsRepository = getCustomRepository(StateLogsRepository);
    const vehiclesRepository = getCustomRepository(VehiclesRepository);

    // services
    const healthcheckService = new HealthcheckService(getConnection());
    const vehiclesService = new VehiclesService({ stateLogsRepository, vehiclesRepository });

    // controllers
    const healthcheckController = new HealthcheckController(healthcheckService);
    const vehiclesController = new VehiclesController({
        vehiclesService
    });

    return {
        stateLogsRepository,
        vehiclesRepository,

        healthcheckController,
        vehiclesController,

        vehiclesService
    };
}
