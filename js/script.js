// memorizzo campo di input
const inputElement = document.querySelector("#input-km");
const ageInputEl = document.querySelector("#age")
const buttonElement = document.querySelector("#invia");



buttonElement.addEventListener('click',
    function() {
        
        document.querySelector("#risposte").innerHTML = "LA TUA DISTANZA E' DI " + inputElement;

        console.log(inputElement.innerHTML);
        console.log(ageInputEl.innerHTML);
        
    }
)