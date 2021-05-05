import { useState } from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import LineText from "components/LineText";
import ModalForm from "components/ModalForm";
import ButtonGoogle from "components/ButtonGoogle";

const ModalSignup = ({ open, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => console.log(`Signup ${username}:${password}`);
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <ModalForm onClose={onClose} open={open}>
      <Box py={4}>
        <ButtonGoogle text="Signup with Google" />
      </Box>
      <LineText text="OR" />
      <Box pb={3}>
        <TextField
          fullWidth
          type="text"
          margin="dense"
          label="Username"
          id="signup-username"
          value={username}
          onChange={handleUsername}
        />
        <TextField
          fullWidth
          type="password"
          margin="dense"
          label="Password"
          id="signup-password"
          value={password}
          onChange={handlePassword}
        />
      </Box>
      <Button
        fullWidth
        size="large"
        color="primary"
        variant="contained"
        onClick={handleSignup}
      >
        Signup
      </Button>
    </ModalForm>
  );
};

export default ModalSignup;
