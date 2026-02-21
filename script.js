const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the math book look sad? Because it had too many probles.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why was computer cold? It left its widows open.",
  "Why did the scarecrow win an award? Because he was outstanding in his field",
];

const btn = document.getElementById("btn");
const jokesP = document.getElementById("jokes");

btn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokesP.innerText = jokes[randomIndex];
  jokesP.style.color = "#003049";
  jokesP.style.fontWeight = "bold";
  jokesP.style.backgroundColor = "#d6eadf";
  document.body.style.backgroundColor = "#eff1ed";
});
jokesP.addEventListener("click", function () {
  navigator.clipboard.writeText(this.innerText).then(() => {
    const originalText = this.innerText;
    this.innerText = "Copied!";
    setTimeout(() => {
      this.innerText = originalText;
    }, 1000);
  });
});
