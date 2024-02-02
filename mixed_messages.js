let firstWords = ['I', 'You', 'He', 'She', 'It', 'We', 'They'];
let secondWords = ['will', 'shall', 'may', 'can', 'must', 'ought to', 'might'];
let thirdWords = ['eat', 'drink', 'sleep', 'run', 'walk', 'talk', 'sing', 'dance', 'play', 'work'];
let lastWord = 'in this life.';

const wordBuilder = (arr1, arr2, arr3, last) => {
    let first = arr1[Math.floor(Math.random() * arr1.length)];
    let second = arr2[Math.floor(Math.random() * arr2.length)];
    let third = arr3[Math.floor(Math.random() * arr3.length)];
    let fourth = last[Math.floor(Math.random() * last.length)];
    return `${first} ${second} ${third} ${fourth}`;
}

console.log(wordBuilder(firstWords, secondWords, thirdWords, lastWord));