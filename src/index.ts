import express from 'express';
import winston from 'winston'
import {WaifuDatabase} from "./database";
import 'dotenv/config'
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});
const app = express();
const db = new WaifuDatabase(logger)
const PORT = process.env.PORT || 4000 ;

app.get("/",(req, res) => {
    return db.getRandom().then(waifu => res.json(waifu))
})

app.get("/all",(req, res) => {
    return db.getAll().then(waifus => res.json(waifus))
})

app.listen(PORT, () => {
    logger.info(`Running Server at: ${PORT}`)
})