# Introduction

This is a video search app built within a React/Redux course and has been slightly modified. The app connects to the YouTube API and lets users search for and display a list of videos, select one of the results and play it in the browser. The key adaptation made was for layout; mobile and widescreen modes were created. This was done by creating a function that checks for screen width and displays a mobile or widescreen class name that sets the styling for either class of device.

# Main Technologies

## React

React was used to create components within the app. These components are written in JSX, a markup language, and this is then converted to html in the browser via Babel.

## Custom Hook

This app features a custom hook. Hooks are techniques used by React that allow functional components to emulate the functionality of class-based components (CBCs). Hooks are a condensed way to mimic functionality that is more verbosely scripted in CBCs. By combining different hooks, in this case useEffect and useState, we can create a custom hook that lets us separate out logic related to functions that would otherwise be duplicated in multiple places in a code-base. This simplifies maintenance of this code, and makes it reusable by multiple components.

In this case, the custom hook extracts video fetching logic from a components and makes it easily available to others.

# Additional Node Modules and Add-ons

-  Axios: Lets us make asynchronous requests (ie. requests that take a finite amount of time) to our API server

# Main Folders

## Folders within src

-  components: all React components

-  hooks: contains the custom hook

-  apis: Axios clients, ie. functions that form the basis for requests made in this case to our YouTube api

# Hosting

This app is hosted on Netlify.
