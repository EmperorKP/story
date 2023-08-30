//Trial 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address,distanceFromTown,hasNeighbours){
    return (typeof(address)+typeof(distanceFromTown)+typeof(hasNeighbours));
}
//Trial 2:
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily){
    if(typeof(parents)=="string"&&typeof(noOfSiblings)=="number"&&typeof(isNuclearFamily)=="boolean"){
        return true
    }else{
        return false
    }


}
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

//Trial 3:
function doesFriendExist(ageInText, ageInNumber){
    if (isNaN(ageInText)){
        return ageInText
    }else if (isNaN(ageInNumber)){
        return ageInNumber
    }

}
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

//Trial 4:
function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) {
    var remaining= totalNoOfSweets-(sweetsConsumedByKaren+sweetsConsumedInNMeters*metersToTravel)
    return remaining/2
}
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

//Trial 5:
function convertToCelcius( fahrenheit ){
    var celsius= (fahrenheit - 32) *( 5 / 9)
    return celsius
}
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

//Trial 6:
function aDifficultChoice(choice){
    
    switch (choice) {
        case 1:
            return "Take her daughter to a doctor"
        case 2:
            return "Talk to her husband about it"
        case 3:
            return "Counsel her daughter herself"
        case 4:
            return "Lock her daughter in her room"
    }
       
}
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take

//Challenge 1:

//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
function consoleKaren( strategies){
    let completeStrategy = strategies.join(' ')
    return completeStrategy.length
    
}
