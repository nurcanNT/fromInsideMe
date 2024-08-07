import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';
import NoteIcon from '@mui/icons-material/Note';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const SideBarContainer = styled(Box)(({ theme }) => ({
  width: 270,
  height: '100vh',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  padding: theme.spacing(2),
  position: 'fixed',
  top: '70px',
  left: 0,
  bottom: 0,
  overflowY: 'auto',
}));

const SideBar = () => (
  <SideBarContainer>
    <List>
      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Communication" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <NoteIcon />
        </ListItemIcon>
        <ListItemText primary="Notes and Highlights" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CalendarTodayIcon />
        </ListItemIcon>
        <ListItemText primary="Calendar Sync" />
      </ListItem>
    </List>
  </SideBarContainer>
);

export default SideBar;
