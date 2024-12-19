/** 
 * Implement the following functions as Promise-based function
*Implement a set of dummy function which can mimic the behavior of the following functions
*1.download -> This function should mimic downloading of somecontent from the url
*2.writeFiles -> This function should mimic writing of some content to a file
*3.upload -> This function should mimic uploading of the file to server

*Now after you've implemented the above functions, try to used them in scenario 
*where you first download a file, then write it to a disk and then upload it to server

*/

console.log("Start");

// Simulating Function for Downloading Data
function download(ur) {
    return new Promise(function exe(res, rej) {
        console.log("Downloading data from", url);
        setTimeout(function () {
            let data = "some data from " + url;
            res(data);
            console.log("Downloaded data from", url);
        }, 3000);
    })
}

// Simulating Function for Writing File
function writeFiles(data, fileName) {
    return new Promise(function exe(res, rej) {
        console.log("Writing", data, "to file");
        setTimeout(function () {
            console.log("Writing file", fileName, "is done");
            let status = "Success"
            res(status);
        }, 2000)
    })
}

// Simulating Function for Uploading
function upload(url, fileName, data) {
    return new Promise(function exe(res, rej) {
        console.log("Upload file", fileName, "to url", url);
        setTimeout(function () {
            console.log("upload is done");
            let status = "success"
            res(status)
        }, 3000)

    })
}


// Main code
// Using variable 
let url = "https://example.com/file";
let uploadUrl = "https://upload.com/file";

// const p2 = download(url)
// .then(function f(value){
//     console.log("Downloaded data is ",value);
//     return writeFiles(value,"File.txt")
// })

// const p3=p2.then(function g(fileName){
//     console.log("Writing file",fileName);
//     return upload(uploadUrl,fileName)
// })

// p3.then(function h(uploadStatus) {
//     console.log("File upload result:", uploadStatus);
// }).catch(function (error) {
//     console.error("An error occurred:", error);
// });


// Another way of doing the same thing using Promise chaining
// Starts the download process and handles the chain of operations

download(url)
    .then(function f(value) {
        // Logs the result of the download function
        console.log("Downloaded data is ", value);

        // Returns the promise for writing the file, allowing chaining
        return writeFiles(value, "File.txt");
    })
    .then(function g(value) {
        // Logs the result of the writeFiles function
        console.log("Writing file", value);

        // Returns the promise for uploading the file, allowing further chaining
        return upload(uploadUrl, value);
    })
    .then(function h(value) {
        // Logs the result of the upload function after a successful upload
        console.log("File upload result:", value);
    })
    .catch(function i(error) {
        // Handles any errors that occurred in the promise chain
        console.error("An error occurred:", error);
    });

console.log("End");
