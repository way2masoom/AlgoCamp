// Used of Nested If Else

let isUserPremium = true;
let isUserDiscovery = false;
let isUserAcorn = true;
let isUserSport = false;

console.log("-----Welcome to Hostar video------\n");
if (isUserPremium) {
    if (isUserAcorn && isUserDiscovery) {
        console.log("Enjoy All your Premium and Acorn & Discovery Content on Hostar");
    } else if (isUserAcorn) {
        console.log("Enjoy All your Premium and Acorn Content on Hostar");
    } if (isUserDiscovery) {
        console.log("Enjoy All your Premium and Discovery Content on Hostar");
    }
    else {
        console.log("Enjoy your Premium Content on Hostar");
    }

} else if (isUserSport) {
    console.log("Enjoy your Sports Content on Hostar");
} else {
    console.log("Please buy the Membership to enjoy the content");
}

console.log("\n-----Thank you for visiting HOSTAR ------");