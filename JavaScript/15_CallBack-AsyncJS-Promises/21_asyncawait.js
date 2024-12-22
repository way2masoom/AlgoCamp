// Async and wait method in js
/** 
 * Implement the following functions as Promise-based function
*Implement a set of dummy function which can mimic the behavior of the following functions
*1.download -> This function should mimic downloading of somecontent from the url
*2.writeFiles -> This function should mimic writing of some content to a file
*3.upload -> This function should mimic uploading of the file to server

*Now after you've implemented the above functions, try to used them in scenario 
*where you first download a file, then write it to a disk and then upload it to server

*/


// Simulating Function for Downloading Data
function download(url) {
    return new Promise(function exe(res, rej) {
        console.log("Starting Downloading data from", url);
        setTimeout(function () {
            let data = "some data from " + url;
            rej(data);
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


//Making a async and wait function

async function exec() {
    // used of try and catch 
    try {
        let url = "https://example.com/file";
        let uploadUrl = "https://upload.com/file";
        console.log("Staring Execution");

        const downloadData = await download(url);
        console.log("Data downloaded is ", downloadData);

        const fileResponse = await writeFiles(downloadData, "Example.txt");
        console.log("File write status", fileResponse);

        const uploadStatus = await upload("example.txt", url);
        console.log("Upload status", uploadStatus);

        return uploadStatus
    } catch (e) {
        console.log("Something went wrong");

    }
}

// Main code
exec().then((v) => console.log("Exec done", v)); // calling the function




/*** Don't have to do this  ***/
// const it = exec() // calling the exec function |it will return a gen object having and iterator
// const ft = it.next(); // the exec function wil execute from here
// console.log("ft is ", ft);
// ft.value.then(function doAfterReceiving(value) {
//     console.log("Calling do after receiving when Download", value);
//     const future = it.next(value); // interesting
//     future.value.then(doAfterReceiving);
// })


