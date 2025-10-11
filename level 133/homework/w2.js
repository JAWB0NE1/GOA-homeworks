const errorPromise = Promise.reject(new Error("Custom failure!"));
errorPromise.catch(err => console.log("Caught:", err.message));