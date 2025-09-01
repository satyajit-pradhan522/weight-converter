const inputEl = document.querySelector("#input");
const errorEl = document.querySelector("#error");
const resultEl = document.querySelector("#result");

let errorTime;
let resultTime;

function updateResults() {
    if (inputEl.value <= 0 || isNaN(inputEl.value)) {
        errorEl.innerHTML = "Please enter a valid number";
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            errorEl.innerHTML = "";
            inputEl.value = "";
        }, 2000);
    }else {
        resultEl.innerHTML = (+inputEl.value / 2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            resultEl.innerHTML = "";
            inputEl.value = "";
        }, 10000);
    }
}

inputEl.addEventListener("input", updateResults);