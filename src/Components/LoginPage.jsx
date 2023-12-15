import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BottomWave from "../assets/bg.svg";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/userReducer";

const LoginPage = () => {
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [phone, setPhone] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");

    const fetchUserInfo = async () => {
      try {
        if (jwtToken) {
          axios.defaults.headers.common["Authorization"] = jwtToken;
          const response = await axios.get(
            `${import.meta.env.VITE_HOST}/auth/getUser`
          );

          const userInfo = response.data.user;
          dispatch(login(userInfo));
        }
      } catch (error) {
        console.error("Error fetching user information", error.message);
      }
    };

    fetchUserInfo();
  }, [dispatch]);
  const handleLoginOrSignUp = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (signUp) {
        response = await axios.post(
          `${import.meta.env.VITE_HOST}/auth/signup`,
          {
            email,
            name: username,
            password,
            college,
            phone,
          }
        );
        alert("Signup Successful, Login to continue!");
        setSignUp(false);
        window.location.reload();
      } else {
        response = await axios.post(`${import.meta.env.VITE_HOST}/auth/login`, {
          email,
          password,
        });
        console.log("Login Successful", response.data);
      }

      if (response.status >= 200 && response.status < 300) {
        dispatch(login(response.data.user));
        Cookies.set("jwtToken", response.data.token, {
          expires: 1 / 24,
        });

        axios.defaults.headers.common["Authorization"] =
          Cookies.get("jwtToken");

        setEmail("");
        setUsername("");
        setPassword("");
        setCollege("");
        setPhone("");
      } else {
        console.error("Authentication Failed", response.data.message);
        alert("Authentication Failed");
      }
    } catch (error) {
      console.error("Authentication Failed", error.message);
      alert("Authentication Failed :", error.message);
    }
  };

  return (
    <Main>
      <LowerWave src={BottomWave} />
      <Logo>Quizzr</Logo>
      <Box signUp={signUp}>
        <H>{signUp ? "Sign Up" : "LOGIN"}</H>
        <Form onSubmit={handleLoginOrSignUp}>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {signUp && (
            <>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="text"
                placeholder="College"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </>
          )}
          <Button type="submit">{signUp ? "Sign Up" : "Login"}</Button>
        </Form>
        <Signup
          onClick={() => {
            setSignUp(!signUp);
          }}
        >
          {signUp
            ? "Already registered? Login"
            : "Don't have an account? Sign Up"}
        </Signup>
      </Box>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Signup = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  color: #6726b1;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #451d74;
  }
`;

const LowerWave = styled.img`
  position: absolute;
  bottom: -6rem;
  left: 0;
  z-index: 1;
`;

const Box = styled.div`
  position: relative;
  z-index: 2;
  width: 25rem;
  height: ${(props) => (props.signUp ? "26rem" : "16rem")};
  transition: all 0.1s ease-in-out;
  padding: 1.5rem;
  margin-top: 1rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 20px #3626b1;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 3rem;
  padding: 0.5rem 1rem;
  border: 4px solid #6726b1;
  border-radius: 1rem;
  margin: 0.5rem;
  color: #6726b1;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  outline: none;
  transition: all 0.3s ease-in-out;
  &:focus {
    border-color: #6726b1;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #6726b1;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #501c8c;
  }
`;

const H = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  color: #6726b1;
  transition: all 0.3s ease-in-out;
`;

export default LoginPage;
