import Header from "../components/Header";
import "./App.css";

const Profile = () => {
    return (

        <div>
            <Header name = "Basketball Shotclock" />
            

            <div className = "main">
                <div className = "profile">
                <h2>John Doe</h2>
                <p>Email: <strong>johndoe@stemingup.com</strong></p>
                </div>
            </div>
        </div>


    )
}

export default Profile;