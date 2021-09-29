// Code your solution here
function findMatching(arrayOfDrivers, string) {
    return arrayOfDrivers.filter(element => {
        return element.toUpperCase() === string.toUpperCase()
    })
}

function fuzzyMatch(arrayOfDrivers, string) {
    const length = string.length
    return arrayOfDrivers.filter(element => {
        return element.slice(0, length) === string
    })
}

function matchName(driver, string) {
    return driver.filter(element => {
        return element.name.toUpperCase() === string.toUpperCase()
    })
}