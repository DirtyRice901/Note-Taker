// Define the installed frameworks for app//
const express = require('express');
const api_routes = require('c:/Users/Kevin.DESKTOP-63MKTIS/bootcamp/homework/Note-Taker/routes/api-routes');
const html_routes = require('c:/Users/Kevin.DESKTOP-63MKTIS/bootcamp/homework/Note-Taker/routes/html-routes');
const PORT = process.env.PORT || 5500;
// const PORT = 5500;
const app = express();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Define middleware callback functions using app.use() method //
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(api_routes);
app.use(html_routes);

// Bind and listen for connections on the specified host and port //
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    
