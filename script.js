const events = [{
    title: "Zindua Open Day",
    date: new Date(2024, 0, 27),
    location: "CIH",
    attendees: new Set(["John", "Mary", "Peter"]),
},

{
    title: "Climate Summit 2023",
    date: new Date(2023, 11, 30),
    location: "KICC",
    attendees: new Set(["Thomas", "Kiyonga", "Ruto"]),
},
{
    title: "Valentines Day",
    date: new Date(2024, 0, 14),
    location: "Carnivore",
    attendees: new Set(["David", "Ann", "Joy"]), 
},
{
    title: "WRC Safari Rally Kenya",
    date: new Date(2024, 3, 25),
    location: "Naivasha",
    attendees: new Set(["Alex", "Carter", "Emery"]),
},

];

console.log(events);

//todays date
const today = new Date();
console.log(today);

//Events happening in the next 7 days
const next7Days = new Date(today.getTime() + 7 * 24 * 60 * 60* 1000);
console.log(next7Days);

const upcomingEvents = events.filter((event) => event.date >= today && event.date < next7Days).map((event) => ({
    title: event.title,
    date: event.date.toLocaleDateString(),
    location: event.location
}));

console.table(upcomingEvents);