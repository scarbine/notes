// This is the array of objects(notes) that contains all the notes recorded
const notes = [
  {
    id: 1,
    subject: "I learned today",
    date: "5-24-21",
    feeling: "happy",
    timeSpent: 23,
  },
  {
    id: 2,
    subject: "I learned today",
    date: "5-25-21",
    feeling: "mood",
    timeSpent: 23,
  },
];

console.log(notes) ;

const noteAboutToday = {
  id: 3,
  subject: "Learning more ",
  date: "5-26-21",
  feeling: "sad",
  timeSpent: 23,
};
// this is adding the noteAboutToday to the notes array

notes.push(noteAboutToday);

// This logs out the new array

console.log(notes) ;

// This loops thru the notes array and prints out a a list of the notes

for (const note of notes) {
    console.log(`
    Note ${note.id}
    Subject: ${note.subject}
    Date: ${note.date}
    Feeling: ${note.feeling}
    Time Spent: ${note.timeSpent}
    -------------------------------
    `)
}

//adding a function to search for a note

const searchTerm = "mood"

for (const note of notes) {
    if (note.feeling === searchTerm)
    console.log(note)
}

// This function adds the current date to the new note

let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
// This is a function that adds a new note with no id to the array
const moreNewerNote = {
  subject: "Banging head on counter ",
  date: today,
  feeling: "not joy",
  timeSpent: 14,
};

// These 2 functions do the same thing of adding a new id to a note without an id 
// ---------------version 1 --------------------------
// const addNewNote = (arr) => {
//   const lastIndex = arr.length - 1;

//   if (lastIndex === -1) {
//     const newId = 1;
//     moreNewerNote.id = newId;
//     notes.push(moreNewerNote);
//     return;
//   }

//   const currentLastNote = arr[lastIndex];
//   const maxId = currentLastNote.id;
//   const newId = maxId + 1;
//   moreNewerNote.id = newId;
//   notes.push(moreNewerNote);
//   return;
// };

// addNewNote(notes)
// console.log(notes);

// ---------------version a little cleaner but not much --------
const addNewNote = (arr) => {
    const lastIndex = arr.length - 1;
  
    if (lastIndex === -1) {
      const newId = 1;
      return newId;
    }
  
    const currentLastNote = arr[lastIndex];
    const maxId = currentLastNote.id;
    const newId = maxId + 1;
    return newId;
};

    moreNewerNote.id = addNewNote(notes);
    notes.push(moreNewerNote);
    addNewNote(notes)
    console.log(notes);


