import './write.css'

export default function Write() {
    return (
        <div className="write">
            <img 
                className="writeImg"
                src="https://cdn.shopify.com/s/files/1/0014/6043/7104/files/Black-Excellence-Store-Logo_2_765b0636-59e0-4b41-bd31-73b35304eab8.png?height=628&pad_color=ffffff&v=1558252916&width=1200" 
                alt="" 
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Tell your story..." 
                        type="text" 
                        className="writeInput writeText"
                    ></textarea>                    
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
