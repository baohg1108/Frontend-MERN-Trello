import { useColorScheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutLined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Container from "@mui/material/Container";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectedMode = event.target.value;
    console.log(selectedMode);
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Age</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LightModeIcon fontSize="small"></LightModeIcon>
            Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <DarkModeOutlined fontSize="small"></DarkModeOutlined>
            Dark
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <SettingsBrightnessIcon fontSize="small"></SettingsBrightnessIcon>
            System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <Container disableGutters maxWidth="false" sx={{ height: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: (theme) => theme.trello.appBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: (theme) => theme.trello.boardBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Bar
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Content
      </Box>
      <></>
    </Container>
  );
}

export default App;
