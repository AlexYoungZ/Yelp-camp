#YelpCamp

#v1

##Initial Setup
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
   * Name
   * Image

#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

#v2:

#Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES

name      url      verb    desc.
===============================================
INDEX   /dogs      GET   Display a list of all dog
NEW     /dogs/new  GET   Displays form to make a new dog
CREATE  /dogs      POST  Add new dog to DB
SHOW    /dogs/:id  GET   Shows info about one dog

#v3:

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!
    
#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

#v4:

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

#Style Show Page
* Add sidebar to show page
* Display comments nicely

#v5:

#Finish Styling Show Page
* Add public directory
* Add custom stylesheet

#v6:

##Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model 

##Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

##Auth Pt. 3 - Login
* Add login routes
* Add login template

##Auth Pt. 4 - Logout/Navbar
* Add logout route 
- header.ejs
* Prevent user from adding a comment if not signed in
* Add links to navbar

##Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

#v7:

##Refactor The Routes
* Use Express router to reorganize all routes

#v8:

##Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

#v9:

##Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

#v10:

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route

#Deleting Campgrounds
* Add Destroy Route
* Add Delete button

#Authorization Part 1: Campgrounds
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

Campground Edit Route: <!--/campgrounds/:id/edit-->
Comment Edit Route:   <!--/campgrounds/:id/comments/:comment_id/edit-->

#Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route:    /campgrounds/:id/comments/:comment_id

#Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

#v11:

#Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

# background_slider
 
# Dynamic Price Feature - Yelp Camp

## Steps
- Add price to campground model as a String datatype
- Add price to views/campgrounds/new.ejs and views/campgrounds/edit.ejs (new and edit forms)
- Add price to views/camprounds/show.ejs (campground show page)

#v11Deployed:

heroku run ls

#Environment variables
* create environment variable 
* export DATABASEURL=
process.env.databaseURL
set up process.env.databaseURL || default value

# YelpCamp ES6 Refactor

* Replace functions with arrow functions
* Replace var with let or const
* Destructure middleware
* Replace string concatenation with template literals

# YelpCamp improvements

CSS3 background animation on landing page 

Fuzzy Search 

Campground location with Google Maps

Campground cost 

Footer 

Home link in navigation 

Authentication flash messages 

Display time since post was created with Moment JS 

User profile 

Password reset 

Image upload with multer and cloudinary 

Migration/upgrade instructions for Bootstrap 4

Refactor callbacks with Async/Await

In-app notifications

Ratings and reviews

Comments on the campground show page

Pagination in campgrounds index

