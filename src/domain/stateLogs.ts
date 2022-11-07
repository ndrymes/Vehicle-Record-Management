import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stateLogs')
export class StateLogs {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vehicleId: number;

    @Column()
    state: string;

    @Column()
    timestamp: Date;
}
