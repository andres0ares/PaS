/* Passivo agressivo Validador de Senha
By Andre Soares - @andresoares28 */

let short = [
    "Certo, cadê o resto?",
    "É só isso mesmo?",  
    "Só falta digitar uma senha de verdade.",
    "Vamos, eu acredito em você.",
    "Não consegue."
];

let medium = [
    "<h1>Você ao menos sabe o que é uma senha?</h1>", 
    "Só pode ser uma brincadeira.",
    "Sério?",
    "Depois é hackeado e não sabe o porquê.",
    "Posso chamar meu sobrinho para te ajudar?",
    "Piorou.",
    "Errou feio, errou rude.",
    "Horrível, horrível. Me faz Mal.",
];

let long = [
    "Não acho que consiga lembrar disso.",
    "Você me surpreendeu, consegui uma senhar pior.",
    "Por que não otorrinolaringologista?",
    "Vai continuar?",
    "Eu acreditei em você.",
    "Péssimo."
];

let extraLong = [
    "Por que continuar?",
    "Acho que é humanamente impossível lembar disso.",
    "Por que inistir no erro.",
    "Errar é humano, você é a pessoa mais humana que esteve aqui."
];

output = document.getElementsByClassName("output");
console.log(output);

document.querySelector("#senha").addEventListener("keyup", teste);

function teste() {
    content = document.querySelector("#senha").value;
    console.log(content);
    clicked(content.length);
}

function ranNumb(times){
    return Math.floor(Math.random() * times);
}

function clicked(valueLeng) {

    console.log(valueLeng);

    if(valueLeng == 0){
        output[0].innerHTML = "Pode digitar sua senha. Não se preocupe, eu vou te ajudar.";
    }
    else if(valueLeng > 0 && valueLeng <= 4){        
        output[0].innerHTML = short[ranNumb(5)];
    }
    else if(valueLeng > 4 && valueLeng <= 10){        
        output[0].innerHTML = medium[ranNumb(8)];
    }
    else if(valueLeng > 10 && valueLeng <= 18){        
        output[0].innerHTML = long[ranNumb(6)];
    }
    else if(valueLeng > 18 && valueLeng <= 25){        
        output[0].innerHTML = extraLong[ranNumb(4)];
    }
    else if(valueLeng > 25){        
        output[0].innerHTML = "Isso não é bangunça, pode ir apagando essa senha.";
    }
    
    
}