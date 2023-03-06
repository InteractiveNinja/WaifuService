import {PrismaClient} from '@prisma/client'
import winston from "winston";

export class WaifuDatabase {
    private prisma = new PrismaClient()

    constructor(private logger: winston.Logger) {
        this.prisma.$connect().then(() => {
            this.logger.info("Connected to Waifudatabase")
        }).catch((err) => {
            this.logger.error(err);
        })
    }

    public getAll() {
        return this.prisma.waifu.findMany().then(waifus => waifus).catch(err => {
            this.logger.error(err);
            return []
        })
    }

    public getRandom() {
        return this.getAll().then(waifus => {
            const randomIndex = Math.floor(Math.random() * waifus.length)
            return waifus[randomIndex];
        })
    }

}