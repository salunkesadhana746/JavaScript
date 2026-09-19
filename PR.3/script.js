// create a note making app, where user can create upto 150 characters note, user can also add more than one notes, and display all notes in grid view and boxes color should be different for each notes and text color should be light or dark as per box bg color and date and time of adding note.

const input_note = document.getElementById("input-note"); //get input-note by id
const input_btn = document.getElementById("input-btn"); //get input-btn by id

const notes_box = document.getElementById("notes-box"); // get notes-box by id

const handleCreateNote = () => {
  // create function
  const value = input_note.value;

  if (value == "") {
    alert("Enter Your Notes...");
    return;
  }

  //150 characters note only
  if (value.length > 150) {
    alert("Notes can not be more than 150 characters !");
    return;
  }

  const color = "#" + Math.floor(Math.random() * 16581375).toString(16);

  const div = document.createElement("div");
  div.className = "px-3 py-3 rounded box";
  div.style.backgroundColor = color;

  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  const back_color = (r * 299 + g * 587 + b * 114) / 1000;

  if (back_color > 150) {
    div.style.color = "black";
  } else {
    div.style.color = "white";
  }

  div.textContent = value;

  notes_box.appendChild(div);

  const date = new Date();

  const dateTime = document.createElement("div");
  dateTime.className = "date";

  dateTime.textContent = date.toLocaleString("");

  div.appendChild(dateTime);

  input_note.value = "";
};

input_btn.addEventListener("click", handleCreateNote);
