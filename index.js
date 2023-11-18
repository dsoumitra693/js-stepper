let backBtn = document.querySelector('#back')
let nextBtn = document.querySelector('#next')

class Stepper {
    constructor(...params) {
        this.pointer = 0
        this.params = params
        renderHtml(this.params)
    }

    next() {
        if (this.pointer == this.params[1].length) return

        this.params[1][++this.pointer].completed = true
        renderHtml(this.params)
    }
    back() {
        if (this.pointer == 0) return

        this.params[1][this.pointer--].completed = false
        renderHtml(this.params)
    }
}

const renderHtml = ([selector, steps]) => {
    let selectorRef = document.querySelector(selector)
    selectorRef.innerHTML = ''
    for (let index in steps) {
        let step = { ...steps[index], index }
        let html = stepperHtml(step)

        selectorRef.innerHTML += html
    }
}
const stepperHtml = ({ name, completed, index }) => {
    return (
        `<div class="step center">
            <h4>${completed ? "Done" : ++index}</h4>
            <div class="lable">${name}</div>
        </div>`
    )
}

let stepper = new Stepper(
    '#steps',
    [
        {
            name: 'Select campaign settings',
            completed: true
        },
        {
            name: 'Create an ad group',
            completed: false
        },
        {
            name: 'Create an ad',
            completed: false
        },
    ]
)

backBtn.addEventListener('click', () => stepper.back())
nextBtn.addEventListener('click', () => stepper.next())