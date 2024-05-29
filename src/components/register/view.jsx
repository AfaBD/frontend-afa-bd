import {Link} from 'react-router-dom'

function RegisterView(){
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
                            <i className="feather icon-user-plus auth-icon"></i>
                        </div>
                        <h3 className="mb-4">Sign up</h3>

                        {/* <span className="mb-0 text-muted">
                            {% if msg %}
                                {{ msg | safe }}
                            {% else %}
                                Add your credentials
                            {% endif %} 
                        </span> */}

                        <br />
                        <br />

                        <form role="form" method="post" action="">
{/* 
                            {% csrf_token %}                    

                            <div className="input-group mb-3">
                                {{ form.username }}
                            </div>
                            <span className="text-error">{{ form.username.errors }}</span>

                            <div className="input-group mb-3">
                                {{ form.email }}
                            </div>
                            <span className="text-error">{{ form.email.errors }}</span>

                            <div className="input-group mb-4">
                                {{ form.password1 }}
                            </div>
                            <span className="text-error">{{ form.password1.errors }}</span>

                            <div className="input-group mb-4">
                                {{ form.password2 }}
                            </div>
                            <span className="text-error">{{ form.password2.errors }}</span> */}
                            
                            <div className="form-group text-left">
                                <div className="checkbox checkbox-fill d-inline">
                                    <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                    <label htmlFor="checkbox-fill-a1" className="cr"> Agree with <a href="#">terms</a></label>
                                </div>
                            </div>
                            <button type="submit" name="register" className="btn btn-primary shadow-2 mb-4">Register</button>

                        </form>

                        <p className="mb-0 text-muted">Already have an account? <Link to="/" >Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterView