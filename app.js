import { encoding_for_model } from "tiktoken";
import fs from "fs";

function cienAñosDeSoledad() {
    const text = fs.readFileSync("CienAñosDeSoledad.txt", "utf-8");
    return text;
}

async function contarTokens() {
    // seleccionar el modelo gpt-3.5 pro gpt 4 etc..
    const encoding = encoding_for_model("gpt-4");

    // ingresar el texto a utilizar
    const text = cienAñosDeSoledad();

    // codificar el texto a tokens
    const generado = encoding.encode(text);
    console.log(generado);

    // imprimir cuanto fue generado
    console.log("cantidad de token generados: ", generado.length);

    // Calcular costos (estimado)
    const costoPorMilTokens = 0.03 // en dolares EEUU
    const costoFinal = (generado.length * costoPorMilTokens) / 1000;
    console.log("costo final: ", costoFinal, "USD");

}

contarTokens();