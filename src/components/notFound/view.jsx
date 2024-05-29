import { Link } from "react-router-dom";

function NotFound(){

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
                            <i className="feather x-circle"></i>
                        </div>
                        <h3 className="mb-4">Error 404</h3>

                        <br />

                        <span className="mb-0 text-muted">
                            Page not found - <Link to="/home">Home</Link> 
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default NotFound;