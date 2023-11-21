import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setusers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // fetch("http://localhost:8080/ussers")
    //   .then((res) => res.json())
    //   .then((data) => setusers(data))
    //   .catch((err) => setError("Something went wrong"));
    setLoading(true);
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        setusers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  function addUser() {
    axios
      .post("http://localhost:8080/users", {
        name: "Sssss",
        email: "ssss@gmail.com",
      })
      .then((res) => setusers([...users, res.data]))
      .catch((err) => setError(err.message));
  }

  function updateUser(id) {
    axios
      .put(`http://localhost:8080/users/${id}`, {
        name: "Changed Value",
        email: "updated@email.com",
      })
      .then((res) => setusers([...users, res.data]));
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" onClick={addUser}>
        Add New User
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button
                  color="success"
                  variant="outlined"
                  onClick={() => updateUser(user.id)}
                >
                  Update User
                </Button>
              </TableCell>
              <TableCell>
                <Button color="error" variant="outlined">
                  Delete User
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Users;
