const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),

    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    seedDB = require("./seeds"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    User = require("./models/user"),
    methodOverride = require("method-override"),
    flash = require("connect-flash"),
    cookiesParser = require('cookie-parser'),
    session = require('express-session');

// configure dotenv
require('dotenv').config();

//requiring routes
const commentRoutes = require("./routes/comments"),
      campgroundRoutes = require("./routes/campgrounds"),
      indexRoutes = require("./routes/index");

// assign mongoose promise library and connect to database
mongoose.Promise = global.Promise;

const databaseUri = "mongodb+srv://alexyoungz:zhangsiyang!1@cluster0-koedh.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(databaseUri,{ useNewUrlParser: true, useUnifiedTopology: true  })
    .then(()=>console.log(`Database connected`))
    .catch(err=>console.log(`Database connection error:${err.message}`));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// app.use(cookieParser('secret'));
//require moment
app.locals.moment = require('moment');
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret:"Once again Rusty wins cutest dog!",
  resave:false,
  saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next)=> {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(3000, function () {
  console.log("The YelpCamp Server Has Started!");
});





