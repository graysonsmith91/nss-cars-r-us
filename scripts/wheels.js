import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

export const WheelOptions = () => {
    let html = `<select id="wheels">`
    html += `<option value="0">Select wheels...</option>`

    const listItems = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.wheelType}</option>`
    })

    html += listItems.join("")
    html += "</select>"
    return html
}


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value
            for (const wheel of wheels) {
                if (wheel.id === parseInt(chosenOption)) {
                    const chosenWheel = wheel.id
                    setWheels(chosenWheel)
                    // window.alert(`You have selected ${wheel.wheelType}`)
                }
            }
        }
    }
)