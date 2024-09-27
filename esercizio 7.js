function numerator(valore) {
for (let i = 1; i < valore +1; i++) {
if (i % 15 == 0) {
    console.log(`Javasith`);
}else if(i%5 ==0) {
console.log(`sith`);
} else if(i%3 ==0){
    console.log(`Java the Hut`);
}else {
    console.log(i);
}
}
}

numerator(100)