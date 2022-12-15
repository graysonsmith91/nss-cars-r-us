const database = {
    paints: [
        { id: 1, color: "Silver", price: 250 },
        { id: 2, color: "Midnight Blue", price: 450 },
        { id: 3, color: "Firebrick Red", price: 500 },
        { id: 4, color: "Spring Green", price: 375 }
    ],
    interiors: [
        { id: 1, seatType: "Beige Fabric", price: 750 },
        { id: 2, seatType: "Charcoal Fabric", price: 775 },
        { id: 3, seatType: "White Leather", price: 2700 },
        { id: 4, seatType: "Black Leather", price: 2000 }
    ],
    technologies: [
        { id: 1, packageType: "Basic Package", price: 1000 },
        { id: 2, packageType: "Navigation Package", price: 1775 },
        { id: 3, packageType: "Visibility Package", price: 2400 },
        { id: 4, packageType: "Ultra Package", price: 4500 }
    ],
    wheels: [
        { id: 1, wheelType: "17-inch Pair Radial", price: 500 },
        { id: 2, wheelType: "17-inch Pair Radial Black", price: 600 },
        { id: 3, wheelType: "18-inch Pair Spoke Silver", price: 700 },
        { id: 4, wheelType: "18-inch Pair Spoke Black", price: 800 }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 2,
            technologyId: 3,
            wheelId: 1,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {},
}

// also set up get functions for each so that other modules can import the data and convert it to HTML.

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

// Write set functions that set state of each

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

// Write function to take temporary choices currently being stored in the orderBuilder state object and make them permanent

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}