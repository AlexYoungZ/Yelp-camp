const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

//root route
router.get('/', (req, res)=> {
  res.render('landing')
});

// show register form
router.get('/register',  (req, res) =>{
  res.render("register",{page: 'register'});
});

//handle sign up logic
router.post("/register",  (req, res)=> {
  const newUser = new User({username: req.body.username});
  if (req.body.adminCode === process.env.ADMIN_CODE) {
    newUser.isAdmin = true;
  }
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.render("register",{error:err.message});
    }
    passport.authenticate("local")(req, res, () => {
      req.flash("success", "Welcome to YelpCamp" + user.username);
      res.redirect("/campgrounds");
    });
  });
});

// show login form
router.get("/login",  (req, res)=> {
  res.render("login",{page:'login'});
});

// handling login logic
router.post("/login", passport.authenticate("local",
    {
      successRedirect: "/campgrounds",
      failureRedirect: "/login",
      failureFlash:true,
      successFlash: 'Welcome to YelpCamp!'
    }),  (req, res)=> {
});

// logout route
router.get("/logout",  (req, res) =>{
  req.logout();
  req.flash("success", "See you later");
  res.redirect("/campgrounds");
});


module.exports = router;

