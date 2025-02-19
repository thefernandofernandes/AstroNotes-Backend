import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "./Usuario";

export enum TipoEvento {
    Planeta = "Planeta",
    Estrela = "Estrela",
    Galaxia = "Galáxia",
    Nebulosa = "Nebulosa",
    Cometa = "Cometa",
    Asteroide = "Asteroide",
    Meteoro = "Meteoro",
    EclipseSolar = "Eclipse Solar",
    EclipseLunar = "Eclipse Lunar",
    Aurora = "Aurora",
    TransitoPlanetario = "Trânsito Planetário",
    MareGravitacional = "Maré Gravitacional",
    FusaoBuracoNegro = "Fusão de Buraco Negro",
    TempestadeSolar = "Tempestade Solar",
    JatoRelativistico = "Jato Relativístico",
    OndaGravitacional = "Onda Gravitacional",
    FilamentoCosmico = "Filamento Cósmico",
    Superaglomerado = "Superaglomerado",
    Protoestrela = "Protoestrela",
    SistemaBinario = "Sistema Binário",
    SistemaTriplo = "Sistema Triplo",
    Exolua = "Exolua",
    SateliteNatural = "Satélite Natural",
    GalaxiaEspiral = "Galáxia Espiral",
    GalaxiaEliptica = "Galáxia Elíptica",
    GalaxiaIrregular = "Galáxia Irregular",
    AglomeradoGlobular = "Aglomerado Globular",
    AglomeradoAberto = "Aglomerado Aberto",
    FlareEstelar = "Flare Estelar",
    CinturaoRadiacao = "Cinturão de Radiação",
    ZonaHabitavel = "Zona Habitável",
    VentoSolar = "Vento Solar"
}

@Entity("observacoes")
export class Observacao {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 200 })
    titulo!: string;

    @Column("text")
    descricao!: string;

    @Column("timestamp")
    data!: Date;

    @Column({ length: 255 })
    localizacao!: string;

    @Column({ type: "enum", enum: TipoEvento })
    tipo_evento!: TipoEvento;

    // Relacionamento ManyToOne para Usuario
    @ManyToOne(() => Usuario, { onDelete: "CASCADE" })
    @JoinColumn({ name: "usuario_id" })  // Especificando o nome da coluna de chave estrangeira
    usuario!: Usuario;
}

