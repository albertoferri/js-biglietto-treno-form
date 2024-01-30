// memorizzo campo di input
const inputElement = document.querySelector("#input-km");
const ageInputEl = document.querySelector("#age")
const buttonElement = document.querySelector("#invia");



buttonElement.addEventListener('click',
    function() {
        console.log(inputElement.innerHTML);
        console.log(ageInputEl.innerHTML);
        
    }
)