const letters = [1,2,3,4,5,6,7,8,9,10];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element);
}

letters.forEach(item => console.log("for each", item))