import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <a href="https://www.facebook.com/"><i className="topIcon fab fa-facebook-square"></i></a>
            <a href="https://twitter.com/"><i className="topIcon fab fa-twitter-square"></i></a>
            <a href="https://www.pinterest.com/"><i className="topIcon fab fa-pinterest-square"></i></a>
            <a href="https://www.instagram.com/"><i className="topIcon fab fa-instagram-square"></i></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/" >ABOUT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/" >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/write" >WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (

                
                <img className="topImg"
                src="https://pbs.twimg.com/media/EeMWyMzXYAATWGy.jpg"
                alt="" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                        <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
            }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
