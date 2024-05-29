import {useState} from 'react'
import api from '../../service/api'
import {useNavigate, Link} from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";

function LoginView(){

    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [captcha, setCaptcha] = useState('')

    function handleLogin(e){
        e.preventDefault()
        const form = new FormData()
        form.append('username',username)
        form.append('password',password)
        api.post('/session/',form)
        .then((res)=>{
            localStorage.setItem("token", res.data.access_token);
            navigate('/home')
        })
        .catch(err=>{
            console.error(err)
            alert("Credentials not authorized, try again later")
        })
    }

    return(
        <div className="auth-wrapper">
            <div className="auth-content">
                <div className="auth-bg">
                    <span className="r"></span>
                    <span className="r s"></span>
                    <span className="r s"></span>
                    <span className="r"></span>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-unlock auth-icon"></i>
                        </div>
                        <h3 className="mb-4">
                            Login
                        </h3>

                        <span className="mb-0 text-muted">
                            Add your credentials
                        </span>

                        <br />
                        <br />
                        
                        <form role="form" action="/">

                            <div className="input-group mb-3">
                                <input className="form-control" placeholder="Username" onChange={e=>{setUsername(e.target.value)}}/>
                            </div>
                            
                            <div className="input-group mb-4">
                                <input type="password" className="form-control" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}/>
                            </div>
                            
                            <ReCAPTCHA sitekey="6Lffh-opAAAAAGiv8o7ZHCLL5LzZe9XkzX7AthLv" onChange={setCaptcha}/>
                            <br/>

                            <button name="login" className="btn btn-primary shadow-2 mb-4" onClick={handleLogin} disabled={(captcha)?false:true}>Login</button>

                        </form>

                        <p className="mb-0 text-muted">Don’t have an account? <Link to="/register">Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LoginView;
