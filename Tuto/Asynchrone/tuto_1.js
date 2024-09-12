const promise = new Promise((resolve, reject) => {
    // Opération asynchrone
    setTimeout(() => {
        resolve('La promesse est résolue');
    }, 2000);
});

console.log("avant l'exécution de promise");
promise.then((result) => {
        console.log(result); // 'La promesse est résolue'
    })
    .catch((error) => {
        console.error(error);
    });

console.log("après l'exécution de promise");