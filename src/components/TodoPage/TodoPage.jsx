import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import DropDown from "../DropDown/DropDown";

const TodoPage = () => {

    const navigate = useNavigate();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // let id = localStorage.getItem("Id");
    let data = JSON.parse(localStorage.getItem('data'));

    const handleProfileClick = () => {
        let data = JSON.parse(localStorage.getItem('data'));
        navigate(`/profile/page/${data.id}`)
    }

    const handlePostsClick = () => {
        navigate("/profile/page/posts");
    }

    const handleGalleryClick = () => {
        navigate("/profile/page/gallery");
    }

    const handleDropMenuClick = () => {
        // let data = JSON.parse(localStorage.getItem('data'));
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleDropClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div >
            <div onClick={handleDropClick}>
            <div className="nav-section">
                <h2 className="profile-text">Profile</h2>
                <div onClick={handleDropMenuClick} className="dropdown">
                    <img className="pic" src={data.profilepicture} />
                    <span className="username">{data.name}</span>
                </div>

            </div>
            {/* <hr className="line"></hr> */}
            <div className="post-container">
                <div class="container-profile">
                    <div class="options">
                        <div onClick={handleProfileClick} class="option" id="profile-option">Profile</div>
                        <div onClick={handlePostsClick} class="option" id="posts-option">Posts</div>
                        <div onClick={handleGalleryClick} class="option" id="gallery-option">Gallery</div>
                        <div class="option" id="todo-option">Todo</div>
                    </div>
                </div>
                <div>
                    <p className="post-text">Coming Soon</p>
                </div>
            </div>
            </div>
            
            {<ChatBox />}
            {isDropdownOpen && <DropDown data={JSON.parse(localStorage.getItem('data'))} />}
        </div>

    )
}

export default TodoPage