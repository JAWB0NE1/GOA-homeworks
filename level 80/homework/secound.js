function countdown() {
    for (let i = 100; i >= 0; i--) {
        console.log(`დარჩენილია ${i} წამი`);
        let start = Date.now();
        while (Date.now() - start < 1000) {}
    }
}
countdown();
