// memorizzo campo di input
const inputElement = document.querySelector("#input-km");
const ageInputEl = document.querySelector("#age")
const buttonElement = document.querySelector("#invia");



buttonElement.addEventListener('click',
    function() {

        document.querySelector("#risposte p:first-child").innerHTML = "LA TUA DISTANZA E' DI " + inputElement.value + " km";
        document.querySelector("#risposte p:nth-of-type(2)").innerHTML = "HAI " + ageInputEl.value + " ANNI";
        
        
        console.log(inputElement.value);
        console.log(ageInputEl.value);
        
    }
)