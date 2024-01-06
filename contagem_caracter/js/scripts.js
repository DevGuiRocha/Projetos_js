const input = document.querySelector("#input");
const counter = document.querySelector(".counter");
const toggleButton = document.querySelector("#toggle");

let mode = "complete";

toggleButton.addEventListener("click", () => {

    if (mode === "complete") {
        mode = "words";
        toggleButton.textContent = "Contar Caracteres";
    } else if (mode === "words") {
        mode = "characters";
        toggleButton.textContent = "Contar Palavras e Caracteres";
    } else if (mode === "characters"){
        mode = "complete";
        toggleButton.textContent = "Contar Palavras";
    }

    input.dispatchEvent(new Event("input"));
});

input.addEventListener("input", () => {

    let words = input.value.trim().split(/\s+/);
    let count_caracter = input.value.length;
    let count_word = input.value.trim() === "" ? 0 : words.length;

    if (mode === "complete") {
        counter.textContent = `${count_caracter} caracteres e ${count_word} palavras`;
    } else if (mode === "characters") {
        counter.textContent = `${count_caracter} caracteres`;
    } else {
        counter.textContent = `${count_word} palavras`;
    }
    
    // switch(mode) {
    //     case "complete":
    //         counter.textContent = `${count_caracter} caracteres e ${count_word} palavras`;
    //         break;
    //     case "characters":
    //         counter.textContent = `${count_caracter} caracteres`;
    //         break;
    //     case "words":
    //         counter.textContent = `${count_word} palavras`;
    //         break;
    // }

});
