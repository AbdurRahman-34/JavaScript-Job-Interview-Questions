// Know performance of a task

const startTime = performance.now();
for(let i = 0; i < 50; i++){
    console.log(i)
}
const endTime = performance.now();
console.log(`Loop time, ${endTime} milliseconds to finish`)