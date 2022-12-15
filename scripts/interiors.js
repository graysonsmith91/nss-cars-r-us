import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

export const InteriorOptions = () => {
    let html = `<select id="interiors">`
    html += `<option value="0">Select interior...</option>`

    const listItems = interiors.map(interior => {
        return `<option value="${interior.id}">${interior.seatType}</option>`
    })

    html += listItems.join("")
    html += "</select>"
    return html
}


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            const chosenOption = changeEvent.target.value
            for (const interior of interiors) {
                if (interior.id === parseInt(chosenOption)) {
                    const chosenInterior = interior.id
                    setInterior(chosenInterior)
                    // window.alert(`You have selected ${interior.seatType}`)
                }
            }
        }
    }
)