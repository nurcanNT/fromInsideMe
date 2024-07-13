import { Button, ThemeProvider, CssBaseline, createTheme, Box, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { styles } from "./MemoizedMyStyles";
import { useSelector, useDispatch } from 'react-redux';
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { toggleDarkMode } from "../../actions";

const MemoizedMyList = memo(({ exampleData }) => {

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#fff",
        paper: darkMode ? "#333" : "#fff",
      },
      text: {
        primary: darkMode ? "#fff" : "#000"
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? "#333" : "#fff",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: darkMode ? "#fff" : "#000",
            },
          },
          input: {
            color: darkMode ? "#fff" : "#000",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: darkMode ? "#fff" : "#000",
          },
        },
      },
    },
  });

  const [myList, setMyList] = useState(() => {
    const storedList = JSON.parse(localStorage.getItem("myList"));
    return storedList ? storedList : exampleData;
  });

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const handleDelete = (index) => {
    const newUserList = [...myList];
    newUserList.splice(index, 1);
    setMyList(newUserList);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: "absolute", top: "50px" }}>
        <Button onClick={() => dispatch(toggleDarkMode())}>
          <SettingsBrightnessIcon sx={{ mr: 0.5 }} />{" "}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: darkMode ? "background.default" : "background.paper",
          color: darkMode ? "text.primary" : "text.primary",
          padding: 2,
          borderRadius: 1,
          boxShadow: 3,
          mt: 3,
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={styles.columnHeader}>Rumuz</TableCell>
                <TableCell style={styles.columnHeader}>Email</TableCell>
                <TableCell style={styles.columnHeader}>City</TableCell>
                <TableCell style={styles.columnHeader}>Info Text</TableCell>
                <TableCell style={styles.columnHeader}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myList.map((user, index) => (
                <TableRow key={index}>
                  <TableCell style={styles.cell}>{user.rumuz}</TableCell>
                  <TableCell style={styles.cell}>{user.email}</TableCell>
                  <TableCell style={styles.cell}>{user.city}</TableCell>
                  <TableCell style={styles.cell}>{user.infoText}</TableCell>
                  <TableCell style={styles.cell}>
                    <Button variant="contained" onClick={() => handleDelete(index)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
});

export default MemoizedMyList;
