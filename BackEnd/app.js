const express = require('express');
const app = express();
const routes = require('./routes/routes');

const port = 3000; 
const cors = require("cors");
app.use(cors({origin: '*'}));

const StoreRoutes = require("./routes/routes")
app.use('/', routes);

app.use(StoreRoutes);

app.listen(port, () => console.log(`Server listening on port ${port} http://localhost:3000`))

