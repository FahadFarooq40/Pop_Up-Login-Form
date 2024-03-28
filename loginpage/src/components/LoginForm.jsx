import { useState } from "react";

const LoginForm = props => {
    
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };


  const onSubmitForm = e => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="text"
          aria-label="Email field"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          aria-label="Password field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Confirm Password</label>
        <input
          className="form-control"
          type="password"
          aria-label="Confirm password field"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onUpdateField}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;