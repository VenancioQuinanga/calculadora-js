const buttonZero = document.querySelector("#buttonZero")
const buttonOne = document.querySelector('#buttonOne')
const buttonTwo = document.querySelector("#buttonTwo")
const buttonThree = document.querySelector("#buttonThree")
const buttonFour = document.querySelector("#buttonFour")
const buttonFive = document.querySelector("#buttonFive")
const buttonSix = document.querySelector("#buttonSix")
const buttonSeven = document.querySelector("#buttonSeven")
const buttonEight = document.querySelector("#buttonEight")
const buttonNine = document.querySelector("#buttonNine")

/*The buttons + - =, etc*/
const buttonPlus = document.querySelector("#buttonPlus")
const buttonLess = document.querySelector("#buttonLess")
const buttonDivision = document.querySelector("#buttonDivision")
const buttonMultiplication = document.querySelector("#buttonMultiplication")
const buttonEqual = document.querySelector("#buttonEqual")

/*The special buttons  */
const buttonCE = document.querySelector("#buttonCE")
const buttonC = document.querySelector("#buttonC")
const buttonD = document.querySelector("#buttonD")

/*The button of negation and .*/
const buttonPlusOrLess = document.querySelector('#buttonPlusOrLess')
const buttonV = document.querySelector('#button-v')

/*The the buttons of memory */
const buttonMC = document.querySelector('#buttonMC')
const buttonMR = document.querySelector('#buttonMR')
const buttonMPlus = document.querySelector('#buttonMPlus')
const buttonMLess = document.querySelector('#buttonMLess')
const buttonMSave = document.querySelector('#buttonMSave')

/*The states  */
let stateUp = document.querySelector('#stateup')
stateUp.innerHTML = '0'
let stateDown = document.querySelector('#statedown')
stateDown.innerHTML = '0'
let newState = document.querySelector('#new-state')
newState.innerHTML = '0'

/*The myrelatory */
let lateral = document.querySelector('#lateral')
const history = document.querySelector('#history')
history.innerHTML = 'Histórico'
const memory = document.querySelector('#memory')
memory.innerHTML = 'Memória'

/*The relatory */
const myRelatory = document.querySelector('#myRelatory')
const historyMine = document.querySelector('#historyMine')
const memoryMine = document.createElement('ul')
memoryMine.setAttribute('id','memoryMine')

const nohistory = document.createElement('li')
nohistory.classList = 'nohistory'
nohistory.innerHTML = 'Ainda não há historico'
historyMine.appendChild(nohistory)

let noMemory = document.createElement('li')
noMemory.classList = 'noMemory'
noMemory.innerHTML = 'Ainda não há nada na memória'
memoryMine.appendChild(noMemory)

/*The cleaners buttons */
const cleaner = document.querySelector('#cleaner')
const cleanButton = document.createElement('input')
const cleanButtonMemory = document.createElement('input')

/*The variables that copy up state and result*/
let copyStateUp = ''
let copyResult = ''

/*The variables like result and operation */
let result = '' 
let copyHidden = ''
let copyDown = ''
let operation = ''

/*The event of stateDown */
stateDown.addEventListener('click',(e)=>{
    e.preventDefault()
stateDown.innerHTML = 'ola'
})

/*The event of cleaners buttons*/
cleanButton.addEventListener('click',(e)=>{
e.preventDefault()
cleanhistory()
})

cleanButtonMemory.addEventListener('click',(e)=>{
    e.preventDefault()
    cleanAllMemory()
    })

    /*The event of li history and memory */
    history.addEventListener('click',()=>{
    if(historyMine.innerHTML.length === 0){
        history.classList = 'newStory'
        memory.classList = ''
        nohistory.innerHTML = 'Ainda não há historico'
    }else{
        history.classList = 'newStory'
        memory.classList = ''
        myRelatory.replaceChild(historyMine,memoryMine)
    }
})

memory.addEventListener('click',()=>{
    if(memoryMine.innerHTML.length === 0){
        memory.classList = 'newStory'
        history.classList = ''
        noMemory.innerHTML = 'Ainda não há nada na memória'
    }else{
        memory.classList = 'newStory'
        history.classList = ''
        myRelatory.replaceChild(memoryMine,historyMine)
    }
})

/*The events of numeric buttons */
buttonZero.addEventListener('click',(e)=>{
    e.preventDefault()
    numberValidation(buttonZero)
})

buttonOne.addEventListener('click',(e)=>{
    e.preventDefault()
    numberValidation(buttonOne)

})

buttonTwo.addEventListener('click',(e)=>{
    e.preventDefault()
    numberValidation(buttonTwo)

})

buttonThree.addEventListener('click',(e)=>{
    e.preventDefault()
    numberValidation(buttonThree)

})

buttonFour.addEventListener('click',(e)=>{
    e.preventDefault()
    numberValidation(buttonFour)

})

buttonFive.addEventListener('click',(e)=>{
    e.preventDefault()
    numberValidation(buttonFive)

})

buttonSix.addEventListener('click',(e)=>{
    e.preventDefault()
    numberValidation(buttonSix)

})

buttonSeven.addEventListener('click',(e)=>{
    e.preventDefault()
    numberValidation(buttonSeven)

})

buttonEight.addEventListener('click',(e)=>{
    e.preventDefault()
    numberValidation(buttonEight)

})

buttonNine.addEventListener('click',(e)=>{
    e.preventDefault()
    numberValidation(buttonNine)

})

/*The events of operation basics button */
buttonPlus.addEventListener('click',(e)=>{
    e.preventDefault()
    operationValidation(operation,buttonPlus)
    
})

buttonLess.addEventListener('click',(e)=>{
    e.preventDefault()
    operationValidation(operation,buttonLess)

})

buttonDivision.addEventListener('click',(e)=>{
    e.preventDefault()
    operationValidation(operation,buttonDivision)

})

buttonMultiplication.addEventListener('click',(e)=>{
    e.preventDefault()
    operationValidation(operation,buttonMultiplication)
})

buttonEqual.addEventListener('click',(e)=>{
    e.preventDefault()
    if(operation === buttonPlus.value){
        plusFunction()
    }else if(operation === buttonLess.value){
        lessFunction() 
    }else if(operation === buttonMultiplication.value){
        multiplicationFunction()
    }else if(operation === buttonDivision.value){
        divisionFunction()
    }
   
})

buttonPlusOrLess.addEventListener('click',(e)=>{
    e.preventDefault()
    copyDown = Number(stateDown.innerHTML)
    if(copyDown > 0){
        stateDown.innerHTML = `-${copyDown}`
    }else if(copyDown < 0){
        stateDown.innerHTML = `${copyDown}`
    }
})

buttonV.addEventListener('click',(e)=>{
    e.preventDefault()
        stateDown.innerHTML += '.'
})

buttonD.addEventListener('click',(e)=>{
    e.preventDefault()
    if(stateDown.innerHTML === 0){
        stateUp.innerHTML = 0
        stateDown.innerHTML = 0
        }else{
        let newLength = stateDown.innerHTML
        let lastLength = newLength.length
        lastLength--
        stateDown.innerHTML = newLength.slice(0,lastLength)
        }
})

buttonCE.addEventListener('click',(e)=>{
    e.preventDefault()
    stateDown.innerHTML = 0
})

buttonC.addEventListener('click',(e)=>{
    e.preventDefault()
    result = ''
    stateUp.innerHTML='0'
    newState.innerHTML = '0'
    stateDown.innerHTML = '0'
})

buttonMPlus.addEventListener('click',(e)=>{
    e.preventDefault()
    createMemory()
    buttonMC.id='buttonMCOn'
    buttonMR.id = 'buttonMROn'
})
buttonMLess.addEventListener('click',(e)=>{
    e.preventDefault()
    //There´s some problem with this button function
    let cd = Number(stateDown.innerHTML)
    resultMemory.innerHTML = Number(cd - numberMine)
})
buttonMSave.addEventListener('click',(e)=>{
    e.preventDefault()
    createMemory()
    buttonMC.id='buttonMCOn'
    buttonMR.id = 'buttonMROn'
})

buttonMC.addEventListener('click',(e)=>{
    e.preventDefault()
    cleanAllMemory()
    buttonMC.id='buttonMC'
    buttonMR.id = 'buttonMR'
    cleanButtonMemory.remove()
})


const createCleanButton = ()=>{
    cleanButton.setAttribute('type','button')
    cleanButton.classList = 'cleanButton'
    cleanButton.value = 'limpar'
    cleaner.appendChild(cleanButton)
}

/*The function that create the memory clean button */
const createCleanButtonMemory = ()=>{
    cleanButtonMemory.setAttribute('type','button')
    cleanButtonMemory.classList = 'cleanButton'
    cleanButtonMemory.value = 'limpar'
    cleaner.appendChild(cleanButtonMemory)
}

/*The function that clean the history */
const cleanhistory = ()=>{
nohistory.innerHTML = 'Ainda não há Historico'
historyMine.innerHTML = ''
historyMine.appendChild(nohistory)
cleaner.removeChild(cleanButton)
}

/*The function that clean all memoryy */
const cleanAllMemory = ()=>{
    noMemory.innerHTML = 'Ainda não há nada na memória'
    memoryMine.innerHTML = ''
    memoryMine.appendChild(noMemory)
    cleaner.removeChild(cleanButtonMemory)
}

/*The function that create the history */
const createhistory = ()=>{
if(nohistory.innerHTML.length != 0){
    nohistory.innerHTML = ''
    createCleanButton()
}
let myOperation = document.createElement('li')
myOperation.classList = 'myOperation'
let myCalc = document.createElement('i')
myCalc.innerHTML = copyStateUp
myCalc.classList = 'myCalc'
let resultMine = document.createElement('i')
resultMine.innerHTML = copyResult
resultMine.classList = 'resultMine'
let breakRown = document.createElement('br')

myOperation.appendChild(myCalc)
myOperation.appendChild(breakRown)
myOperation.appendChild(resultMine)

historyMine.appendChild(myOperation)
nohistory.innerHTML = ''
}

/*The memory function */
const createMemory = ()=>{
    /*The hider function*/
    const hider = (v)=>{
    myButtonMC.style.visibility = v
    myButtonMPlus.style.visibility = v
    myButtonMLess.style.visibility = v
    }

    if(noMemory.innerHTML.length != 0){
        noMemory.innerHTML = ''
        createCleanButtonMemory()
    }
    let myMemory = document.createElement('li')
    myMemory.classList = 'myMemory'

    let myButtonMC = document.createElement('input')
    let myButtonMPlus = document.createElement('input')
    let myButtonMLess = document.createElement('input')

    myButtonMC.setAttribute('type','button')
    myButtonMC.setAttribute('id','myButtonMC')
    myButtonMC.setAttribute('value','MC')
    myButtonMC.classList = 'myButtonM'

    myButtonMPlus.setAttribute('type','button')
    myButtonMPlus.setAttribute('id','myButtonMPlus')
    myButtonMPlus.setAttribute('value','M+')
    myButtonMPlus.classList = 'myButtonM'

    myButtonMLess.setAttribute('type','button')
    myButtonMLess.setAttribute('id','myButtonMLess')
    myButtonMLess.setAttribute('value','M-')
    myButtonMLess.classList = 'myButtonM'

    let resultMemory = document.createElement('i')
    resultMemory.innerHTML = Number(stateDown.innerHTML)
    resultMemory.classList = 'resultMemory'
    let breakRown = document.createElement('br')

    myMemory.appendChild(resultMemory)
    myMemory.appendChild(breakRown)
    myMemory.appendChild(breakRown)
    memoryMine.appendChild(myMemory)
    noMemory.innerHTML = ''

    /*The mouseover event  of our memories */
myMemory.addEventListener('mouseover',(e)=>{
    myMemory.appendChild(myButtonMC)
    myMemory.appendChild(myButtonMPlus)
    myMemory.appendChild(myButtonMLess)

    /*The click event of myButtonMPlus*/
    myButtonMPlus.addEventListener('click',(e)=>{
        let cd = Number(stateDown.innerHTML)
        resultMemory.innerHTML = Number(cd + numberMine)
    })

    /*The click event of myButtonMLess*/
    myButtonMLess.addEventListener('click',(e)=>{
        let cd = Number(stateDown.innerHTML)
        resultMemory.innerHTML = Number(cd - numberMine)
    })

/*The click event of myButtonMC*/
    myButtonMC.addEventListener('click',(e)=>{
        if(memoryMine.innerHTML.length === 0){
            noMemory.innerHTML = 'Ainda não há nada na memória'
        }
        e.preventDefault()
        myMemory.remove()
        buttonMC.id='buttonMC'
        buttonMR.id = 'buttonMR'
    })
    let visibility = 'visible'
    hider(visibility)
})

/*The mouseout event  of our memories */
myMemory.addEventListener('mouseout',(e)=>{
    let visibility = 'hidden'
    hider(visibility)
})

}

/*The copyStates function that copy the states*/
const copyStates = ()=>{
     copyStateUp = `${stateUp.innerHTML} ${stateDown.innerHTML} = `
     copyResult = result
}
/*The validation function that validate the numbers*/
let numberMine ;
const numberValidation = (btn)=>{
    if(stateDown.innerHTML === '0'){
        stateDown.innerHTML = ''
        stateDown.innerHTML +=  btn.value
        numberMine = Number(stateDown.innerHTML)
    }else{
        stateDown.innerHTML +=  btn.value
        numberMine = Number(stateDown.innerHTML)
    }
    stateUp.style.visibility = 'hidden'
}

stateUp.style.visibility = 'hidden'
/*The validation function that validate the operation buttons*/
const operationValidation = (op,btn)=>{
    operation = btn.value
    if(stateUp.innerHTML === '0'){
        stateUp.innerHTML=''
        newState.innerHTML = ''
        stateUp.innerHTML += `${stateDown.innerHTML}  ${btn.value}`
        newState.innerHTML += stateDown.innerHTML 
        stateDown.innerHTML='0'
        }else{
            stateUp.innerHTML += `${stateDown.innerHTML}  ${btn.value}`
            newState.innerHTML += stateDown.innerHTML 
            stateDown.innerHTML='0'
        }
        stateUp.style.visibility = ''
}

/*The basic functions of operations*/
const plusFunction = ()=>{
    copyHidden = Number(newState.innerHTML)
    copyDown = Number(stateDown.innerHTML)
    result = Number(copyHidden + copyDown)
    copyStates()
    createhistory()
    stateDown.innerHTML = result
    stateUp.innerHTML = '0'
    newState.innerHTML = '0'
}

const lessFunction = ()=>{
    copyHidden = Number(newState.innerHTML)
    copyDown = Number(stateDown.innerHTML)
    result = Number(copyHidden - copyDown)
    copyStates()
    createhistory()
    stateDown.innerHTML = result
    stateUp.innerHTML = '0'
    newState.innerHTML = '0'
}

const multiplicationFunction = ()=>{
    copyHidden = Number(newState.innerHTML)
    copyDown = Number(stateDown.innerHTML)
    result = Number(copyHidden * copyDown)
    copyStates()
    createhistory()
    stateDown.innerHTML = result
    stateUp.innerHTML = '0'
    newState.innerHTML = '0'
}

const divisionFunction = ()=>{
    copyHidden = Number(newState.innerHTML)
    copyDown = Number(stateDown.innerHTML)
    result = Number(copyHidden / copyDown)
    copyStates()
    createhistory()
    stateDown.innerHTML = result
    stateUp.innerHTML = '0'
    newState.innerHTML = '0'
}
