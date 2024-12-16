/** 
*Implement a set of dummy function which can mimic the behavior of the following functions
*1.download -> This function should mimic downloading of somecontent from the url
*2.writeFiles -> This function should mimic writing of some content to a file
*3.upload -> This function should mimic uploading of the file to server

*Now after you've implemented the above functions, try to used them in scenario 
*where you first download a file, then write it to a disk and then upload it to server

*/


// Simulating for downloading a data 
function download(url, callback) {
    console.log("Downloading file from ", url);
    setTimeout(() => {
        console.log("Download is complete.");
        let downloadData = "Some Data"
        callback?.(downloadData) // here ?. check if there is callback the return the callback value other wise don't call it

    }, 3000)
}

// Simulating a WritingFile 
function writeFiles(data, fileName, callback) {
    //File name tells the name of the file to be created in which data will e written
    console.log("Writing ", data, "to file");
    setTimeout(() => {
        console.log("Writing file ", fileName, "Is done");
        let status = "success"
        callback?.(status);
    }, 2000);
}

// Simulating a Uploading
function upload(url, fileName, callback) {
    //File name tells the name of the file to upload
    console.log("Uploading file", fileName, "to ",url);
    setTimeout(() => {
        console.log("upload is done");
        const uploadStatus = "Success"
        callback?.(uploadStatus);
    }, 3000);
}


// Simulating the full scenario
function process() {
    let url = "https://example.com/file";
    let uploadUrl = "https://upload.com/file";

    download(url, function handelDownload (data) {
        writeFiles(data, "File.txt", function handelWrite(status) {
            upload(uploadUrl, "File.txt", function handleUpload(uploadStatus) {
                console.log("All done");
            });
        });
    });
}

// calling the Simulating 
process();







// // Another function
// function writeFiles() {
//     const interval = setInterval(function start() {
//         console.log("Writing the file");
//     }, 2000)

//     // Stopping the file writing
//     setTimeout(function stop() {
//         clearInterval(interval)
//         console.log("Writing file it done");
//     }, 3000)
// }

// function upload(file) {
//     const interval = setInterval(function start() {
//         console.log("Writing the file");
//     }, 2000)

//     // Stopping the file writing
//     setTimeout(function stop() {
//         clearInterval(interval)
//         console.log("Writing file it done");
//     }, 3000)
// }

