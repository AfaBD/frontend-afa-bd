import {Link} from 'react-router-dom'

function Navigation(props){
    return(
        <nav className="pcoded-navbar">
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                    <Link to="/home" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up"></i>
                        </div>
                        <span className="b-title">Página do Gestor</span>
                    </Link>
                    <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
                </div>
                <div className="navbar-content scroll-div">
                    <ul className="nav pcoded-inner-navbar">
                        <li className="nav-item pcoded-menu-caption">
                            <label>Queries</label>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                            className={`nav-item ${(props.id=='201')?'active':''}`}>
                            <Link to="/home/query/201" className="nav-link">
                                <span className="pcoded-mtext">Query 201 </span>
                            </Link>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                            className={`nav-item ${(props.id=='202')?'active':''}`}>
                            <Link to="/home/query/202" className="nav-link ">
                                <span className="pcoded-mtext">Query 202</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navigation