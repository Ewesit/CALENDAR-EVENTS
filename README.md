# CALENDAR-EVENTS

# Calendar-Application-Events-Manager

## Create a script that manages a list of events for a calendar application.
1. Create an array of objects, each representing an event. Each event object should have the following properties:

- title (string)
- date (Date object)
- location (string)
- attendees (Set)

2. Use the Array methods .filter() and .map() to display all events that are happening in the next 7 days.

3. Create a WeakMap to store the event's organizer, with the event's title as the key and the organizer's name as the value.

4. Use destructuring assignment to extract the title, date, and location properties from each event object and display them in a table format.

5. Create a function that adds a new attendee to an event. This function should take in the event title and the attendee's name as arguments. Use the .add() method of the Set to add the attendee to the event's attendees property.

6. Create a function that converts the event array to a JSON string using the .stringify() method. Use the .toJSON() method to add a custom property "formattedDate" to each event object that displays the date in the format "MM/DD/YYYY".

7. Use the Object.keys(), Object.values(), and Object.entries() methods to display the properties and values of the first event object in the array.

8. Use the .forEach() method to iterate over the events array and console.log the title and date of each event.

#### Bonus

9. Implement functionality to delete events from the array using the .splice() method.

#### Bonus
10. Use the .reduce() method to find the event with the most attendees.