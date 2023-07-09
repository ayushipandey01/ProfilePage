import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProfilePage from "../ProfilePage/ProfilePage";
import "./LandingPage.css";

const LandingPage = () => {

    // var completeData = useRef(null);

    const [usersData, setUsersData] = useState([]);

    var navigate = useNavigate();

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



    const handleProfileClick = (index) => {
        // console.log(usersData[index]);
        localStorage.setItem("data", JSON.stringify(usersData[index]));
        navigate(`/profile/page/${usersData[index].id}`);
    }


    return (
        <div className="landing-page-container">
            <h1 className="user-page-header">Select an account</h1>
            {
                usersData.map((data, index) => {
                    return (
                        <div key={data.id} className="all-users-card-container">
                            <div onClick={() => handleProfileClick(index)} className="all-users">
                                <img src={data.profilepicture} />
                                <div className="text">
                                    {data.name}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LandingPage