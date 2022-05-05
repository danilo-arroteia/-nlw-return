import express from 'express';

const app = express();
const port = 3333;

app.get('/users', (req, res) => {
    return res.send('Hello World');
})

app.listen(port, () =>{
    console.log(`HTTP server running! on port ${port}`);
});


// SQLite ( Não precisa instalar nada, salva como arquivo físico )
// Prisma 