
let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputVeganos = document.getElementById("veganos");
let inputBebem = document.getElementById("bebem");
let inputDuracao = document.getElementById("duracao");

let result = document.getElementById("result");

function calc(){
    console.log("Calculando...");

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let veganos = inputVeganos.value;
    let bebem = inputBebem.value;
    let duracao = inputDuracao.value;

    let mealTotal = mealPP(duracao) * adultos + (mealPP(duracao) / 2 * criancas);
    let sodaTotal = sodaPP(duracao) * adultos + (sodaPP(duracao) / 2 * criancas);
    let beerTotal = beerPP(duracao) * bebem;

    result.innerHTML = `<p>${mealTotal / 1000}Kg de Carne</p>`
    result.innerHTML += `<p>${sodaTotal / 1000}L de Bedidas</p>`
    result.innerHTML += `<p>${Math.ceil(beerTotal / 350)} Latas de Cerveja</p>`
}

function mealPP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function sodaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function beerPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}