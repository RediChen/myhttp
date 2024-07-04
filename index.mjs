import http from 'http';

const PORT = 9000;
const server = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('link', 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
  res.end('你好，世界: ' + process.argv[2]);
});

server.listen(PORT, () => {
  console.log(`伺服器運行中: http://localhost:${PORT}`);
});