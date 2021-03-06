# Lab 29: Todo App Refactor

# Overview

This is a lab assignment from Code Fellows 401 - Javascript. The objective was to build a simple Todo App with React components. The completed project contains two routes, a landing page route that navigates the user to a landing page with a simple description of the application and a route to a dashboard where a user can enter a to do item comprised of a title and content.  Onclick the todo item is saved to the state of the application and renders into a list of todo items below.  Once a note is added to the state of the application, a user can double click on the note item and a modal will appear that allows editing of the note.  The updated note is then available in the updated state of the note list.  The user also can cancel an edit and the note item maintains it's current state.

## Getting Started

In order to get started with this code please fork and clone the repo. You will need a number of dependencies in order to run this project. See the package.json for a list of dependencies. This project runs via a webpack build. There is a script that will give you a development version of the project, npm run watch. This script enables webpack-dev-server which hot reloads the build based on changes to the code and will open a local version of the project in your browser.

## Architecture

This project is built using Javascript ES6 with transpilation using Babel. The code is bundled via webpack. 
- Main.js contains an entry point to the React Application which contains several components including:
- App.js: this component that contains the routes to landing and dashboard
- Landing.js: this component contains static rendering of the landing page.
- Dashboard.js:  this component holds the state of the application and contains a handleAddNote and a handleRemoveNote method on it's class constructor.  The NoteForm, NoteList and NoteItem also render via this component.
- Note-form.js:  this component inherits state from Dashboard via props and contains two methods, handleSubmit and handleChange which allow the note-form to change the state of the application.
- Note-list.js:  this component contains a handleNoteList rendering function which renders noteItems and the removeNote method.
- Note-item.js: when noteItem is called a noteItem is rendered to the noteList as a <li> element containing the title and content properties of a note.
- Modal.js: this component contains rendering for a modal pop-up window that allows a user to edit an existing note item or cancel and return to the dashboard.
 
## Change Log

05-23-2018 1:00pm - 2:00pm - Built wire frame and mocked the component architecture
05-23-2018 3:15pm - 6:00pm - Built the static rendering components including app, landing, note-list and the static portion of dashboard 
05-23-2018 6:00pm - 9:30pm - built in state and note-list and note-item
05-24-2018 11:00pm - 12:30am - troubleshooting and fixing bugs in the noteList rendering.  All functionality working by 12:30am.
05-24-2018 7:30pm - 08:00am - added documentation
05-24-2018 8:00pm - 08:30am - building test suite and basic tests
05-24-2018 1:00pm - 2:00pm - Added to existing wire frame and mocked the additional component architecture
05-24-2018 3:15pm - 6:30pm - Built the static modal component and refactored note-item, note list and dashboard to accept the new functionality 
05-24-2018 6:30pm - 9:00pm - Testing and troubleshooting test suite bug
05-24-2018 11:00pm - 12:30am - CSS and troubleshooting.
05-25-2018 8:00am - 08:45am - added documentation

## Credits and Collaborations

Thanks Judy Vue for demo code and Daniel Shelton who went way above and beyond to help explain how the note-list and note-remove functionality worked.


