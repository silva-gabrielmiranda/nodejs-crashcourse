const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger')

// app.get("/", (req, res) => {
//     res.send("<h1>Hello World</h1>");
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });

//init middleware
app.use(logger);

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));