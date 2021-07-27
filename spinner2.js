let timer = 100;
const spinArray = ['|', '/', '-', '\\']
for(let i = 0; i < spinArray.length; i ++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinArray[i] + '   ');
  }, timer);
  timer += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, timer + 200);