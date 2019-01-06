function transform(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        const index = i;
        arr[i] = function() {
            console.log(array[index]);
        };
    }
    return arr;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray);

newArray[3](); // should return 40
newArray[4](); // should return 50

