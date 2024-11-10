import { useState } from "react";
import { TextField, Typography, Box, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({}); // Track if a field has been touched
  const navigate = useNavigate();

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!name.trim()) newErrors.name = "Name is required.";
      if (!email.trim()) newErrors.email = "Email is required.";
      else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email))
        newErrors.email = "Invalid email format.";
    }

    if (step === 2) {
      if (password.length < 8)
        newErrors.password = "Password must be at least 8 characters.";
      if (password !== confirmPassword)
        newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    } else {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please fill the required field.");
      setOpenSnackbar(true);
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleSignUp = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userDetails = {
      name,
      email,
      password,
    };
  existingUsers.push(userDetails);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setSnackbarSeverity("success");
    setSnackbarMessage("Account created successfully!");
    setOpenSnackbar(true);

    setTimeout(() => navigate("/signin"), 1000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  return (
    <div className="signupContainer">
      <Box className="signupCard">
        <Typography variant="h4" className="signupTitle">
          {step === 1 && "Create Your Account"}
          {step === 2 && "Set Your Password"}
          {step === 3 && "Confirm Details"}
        </Typography>

        {step === 1 && (
          <form className="signupForm">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur("name")}
              required
              error={touched.name && !!errors.name} // Show error only if touched
              helperText={touched.name && errors.name} // Show helper text only if touched
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur("email")}
              required
              type="email"
              error={touched.email && !!errors.email} // Show error only if touched
              helperText={touched.email && errors.email} // Show helper text only if touched
            />
          </form>
        )}

        {step === 2 && (
          <form className="signupForm">
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleBlur("password")}
              required
              error={touched.password && !!errors.password} // Show error only if touched
              helperText={touched.password && errors.password} // Show helper text only if touched
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() => handleBlur("confirmPassword")}
              required
              error={touched.confirmPassword && !!errors.confirmPassword} // Show error only if touched
              helperText={touched.confirmPassword && errors.confirmPassword} // Show helper text only if touched
            />
          </form>
        )}

        {step === 3 && (
          <Box className="confirmationBox">
            <Typography variant="body1" gutterBottom>
              Name: {name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: {email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Password: {password.replace(/./g, "*")}
            </Typography>
          </Box>
        )}

        <Box
          className={`buttonContainer ${
            step === 1 ? "buttonContainerStepOne" : ""
          }`}
        >
          {step > 1 && (
            <button onClick={handleBack} className="backButton">
              Back
            </button>
          )}
          {step < 3 && (
            <button onClick={handleNext} className="nextButton">
              Next
            </button>
          )}
          {step === 3 && (
            <button onClick={handleSignUp} className="submitButton">
              Submit
            </button>
          )}
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

export default Signup;
