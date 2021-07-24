import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
            className="postImg"
            src="https://ca-times.brightspotcdn.com/dims4/default/bec99d7/2147483647/strip/true/crop/2000x2706+0+0/resize/840x1137!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fff%2F2c%2Fdedf568e4af087cab5f0a5c76f32%2Fla-ca-bk-a-promised-land-barack-obama-183.JPG"
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis exercitationem, quae, maiores eum dolorum eos deleniti quod harum earum, laborum enim rerum ab? Iure eos, impedit modi rem perferendis soluta ipsum. Sit harum magnam necessitatibus sequi quos unde ea culpa quasi a maxime similique perspiciatis, quam, qui blanditiis dolore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis exercitationem, quae, maiores eum dolorum eos deleniti quod harum earum, laborum enim rerum ab? Iure eos, impedit modi rem perferendis soluta ipsum. Sit harum magnam necessitatibus sequi quos unde ea culpa quasi a maxime similique perspiciatis, quam, qui blanditiis dolore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis exercitationem, quae, maiores eum dolorum eos deleniti quod harum earum, laborum enim rerum ab? Iure eos, impedit modi rem perferendis soluta ipsum. Sit harum magnam necessitatibus sequi quos unde ea culpa quasi a maxime similique perspiciatis, quam, qui blanditiis dolore!
            </p>
        </div>
    )
}
