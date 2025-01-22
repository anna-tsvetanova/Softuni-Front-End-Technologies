function promiseRejection() {
    new Promise((resolve, reject) => {
        setTimeout (() => {
            reject("Smth went wrong!");
        }, 1000);
    })
    .catch((result) => {console.log(result)});
}

promiseRejection();
