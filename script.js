const prompts = [
  "They grow old together but forget each other's names.",
  "One confesses too late.",
  "They meet again but one has changed completely.",
  "They almost kiss… but get interrupted.",
  "They pretend not to care, but both do."
];

function generatePrompt() {
  const random = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("output").innerText = random;
}
