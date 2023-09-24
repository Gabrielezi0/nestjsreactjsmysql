import { useState } from "react";
import axios from "axios";
import Username from "./Username";
import Userdata from "./Userdata";
import Success from "./Success";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [id, setId] = useState("");
  const [showUserNameField, setShowUserNameField] = useState(true);
  const [showUserData, setShowUserData] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const getUserDetails = () => {
    if (!userName) return;
    resetData();
    axios({
      url: "http://localhost:3000/users/user/" + userName,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.data) return;
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setBirthday(response.data.birthday);
        setId(response.data.id);
        setShowUserNameField(false);
        setShowUserData(true);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  const setUserDetails = () => {
    if (!userName || !name || !email || !phone || !birthday) return;
    const url = id
      ? "http://localhost:3000/users/" + id
      : "http://localhost:3000/users/";
    const method = id ? "PATCH" : "POST";
    const data = id
      ? { name, email, phone, birthday }
      : { name, email, phone, birthday, userName };
    axios({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    })
      .then((response) => {
        if(response.status === 200 || response.status === 201){
          resetData();
          setUserName("");
          setShowUserData(false);
          setShowSuccess(true);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  const resetData = () => {
    setName("");
    setEmail("");
    setPhone("");
    setBirthday("");
    setId("");
  };
  const cancel = () => {
    resetData();
    setUserName("");
    setShowUserNameField(true);
    setShowUserData(false);
    setShowSuccess(false);
  };
  return (
    <div className="container">
      <div className="row">
        {showUserNameField ? (
          <Username
            userName={userName}
            setUserName={setUserName}
            getUserDetails={getUserDetails}
          />
        ) : null}
        {showUserData ? (
          <Userdata
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            birthday={birthday}
            setBirthday={setBirthday}
            setUserDetails={setUserDetails}
            cancel={cancel}
          />
        ) : null}
        {showSuccess ? <Success cancel={cancel} /> : null}
      </div>
    </div>
  );
};

export default Home;
