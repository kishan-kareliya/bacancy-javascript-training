// Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
// After the delay, log "Download complete: [url]" and execute the callback function.

function download(cb) {
    cb();
    setTimeout(() => {
        console.log(`download complted`);
    }, 3000);
}
download(() => {
    console.log("start download");
});
