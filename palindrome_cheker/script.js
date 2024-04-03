const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
console.log(input.value);

checkBtn.addEventListener("click", () =>{
    if(input.value === ""){
        alert("Please input a value")
        return
    }
    const valueLowerCase = input.value.toLowerCase();
    console.log(valueLowerCase);
    
})