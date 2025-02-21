// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, IconButton, CssBaseline, ThemeProvider, createTheme, Menu, MenuItem, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import Image from '../src/assets/Landing-Page.jpg';
// // import Home from './pages/Home';
// // import AboutUs from './pages/AboutUs';
// // import Services from './pages/Services';
// // import ContactUs from './pages/ContactUs';
// // import Products from './pages/Products';
// import LandingPage from './Components/LandingPage';
// function App() {
//     const [darkMode, setDarkMode] = useState(false);
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [mobileOpen, setMobileOpen] = useState(false);

//     const theme = createTheme({
//         palette: {
//             mode: darkMode ? 'dark' : 'light',
//         },
//     });

//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//     };

//     const handleMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//     };

//     const toggleMobileMenu = () => {
//         setMobileOpen(!mobileOpen);
//     };

//     const menuItems = [
//       { label: 'Home', path: '/' },
//       { label: 'About Us', path: '/about' },
//       { label: 'Products', isDropdown: true }, // Products will be handled separately
//       { label: 'Services', path: '/services' },
//       { label: 'Contact Us', path: '/contact' },
//       { label: 'Precise Tool', path: '/Precisetool' },
//   ];
  

//     const productItems = [
//         { label: 'Mutual Funds', path: '/mutual-funds' },
//         { label: 'Insurance', path: '/insurance' },
//         { label: 'Loan', path: '/loan' },
//         { label: 'Structured Products', path: '/structured-products' },
//     ];

//     return (
//         <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Router>
//             <AppBar sx={{ backgroundColor: '#003366' }}>
//     <Toolbar>
//         {/* Mobile Menu */}
//         <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMobileMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
//             <MenuIcon />
//         </IconButton>

//         {/* Logo */}
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//                 <img src="https://precisegoal.com/wp-content/uploads/2022/05/Precise-goal-logo.png" alt="Precise Goal" style={{ height: '40px' }} />
//             </Link>
//         </Typography>

//         {/* Desktop Menu */}

//         <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//     {menuItems.map((item) =>
//         item.isDropdown ? (
//             <Button color="inherit" onClick={handleMenuOpen} key={item.label}>
//                 {item.label}
//             </Button>
//         ) : (
//             <Button color="inherit" component={Link} to={item.path} key={item.label}>
//                 {item.label}
//             </Button>
//         )
//     )}

//     {/* Products Dropdown Menu */}
//     <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//         {productItems.map((item) => (
//             <MenuItem key={item.label} onClick={handleMenuClose} component={Link} to={item.path}>
//                 {item.label}
//             </MenuItem>
//         ))}
//     </Menu>
//     <Button color="inherit" component={Link} to="https://precisegoal.my-portfolio.co.in/app/#/login">Login</Button>
//             <Button color="inherit" component={Link} to="https://precisegoal.my-portfolio.co.in/app/#/public/signup/1">Sign Up</Button>
// </Box>


//         {/* Dark Mode Toggle */}
//         <IconButton onClick={toggleDarkMode} color="inherit">
//             {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//         </IconButton>
//     </Toolbar>
// </AppBar>
// <LandingPage />


//                 {/* Mobile Drawer */}
//                 <Drawer anchor="left" open={mobileOpen} onClose={toggleMobileMenu}>
//                     <List>
//                         {menuItems.map((item) => (
//                             <ListItem button key={item.label} component={Link} to={item.path} onClick={toggleMobileMenu}>
//                                 <ListItemText primary={item.label} />
//                             </ListItem>
//                         ))}
//                         <ListItem button onClick={handleMenuOpen}>
//                             <ListItemText primary="Products" />
//                         </ListItem>
//                         {productItems.map((item) => (
//                             <ListItem button key={item.label} component={Link} to={item.path} onClick={toggleMobileMenu}>
//                                 <ListItemText primary={item.label} />
//                             </ListItem>
//                         ))}
//                         <ListItem button component={Link} to="https://precisegoal.my-portfolio.co.in/app/#/login" onClick={toggleMobileMenu}>
//                             <ListItemText primary="Login" />
//                         </ListItem>
//                         <ListItem button component={Link} to="https://precisegoal.my-portfolio.co.in/app/#/public/signup/1" onClick={toggleMobileMenu}>
//                             <ListItemText primary="Sign Up" />
//                         </ListItem>
//                     </List>
//                 </Drawer>

//                 {/* Page Routes */}
//                 {/* <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<AboutUs />} />
//                     <Route path="/services" element={<Services />} />
//                     <Route path="/products" element={<Products />} />
//                     <Route path="/contact" element={<ContactUs />} />
//                 </Routes> */}
//             </Router>
//         </ThemeProvider>
//     );
// }

// export default App;
import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import HowItWorks from './Components/HowItWorks';
import Principles from './Components/Principles'
import ArticleCard from './Components/ArticleCard';
// import Services from './components/Services';
// import Gallery from './components/Gallery';
import Footer from './Components/Footer';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
       <HeroSection />
    <Principles />
     <HowItWorks />
       <ArticleCard />
       <Footer />
        {/*   ////// <Services />
      // <Gallery />
      // <Footer /> */}
    </div>
  );
}

export default App;
