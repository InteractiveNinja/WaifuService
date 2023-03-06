import express from 'express';
import winston from 'winston'
import {WaifuDatabase} from "./database";

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});
const app = express();
const db = new WaifuDatabase(logger)

app.get("/random",(req, res) => {
    return db.getAll().then(waifus => res.json(waifus))
})



const PORT = 4000;

app.listen(PORT, () => {
    logger.info(`Running Server at: ${PORT}`)
})