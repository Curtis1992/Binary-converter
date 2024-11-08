const binaryInput = document.getElementById("binaryInput");
const decimalInput = document.getElementById("decimalInput");
const hexInput = document.getElementById("hexInput");

const inputs = [
    [binaryInput, 2, /^[01]+$/], 
    [decimalInput, 10, /^[0-9]+$/], 
    [hexInput, 16, /^[0-9A-Fa-f]+$/]
];

for (let [input, base, pattern] of inputs) {
    input.addEventListener("input", () => convertFrom(input, base, pattern));
}



function convertFrom(input, fromBase, pattern) {
    const strVal = input.value.trim();
    const num = (pattern.test(strVal)) ? parseInt(strVal, fromBase) : NaN;

    for (let [textbox, toBase, _] of inputs) {
        if (input == textbox) continue;
        if (isNaN(num)) {
            textbox.value = "";
        } else {
            textbox.value = num.toString(toBase).toUpperCase();
        }
    }
}