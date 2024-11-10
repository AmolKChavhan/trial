import { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Snackbar,
  Alert,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const user = storedUsers?.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setSnackbarSeverity("success");
      setSnackbarMessage("Sign-in successful!");
      setOpenSnackbar(true);
      setTimeout(() => navigate("/dashboard"), 2000);
    } else {
      setSnackbarSeverity("error");
      setSnackbarMessage("Invalid email or password.");
      setOpenSnackbar(true);
    }
  };
  
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="signInContainer">
      <Box className="cardContainer">
        <Box className="leftSection">
          <Typography variant="h4" className="contentTitle">
            Welcome to the AgroForesterPro App
          </Typography>
          <Typography variant="body1" className="contentDescription">
            Sign in to explore more about the features and services.
          </Typography>
        </Box>

        <Box className="rightSection">
          <Typography component="h1" variant="h5" className="signInTitle">
            <strong>Sign In</strong>
          </Typography>
          <form onSubmit={handleSignIn} className="signInForm">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="inputField"
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="inputField"
            />
            <button type="submit" className="signInButton">
              Sign In
            </button>
          </form>
          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Don't have an account?{" "}
              <Link href="/signup" underline="hover">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signin;
