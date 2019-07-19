module.exports = process.env.NODE_ENV === 'production' || process.env.PROD ? require('./Client.prod') : require('./Client.dev')
