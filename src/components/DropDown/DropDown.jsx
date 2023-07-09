import "./DropDown.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const DropDown = ({ data }) => {
    // let data;

    const [usersData, setUsersData] = useState([]);

    const navigate = useNavigate();


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
    }, [])

    const handleLogOutClick = () => {
        // localStorage.removeItem("data");
        navigate("/");
    }


    return (
        <div className="drop-down-container shadow d-flex direction-column absolute">
            <img className="drop-image" src={data.profilepicture} />
            <span className="drop-text" >
                {data.name}
            </span>
            <span className="drop-text" >
                {data.email}
            </span>
            <div className="drop-line"></div>
            {
                usersData.map((data, index) => {
                    if (index === 2) {
                        return (
                            <div className='chat-profile'>
                                <img src={data.profilepicture} />
                                <div className="text-chat">
                                    {data.name}
                                </div>
                            </div>
                        )
                    }
                    else if (index === 7) {
                        return (
                            <div className='chat-profile'>
                                <img src={data.profilepicture} />
                                <div className="text-chat">
                                    {data.name}
                                </div>
                            </div>
                        )
                    }


                })
            }
            <button onClick={handleLogOutClick} className="signout-button" >
                Sign out</button>
        </div>
    )
}

export default DropDown