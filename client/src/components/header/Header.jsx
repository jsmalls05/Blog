import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>    
                <span className="headerTitleLg">Blog</span>    
            </div>  
            <img 
                className="headerImg" 
                src="https://cdn.shopify.com/s/files/1/0011/7103/0131/products/image_1125x.jpg?v=1565039271" 
                alt=""
            />
        </div>
    )
}
