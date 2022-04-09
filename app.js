const formContainer = document.querySelector(".form-container");
const stickyNote = document.querySelector(".sticky-note-container");
const checkIcon = document.querySelector(".check-icon");
const xIcon = document.querySelector(".x-icon");

let i = 0;

xIcon.addEventListener("click", function () {
  typeNote();
});

checkIcon.addEventListener("click", function () {
  createNote();
});

function typeNote() {
  if (formContainer.style.display == "none") {
    formContainer.style.display = "block";
  } else {
    formContainer.style.display = "none";
  }
}

function createNote() {
  const note = document.createElement("div");
  const details = document.createElement("h3");
  let noteText = document.getElementById("note-text").value;

  note.classList.add("noteEl");
  details.classList.add("details");

  details.innerHTML = noteText;
  note.appendChild(details);

  stickyNote.insertAdjacentElement("beforeend", note);

  note.style.margin = margin();
  note.style.transform = rotate();
  note.style.background = color();
}

document.querySelector("#note-text").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const text = document.querySelector("#note-text");
    createNote(text.value);

    text.value = "";
  }
});

function margin() {
  let random_margin = ["1px", "-5px", "5px", "10px", "15px", "20px"];
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
  let random_rotate = [
    "rotate(4deg)",
    "rotate(-8deg)",
    "rotate(-4deg)",
    "rotate(8deg)",
    "rotate(10deg)",
    "rotate(-10deg)",
  ];

  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
  let random_color = [
    "#bc5cbd",
    "#d8cc22",
    "#506d9a",
    "#71ed7a",
    "#e195a5",
    "#f96e00",
    "#e165a4",
    "#618849",
  ];

  if (i > random_color.length - 1) {
    i = 0;
  }

  return random_color[i++];
}
