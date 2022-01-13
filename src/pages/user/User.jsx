import { CalendarToday, LocationSearching, MailOutlined, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="data:image/jpeg;base64,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" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">Annabeck</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10.12.199</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+1 123 456 78</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlined className="userShowIcon" />
                            <span className="userShowInfoTitle">Annabeck@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">New York USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="anna" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" placeholder="anna@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="12323131" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="new york" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="data:image/jpeg;base64,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" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
