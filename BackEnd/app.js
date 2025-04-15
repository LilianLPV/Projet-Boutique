const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./api/routes/routes');

const app = express();
const port = 3000;

app.use(cors({ origin: '*' }));

app.use(routes);

app.use('/image', express.static(`ìmg`));

// Servir les fichiers statiques du FrontEnd (CSS, JS, images...)
app.use(express.static(path.join(__dirname, '../FrontEnd')));

// Route pour servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../FrontEnd/template/main.html'));
});


app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
