/* Justin Edwards
 * 10/08/2020
 * Sign Up component - Standalone component that can be 
 * Used in a modal to allow user sign in. Uses functions in 
 * Services/AuthService to make axios requests to the backend
 */

/* #region IMPORTS */
import React, { useState } from "react";
import {
  Button,
  Link,
  Typography,
  TextField,
  Grid,
  Container,
  CssBaseline,
  Avatar,
  withStyles,
  LinearProgress,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import AuthService from '../../../Services/AuthService';

/* #endregion */

/* #region STYLES */
const styles = {
  // mainContainer: {
  //     border: "2px solid black"
  // },
  formHeader: {
    marginTop: 15,
    marginBottom: 15,
  },
  avatar: {
    backgroundColor: "#080808",
    margin: "auto",
  },
  iconText: {
    textAlign: "center",
  },
  submit: {
    backgroundColor: "#080808",
    marginTop: 15,
    color: "white",
    "&:hover": {
      color: "#080808",
      backgroundColor: "#ececec",
    },
  },
  linearProgress: {
    height: 5,
    width: 200,
    backgroundColor: "#f9f9f9",
  },
  signInError: {
    color: "#de2020",
    height: 25,
    paddingTop: 5,
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  signUpLink: {
    cursor: "pointer",
    color: "#504949",
    minHeight: 25,
  },
};
/* #endregion */

function LoginForm(props) {
  /* #region PROPS/HOOKS */
  const { classes } = props;  // for styling
  // input hooks - updated as user types with handleEmailChange/handlePasswordChange
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // error hooks - set when there's, well, an error
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signInError, setSignInError] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  /* #endregion */

  /* #region INPUT HANDLERS */
  function handleEmailChange({ target }) {
    setEmail(target.value);
  }
  function handlePasswordChange({ target }) {
    setPassword(target.value);
  }
  /* #endregion */

  /* #region BASIC VALIDATION */
  function validateEmail() {
    // empty email
    if (email === "") {
      setEmailError("Email Required");
      return false;
      // basic regex test for any@any.any - NOT exhaustive
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setEmailError("Enter a valid email");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  }
  function validatePassword() {
    // empty password
    if (password === "") {
      setPasswordError("Password Required");
      return false;
      // short password
    } else if (password.length < 6) {
      setPasswordError("Password Too Short");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  }
  /* #endregion */

  /* #region FORM SUBMISSION */
  // handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // prevent default post event
    // check for valid email/password first
    if (validateEmail() && validatePassword()) {
      setSigningIn(false);
      setSignInError("");
      // pass information to AuthService to perform axios requests
      // this is async so the function must be followed by .then(() => ) {})
      // to do something with the response. If you were to take the lines out 
      // of the .then() and move them below the AuthService.execute ... 
      // call, it would cause problems. I recommend getting familiar with 
      // .then().catch() syntax
      AuthService.executeBasicAuthService(email, password)
      // .then((response) => {
        // console.log(response); // helpful for understanding response
        // AuthService.registerSuccessfulLogin(email, password);
        // props.history.push(`/greeting`);
      // })
      // .catch((error) => {
      //   console.log("Error: ", error);  // helpful for understanding error response
      //   // this error might not be due to incorrect u/p but we can deal with that later
      //   setSignInError("Incorrect username or password"); // sets error
      // })
    }
  }
  /* #endregion */

  // anything wrapped in the return is what will actually display when 
  // the component renders. Since we're using material-ui, classes can be 
  // set with className={classes.<class>} and then selected in the
  // const styles = { } variable above. The syntax is a bit different than 
  // CSS but the wording is all the same. To reference variables/functions from 
  // the above code, wrap it in curly braces like so <h1>{email}</h1> or like 
  // <button onClick={handleClick}>... 
  /* #region COMPONENT DISPLAY */
  return (
    <div className={classes.mainContainer}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.formHeader}>
            <Avatar className={classes.avatar} color="primary">
              <AccountCircle />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              className={classes.iconText}
            >
              Sign In
            </Typography>
          </div>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmailChange}
                  onBlur={validateEmail}
                  error={emailError !== ""}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handlePasswordChange}
                  onBlur={validatePassword}
                  error={passwordError !== ""}
                  helperText={passwordError}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              {signingIn ? (
                <div>
                  <LinearProgress className={classes.linearProgress} />
                </div>
              ) : (
                <div>Sign In</div>
              )}
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link
                  onMouseDown={props.setSignUpModalOpen}
                  variant="body2"
                  className={classes.signUpLink}
                >
                  Don't have an account? Sign Up!
                </Link>
              </Grid>
              <Grid item className={classes.signInError} variant="body2">
                {signInError}
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
  /* #endregion */
}

export default withStyles(styles)(LoginForm);
