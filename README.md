# Developing the iCollect App
### to keep track of our favourite collections

## Step 0 Initialising the project

[X] npx create-react-app icollect-client
[X] npm install react-router-dom
[X] Update index.js after importing { BrowserRouter as Router } from 'react-router-dom';

## Step 1 Creating the components

[X] Create folder components and its files

## Step 2 Displaying list of collections and collection details

[X] Link between the index page and the collections page (with the navbar)
[X] Displaying the list of components in the DB

## Step 3 Frontend Authentication Set-up

[X] Follow student portal instructions
[X] Create the services folder and auth-service.js
[X] Create signup method and component
[X] Allow user's session persistance (loggedin)
[X] Update Navbar to the authentication status
[X] Include loggedin method in the auth-service file
[X] Create login and logout methods and components
[X] Incorporate Credentials to axios routes
[X] Redirect to Homepage after Login/Sign up

## Step 4 Adding new Collections

[X] Create the AddCollection.js file and import the necessary files
[X] Create a class to display a form to create the new collection

## Step 5 Changing authorisation setup
[X] Allowing no-loggedin users to see the Collection List, but not the details --> condition (comparing  if this.props.userData._id === this.state.owner )

## Step 6 Protected Routes
[X] Follow student portal to protect the rotues
[X] Protect the Edit Collection and Delete Collection options, so that only the OWNER can actually do this
[X]  Protect the functionality of Adding new Collections

## Step 7 Adding Homepage button to improve user experience

[X] Create the homepage component depending on the user status (login/logout)
[X] Import the homepage component to App.js 
[X] Call the component in the render method and pass the necessary props to display the corresponding homepage

## Step 8 Updating Navbar to check App functionality among urls

## Step 9 Adding items to the collections
[X] Creating the AddItems.js file
[X] Checking that only owners of the collection can add new items.

#Reading the new Items
