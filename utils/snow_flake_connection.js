const snowflake = require('snowflake-sdk')

class Snowflake {
  constructor () {
    this.connection = this.getConection()
  }

  getConection () {
    const connection = snowflake.createConnection({
      account: 'cp23351.north-europe.azure',
      username: 'MX_REPORTER',
      password: '&GISRM33tFGu4*MX',
      warehouse: 'COMPUTE_WH',
      database: 'SNOWFLAKE',
      schema: 'public',
      port: 443
    })
    const response = connection.connect((err, conn) => {
      if (err) {
        throw new Error('Unable to connect: ' + err.message)
      } else {
        const idConnection = conn.getId()
        console.log(`Successfully connected to Snowflake: ${idConnection}`)
      }
    }
    )
    return response
  }

  query = async (sqlText, binds = []) => {
    const stream = new Promise((resolve, reject) => {
      const data = []
      const queryResult = this.connection.execute({ sqlText, binds })
      queryResult.streamRows()
        .on('data', (row) => {
          data.push(row)
          resolve(data)
        })
        .on('end', () => { reject(data) })
    })
    return stream
  }
}
module.exports = { Snowflake }
