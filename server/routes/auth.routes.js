const express = require("express");
const authRoutes = express.Router();

const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = require("../models/User.model");

authRoutes.post("/signup", (req, res, next) => {
  console.log("------ PAYLOAD EN DESTINO -----", req.body);
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }

  // if (password.length < 7) {
  //   res.status(400).json({
  //     message:
  //       "Please make your password at least 8 characters long for security purposes."
  //   });
  //   return;
  // }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "Username taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      password: hashPass,
      cash: 100000
    });

    aNewUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      }

      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }

        // Send the user's information to the frontend
        // We can use also: res.status(200).json(req.user);
        res.status(200).json(aNewUser);
      });
    });
  });
});

authRoutes.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

authRoutes.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

authRoutes.get("/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

authRoutes.post("/buyshares", (req, res, next) => {
 
  if (
    req.isAuthenticated() &&
    req.user.shares.some(elm => elm.company == req.body.shares.company) &&
    req.body.shares.shares > 0
  ) {
    User.findByIdAndUpdate(
      req.user._id,

      {
        cash: req.body.cash,
        $inc: {
          // shares: req.body.shares
          "shares.$[elem].shares": +req.body.shares.shares
        }
      },
      {
        arrayFilters: [{ "elem.company": req.body.shares.company }],
        //upsert: true,
        new: true
      }
    )
      .then(userUpdated => {
        
        res.status(200).json(userUpdated);
      })
      .catch(err => console.log(err));
  } else if (req.isAuthenticated() && req.body.shares.shares > 0) {
    User.findByIdAndUpdate(
      req.user._id,

      {
        cash: req.body.cash,
        $push: {
          shares: req.body.shares
        }
      },
      {
        //upsert: true,
        new: true
      }
    )
      .then(userUpdated => {
       
        res.status(200).json(userUpdated);
      })
      .catch(err => console.log(err));
  }
});
authRoutes.post("/sellshares", (req, res, next) => {

  // console.log(req.user.shares, "user\n", req.body.shares, "body");
  
  if (
    req.isAuthenticated() &&
    req.user.shares.some(
      elm =>
        elm.shares - req.body.shares.shares > 0 &&
        elm.company == req.body.shares.company &&
        elm.shares >= req.body.shares.shares
    )
  ) {
    User.findByIdAndUpdate(
      req.user._id,

      {
        cash: req.body.cash,
        $inc: {
          // shares: req.body.shares
          "shares.$[elem].shares": -req.body.shares.shares
        }
      },
      {
        arrayFilters: [{ "elem.company": req.body.shares.company }],
        //upsert: true,
        new: true
      }
    )
      .then(userUpdated => {
        console.log(req.body);
        res.status(200).json(userUpdated);
      })
      .catch(err => console.log(err));
  } else if ( req.isAuthenticated() && req.user.shares.some( elm => elm.company == req.body.shares.company && elm.shares - req.body.shares.shares == 0
    ) &&
    req.body.shares.shares > 0
  ) {
    console.log("----------------- borro accion ---------");
    User.findByIdAndUpdate(
      req.user._id,

      {
        cash: req.body.cash,
        $pull: {
          shares: { company: req.body.shares.company }
        }
      },
      {
        //upsert: true,
        new: true
      }
    )
      .then(userUpdated => {
        res.status(200).json(userUpdated);
      })
      .catch(err => console.log(err));
  }
});
module.exports = authRoutes;
