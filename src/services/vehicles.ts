import moment from 'moment';

import { StateLogsRepository } from 'src/repositories/stateLogs';
import { VehiclesRepository } from 'src/repositories/vehicles';

const TIMESTAMP = 'timestamp';
const STATE = 'state';

export interface Payload {
    vehicleId: number;
    timestamp: Date;
}
interface VehicleServiceOptions {
    stateLogsRepository: StateLogsRepository;
    vehiclesRepository: VehiclesRepository;
}

export class VehiclesService {
    constructor(private readonly options: VehicleServiceOptions) {}

    public async get(vehicleId: number) {
        return this.options.vehiclesRepository.getVehicleById(vehicleId);
    }

    public async getVehicleState(payload: Payload): Promise<{ state: string }> {
        const { vehicleId, timestamp } = payload;
        const stateLogs = await this.options.stateLogsRepository.getStateLogsByVehicleId(vehicleId);

        for (const stateLog of stateLogs) {
            const stateLogTimeStamp = stateLog[TIMESTAMP];
            const state = stateLog[STATE];

            if (moment(stateLogTimeStamp).isSameOrBefore(moment(timestamp))) return { state };
        }
    }
}
