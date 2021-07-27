import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                    src="https://cdn.shopify.com/s/files/1/0135/0280/8123/articles/MLK_1024x1024.jpg?v=1542723053" 
                    alt=""
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse deleniti repellendus ipsam nam quos laborum ea, cupiditate quasi quae aliquam odit! Blanditiis, doloribus cupiditate.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Movies</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <a href="https://www.facebook.com/"><i className="topIcon fab fa-facebook-square"></i></a>
            <a href="https://twitter.com/"><i className="topIcon fab fa-twitter-square"></i></a>
            <a href="https://www.pinterest.com/"><i className="topIcon fab fa-pinterest-square"></i></a>
            <a href="https://www.instagram.com/"><i className="topIcon fab fa-instagram-square"></i></a>
            </div>
            </div>
        </div>
    )
}
