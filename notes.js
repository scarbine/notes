// This is the array of objects(notes) that contains all the notes recorded
const notes = [
    {
        id: 1 ,
        subject: "I learned today",
        date: "5-24-21",
        feeling: "happy",
        timeSpent: 23
    },
    {
        id: 2 ,
        subject: "I learned today",
        date: "5-25-21",
        feeling: "mood",
        timeSpent: 23
    }
]

// console.log(notes) ;

const noteAboutToday = {
    
    id: 3 ,
    subject: "Learning more ",
    date: "5-26-21",
    feeling: "sad",
    timeSpent: 23 
}
// this is adding the noteAboutToday to the notes array

notes.push(noteAboutToday) ;

// This logs out the new array

// console.log(notes) ;

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