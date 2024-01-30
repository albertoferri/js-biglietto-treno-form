// memorizzo campo di input
const userName = document.querySelector("#name-user");
const inputKmElement = document.querySelector("#input-km");
const ageInputEl = document.querySelector("#age")
const buttonElement = document.querySelector("#invia");

buttonElement.addEventListener('click',
function() {
    
    // trasformo le variabili ottenute in numeri
    let km = inputKmElement.value;
    let ageV = ageInputEl.value;
    let basePrice = inputKmElement.value * 0.21;
    
    // arrotondo i risultati lasciando due decimali
    let priceYoung = (basePrice- (basePrice * 0.2)).toFixed(2)
    let priceSenior = (basePrice- (basePrice * 0.4)).toFixed(2)


    // document.querySelector("#risposte p:first-child").innerHTML = "LA TUA DISTANZA E' DI " + km + " km";
    // document.querySelector("#risposte p:nth-of-type(2)").innerHTML = "HAI " + ageV + " ANNI";
    // document.querySelector("#risposte p:last-child").innerHTML = "LA TARIFFA BASE è DI €" + basePrice;
    
    // applico sconto in base all'età
    if (ageV < 18){
        document.querySelector(".biglietto p:last-child #pricePrint").innerText = "€ " + priceYoung;
        document.querySelector('#offerta').innerText = 'Biglietto Young';

    } else if (ageV > 64){
        document.querySelector(".biglietto p:last-child #pricePrint").innerText = "€ " + priceSenior;
        document.querySelector("#offerta").innerText = 'Biglietto Senior';

    } else{
        document.querySelector('#pricePrint').innerText = "€ " + basePrice;
        document.querySelector('#offerta').innerText = 'Biglietto Standard';
    }


    document.getElementById("yourTicket").innerHTML = "IL TUO BIGLIETTO";
    document.querySelector('#nome').innerText = userName.value;
    document.querySelector('#carrozza').innerText = '5';
    document.querySelector('#codice').innerText = '92911';
    
    

    
        console.log("LA TUA DISTANZA E' DI " + km + " km");
        console.log("HAI " + ageV + " ANNI");
        console.log("LA TARIFFA BASE è DI €" + basePrice)
        console.log("LA TARIFFA YOUNG è DI €" + priceYoung)
        console.log("LA TARIFFA SENIOR è DI €" + priceSenior)
        
    }
    )