function promiseRejection() {
    new Promise((resolve, reject) => {
        setTimeout (() => {
            reject("Smth went wrong!");
        }, 1000);
    })
    .catch((error) => {console.log(error)});
}

promiseRejection();
