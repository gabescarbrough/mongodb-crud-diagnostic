// Assessment: An Introduction to MongoDB

// do not change anything between here and question 1

var db = new Mongo().getDB('westeros');
db.dropDatabase();

// Question 1
//
// Create a collection called houses, and insert the following houses,
// with name and motto fields:
//
// House Arryn, motto 'As High as Honor'
// House Stark, motto 'Winter is Coming'
// House Targaryen, motto 'Fire and Blood'

// your code begins here

db.houses.insert({
  house: "Arryn",
  motto: "As High As Honor",
});

db.houses.insert({
  house: "Stark",
  motto: "Winter is Coming",
});

db.houses.insert({
  house: "Targaryen",
  motto: "Fire and Blood",
});

// your code ends here


// Question 2
//
// Using update at least once and $push at least once, add the following people
// to the respective houses in a "members" array.
//
// Ned Stark
// Arya Stark
// Sansa Stark
// Viserys Targaryen
// Daenerys Targaryen
// Jon Arryn

// your code begins here

db.houses.update(
  {house: "Stark"},
    {
      $set:
        {members: ["Ned Stark", "Arya Stark", "Sansa Stark"]}
    }
);

db.houses.update(
  {house: "Targaryen"},
    {
      $set:
        {members: ["Viserys Targaryen"]}
    }
);

db.houses.update(
  {house: "Targaryen"},
    {
      $push:
        {members: "Daenerys Targaryen"}
    }
);

db.houses.update(
  {house: "Arryn"},
    {
      $set:
        {members: ["Jon Arryn"]}
    }
);


// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

db.houses.update(
  {house: "Arryn" },
  {
    $unset: {motto: 1 }
  }
);

// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here

db.houses.remove(
  {house: "Stark"}
);

// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
