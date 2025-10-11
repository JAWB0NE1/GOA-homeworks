const customPromise = Promise.resolve({ status: "ok", code: 200 });
customPromise.then(result => console.log("Resolved:", result));