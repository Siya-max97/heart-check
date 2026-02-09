const output = document.getElementById("output");
const replayBtn = document.getElementById("replay");

const name = "Sthandwa Sami"; // Replace with your name

const lines = [
  "Running a quick heart check...\n",
  "\n",
  "Status: slightly unstable\n",
  "Reason: missing you\n",
  "\n",
  "Applying update...\n",
  "\n",
  "Heart check complete...\n",
  "Status: slightly glitchy \n",
  "\n",
  "Reason: you're not here with me \n",
  "Conclusion:\n",
  `better with you ${name}💙.\n`
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex >= lines.length) {
    // Typing complete → show replay button
    replayBtn.style.display = "inline-block";
    return;
  }

  const currentLine = lines[lineIndex];

  if (charIndex < currentLine.length) {
    output.textContent += currentLine.charAt(charIndex);
    charIndex++;

    // Auto-scroll page to bottom
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

    setTimeout(typeLine, 40);
  } else {
    lineIndex++;
    charIndex = 0;
    setTimeout(typeLine, 400);
  }
}

function resetAndType() {
  output.textContent = "";
  lineIndex = 0;
  charIndex = 0;
  replayBtn.style.display = "none"; // hide until done
  window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  typeLine();
}

// Initial typing
typeLine();

// Replay button
replayBtn.addEventListener("click", resetAndType);