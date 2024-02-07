import { useNavigate } from "react-router-dom";
import scss from "./HomePages.module.scss";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Button from "../ul/button/Button";
import { createPortal } from "react-dom";
import Modal from "../modal/Modal";
const url =
	"https://api.elchocrud.pro/api/v1/c42c42758e7e6bb4969e75eb3a2b9390/figma";

const HomePages = () => {
  const navigate =  useNavigate();
  const [userProfile, setUserProfile] = useState({});
  const [modal, setModal] = useState(false);
  const [state, setState] = useState([]);

  const getUserId = localStorage.getItem('isAuth');
  const getUserProfile = async () => {
    try {
      const response = await axios.get(url);
      const responseData = await response.data;
      setState([...responseData])
      if(getUserId) {
        const findUser = responseData.find((item) => item._id === +getUserId);
        setUserProfile(findUser);
      } else {
        setModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const removeUser = () => {
    localStorage.removeItem('isAuth');
    setUserProfile({});
    navigate('/')
  }
  const removeUsers = () => {
    localStorage.removeItem('isAuth');
  }
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      removeUsers();
      getUserProfile()
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUserProfile();
  }, []);
	return (
		<>
    <div className={scss.home}>
			<div className="container">
				<div className={scss.content}>
          <div className={scss.div1}>
            <h1>{userProfile.loginUser}</h1>
            <Button onClick={removeUser}>Exit</Button>
          </div>
          <div className={scss.cards}>
            {state.map((item, index) => (
              <div className={scss.card} key={index}>
                <h2>{item.loginUser}</h2>
                <p>{item.passwordUser}</p>
                <Button onClick={() => deleteUser(item._id)}>delete</Button>
              </div>
            ))}
          </div>
        </div>
			</div>
		</div>
    {modal && createPortal(
      <Modal setModal={setModal}>
        <h1>user is not auth</h1>
      </Modal>,
      document.getElementById('modal')
    )}
    </>
	);
};

export default HomePages;
