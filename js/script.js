// memorizzo campo di input
const inputElement = document.querySelector("#input-km");
const ageInputEl = document.querySelector("#age")
const buttonElement = document.querySelector("#invia");
const basePrice = inputElement * 0.21;

// trasformo le variabili ottenute in numeri
let kmNumber = Number(inputElement);



buttonElement.addEventListener('click',
    function() {

        

        document.querySelector("#risposte p:first-child").innerHTML = "LA TUA DISTANZA E' DI " + inputElement.value + " km";
        document.querySelector("#risposte p:nth-of-type(2)").innerHTML = "HAI " + ageInputEl.value + " ANNI";
        
        
        console.log(kmNumber);
        console.log(ageInputEl.value);
        // console.log(basePrice.value)
        
    }
    )