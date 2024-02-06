import { Box, Button } from "@mui/material";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../FirbaseContext";

const Home = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  // ============== Google Login Start here =====================
  const handleLogin = (e) => {
    signInWithPopup(
      auth,
      provider.setCustomParameters({ prompt: "select_account" })
    )
      .then((result) => {
        // The signed-in user info.
        const userInfo = result.user;
        setUser(userInfo);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };
  // ============== Google Login End here =======================
  // ============== Logout Start here ===========================
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("You have been logged out!");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // ============== Logout End here =============================

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px",
      }}
    >
      {user ? (
        <Box sx={{ display: "flex", gap: "50px" }}>
          <Button
            variant="contained"
            sx={{ padding: "15px" }}
            onClick={handleDashboardClick}
          >
            Dashboard
          </Button>
          <Button
            variant="outlined"
            sx={{ padding: "15px" }}
            onClick={handleSignOut}
          >
            Logout
          </Button>
        </Box>
      ) : (
        <Button
          variant="contained"
          sx={{ padding: "15px" }}
          onClick={handleLogin}
        >
          Login With Google
        </Button>
      )}
    </Box>
  );
};

export default Home;
