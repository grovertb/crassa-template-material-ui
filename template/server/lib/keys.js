import mysql from 'mysql'

const configure = {
  connectionLimit   : 400,
  database          : 'younamedb',
  host              : 'youipdb',
  multipleStatements: false,
  password          : 'youpassdb',
  port              : 3306,
  user              : 'youuserdb'
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
