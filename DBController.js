import sql from 'mysql2'
import dotenv from 'dotenv'


dotenv.config()

class db{
    con = sql.createPool({
        host : process.env.MYSQL_HOST,
        database : process.env.MYSQL_DATABASE,
        user : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD
    })
    async Input(userName, password)
    {
        this.con.query(`insert into Enc_Pass (userID, passwords) values (?, ?)`, this.NameToID(userName), this.IntegratePassword(password)).promise()
    }
    async NameToID(userName)
    {
        this.con.promise().query("use ExpressPassword")
        let [reply] = (await this.con.promise().query(`select userID from User_Pass where userName = ?;`, userName))
        return reply[0]
    }
    async List(userName)
    {
        this.con.promise().query("use ExpressPassword")
        let  id = this.NameToID(userName)
        let [reply] = await this.con.promise().query(`select passwords from Enc_Pass where userID = ?;`, id)
        return reply[0]
    }
    async IntegratePassword(userID, newPassword)
    {
        passwordBlock = (this.con.query(`select passwords from Enc_Pass where userID = ?`, userID)) + newPassword + "--"
        this.con.query(`insert into Enc_Pass (passwords) values ()`)
    }
}
export default db