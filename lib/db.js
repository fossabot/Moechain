/* const levelup = require('levelup')
const db = levelup('./data')

class DB {
  put (key, value) {
    return new Promise((resolve, reject) => {
      db.put(key, value, {valueEncoding: 'binary'}, err => err ? reject(err) : resolve())
    })
  }
  // 来自一介布衣的前置查询方法， 不能用promise
  find (find, callback) {
    var option = {keys: true, values: true, revers: false, limit: 20, fillCache: true}
    if (!find) { return callback('nothing', null) } else {
      if (find.prefix) {
        option.start = find.prefix
        option.end = find.prefix.substring(0, find.prefix.length - 1) +
                String.fromCharCode(find.prefix[find.prefix.length - 1].charCodeAt() + 1)
      }

      if (find.limit) { option.limit = find.limit }
      return db.createReadStream(option)
    }
  }

  get (key) {
    return new Promise((resolve, reject) => {
      db.get(key, (err, value) => {
        if (err) {
          return reject(err)
        }
        resolve(value)
      })
    })
  }

  del (key) {
    return new Promise((resolve, reject) => {
      db.del(key, err => err ? reject(err) : resolve())
    })
  }
}
*/
// module.exports = DB