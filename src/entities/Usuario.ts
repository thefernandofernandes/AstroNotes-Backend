import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("usuarios")
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nome!: string;

    @Column({ length: 100, unique: true })
    email!: string;

    @Column()
    senha!: string;

    @Column({ type: "enum", enum: ["Admirador", "Astronomo Amador", "Astronomo Profissional"] })
    tipo_conta!: string;
}
