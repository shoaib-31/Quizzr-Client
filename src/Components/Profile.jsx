import { useDispatch, useSelector } from "react-redux";
import PowerOff from "../assets/power-off.svg";
import Trash from "../assets/trash.svg";
import Setting from "../assets/setting.svg";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  const { name, email, phone, college, totalQuizGiven, totalQuizCreated } =
    user;
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const openDeleteModal = () => setDeleteModalOpen(true);
  const closeDeleteModal = () => setDeleteModalOpen(false);
  const openUpdateModal = () => setUpdateModalOpen(true);
  const closeUpdateModal = () => setUpdateModalOpen(false);
  const [formData, setFormData] = useState({
    newName: name,
    newEmail: email,
    newPhone: phone,
    newCollege: college,
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(updateUser({ id: user.id, ...formData }));
  //   closeUpdateModal();
  // };

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  return (
    <Main>
      <Latest>Your Profile</Latest>
      <Field>
        <Label>Name:</Label>
        <Value>{name}</Value>
      </Field>
      <Field>
        <Label>Email:</Label>
        <Value>{email}</Value>
      </Field>
      <Field>
        <Label>Phone Number:</Label>
        <Value>{phone}</Value>
      </Field>
      <Field>
        <Label>College:</Label>
        <Value>{college}</Value>
      </Field>
      <Field>
        <Label>Total Quizzes Given:</Label>
        <Value>{totalQuizGiven}</Value>
      </Field>
      <Field>
        <Label>Total Quizzes Created:</Label>
        <Value>{totalQuizCreated}</Value>
      </Field>
      <SeeAll onClick={openUpdateModal} className="update">
        <img style={{ width: "2rem", height: "2rem" }} src={Setting} />
        &nbsp;&nbsp; Update Acoount
      </SeeAll>
      <SeeAll onClick={openDeleteModal} className="delete">
        <img style={{ width: "2rem", height: "2rem" }} src={Trash} />
        &nbsp;&nbsp; Delete Acoount
      </SeeAll>
      <SeeAll>
        <img style={{ width: "2rem", height: "2rem" }} src={PowerOff} />
        &nbsp;&nbsp; Logout
      </SeeAll>
      {/* 
      Modals 
      */}
      <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
        <h2>Are you sure want to delete your Account?</h2>
        <Buttons>
          <ConfirmBtn>Yes</ConfirmBtn>
          <ConfirmBtn onClick={closeDeleteModal}>No</ConfirmBtn>
        </Buttons>
      </Modal>
      <Modal isOpen={isUpdateModalOpen} onClose={closeUpdateModal}>
        <UpdateAccountForm>
          <h2>Update Account</h2>
          <InputField
            type="text"
            name="newName"
            value={formData.newName}
            onChange={handleChange}
            placeholder="New Name"
          />
          <InputField
            type="email"
            name="newEmail"
            value={formData.newEmail}
            onChange={handleChange}
            placeholder="New Email"
          />
          <InputField
            type="tel"
            name="newPhone"
            value={formData.newPhone}
            onChange={handleChange}
            placeholder="New Phone"
          />
          <InputField
            type="text"
            name="newCollege"
            value={formData.newCollege}
            onChange={handleChange}
            placeholder="New College"
          />
          <InputField
            type="text"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="New Password"
          />
          <Buttons>
            <ConfirmBtn type="submit">Update</ConfirmBtn>
            <ConfirmBtn onClick={closeUpdateModal}>Cancel</ConfirmBtn>
          </Buttons>
        </UpdateAccountForm>
      </Modal>
    </Main>
  );
};
const ConfirmBtn = styled.div`
  width: 40%;
  padding: 1rem;
  border-radius: 5px;
  background-color: #483ae5;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;
const Main = styled.div`
  background-color: white;
  width: 50%;
  margin: auto;
  padding: 2rem;
  border-radius: 1rem 0 0 1rem;
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #636363;
    border-radius: 3px;
    &:hover {
      background-color: #8f8f8f;
    }
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
const Latest = styled.div`
  font-size: 3rem;
  color: #3626b1;
  font-weight: 700;
  margin: 1rem 0;
`;
const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  width: 100%;
  gap: 2rem;
`;
const Label = styled.div`
  font-size: 1.2rem;
  color: #000;
  font-weight: 700;
`;
const Value = styled.div`
  font-size: 1rem;
  color: #000000;
  font-weight: 400;
  border-bottom: 1px solid #000000;
  padding: 0.5rem 2rem;
  border-radius: 3px;
  background-color: #eae8ff;
`;
const SeeAll = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  background-color: #483ae5;
  border-radius: 4px;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #2a1f9f;
  }
  &.delete {
    background-color: #ff3232;
    &:hover {
      background-color: #d51f1f;
    }
  }
  &.update {
    background-color: #000;
    color: #fff;
    &:hover {
      background-color: #1f1f1f;
    }
  }
`;
const UpdateAccountForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
`;

const InputField = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const UpdateButton = styled.button`
  background-color: #3626b1;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #2a1f9f;
  }
`;
export default Profile;
