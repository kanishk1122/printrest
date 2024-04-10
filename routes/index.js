// Import necessary modules
const express = require('express');
const router = express.Router();
const usermodel = require("./users");
const passport = require('passport');
const localStrategy = require("passport-local").Strategy;
const upload = require('./multer');
const postmodel = require('./post');
const users = require('./users');


// Configure Passport to use the LocalStrategy
passport.use(new localStrategy(usermodel.authenticate()));
passport.serializeUser(usermodel.serializeUser());
passport.deserializeUser(usermodel.deserializeUser());

function logoutCallback(req, res, next) {
  // You can perform additional actions here after the user has successfully logged out
  console.log("User has logged out successfully.");
  res.redirect("/"); // Redirect to the homepage after logout
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});

router.get('/login', (req, res) => {
  res.render("loginp",{error: req.flash('error')});
});

router.get('/register', (req, res, next) => {
  res.render("register");
});

router.post("/register", async (req, res, next) => {
  try {
    const data = new usermodel({
      username: req.body.username,
      email: req.body.email,
      mobileno: req.body.mobileno,
    });

    await usermodel.register(data, req.body.password);
    res.redirect("/login");
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login", // Redirect back to login page on failure
  failureFlash:true,
}));
router.get("/logout", (req, res, next) => {

  res.redirect("/")

});


router.get("/profile", isLoggedIn, async (req, res, next) => {
  try {

    let users = await usermodel.findOne({
      username:req.session.passport.user
    });
  
    await users.populate("post")
    
    console.log(users)
    res.render("profile", {users});
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/feed',  async (req, res) => {
  try {
    // Find the user based on the username in the session
    const user = await usermodel.findOne({
        username: req.session.passport.user

    });

    // Find all posts and populate the 'user' field
    const posts = await postmodel.find().populate("user");

    // Render the template with user data, posts, and navigation
    res.render("fedds", { user, posts, nav });
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

router.post('/upload', isLoggedIn ,upload.single('file'),async (req,res)=>{
  if(!req.file){
    return res.status(400).send('no files were uploaded ');
  }
  const user = await usermodel.findOne({
    username : req.session.passport.user
  });
   const post = await postmodel.create({
    image:req.file.filename,
    imageText: req.body.filecaption,
    user: user._id 
  });

  user.post.push(post._id)
   await user.save();
   res.redirect('/profile')
});

router.post('/fileupload', isLoggedIn, upload.single("image"), async function(req, res, next) {
  const user = await usermodel.findOne({username: req.session.passport.user});
  user.profileImage = req.file.filename;
  await user.save();
  res.redirect("/profile")
  });
  
 


module.exports = router;
