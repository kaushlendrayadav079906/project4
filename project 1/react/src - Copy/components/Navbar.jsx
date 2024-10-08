import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand" to="/">GodFood</Link> {/* Use Link instead of a */}
        {/* Uncomment the button if you need the toggler for a responsive navbar */}
        {/* <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> {/* Use Link instead of a */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Home">Home</Link> {/* Corrected the to attribute */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link> {/* Use Link instead of a */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SiginUP">Siginup</Link> {/* Use Link instead of a */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
