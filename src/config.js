const config = {
  port: 8180,
};

if (process.env.NODE_ENV === 'development') {
  config.cdn = `http://localhost:${config.port}/assets`;
} else {
  config.cdn = '';
}

module.exports = config;
