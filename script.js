const dogSelected = document.querySelector("#selected-dog")
const incomeInput = document.querySelector("#input-income")
const freetimeInput = document.querySelector("#input-freetime")
const displayResult = document.querySelector("#display-result")

dogSelected.addEventListener('change', handleCalculation)
incomeInput.addEventListener('change', handleCalculation)
freetimeInput.addEventListener('change', handleCalculation)



function handleCalculation(e) {
    const selectedDog = dogSelected.options[dogSelected.selectedIndex].value;
    const income = incomeInput.value
    const freetime = freetimeInput.value

    if (freetime <= 4) {
        displayResult.innerHTML = "You should have NO dogs. Try having more free time or income."
        return
    }
    if (selectedDog == "corgi") {
        if (selectedDog == "corgi" && income < 25000) {
            displayResult.innerHTML = "You're gonna need more income if you want to have a corgi"
        } else if (selectedDog == "corgi" && income >= 25000 && income <= 50000){
            displayResult.innerHTML = "You could have: 1 Corgi"
        } else if (selectedDog == "corgi" && income >= 50000 && income <= 80000) {
            displayResult.innerHTML = "You could have: 2 Corgis"
        } else if (selectedDog == "corgi" && income >= 80000 && income < 120000) {
            displayResult.innerHTML = "You could have: 3 Corgis"
        } else {
            displayResult.innerHTML = "You could have a max of 4 Corgis"
            return
        }
    }
    

    if (selectedDog == "golden-retriever") {
        if (selectedDog == "golden-retriever" && income < 25000) {
            displayResult.innerHTML = "You're gonna need more income if you want to have a golden retriever"
        } else if (selectedDog == "golden-retriever" && income >= 25000 && income <= 50000){
            displayResult.innerHTML = "You could have: 1 golden retriever"
        } else if (selectedDog == "golden-retriever" && income >= 50000 && income <= 80000) {
            displayResult.innerHTML = "You could have: 2 golden retrievers"
        } else if (selectedDog == "golden-retriever" && income >= 80000 && income <= 120000) {
            displayResult.innerHTML = "You could have: 3 golden retrievers"
        } else {
            displayResult.innerHTML = "You could have a max of 3 golden retriever"
            return
        }
    }
    
    if (selectedDog == "yorki") {
        if (selectedDog == "yorki" && income < 25000) {
            displayResult.innerHTML = "You're gonna need more income if you want to have a yorki"
        } else if (selectedDog == "yorki" && income >= 25000 && income <= 50000){
            displayResult.innerHTML = "You could have: 1 yorki"
        } else if (selectedDog == "yorki" && income >= 50000 && income <= 80000) {
            displayResult.innerHTML = "You could have: 2 yorkis"
        } else if (selectedDog == "yorki" && income >= 80000 && income <= 120000) {
            displayResult.innerHTML = "You could have: 3 yorkis"
        } else {
            displayResult.innerHTML = "You could have a max of 6 yorkis"
            return
        }
    }


}