// set environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  // default port
  port: 3030,

  // winston logging (error, warn, info, http, verbose, debug, silly)
  logs: {
    level: 'silly'
  },

  // crypto accounts
  accounts: {
    XLM: ""
  },

  baseUri: {
    kraken: {
      public: 'https://api.kraken.com/0/public',
      private: 'https://api.kraken.com/0/private'
    }
  }
};
