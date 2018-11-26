import mysql from 'mysql'

const configure = {
  user              : 'youuserdb',
  host              : 'youipdb',
  password          : 'youpassdb',
  database          : 'younamedb',
  connectionLimit   : 400,
  port              : 3306,
  multipleStatements: false
}

const cnx = mysql.createPool(configure)

const cnxmult = mysql.createPool({
  ...configure,
  multipleStatements: true
})

export default {
  conexion    : cnx,
  conexionmult: cnxmult
}
