const gelInput = document.getElementById('inp1');
const eurOutput = document.getElementById('inp2');
const exchangeRate = 0.070; 

gelInput.addEventListener('input', function () {
    const gel = parseFloat(gelInput.value);
    if (!isNaN(gel)) {
        const eur = gel / exchangeRate;
        eurOutput.value = eur.toFixed(2);
    } else {
        eurOutput.value = '';
    }
});