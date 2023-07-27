import express from 'express';
const app = express();
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './components/Home.js'

app.use(express.static('public'));
app.get('/', (req, res) => {
    // const content = renderToString(<Home />);
    const html = `
        <html>
            <head>
            </head>
            <body>
                <div id="root"></div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
    res.send(html);
});

// 서버가 포트를 여는 작업을 함
app.listen(3000, () => {
    console.log('3000번 포트가 열렸습니다.')
});