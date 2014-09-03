var settings = {}

settings.twitter = {};
settings.mongo = {};
settings.web = {};

settings.default_stuff =  ['red','green','blue','apple','yellow','orange','politics'];
settings.twitter.user_name = process.env.TWITTER_USER || 'username';
settings.twitter.password =  process.env.TWITTER_PASSWORD || 'password';
// Mongo settings
settings.mongo.uri = process.env.DUOSTACK_DB_mongo;
settings.mongo.host = 'localhost';
settings.mongo.port = 27017;
settings.mongo.db = 'nodesession';
settings.web.port = process.env.WEB_PORT || 1337;

// MySQL Settings
settings.mysql = {
  host : 'localhost',
  user : 'root',
  password : '',
  connectionLimit : '10'
};

settings.mysql.db = 'test';

module.exports = settings;