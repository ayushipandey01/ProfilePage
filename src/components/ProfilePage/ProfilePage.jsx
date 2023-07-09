import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChatBox from "../ChatBox/ChatBox";
import DropDown from "../DropDown/DropDown";
import PostsPage from "../PostsPage/PostsPage";
import "./ProfilePage.css";


const ProfilePage = () => {

    // const { id, username, email , phone , profilepicture, address, website , company} = profile;

    const { id } = useParams();
    const navigate = useNavigate();

    // console.log("iddd" , id);

    const [usersData, setUsersData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        fetch('https://panorbit.in/api/users.json')
            .then(res => res.json())
            .then(users => {
                // console.log(users);
                // completeData.current = users.users;
                // setIsLoading(false);
                setUsersData(users.users);
                // this.setState({isLoading : false , usersData : users.users})            
            });
    }, [id])



    // let data = JSON.parse(localStorage.getItem('data'));

    // console.log({ data });  

    // obj = localStorage.setItem("Id", obj);

    const handleProfileClick = (index) => {
        let data = JSON.parse(localStorage.getItem('data'));
        navigate(`/profile/page/${data.id}`)
    }

    const handlePostsClick = (e) => {
        console.log(e.target);
        navigate("/profile/page/posts");
    }

    const handleGalleryClick = () => {
        navigate("/profile/page/gallery");
    }

    const handleTodoClick = () => {
        navigate("/profile/page/todo");
    }

    const toggleChatBox = () => {
        setIsOpen(!isOpen);
    };

    const handleDropMenuClick = () => {
        // let data = JSON.parse(localStorage.getItem('data'));
        setIsDropdownOpen(!isDropdownOpen);
    }

    console.log(isDropdownOpen);

    const handleDropClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }


    return (
        <div >

            {
                usersData.map((data, index) => {
                    if (data.id == id) {
                        return (
                            <div onClick={handleDropClick}>
                                <div className="nav-section">
                                    <h2 className="profile-text">Profile</h2>
                                    <div onClick={handleDropMenuClick} className="dropdown">
                                        <img className="pic" src={data.profilepicture} />
                                        <span className="username">{data.name}</span>
                                    </div>


                                </div>

                                {/* <hr className="line"></hr> */}
                                <div className="parent-cont">

                                    <div class="container-profile">
                                        <div class="options">
                                            <div onClick={() => handleProfileClick(index)} class="option" id="profile-option">Profile</div>
                                            <div onClick={handlePostsClick} class="option" id="posts-option">Posts</div>
                                            <div onClick={handleGalleryClick} class="option" id="gallery-option">Gallery</div>
                                            <div onClick={handleTodoClick} class="option" id="todo-option">Todo</div>
                                        </div>
                                    </div>
                                    <div class="details">
                                        <img className="profile-picture" src={data.profilepicture} />
                                        <p className="name">{data.name}</p>
                                        <div className="detail-container">
                                            <div className="user-details"><span className="title">Username :</span> {data.username}</div>
                                            <div className="user-details"><span className="title">e-mail :</span> {data.email}</div>
                                            <div className="user-details"><span className="title">Phone :</span> {data.phone}</div>
                                            <div className="user-details"><span className="title">Website : </span>{data.website}</div>
                                            {/* <hr className="new1"></hr> */}
                                        </div>
                                        <div>
                                            <h4>Company</h4>
                                            <div className="user-details"><span className="title">Name :</span> {data.company.name}</div>
                                            <div className="user-details"><span className="title">catchphrase :</span> {data.company.catchPhrase}</div>
                                            <div className="user-details"><span className="title">bs :</span> {data.company.bs}</div>
                                        </div>
                                    </div>

                                    <div className="address">
                                        <p>Address :</p>
                                        <div className="address-details"><span className="title">Street :</span> {data.address.street}</div>
                                        <div className="address-details"><span className="title">Suite :</span> {data.address.suite}</div>
                                        <div className="address-details"><span className="title">City :</span> {data.address.city}</div>
                                        <div className="address-details"><span className="title">Zipcode :</span> {data.address.zipcode}</div>
                                        <img className="map-picture" src="/map.png" />
                                        <br></br>
                                        <span className="latitude"><span className="title">Lat : </span>-37.3159</span>
                                        <span className="longitude"><span className="title">Long :</span> 81.1496</span>
                                    </div>

                                </div>
                            </div>

                        )
                    }
                })
            }

            <div>

            </div>
            {<ChatBox />}
            {isDropdownOpen && <DropDown data={JSON.parse(localStorage.getItem('data'))} />}
        </div>


    )
}

export default ProfilePage