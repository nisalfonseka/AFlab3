const fs = require('fs');
const http = require('http');
const https = require('https');
const myModule = require('./my-module.js');

// 🟢 Read from a file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("File Content:", data);
});

// 🟢 Write to a file
fs.writeFile('file.txt', 'Hello from Node.js!', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});

// 🟢 Create a web server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello, World from Node.js Server!');
    res.end();
}).listen(8090, () => {
    console.log("Server running at http://localhost:8080/");
});

// 🟢 Make an HTTP request
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        console.log("Fetched Data:", JSON.parse(data));
    });

}).on('error', (err) => {
    console.log("Error:", err.message);
});

// 🟢 Use a module
console.log("Module Output:", myModule.myFunction());

// 🟢 Promises Example
const myPromise = new Promise((resolve, reject) => {
    let condition = true; // Change to false to test rejection
    if (condition) {
        resolve('Promise resolved successfully!');
    } else {
        reject('Promise failed!');
    }
});

myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// 🟢 Async/Await Example
async function asyncFunction() {
    try {
        let result = await myPromise;
        console.log("Async Result:", result);
    } catch (error) {
        console.log("Async Error:", error);
    }
}

asyncFunction();
