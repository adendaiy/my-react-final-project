


import React, { useState } from "react";
import img4 from "../assets/main-image3.png";

const Detail = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    IdNumber: "",
    gender: "",
    age: "",
    email: "",
    phoneNumber: "",
    weight: "",
    goal: "",
    membershipPlan: "",
    bankAccountNo: "",
    accountPin: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.fullName) errors.fullName = "Full Name is required";
    if (!formData.IdNumber) errors.IdNumber = "Id Number is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.age || isNaN(formData.age)) errors.age = "Valid age is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone Number is required";
    if (!formData.weight) errors.weight = "Weight is required";
    if (!formData.goal) errors.goal = "Goal is required";
    if (!formData.membershipPlan) errors.membershipPlan = "Membership Plan is required";
    if (!formData.bankAccountNo) errors.bankAccountNo = "Bank Account No is required";
    if (!formData.accountPin) errors.accountPin = "Account Pin is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormSubmitted(true);
        alert(`Hi ${formData.fullName}, thanks for joining Center-Hive Gym!`);
        resetForm();
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      IdNumber: "",
      gender: "",
      age: "",
      email: "",
      phoneNumber: "",
      weight: "",
      goal: "",
      membershipPlan: "",
      bankAccountNo: "",
      accountPin: ""
    });
    setFormErrors({});
  };

  return (
    <div className="container-fluid about_us align-items-center">
      <div className="container">
        <div className="row gx-0 align-items-center">
          <div
            className="col-md-6 "
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="fitness_col4">
              <h1 className="main_heading">Join Now, Center-Hive Gym</h1>
              <br />
              <p>
                We believe everyone should be able to enjoy a fit and healthy
                lifestyle. So we have made it simple, affordable & convenient for
                everyone to achieve their personal health goals.
              </p>
              <br />
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.fullName && (
                    <small className="form-text text-danger">
                      {formErrors.fullName}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="IdNumber">Id Number</label>
                  <input
                    type="text"
                    id="IdNumber"
                    name="IdNumber"
                    value={formData.IdNumber}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.IdNumber && (
                    <small className="form-text text-danger">
                      {formErrors.IdNumber}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {formErrors.gender && (
                    <small className="form-text text-danger">
                      {formErrors.gender}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.age && (
                    <small className="form-text text-danger">
                      {formErrors.age}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="weight">Current Weight</label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.weight && (
                    <small className="form-text text-danger">
                      {formErrors.weight}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.email && (
                    <small className="form-text text-danger">
                      {formErrors.email}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.phoneNumber && (
                    <small className="form-text text-danger">
                      {formErrors.phoneNumber}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="goal">Goals</label>
                  <textarea
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="form-control"
                  ></textarea>
                  {formErrors.goal && (
                    <small className="form-text text-danger">
                      {formErrors.goal}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="membershipPlan">Membership Plan</label>
                  <select
                    id="membershipPlan"
                    name="membershipPlan"
                    value={formData.membershipPlan}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select Plan</option>
                    <option value="Monthly Plan - 1500 ksh/Per Month">Monthly Plan - 1500 ksh/Per Month</option>
                    <option value="Quarterly Plan - 1200 ksh/Per Month">Quarterly Plan - 1200 ksh/Per Month</option>
                    <option value="Yearly Plan - 1000 ksh/Per Month">Yearly Plan - 1000 ksh/Per Month</option>
                  </select>
                  {formErrors.membershipPlan && (
                    <small className="form-text text-danger">
                      {formErrors.membershipPlan}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="bankAccountNo">Bank Account No</label>
                  <input
                    type="text"
                    id="bankAccountNo"
                    name="bankAccountNo"
                    value={formData.bankAccountNo}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.bankAccountNo && (
                    <small className="form-text text-danger">
                      {formErrors.bankAccountNo}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="accountPin">Account Pin</label>
                  <input
                    type="password"
                    id="accountPin"
                    name="accountPin"
                    value={formData.accountPin}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.accountPin && (
                    <small className="form-text text-danger">
                      {formErrors.accountPin}
                    </small>
                  )}
                </div>
                <br />
                <button type="submit" className="btn1 btn0 btn-primary">
                  Submit
                </button>
              </form>
              {formSubmitted && (
                <h1 className="text-align-center">
                  <br />
                  <b>Thanks for registering with us!</b>
                </h1>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="fitness_colform3"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <img src={img4} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
