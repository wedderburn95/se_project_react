import react, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./RegisterModal.css";

const RegisterModal = ({ isOpen, onClose, onRegister, onAltOptionClick }) => {
  const [form, setForm] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(form);
  };
  return (
    <ModalWithForm
      titleText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign up"
      // onAltOptionClick={onAltOptionClick}
      // registerOptionText="Register"
    >
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="Name"
      />
      <input
        name="avatar"
        type="url"
        value={form.avatar}
        onChange={handleChange}
        placeholder="Avatar URL"
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        required
        placeholder="Password"
      />
    </ModalWithForm>
  );
};

export default RegisterModal;
