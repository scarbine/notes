// This is the array of objects(notes) that contains all the notes recorded
const notes = [
    {
        id: 1 ,
        subject: "I learned today",
        date: "5-24-21",
        feeling: "mood",
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

console.log(notes) ;

const noteAboutToday = {
    
    id: 3 ,
    subject: "Learning more ",
    date: "5-26-21",
    feeling: "mood",
    timeSpent: 23 
}
// this is adding the noteAboutToday to the notes array

notes.push(noteAboutToday) ;

// This logs out the new array

console.log(notes) ;

