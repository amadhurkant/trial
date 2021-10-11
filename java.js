const data = [
  { "german": "Hallo Welt!", "english": "Hello World!" },
  { "german": "Sher Gut", "english": "Very Good" },
  { "german": "Satz - n", "english": "Sentence - n" }
];
data.forEach((node) => {
  const pTagGerman = document.createElement("P");
  pTagGerman.innerHTML = node.german;
  const pTagEnglish = document.createElement("P");
  pTagEnglish.innerHTML = node.english;
  document.querySelector(".content").appendChild(pTagGerman);
  document.querySelector(".content").appendChild(pTagEnglish);
});
