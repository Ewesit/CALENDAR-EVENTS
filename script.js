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

//weakmap

const eventOrganizers = new WeakMap();

events.forEach((event) => {
  
  eventOrganizers.get(event.title, 'John');
});


const organizerForEvent = eventOrganizers.get('Zindua Open Day');
console.log(`Organizer for Zindua Open Day: ${organizerForEvent}`);


//deconstructing assignment

const tableData = events.map(({ title, date, location }) => [title, date.toLocaleString(), location]);

console.log("Event Table:");
console.table(tableData);

//create a function that adds a new attendee to an event
function addAttendeeToEvent(eventTitle, attendeeName) {
    // Find the event with the given title
    const event = events.find(event => event.title === eventTitle);
  
    // Check if the event exists
    if (event) {
      // Use the .add() method to add the attendee to the event's attendees Set
      event.attendees.add(attendeeName);
      console.log(`${attendeeName} has been added to the attendees of ${eventTitle}.`);
    } else {
      console.error(`Event with title "${eventTitle}" not found.`);
    }
  }
  
  // Example usage:
  addAttendeeToEvent('Zindua Open Day', 'Lowa');
//   addAttendeeToEvent('Zindua Open Day', 'New Attendee'); 


//You can create a function that converts the event array to a JSON string 
//using JSON.stringify() while adding 
//a custom property "formattedDate" to
 //each event object using the .toJSON() method

function convertEventsToJSON(eventsArray) {
    const eventsWithFormattedDate = eventsArray.map(event => ({
      ...event,
      formattedDate: event.date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
    }));
  
    // Use JSON.stringify with a replacer function to include the formattedDate property
    const jsonString = JSON.stringify(eventsWithFormattedDate, (key, value) => {
      // Exclude the date property from the final JSON string
      if (key === 'date') return undefined;
      return value;
    }, 2); // The third argument (2) is for indentation in the JSON string
  
    return jsonString;
  }

   //Use the Object.keys(), Object.values(), and Object.entries() methods to 
  //display the properties and values of the first event object in the array.
  // Assuming events array from previous examples
  const jsonEvents = convertEventsToJSON(events);
  console.log(jsonEvents);

   
const firstEvent = events[0];

// Displaying properties using Object.keys()
const eventProperties = Object.keys(firstEvent);
console.log("Properties of the first event:", eventProperties);

// Displaying values using Object.values()
const eventValues = Object.values(firstEvent);
console.log("Values of the first event:", eventValues);

// Displaying properties and values using Object.entries()
const eventEntries = Object.entries(firstEvent);
console.log("Properties and values of the first event:", eventEntries);

