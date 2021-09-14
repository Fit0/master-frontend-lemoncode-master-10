import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import * as classes from "./login.styles";
import { AuthContext } from "core/providers/auth.context";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

export const LoginScene: React.FC = () => {
  const { setUserSession } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const handleClick = () => {
    if (username === "admin" && password === "test") {
      setUserSession({
        userName: username,
      });
      history.push("/members-list");
    } else {
      setUserSession({
        userName: null,
      });
      alert("User:password not valid... psss admin / test");
    }
  };

  return (
    <>
      <div className={classes.root}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Modulo 4 - React
            </Typography>
            <div>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>
              <Button onClick={handleClick} variant="contained" color="primary">
                Login
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
