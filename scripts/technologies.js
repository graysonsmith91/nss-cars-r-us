import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

export const TechnologyOptions = () => {
    let html = `<select id="technologies">`
    html += `<option value="0">Select tech...</option>`

    const listItems = technologies.map(technology => {
        return `<option value="${technology.id}">${technology.packageType}</option>`
    })

    html += listItems.join("")
    html += "</select>"
    return html
}


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technologies") {
            const chosenOption = changeEvent.target.value
            for (const technology of technologies) {
                if (technology.id === parseInt(chosenOption)) {
                    const chosenTech = technology.id
                    setTechnology(chosenTech)
                    // window.alert(`You have selected ${technology.packageType}`)
                }
            }
        }
    }
)