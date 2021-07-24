import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                            src="https://i.pinimg.com/originals/a5/90/f1/a590f1191bed484ac74b70fd6a29b6dc.png" 
                            alt="" 
                        />
                        <label htmlFor="fileInput">
                            <i class="settingsPPIcon fas fa-user-plus"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="James" />
                    <label>Email</label>
                    <input type="email" placeholder="smallsjc05@gmail.com" />
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
