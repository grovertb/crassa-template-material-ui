import keys from './keys'

export function conexion() {
  return new Promise((resolve, reject) =>
    keys.conexion.getConnection((err, conn) => err ? reject(err) : resolve(conn))
  )
}

export function query(conn, querys) {
  return new Promise((resolve, reject) =>
    conn.query(querys, (err, rows) => err ? reject({ conn, err }) : resolve({ conn, rows })))
}
