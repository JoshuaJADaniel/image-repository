import { useState } from "react";
import { useHistory } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import LineText from "components/LineText";
import ModalForm from "components/ModalForm";
import ButtonGoogle from "components/ButtonGoogle";
import { attemptLogin } from "utils/user";

const ModalLogin = ({ open, onClose }) => {
  const history = useHistory();

  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    setError("");
    attemptLogin(
      (res) => {
        if (res["error"]) {
          setError(res["error"]);
        } else {
          localStorage.setItem("jwt", res["jwt"]);
          history.push("/profile");
        }
      },
      username,
      password
    );
  };

  return (
    <ModalForm onClose={onClose} open={open}>
      <Box py={4}>
        <ButtonGoogle text="Login with Google" />
      </Box>
      <LineText text="OR" />
      <Box pb={2}>
        <TextField
          fullWidth
          type="text"
          margin="dense"
          label="Username"
          id="login-username"
          value={username}
          onChange={handleUsername}
        />
        <TextField
          fullWidth
          type="password"
          margin="dense"
          label="Password"
          id="login-password"
          value={password}
          onChange={handlePassword}
        />
      </Box>
      {error && <Typography color="error">{error}</Typography>}
      <Box pt={2}>
        <Button
          fullWidth
          size="large"
          color="primary"
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </ModalForm>
  );
};

export default ModalLogin;
