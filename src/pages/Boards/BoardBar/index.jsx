import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Filter } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const MENU_STYLE = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        borderBottom: "1px solid white",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon></DashboardIcon>}
          label="Hoang Gia Bao"
          clickable
        ></Chip>
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon></VpnLockIcon>}
          label="Workplace"
          clickable
        ></Chip>
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon></AddToDriveIcon>}
          label="Add To Google Drive"
          clickable
        ></Chip>
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon></BoltIcon>}
          label="Automation"
          clickable
        ></Chip>
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon></FilterListIcon>}
          label="Filter"
          clickable
        ></Chip>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon></PersonAddIcon>}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
            },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: "10px", // gap icon next invite
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              // border: "none", // border icon next invite
            },
          }}
        >
          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/e0/86/bb/e086bbd63fa22fa44a495d452464f679.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/85/f1/3a/85f13a8eb0589d6c04bcfcd88247986a.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/6a/65/18/6a65182c83ef24416ba821b177230fa9.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/ae/57/88/ae5788d15a478c805b3a59bdf0448252.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/ba/e0/8f/bae08fd04cc7b2c33f5a559815e5ed6d.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/c9/04/73/c904739f505c1bbb4b5543039446d8aa.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/6b/e4/58/6be4583fa943660f8fbd0fe932fa561e.jpg"
            />
          </Tooltip>

          {/* tool 2 */}
          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/e0/86/bb/e086bbd63fa22fa44a495d452464f679.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/85/f1/3a/85f13a8eb0589d6c04bcfcd88247986a.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/6a/65/18/6a65182c83ef24416ba821b177230fa9.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/ae/57/88/ae5788d15a478c805b3a59bdf0448252.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/ba/e0/8f/bae08fd04cc7b2c33f5a559815e5ed6d.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/c9/04/73/c904739f505c1bbb4b5543039446d8aa.jpg"
            />
          </Tooltip>

          <Tooltip title="hoanggiabao">
            <Avatar
              alt="Hoang Gia Bao"
              src="https://i.pinimg.com/736x/6b/e4/58/6be4583fa943660f8fbd0fe932fa561e.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
