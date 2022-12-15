import { PaintOptions } from "./paints.js"
import { InteriorOptions } from "./interiors.js"
import { TechnologyOptions } from "./technologies.js"
import { WheelOptions } from "./wheels.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${PaintOptions()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${InteriorOptions()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${TechnologyOptions()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${WheelOptions()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}