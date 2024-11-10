import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { FaLeaf, FaSatellite, FaUsers } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import "./Dashboard.css";
import { FaRegChartBar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuClick = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const geospatialMappingData = [
    { region: "North", treesPlanted: 500, soilQuality: 80, waterUsage: 30 },
    { region: "South", treesPlanted: 800, soilQuality: 85, waterUsage: 45 },
    { region: "East", treesPlanted: 650, soilQuality: 70, waterUsage: 50 },
    { region: "West", treesPlanted: 700, soilQuality: 75, waterUsage: 40 },
  ];

  const monitoringData = [
    { month: "January", ecosystemHealth: 65 },
    { month: "February", ecosystemHealth: 59 },
    { month: "March", ecosystemHealth: 80 },
    { month: "April", ecosystemHealth: 81 },
    { month: "May", ecosystemHealth: 56 },
    { month: "June", ecosystemHealth: 55 },
  ];

  const stakeholderData = [
    {
      stakeholder: "Local Communities",
      role: "Implementation",
      engagement: 95,
    },
    { stakeholder: "NGOs", role: "Support", engagement: 85 },
    { stakeholder: "Governments", role: "Policy", engagement: 75 },
    { stakeholder: "Investors", role: "Funding", engagement: 90 },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#2e7d32",
            color: "white",
            top: "64px",
          },
        }}
        open={open}
        onClose={toggleDrawer}
        className="sidebar"
      >
        <List>
          <ListItem button onClick={() => handleMenuClick("geospatial")}>
            <FaSatellite size={20} style={{ marginRight: "10px" }} />
            <ListItemText primary="Geospatial Mapping" />
          </ListItem>
          {expandedMenu === "geospatial" && (
            <>
              <ListItem button>
                <ListItemText inset primary="View Tree Planting" />
              </ListItem>
              <ListItem button>
                <ListItemText inset primary="Soil Quality" />
              </ListItem>
              <ListItem button>
                <ListItemText inset primary="Water Usage" />
              </ListItem>
            </>
          )}

          <ListItem button onClick={() => handleMenuClick("monitoring")}>
            <FaRegChartBar size={20} style={{ marginRight: "10px" }} />
            <ListItemText primary="Monitoring & Evaluation" />
          </ListItem>
          {expandedMenu === "monitoring" && (
            <>
              <ListItem button>
                <ListItemText inset primary="Satellite Imagery" />
              </ListItem>
              <ListItem button>
                <ListItemText inset primary="Drone Data" />
              </ListItem>
              <ListItem button>
                <ListItemText inset primary="Remote Sensing" />
              </ListItem>
            </>
          )}

          <ListItem button onClick={() => handleMenuClick("stakeholders")}>
            <FaUsers size={20} style={{ marginRight: "10px" }} />
            <ListItemText primary="Stakeholder Management" />
          </ListItem>
          {expandedMenu === "stakeholders" && (
            <>
              <ListItem button>
                <ListItemText inset primary="Local Communities" />
              </ListItem>
              <ListItem button>
                <ListItemText inset primary="NGOs" />
              </ListItem>
              <ListItem button>
                <ListItemText inset primary="Governments" />
              </ListItem>
              <ListItem button>
                <ListItemText inset primary="Investors" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        className="content"
      >
        <AppBar position="fixed" sx={{ width: "100%" }} className="appbar">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
            >
              <FaLeaf size={30} style={{ marginRight: 10 }} />
            </IconButton>

            <Typography variant="h6" style={{ flexGrow: 1, color: "#a4c639" }}>
              AgroForesterPro
            </Typography>

            <Link to="/">
            <Button
              variant="outlined"
              style={{ marginLeft: 10, backgroundColor: "rgb(222, 59, 59)", color:"white" }}
            >
              Sign Out
            </Button>
          </Link>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 8 }}>
          <Typography variant="h4">Welcome to the Dashboard</Typography>

          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} md={6}>
              <Box className="chart-box">
                <Typography variant="h6">Geospatial Mapping</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={geospatialMappingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="treesPlanted" fill="#8884d8" />
                    <Bar dataKey="soilQuality" fill="#82ca9d" />
                    <Bar dataKey="waterUsage" fill="#ff8042" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box className="chart-box">
                <Typography variant="h6">Monitoring & Evaluation</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monitoringData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="ecosystemHealth"
                      stroke="#82ca9d"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12}>
              <Box className="table-container">
                <Typography variant="h6">Stakeholder Management</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Stakeholder</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Engagement Level (%)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {stakeholderData.map((stakeholder) => (
                        <TableRow key={stakeholder.stakeholder}>
                          <TableCell>{stakeholder.stakeholder}</TableCell>
                          <TableCell>{stakeholder.role}</TableCell>
                          <TableCell>{stakeholder.engagement}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
