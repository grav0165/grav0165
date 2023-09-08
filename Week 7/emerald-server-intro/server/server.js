// This is the file where we're going to create
// and run our server!

// require express - gives us back a function
const express = require('express');

// In order to use express, I need to call it
// Calling express() here creates an Express
// application that we can use to write our server code
// This is specific to express!
const app = express();

// Like a telephone number that tells us where
// our server will be running
const port = 5000;

// When the browser requests static files,
// Pass it back everything in the server/public folder
app.use(express.static('server/public'));

// Create an array of quotes
let quoteList = [
    {
        text: 'It is often the small steps, not the giant leaps, that bring about the most lasting change.',
        author: 'Queen Elizabeth II'
    },
    {
        text: 'Education is the most powerful weapon which you can use to change the world.',
        author: 'Nelson Mandela'
    },
    {
        text: `There is always light. If only we're brave enough to see it. If only we're brave enough to be it.`,
        author: 'Amanda Gorman'
    }
]


// When the client requests quotes, send them back
app.get('/quotes', function(req, res) {
    // 'req' is an object with all sorts of information
    // about the request that hte client sent 
    console.log('Request for /quotes was made');

    // 'res.send' is used to send the response for a request of /quotes
    // Whatever we pass to res.send will be the response body
    res.send(quoteList);

    // res.sendStatus(500); <--- This sends server into Intrnal Error status
});

// Only return the first quote be sent to client
app.get('/quotes/first', function(req, res) {
    res.send(quoteList[0])
})

// Every response comes with a status code!
// Here are some common ones:
/*
200: OK - Everything is good
201: Created - New data created on server
400: Bad Request - Client sent bad data
404: Not Found - The URL isn't available
500: Server error - Something went wrong on the server
*/



// Code that starts our server!
// app (express), use function listen on port (5000)
// When completed, console.log a message
app.listen(port, () => {
    console.log('listening on port ', port);
})