// function slugify(title) {
//   return title.toLowerCase().split(" ").join("-")
// }
// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const totalValue = [];
  for (const product of products) {
   
     totalValue.push(product.propName)
    
    
    // return totalValue
    
  }
  return totalValue.push(product.propName)
}
console.log(getAllPropValues(price)); // "arrays-for-begginers"