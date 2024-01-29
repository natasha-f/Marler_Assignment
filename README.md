# Marler_Assignment

This is an implementation of the Take Home Assignment for a developer position at Marler Integrity Inc. 

The MarlerTakeHomeTest is a small front-end application implemented using prmarily javascript(React,js), with minimal HTML and CSS code.
It has a simple table component with basic sorting and filtering functionalities.

To set up:
- if you do not have node.js installed, go to https://nodejs.org/en/ , download and install node.js
- either clone the git repository locally, or download the zipped solution and unzip it
- open your terminal window and navigate to the root directory of the project
- type "npm install" to install node modules

To run:
- type "npm run start" to run the application. This will start the development server and open a new browser tab.

Key parts of the solution:
 - data.json is the data source
 - App.js is the main React component that holds the products state and includes all the child components
 - Table.js is responsible for rendering an html table based on the list of products handed over to it
 - SearchInput.js is a small reusable search input component
 - useSorted.js is a custom React hoook used to maintain the sort order
