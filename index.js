const cards = [`queen of hearts`, `jacl of clubs`, `ten of diamonds`, `ace of spades`];

console.log(cards.indexOf(`jack of clubs`));


function isOdd(element){
    return (element % 2 === 1);
}

const testArray = [1, 2, 3, 4, 5, 6];
console.log(testArray.find(isOdd));

console.log(testArray.filter(isOdd).join(''))