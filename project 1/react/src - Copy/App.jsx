import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import necessary components from react-router-dom
// import '../node_modules/bootstrap-dark-5/dist/css/bootstap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import Home from './screens/Home'; // Import the Home component
import Login from './screens/Login';
import SiginUp from './screens/SiginUp'; // Import the Login component
const App = () => {
  return (
    <Router> {/* Wrap your app with Router */}
      <div>
        {/* <Navbar /> Include the Navbar at the top of your layout */}
        <Routes> {/* Use Routes to define all your routes */}
          <Route exact path="/" element={<Home />} /> {/* Define the route for Home */}
          <Route exact path="/login" element={<Login />} /> {/* Define the route for Login */}
          {/* Add more routes as needed */}
          <Route exact path="/SiginUp" element={<SiginUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
