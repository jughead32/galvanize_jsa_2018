/*
=======================================================

** Week 6 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/



// 1. Create a function called returnMe object that describes you with your name, city, and jobTitle.


// 2. Create a function called returnMe2 that will the return the same object (not the function itself), with a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }


/*************************************************************************************
*
*  NO SOLUTIONS WRITTEN FOR ANYTHING BELOW THIS LINE.
*
***************************************************************************************/

// Use the following Object for questions 3-8:
var invitees = { adults: [{
  name: "Penny",
  table: 10,
  dinnerChoice: ["salad", "beef", "ice cream"]
},
{
  name: "Billy",
  table: 12,
  dinnerChoice: ["soup", "beef", "sorbet"]
},
{
  name: "Lauren",
  table: 3,
  dinnerChoice: ["soup", "chicken", "ice cream"],
  specialConsiderations: { allergies: "melon",
  seating: "Don't sit her next to ex husband at table 8."}
}
],
children: [{
  name: "Junior",
  table: 4,
  allergies: ["nuts"]
},
{ name: "Pablo",
table: 4,
allergies: ["gluten", "following directions"]
},
{ name: "Ada",
table: 4,
allergies: ["boys"]
}
]
};


// 3. Create a function called pdChoice that will return Penny's dinner choice (this will be the second item in his dinnerChoice array)


// 4. Create a function called ptNum that will return Pablo's table number.


// 5. Create a function called lssc that will return Lauren's seating specialConsiderations.


// 6. Create a function called bdChoice that will return Billy's dessert choice (this will be the third item in his dinnerChoice array)


// 7. Create a function called aAllergies that will return Ada's allergies.


// 8. Create a function called fullDinnerChoice that will return a patron's dinner choice in a sentence. This function requires a single parameter and will expect that the dinnerChoice array will be passed in when it is invoked.
// Desired result: "That diner's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."


// 9. Create an empty object called "jsWorkshop" using Constructor Notation.


// 10. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.


// 11. Get the length of the fourth classmate's name.



// ADVANCED TRACK
// A. Create an empty object called "books".


// B. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" object.

// Final desired result:
    // var books = {
    //              ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             }


// C. Store the author of the first book in a variable "firstBookAuthor".


// D. Get the length of the author the the third book.


// E. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)


// F. Remove the second book from the books object.


// G. Explain, in your own words, the difference between Literal Notation and Constructor Notation.
