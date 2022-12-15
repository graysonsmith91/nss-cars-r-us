import { getPaints, setPaint } from "./database.js";

// ADD setPaint function to import above

const paints = getPaints()

export const PaintOptions = () => {
    let html = `<select id="paints">`
    html += `<option value="0">Select paint color...</option>`

    const listItems = paints.map(paint => {
        return `<option value="${paint.id}">${paint.color}</option>`
    })

    html += listItems.join("")
    html += "</select>"
    return html
}


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paints") {
            const chosenOption = changeEvent.target.value
            for (const paint of paints) {
                if (paint.id === parseInt(chosenOption)) {
                    const chosenPaint = paint.id
                    setPaint(chosenPaint)
                    // window.alert(`You have selected ${paint.color}`)
                }
            }
        }
    }
)