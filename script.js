class Calculator{
    constructor(previousOperandTextButtons, currentOperandTextButtons){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
    }

clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

delete(){

}

appendNumber(number){
    if(number === '.' && this.currentOperand.include('.'))return
    this.currentOperand=this.currentOperand.toString()+number.toString()

}

chooseOperation(operation){
    this.operand=operand
    this.previousOperand = this.currentOperandTextButtons
    this.currentOperand = ''

}

compute(){

}

updateDisplay(){
    this.currentOperandTextElement.innerText=this.currentOperand
    this.previousOperandTextElement.innerText=this.previousOperand
}
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator= new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListner('Click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button =>{
    button.addEventListner('Click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})