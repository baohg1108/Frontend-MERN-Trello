import Box from "@mui/material/Box";
// import ModeSelect from "../ModeSelect";
import ModeSelect from "~/components/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import Tynography from "@mui/material/Typography";
import Workspace from "./Menus/Workspace";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Help } from "@mui/icons-material";
import Profile from "./Menus/Profile";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
      }}
    >
      {/* AppBar left */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            fontSize="small"
            sx={{ color: "primary.main" }}
          />
          <Tynography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Tynography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Workspace></Workspace>
          <Recent></Recent>
          <Starred></Starred>
          <Templates></Templates>
          <Button
            variant="outlined"
            startIcon={<LibraryAddIcon></LibraryAddIcon>}
          >
            Create
          </Button>
        </Box>
      </Box>

      {/* AppBar right */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          size="small"
          sx={{ mindWidth: "120px" }}
        />

        <ModeSelect />

        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help" sx={{ cursor: "pointer" }}>
          <HelpOutlineIcon sx={{ color: "primary.main" }} />
        </Tooltip>

        <Profile></Profile>
      </Box>
    </Box>
  );
}

export default AppBar;
