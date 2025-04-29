let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    noteDiv.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.text}</p>
      <button onclick="deleteNote(${index})">X</button>
    `;

    notesList.appendChild(noteDiv);
  });
}

function addNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const text = document.getElementById("noteText").value.trim();

  if (title === "" || text === "") {
    alert("Please fill in both fields.");
    return;
  }

  const newNote = { title, text };
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));

  document.getElementById("noteTitle").value = "";
  document.getElementById("noteText").value = "";

  displayNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

// نمایش یادداشت‌ها در بارگذاری اولیه
displayNotes();
