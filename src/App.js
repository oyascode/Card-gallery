import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import './App.css';
import UserCard from "./UserCard";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80%",
    maxWidth: "800px",
    marginRight: "auto",
    marginLeft: "auto",
    padding:  theme.spacing(5)
  },
  contentWrap: {
    width: "100%",
    backgroundColor: "#82ecf",
    padding: theme.spacing(2),
    boxShadow: "10px 10px 62px -7px rgba(0,0,0,0.22)"
  },
  header: {
    textAlign: "center",
    marginBottom: "1em"
  }
}));

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      await fetch("https://reqres.in/api/users?page=2")
      .then(response => response.json())
      .then(response => setUsers(response.data))
    }
    getUserData();
  }, [])
  return (
    <Box className={classes.container}>
      <Box className={classes.contentWrap} >
        <Typography
        className={classes.header}
        variant="h5" 
        component="h1"
        gutterBottom>
          Responsive Card Gallery
        </Typography>
        <Grid 
        container 
        spacing={1}
        >
          {users.map(user => 
            <Grid 
            item
            key={user.id} 
            xs={12} sm={6} md={4} xl={3}
            >
              <UserCard 
              key={user.id} 
              image={user.avatar} 
              firstName={user.first_name} 
              lastName={user.last_name} 
              email={user.email}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
