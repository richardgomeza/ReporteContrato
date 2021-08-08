import React,{Component} from 'react';
import Titulo from './components/title/title.jsx';
import './index.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/Ducks/userDuck";
import classnames from "classnames";
// import { Button,Modal } from 'react-bootstrap';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }
        
    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = async(e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        await this.props.loginUser(userData)
        console.log(userData);
    };

    
    render () {
        const { errors } = this.state;
        return (
                <div className='containerL'>
                    <div className='title_container'>
                        <label className='title_stile'> <Titulo text='CONSTRUCTORA SOSA & COMPAÑIA S.A.'/> </label>
                    </div>
                    <div className='centerL' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/LoginFondo.jpg'})`,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: 'auto'}}>
                        {/* <div className='divimg'> 
                            <img src={process.env.PUBLIC_URL + '/LoginFondo.jpg'} alt='' className='img_1' />
                        </div> */}
                        <div className='inputs'>
                            <div className='grupo1'>
                                <form noValidate onSubmit={this.onSubmit}>
                                    <label className='UsuarioLabel'>
                                        Usuario
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                            id="email"
                                            type="email"
                                            className={classnames("inputuser", {
                                                invalid: errors.email || errors.emailnotfound,
                                            })}
                                            />

                                    </label>
                                    <label className="PasswordLabel">
                                        Contraseña
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            id="password"
                                            type="password"
                                            className={classnames("inputpassword", {
                                                invalid: errors.password || errors.passwordincorrect,
                                            })}
                                            />
                                    </label>
                                </form>
                            </div>
                            <div className='Start'>

                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                        }}
                                        type="submit"
                                        className="btn btn-large waves-effect waves-light hoverable blue accent3"
                                        onClick={this.onSubmit}
                                >
                                        LOGIN
                                </button>
                                {/* <button onClick={()=>rambo()} className='btn btn-primary'>Iniciar sesión</button> */}
                            </div>
                        </div>
                    </div>
                    <footer className="pt-4 my-md-5 border-top">
                        <h4 id="titleFooterL"><b>Equipo de trabajo</b></h4>
                        <div className="col" style={{marginBottom:'2.292vw'}}>
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col">
                                    </div>
                                    <div className="col">
                                    <span className="text-decoration-none docs-creator" id="namesL">Richard Gomez</span>
                                    </div>
                                    <div className="col">
                                    </div>
                                    <div className="col">
                                    <span className="text-decoration-none docs-creator" id="namesL">David Sosa</span>
                                    </div>
                                    <div className="col">
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col">
                                    <span className="text-decoration-none docs-creator" id="namesL">Jose Delado</span>
                                    </div>
                                    <div className="col">
                                    </div>
                                    <div className="col">
                                    <span className="text-decoration-none docs-creator" id="namesL">Sandra Palacio</span>
                                    </div>
                                    <div className="col">
                                    </div>
                                    <div className="col">
                                    <span className="text-decoration-none docs-creator" id="namesL" >Pablo Romero</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="row border-top" style={{paddingTop:'2.292vw'}}>
                    <div className="col-6 col-md text-#FFFFFF">
                        <h4 id="titleFooterL"><b>Recursos</b></h4>
                        <ul className="list-unstyled text-small" id="namesL">
                        <li className="mb-1" id="namesL"><a className="text-decoration-none docs-creator" href="https://github.com/richardgomeza/ReporteContrato/tree/master" id="namesL">Repositorio</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5 id="titleFooterL"><b>Acerca de nosotros</b></h5>
                        <ul className="list-unstyled text-small">
                        <li className="mb-1"><i id="namesL" className="link-#FFFFFF text-decoration-none docs-creator">Somos un grupo de estudiantes inspirados en resolver las necesidades de empresas. Para este proyecto decidimos crear un sistema de contratos.</i></li>
                        </ul>
                    </div>
                    </div>
                    <div className="container border-top border-bottom" id="namesL" style={{paddingTop:'0.8vw',paddingBottom:'0.8vw'}}>
                        <i className="col-4 col-md">Derechos reservados &copy; 2021</i>
                    </div>
                    </footer>
                    
                </div>
            )
        }
};
Index.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
   };
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});
   

export default connect(mapStateToProps, { loginUser })(Index);