const config = {
  port: 8180,
  url: 'http://api.treejer.com:3000/api',
};

if (process.env.NODE_ENV === 'development') {
  config.cdn = `http://localhost:${config.port}/assets`;
  config.jsCDN = `http://localhost:${config.port}`;
} else {
  config.cdn = '';
  config.jsCDN = '';
}

module.exports = config;
