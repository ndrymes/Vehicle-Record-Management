import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { StateLogs } from 'src/domain/stateLogs';

@EntityRepository(StateLogs)
export class StateLogsRepository extends BaseRepository<StateLogs> {
    public getStateLogsByVehicleId(vehicleId: number): Promise<StateLogs[]> {
        return this.find({
            where: {
                vehicleId
            },
            order: {
                timestamp: 'DESC'
            }
        });
    }
}
