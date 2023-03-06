# Waifu Webservice

Der Webservice liefert über seine Endpunkte URLs von Waifus sowie ein paar Metadaten zum Eintrag aus der Datebank.
Einträge werden in einer SQLite Datenbank gespeichert.

## Persistierung der Daten
Verwendung einer vorhandener DB Datei per Mount Point
`docker run -it --init --rm -v path/to/data.db:/prisma/data.db -p 4000:4000 waifu`

Persistierung gesamten Order per Mount Point
`docker run -it --init --rm -v path/to/folder:/prisma -p 4000:4000 waifu`

## Endpunkt

Random Waifu abfragen
`GET: /`
```
{
    id: number,
    name: string,
    link: string,
    createdAt: string as ISO 8601
}
```
Alle Waifus abfragen
`GET: /all`
```
[{
    id: number,
    name: string,
    link: string,
    createdAt: string as ISO 8601
},
...]
```


## ENV Variabeln

`PORT`: Setzen des Webservice Port default: `4000`