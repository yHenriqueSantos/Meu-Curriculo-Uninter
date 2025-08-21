const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const resposta = document.querySelector("#resposta");
const btn = document.querySelector("#calcularBtn");

btn.addEventListener("click", calcular);

function calcular() {
    if (campo1.value !== '' && campo2.value !== '') {
        const valor1 = parseFloat(campo1.value);
        const valor2 = parseFloat(campo2.value);
        const operacao = seletor.value;

        let resultado = "";

        if (operacao === "somar") resultado = valor1 + valor2;
        if (operacao === "subtrair") resultado = valor1 - valor2;
        if (operacao === "multiplicar") resultado = valor1 * valor2;
        if (operacao === "dividir") {
            resultado = valor2 !== 0 ? valor1 / valor2 : "Erro: divisão por 0";
        }

        resposta.innerHTML = resultado;
    } else {
        resposta.innerHTML = "Preencha os dois campos!";
    }
}
