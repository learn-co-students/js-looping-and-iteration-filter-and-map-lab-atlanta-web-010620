function driversWithRevenueOver(drivers, revenue) {
    const revFilter = drivers.filter(driver => driver.revenue > revenue);
    return revFilter;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const driverFilter = driversWithRevenueOver(drivers, revenue);
    const driverNames = driverFilter.map(function (driver) {
        return driver.name;
    });

    return driverNames;
}

function exactMatch(drivers, driveObject) {
    let dKey = Object.keys(driveObject)[0]
    const driverFilter = drivers.filter(driver => driver[dKey] === driveObject[dKey]);
    return driverFilter;
}

function exactMatchToList(drivers, driveObject) {
    let dKey = Object.keys(driveObject)[0]
    const driverFilter = drivers.filter(driver => driver[dKey] === driveObject[dKey]);
    const driveName = driverFilter.map(function (driver) {
        return driver.name;
    });

    return driveName;
}