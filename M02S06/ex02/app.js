const arguments = process.argv;

const [node, fileName, ...restofArguments] = arguments;

const side = restofArguments[0];

console.log(`Suprafata patratului este ${side ** 2}`);
