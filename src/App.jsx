import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4">Hello Theme!</Typography>
      <ModeToggle />
    </Box>
  );
}

export default App;
