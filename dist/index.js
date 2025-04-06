let number = 0;
let frase = "";
const QUANTAS = 16;

function generateNumber() {
    return number = Math.ceil(Math.random() * QUANTAS); 
}

console.log(generateNumber());

switch(number) {
    case 1: frase = "A mais nova versão!!";
    break;

    case 2: frase = "EDERZIN13!!";
    break;

    case 3: frase = "Com flocos crocantes!";
    break;

    case 4: frase = "Amanhã é um novo dia!"; 
    break;

    case 5: frase = "Pensando na morte da bezerra";
    break;

    case 6: frase = "Açucar... tempero... e tudo o que há de bom!";
    break;

    case 7: frase = "Em busca da casa automática!";
    break;

    case 8: frase = "Albert Zombie e Herbert Richards!";
    break;

    case 9: frase = "Indústrias pelicano!";
    break;

    case 10: frase = "https://www.youtube.com/watch?v=jkeYCT8SDWM";
    break;

    case 11: frase = "Drum and bass";
    break;

    case 12: frase = "Feito com carinho!";
    break;

    case 13: frase = "TSI";
    break;

    case 14: frase = "Alerta de intruso!";
    break;

    case 15: frase = "Also try Terraria!";
    break;

    case 16: frase = "Also try Minecraft!";
    break;
}

document.getElementById("msgFooter").textContent = frase;

console.log(frase);