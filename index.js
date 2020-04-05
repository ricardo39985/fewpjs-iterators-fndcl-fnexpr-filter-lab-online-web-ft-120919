// Code your solution here
function findMatching(drivers, string) {
    let results = drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
    return results
}
function fuzzyMatch(drivers, string) {
    let results = drivers.filter(driver => driver[0].toUpperCase()=== string[0].toUpperCase())
    return results
}

function matchName(drivers, str) {
    let results = drivers.filter(driver => driver.name === str)
    return results
}