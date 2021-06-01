const sentence = "hello there from lighthouse labs";
let time = 500
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  },time)
  time += 50;
}
setTimeout(()=> {
  process.stdout.write('\n')
}, 4000)

 