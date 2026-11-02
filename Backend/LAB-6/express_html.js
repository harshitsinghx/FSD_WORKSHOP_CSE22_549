const express= require('express');
const path = require('path');
const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Hello, World!</h1>');
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });


app.use(express.static('public'));
app.listen(3000,()=>{
    console.log('server running on http://localhost:3000/');
});