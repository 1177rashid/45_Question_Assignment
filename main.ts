//Q1
//Install Node.js,Typscript and VS Code.

//Q2
//Personal Message
let personName: string= "ERIC";
console.log(`hellow ${personName}, would you like to learn some typscript today?`);

//Q3
//Name Cases
//lowercase,UpperCase,

let personName: string = "Rashid"
console.log("lowercase:", personName.toLowerCase());

console.log("uppercase:", personName.toUpperCase());

console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

//Q4
//Famous Quote
let quote: string= "A person who never made a mistake never tired any thing new";
let author: string= "Albert Einstein"
console.log(`${author} once said, "${quote}`);

//Q5
//Famous Quote2
let quote: string= "A person who never made a mistake never tired any thing new";
let famoue_person="Albert Einstein";
let message=`${famoue_person} once said, ${quote}`;
console.log(message);

//Q6
//Stripping Names
let personName: string =`\n\t MUHAMMAD RASHID\t\n`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);

//Q7/Q8
//Number Eight
console.log(2 +6);
console.log(10 -2);
console.log(4 *2);
console.log(64 /8);

//Q9
//Favorite Number
let favoriteNumber: number = 5;
console.log(`My favoriteNumber is ${favoriteNumber}`);

//Q10
//Adding Comments:
//my name is RASHID
//Date 4 April 2024
console.log(`hellow world simple program`);

//Q11
// Names
let members: string[] =['Rashid', 'Akif', 'Faraz', 'Nisar'];
for(let i=0; i<members.length; i++){
 console.log(members[i]);
}

// Q12
// Greetings
let members: string[] =['Rashid', 'Akif', 'Faraz', 'Nisar'];
let message: string="whose is the captain of team today?";
for(let i=0; i<members.length; i++)
{
console.log(message + members[i]);
}

//Q13
//Your Own Array
let transportation : string [] = ["Suzuki Cultus","Unique", "Red Bus", "Chinchi Raksha"];
for(let i=0; i<transportation.length; i++)
{
console.log("I would like to own a " + transportation[i]);}

//Q14
//Guest List
let guest_list: string[] = ["Akif", "Nisar", "Shakeel", "Farnaz"];
for (let i=0; i <guest_list.length; i++) {
console.log(`Dear ${guest_list[i]}\n\nYou are invited for dinner tomorrow.\n\n Thank You.\n`);
} 

//Q15
//Changing Guest List
let guest_list: string[] = ["Akif", "Nisar", "Shakeel", "Faraz"];
let not_coming: string = 'Nisar';
let new_guest: string = 'Saad';
guest_list[1] = new_guest;
for (let i=0; i <guest_list.length; i++){
console.log(`Dear ${guest_list[i]}\n\nYou are invited for dinner tomorrow.\n\n Thank You.\n`);
}
console.log(`${not_coming}, is not coming tomorrow`)

//Q16
//More Guests
let guest_list: string[] = ["Akif", "Shakeel", "Faraz", "Farzana"];
let not_coming: string = 'Nisar';
let new_guest: string = 'Saad';
guest_list[0] = new_guest;
for (let i=0; i <guest_list.length; i++){
console.log(`Dear ${guest_list[i]}\n\nYou are invited for dinner tomorrow.\n\n Thank You.\n`);
}
console.log(`${not_coming}, is not coming tomorrow`)
guest_list.unshift('Javed Maindad');
guest_list.splice(guest_list.length/2, 2, 'Younus Khan');
guest_list.push('Waqar Younus');
for (let i=0; i <guest_list.length; i++){
console.log(`Dear ${guest_list[i]}\n\nYou are invited for dinner tomorrow.\n\n Thank You.\n`);
 }
 console.log('We have found a bigger dinner table so we invited more guests');

//Q17
// Shrinking Guest List
let guest_list: string[] = ["Akif", "Shakeel", "Faraz", "Farzana"];
let not_coming: string = 'Nisar';
let new_guest: string = 'Saad';
guest_list[0] = new_guest;
guest_list.unshift('Javed Maindad');
guest_list.splice(guest_list.length/2, 2, 'Younus Khan');
guest_list.push('Waqar Younus');
console.log('\n\n Unfortunalety we are out of space, so we have space for two guests only.\n\n');
while(guest_list.length>2){
    let removed_guest = guest_list.pop();
    console.log(`sorry,Dear ${removed_guest},You are not invited for dinner tomorrow`);
}
for (let i=0; i <guest_list.length; i++){
console.log(`Dear ${guest_list[i]}\n\nYou are still invited for dinner tomorrow.\n\n Thank You.\n`);
}
guest_list.splice(0,2);
console.log(guest_list);

// Q18
// Seeing the World
// Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// // • Print your array in its original order.
let places : string [] = ['Canada','Saudia Arab','London','Turki','Dubai'];
console.log('original :' + places);
//• Print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
// //• Show that your array is still in its original order by printing it.
console.log('original :' + places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
// //• Show that your array is still in its original order by printing it again.
console.log('copy ' + [...places].sort().reverse());
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log('original ' + places.sort());
// //• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('original ' + places.sort().reverse());
// //• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('copy ' + [...places].sort());
// //• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort((a, b) => b.localeCompare(a));
console.log('Sorted in alphabetical order:', places);

//Q19
//Dinner Guests:
let invitation : string [] = ['Shakeel' , 'Akif']
let count_invitation : number = invitation.length
console.log(`${count_invitation}' people will come to the dinner`);

//Q20
//Mountains list
let mountains : string[] = ['Mount Everest','K2','Nanga Parbat', 'Koyo Zom']
 console.log('list of mountains'); 
 console.log(mountains);

//Q21
//Personal Object
let person : {name: string, fname: string, age: number} = {name: "Rashid", fname: "male", age: 43}
console.log(person)

//Q22
//Intentional Error:
const days : string [] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log(days[7]);
console.log(days[6]);

//Q23

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru');

console.log("Is car != 'Suzuki Alto'? I predict True.")
console.log(car != 'Suzuki Alto');

console.log("Is car == 'subaru'? I predict False.")
console.log(car == 'subaru');

console.log("Is car == 'Subaru'? I predict True.")
console.log(car == 'Subaru');

console.log("Is car == 'SABARU'? I predict True.")
console.log(car == 'SABARU');

console.log("Is car.length != 10? I predict True.")
console.log(car.length != 10);

console.log("Is 3 >= 2 ? I predict False")
console.log(3 >= 2);

console.log("Is 3 <= 2 ? I predict False")
console.log(3 <= 2);


console.log("Is 72 >= 83 ? I predict False")
console.log(72 >= 83);

console.log("Is car.length ==3 ? I predict False.")
console.log(car.length == 3);*/

// Q24
// More Conditional Tests: 
let name_1 : string = 'Syed';
let name_2 : string = 'Rashid';
let name_3 : string = 'Syed Muhammad Rashid';

if (name_1 == name_3){
    console.log('names are equal')
}
else {
    console.log('names are not equal')

}
if (name_1 != name_2){
    console.log('names are equal')
}
else {
    console.log('names are not equal')

}
//• Tests using the lower case function
if (name_1 != name_3){
    console.log('names are equal')
}
else {
    console.log('names are not equal')

}
// //• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age_1 : number = 18
let age_2 : number = 22
if ( age_1 == 18){
    console.log('eligible for vote')
}
if ( age_1 != 22){
    console.log('eligible for vote in older category')
}

if( age_1 <= age_2){       //less than
    console.log('younger')
}
if( age_2 >= age_1){        //greater than
    console.log('older')
}
//  //• Tests using "and" and "or" operators

if (age_1 == 18 && age_2 ==22){
    console.log('person is eligible for vote')
}

if (age_1 == 18 || age_2 !=22){
    console.log('person is not eligible for vote')
}
//• Test whether an item is in a array
 let country : string [] = ['Pakistan', 'India', 'China', 'Japan']
 if (country.includes('Pakistan')){
    console.log('Pakistan is in country list')
}

if (!country.includes('America')){
    console.log('America is not include in an array')
}

//Q25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alien_color : string = "green";
if(alien_color == "green"){
 console.log("that the player just earned 5 points.");
}
// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alien_color = "red"
if(alien_color == "green"){
    console.log("that the player just earned 5 points.");
   } 

//Q26
// Alien Colors #2:
let alien_color : string = "green";
if(alien_color == "green"){
 console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
alien_color = "red";
if(alien_color == "green"){
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}

//Q27
// Alien Colors #3:
let alien_color : string = "red";
if(alien_color == "green"){
console.log("the player just earned 5 points.");
}
else if(alien_color == "yellow"){
    console.log("the player just earned 10 points.");
    }
else{
    console.log("the player just earned 15 points.");
    }

//Q28
Stages of Life:
let age : number = 18;
if(age < 2){
    console.log("you are a baby");
} else if(age < 4){
    console.log("you are a toddler");
} 
else if(age < 13){
    console.log("you are a kid");
} 
else if(age < 20){
    console.log("you are a teenager");
} else if(age < 65){
    console.log("you are a adult");
} 
else{
    console.log("you are a older");
}

//Q29
// Favorite Fruit:
let favourite_fruits : string [] = ["apple", "orange","grapes","banana","painapple"]
if(favourite_fruits.includes("apple")){
console.log("apple");
}
if(favourite_fruits.includes("orange")){
    console.log("orange");
}
    if(favourite_fruits.includes("grapes")){
        console.log("grapes");
}
if(favourite_fruits.includes("banana")){
    console.log("you really like banana");
}
if(favourite_fruits.includes("painapple")){
    console.log("you really like painapple");
}

//Q30
// Hello HR&Admin:
let users : string [] = ["HR&Admin","Ammar","Wasif","Fahad"]
for(let user of users){
if(user === "HR&Admin"){
console.log("Hello HR&Admin,would you like to see a status report?")
} else { 
console.log(`hello ${user},Thank you for logging in again`)
}
}

//Q31
// No Users:
let users : string [] = ["HR&Admin","Ammar","Wasif","Fahad"]
if (users.length === 0) {
console.log("we need to find some users! ")
} 
// //• Remove all of the usernames from your array, and make sure the correct message is printed.
else {
    users = [];
    console.log("All users have been removed " + users.length)
}

//Q32
// Checking Usernames:
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users : string [] = ["HR&Admin","Ammar","Wasif","Fahad","Mazhar"]
let new_users : string [] = ["Abid","Imran","Ammar","Wasif"]
new_users.forEach((newUser) => {
    if(current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())
    ) { console.log(`${newUser} will need to enter a new username`)
} else{
    console.log(`${newUser} is available`)
}})

//Q33
// Ordinal Numbers:
let myNumbers = [1,2,3,4,5,6,7,8,9];
for loop
for(let i = 0; i< myNumbers.length; i ++){
// now we use conditions
    if (myNumbers[i] == 1){
        console.log(`${myNumbers[i]}st`);
    } else if (myNumbers[i] == 2){
        console.log(`${myNumbers[i]}nd`);
    } else if (myNumbers[i] == 3){
        console.log(`${myNumbers[i]}rd`);
    } else if (myNumbers[i] >= 4 && myNumbers[i] <= 9){
        console.log(`${myNumbers[i]}th`);
    } 
}

//Q34
// Pizzas: 
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let myPizza = ["chicken pizza","pepperoni pizza","vegeterian pizza"]
// print only names of pizza
for(let i = 0; i< myPizza.length; i ++){
    console.log(myPizza[i])
}
// // printing names and message
for(let i = 0; i< myPizza.length; i ++){
    console.log(`i like to eat ${myPizza[i]}`)
}
console.log("\n I really love pizza!")

//Q35
// Animals: 
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
//and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal,
//such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!

let animals : string [] = ["sheep", "horse","cow"]
for (let animal of animals){
    console.log(animal)
}
console.log("\n");
for (let animal of animals){
    console.log(`A ${animal} has a tail.`)
}
console.log("\n All of these are great pet!");

//Q36
// T-Shirt:
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
//The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size : string, message : string){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
}
make_shirt("medium", "Code is life");

//Q37
// Large Shirts:
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.
function make_shirt(size : string = "large", message : string = "I love Typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
    }
    make_shirt();
    make_shirt("medium");
    make_shirt("small");
    
//Q38
// Cities: 
//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
// /Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string = "Pakistan"): void{
    console.log(`${city} is in ${country}`)
    }
    describe_city("Karachi") //default sentence
    describe_city("France","Europe")
    describe_city("Lahore","Pakistan")
    describe_city("Dubai", "Uae")
    
//Q39
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string): string {
    return`${city},${country}`
    }
    let city1 = city_country("lahore" , "pakistan")
    let city2 = city_country("dubai" , "UAE")
    let city3 = city_country("paris" , "france")
    
    console.log(city1)
    console.log(city2)
    console.log(city3)

//40
//Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly.
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.

function make_album(artistName: string, albumtitle: string){
    return{artistName , albumtitle}  
   }
   let album1 = make_album("Ali", "Rang e muhabbat");
   let album2 = make_album("Bano Qudsia", "Tauba-shikan");
   let album3 = make_album("Hajra Masroor", "Faasla");
   
   console.log(album1);
   console.log(album2);
   console.log(album3); 
   // Number of Trackes
   function make_album2(artistName: string, albumtitle: string, numberOfTrackes: number){
       return{artistName , albumtitle, numberOfTrackes}
   }
   let album4 = make_album2("Ali", "Rang e muhabbat",22);
   let album5 = make_album2("Bano Qudsia", "Tauba-shikan",55);
   let album6 = make_album2("Hajra Masroor", "Faasla",60);
   console.log(album4);
   console.log(album5);
   console.log(album6);
   
//Q41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
let magicians: string[] = ["Akif","Asim","Naeem","Ahmed"];
function show_magicians(magicians: string[]): void {
magicians.forEach(magicians =>
    console.log(magicians));
}
call the function to show the magicians
show_magicians(magicians);

//Q42
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the
// Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians1: string[] = ["Akif","Asim","Naeem","Ahmed"];
function show_magicians(magicians1: string[]): void {
magicians1.forEach(magicians1 =>
    console.log(magicians1));
}
function make_great(magicians1: string[]): void{
    for (let i=0; i < magicians1.length; i++){
        magicians1[i] = "the Great " + magicians1[i];
    }
}
// call show_great() to modify the array of magicians
// make_great(magicians1);
// call show_magicians() to see that the list has been modified 
// show_magicians(magicians1);

//Q43
//Unchanged Magicians: Start with your work from Exercise 40. 
//Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and
//one array with the Great added to each magician’s name.
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => "the Great " + magician);
}

// Define an array of magician's names
let magicians: string[] = ["Akif","Asim","Naeem","Ahmed"];

// Call make_great() with a copy of the array of magicians4' names
let great_magicians: string[] = make_great([...magicians]); // Creating a copy using spread operator

// Call show_magicians4() to show the original array of magician's names
console.log("Original magicians:");
show_magicians(magicians);

// Call show_magicians4() to show the array with "the Great" added to each magician's name
console.log("\nGreat magicians:");
show_magicians(great_magicians);

//Q44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.

// Call the function with different number of arguments each time
orderSandwich('Ham', 'Cheese', 'Lettuce');
orderSandwich('Sause', 'Tomato', 'Mayonnaise', 'Pickles');
orderSandwich('Peanut Butter', 'Jelly');

// Qno.45
//Cars: Write a function that stores information about a car in a Object.
//The function should always receive a manufacturer and a model name.
//It should then accept an arbitrary number of keyword arguments.
//Call the function with the required information and two other name-value pairs,
//such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.
interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; // Allow any additional properties
}
function carInfo(manufacturer: string, modelName: string, options: Partial<Car>): Car {
    return {
        manufacturer: manufacturer,
        modelName: modelName,
        ...options
    };
}
//Call the function with required information and additional name-value pairs
const car = carInfo('Suzuki', 'Alto', { gray: 'blue', year: 2023 });
//Print the returned object
console.log(car);









