const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;


//MIDDLEWARE
app.use(express());
app.use(cors());

//ROUTES
app.get('/', (req, res) => {
    res.send('Homepage');
});



//SERVER LISTENING
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});