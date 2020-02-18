function driversWithRevenueOver(drivers, revenueArg){
    return drivers.filter(driver => driver.revenue >=revenueArg);
};

function driverNamesWithRevenueOver(drivers, revenueArg){
    const array = driversWithRevenueOver(drivers,revenueArg);
    return array.map(driver => driver.name);
};

function exactMatch(drivers, matcher){
    return drivers.filter(function(driver){
        let matches = false; 
        for (const key in matcher){
            console.log(key); 
            matches = driver[key] === matcher[key];
        }
        return matches; 
    });
};



function exactMatchToList(drivers, matcher){
    // const array = drivers.exactMatch(drivers, matcher); 
    // return array.map(driver => driver.name);
    return exactMatch(drivers, matcher).map(driver => driver.name);
};