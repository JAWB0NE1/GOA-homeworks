gela = true;
const mPromise = new Promise((resolve, reject) => {
    const success = gela;
    
    if (success) {
        resolve("დაპირება შესრულდა!");
    } else {
        reject("დაპირება ვერ შესრულდა.");
    }
});

mPromise
    .then(result => {
        console.log("Then:", result);
    })
    .catch(error => {
        console.log("Catch:", error);
    })
    .finally(() => {
        console.log("Finally: დაპირების დამუშავება დასრულდა.");
    });