import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end px-3">
          <a className="navbar-brand" href="#">
            Student Management System
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* ms-auto pushes nav items to the right */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/students">
                  Students
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/departments">
                  Departments
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
