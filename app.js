if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register('./serviceWorker.js') //file location
    .then(()=>{
        console.log("Service worker register successfully")
    })
    .catch((err)=>{
        console.log("Something went wrong",err)
    })
} else {
    console.log("Service worker is not available")
}