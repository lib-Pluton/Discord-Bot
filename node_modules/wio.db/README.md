![Image](https://img.shields.io/npm/v/wio.db?color=%2351F9C0&label=Wio.db) 
![Image](https://img.shields.io/npm/dt/wio.db.svg?color=%2351FC0&maxAge=3600) 
#
![Image](https://nodei.co/npm/wio.db.png?downloads=true&downloadRank=true&stars=true)
<br>#wio.db<br>
##Yüklemek İçin
```npm
npm install  wio.db
```

# NEWS
Turkish:
TypeScript destegi geldi.
English:
add TypeScript support.


##Nasıl Kullanılır? || how to use?
# TypeScript
```typescript
import db from "wio.db"
```
# NodeJs
```javascript
const Discord = require ('discord.js')
const client = new Discord.Client()
const  db  = require('wio.db')
db.backup('backup.json')
client.on('ready',() => {
    console.log('Bot ready')
})
client.on('message',async message => {
    await db.add(message.author.username,1) // ---> add user data this value
    await db.set(message.author.username,'blablabla') // ---> create user data
    await db.delete('wio') // ---> delete user data
    await db.push(message.author.username,'blablabla') // ---> push to array
    await db.has('wio') // ---> true or false
    var data = await db.fetch('wio') // ---> fetch user data
    var data = await db.get('wio') // ---> fetch user data
    var data2 = await db.fetchAll() // ---> fetch all data
    let filter = await db.startsWith('wio') //---> return shows data starting with w in data
    const arrayHas = await db.arrayHas(message.author.username,'blablabla') // ---> return true or false
    await db.arrayDeleteVal('wio','blablabla') // --->  deletes the data in the array
    await db.deleteDataEach(message.author.id) // ---> deletes all data that have the specified parameter
    const includes = await db.includes(message.author.id) // ---> returns all data containing the given parameter
    db.objectDeleteKey('object','key') // ---> from the object in the database deletes data
    db.clearDB() // ---> clears database
    db.substr("wio",1) // ---> subtracts 1 from data
    db.backupLoad("backup.json")
    db.find(a = a > 10 ) //performs a search and returns the first value
    const table = new db.table()
    table.createTable("Table1")
    table.set("Table1",{
        username:"wioenena",
        money:100
    })
    const filterExample = table.filter("Table1",(a) => a.money > 60 );
    console.log(filterExample); // ---> Filter the table
    const findExample = table.find("Table1",(a) => a.money > 60)
    console.log(findExample); // ---> find the table
    
})



client.login('')
```
## Bana ulaşabileceğiniz yerler. || Bugs report
[wio.db Support Server (Discord)](https://discord.gg/pSGUsGF)
[İnstagram](https://www.instagram.com/wioenena.q/)

# wio.db Kullanan Sunucular
[XiR](https://discord.gg/nFcCKEe)
[Helmes](https://discord.gg/wzc6yHK)
