"use client";
import {
  Box,
  Container,
  Button,
  Stack,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import "./globals.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    console.log("Server response:", data.reply);
  };
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 4 },
        backgroundColor: "#e1e0df",
      }}
    >
      <Stack
        direction={"column"}
        width={{ xs: "90%", sm: "70%", md: "50%", lg: "500px" }}
        height={{ xs: "80%", sm: "70%", md: "600px" }}
        border="3px solid black"
        p={{ xs: 1, sm: 2 }}
        spacing={3}
        boxShadow={20}
        sx={{ borderRadius: "15px", backgroundColor: "white" }}
      >
        <Stack
          direction={"column"}
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
        >
          {/* Working on the text bubble for chat */}
          <Box
            sx={{
              backgroundColor: "#20b2aa",
              borderRadius: "10px",
              padding: "10px",
              marginRight: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4"></Typography>
          </Box>
        </Stack>
        <Stack flexDirection="row">
          <TextField
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder={"Type your message here..."}
            id="outlined-basic"
            label="Send Message"
            variant="outlined"
            sx={{
              width: { xs: "100%", sm: "80%", md: "400px" },
            }}
          />
          <Button onClick={handleSendMessage}>
            <SendIcon fontSize="large" />
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
