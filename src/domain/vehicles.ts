import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Vehicles {
    @PrimaryColumn()
    id: number;

    @Column()
    make: string;

    @Column()
    model: string;

    @Column()
    state: string;
}
