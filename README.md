# Movie App

## Overview
This is a simple react application to get the movie details from a Movie API In the home page there is a search button using which the user will get a list of movies as per the search The user can click on any movie which will render the movie details page In this page the following information is displayed: a. Movie Title b. Movie Release year c. Movie Director d. Movie Poster e. Movie Plot f. Movie ID All these details are fetched using a Movie API (OMdb)

The movieData file in the Data folder was created just for testing purpose
## Testing Data
The `movieData` file located in the `Data` folder was created for testing purposes. It contains sample movie data that can be used during development to simulate API responses.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Download the zip file containing the project.
2. Extract the zip file to your desired location.
3. Navigate into the extracted project folder:
   ```bash
   cd <extracted-folder-name>
   
## Install the required dependencies:
      npm install

## Running the Application
1. Start the development server:
     npm start
2. Open your browser and go to http://localhost:3000 to view the app.

## Usage
- Use the search bar to search for movies by title.
- Click on any movie from the list to view more details, including the title, release year, director, poster, plot, and movie ID.

## API
This application fetches data from the OMDb API. Ensure you have a valid API key from OMDb and update the apikey parameter in the code if necessary.

##  UI/UX Enhancements
- The app features a responsive layout.
- The movie list and details are styled for ease of use and clarity.

## Error Handling
- The app includes error handling for API failures, ensuring a smooth user experience even when data fetching encounters issues.

