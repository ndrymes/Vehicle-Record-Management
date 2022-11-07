import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Vehicles } from 'src/domain/vehicles';

@EntityRepository(Vehicles)
export class VehiclesRepository extends BaseRepository<Vehicles> {
    public getVehicleById(vehicleId: number): Promise<Vehicles> {
        return this.findOne({
            where: {
                id: vehicleId
            }
        });
    }
}
