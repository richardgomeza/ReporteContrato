
import './Header.css'
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/Ducks/userDuck";
class Header extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };   
  render() {
    // const { user } = this.props.auth;
    return (
      <div className="container" >
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <span className="d-flex align-items-center  me-md-auto text-decoration-none docs-creator">
            <img src={process.env.PUBLIC_URL + '/logo.png'} id='logo' alt="logo" />
              <span id='titleHeader' className="fs-4">CONSTRUCTORA<br/>SOSA & CÍA S.A.</span>
          </span>
          <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-#040D5C text-decoration-none docs-creator">
              <span className="fs-4" id='bienvenida'>Hola <br/>  
              {/* {user.name.split(" ")[0]} */}
              </span>
          </span>
          <ul className="nav nav-pills d-flex align-items-center">
              {/* <li className="nav-item"><a href="#" className="nav-link active docs-creator" aria-current="page">Home</a></li> */}
              <li className="nav-item"><a href="/contratos" id="navbar" className="nav-link docs-creator">Mis contratos</a></li>
              <li className="nav-item"><a href="/contratos/crear" id="navbar" className="nav-link docs-creator">Nuevo Contrato</a></li>
              <li className="nav-item"><a href="/" id="navbar" className="nav-link docs-creator">Salir</a></li>
              <li className="nav-item">
              <button
                style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                Logout
                </button>  
              </li>
          </ul>
          </header>
      </div>
      
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Header);