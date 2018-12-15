const express = require('express')
const next = require('next')
const argv = require('minimist')(process.argv.slice(2));

const config = {
  google: argv.google,
  fb: argv.fb,
  vk: argv.vk
};

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  // const server = express();
})  
.then(() => {
  const server = express()

  server.get('/profile', (req, res) => {
    const actualPage = '/profile';
    app.render(req, res, actualPage);
  });

  server.get('/config', (req, res) => {
    res.send(JSON.stringify(config));
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})