import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import generateUniqueId from 'react-id-generator';
import './Hospitality.css';

const getStorageData = () => {
  return JSON.parse(localStorage.getItem("managment")) || [];
};

const Managment = () => {
  const initialState = {
    firstname: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    bloodgrp: "",
    contactno: "",
    decription: "",
    docter: "",
    date: "",
    city: "",
    address: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [Patientdata, setPatientdata] = useState(getStorageData());
  const [formError, setFormError] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (inputForm.firstname === "") {
      errors.firstname = "Firstname is required.";
    } else if (inputForm.firstname.length < 5) {
      errors.firstname = "Firstname must be at least 5 characters.";
    }

    if (inputForm.email === "") {
      errors.email = "Email is required.";
    }

    if (inputForm.password === "") {
      errors.password = "Password is required.";
    }

    if (inputForm.gender === "") {
      errors.gender = "Gender is required.";
    }

    if (inputForm.age === "") {
      errors.age = "Age is required.";
    }

    if (inputForm.bloodgrp === "") {
      errors.bloodgrp = "Blood group is required.";
    }

    if (inputForm.contactno === "") {
      errors.contactno = "Contact no is required.";
    }

    if (inputForm.decription === "") {
      errors.decription = "Description is required.";
    }

    if (inputForm.docter === "") {
      errors.docter = "Doctor is required.";
    }

    if (inputForm.date === "") {
      errors.date = "Date is required.";
    }

    if (inputForm.city === "") {
      errors.city = "City is required.";
    }

    if (inputForm.address === "") {
      errors.address = "Address is required.";
    }

    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (isEdit) {
      const updatedData = Patientdata.map((p) =>
        p.id === inputForm.id ? inputForm : p
      );
      setPatientdata(updatedData);
      setIsEdit(false);
    } else {
      const id = generateUniqueId();
      const newRecord = { ...inputForm, id };
      setPatientdata([...Patientdata, newRecord]);
    }

    setInputForm(initialState);
    setFormError({});
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      const updatedData = Patientdata.filter((p) => p.id !== id);
      setPatientdata(updatedData);
    }
  };

  const handleEdit = (id) => {
    const record = Patientdata.find((p) => p.id === id);
    setInputForm(record);
    setIsEdit(true);
  };

  useEffect(() => {
    localStorage.setItem("managment", JSON.stringify(Patientdata));
  }, [Patientdata]);

  return (
    <>
      <Container>
        <h1>HOSPITALITY</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Patient First Name:</Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstname"
                value={inputForm.firstname}
                onChange={handleChanged}
              />
              {formError.firstname && (
                <div className="text-danger">{formError.firstname}</div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Email:</Form.Label>
            <Col sm="6">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={inputForm.email}
                onChange={handleChanged}
              />
              {formError.email && (
                <div className="text-danger">{formError.email}</div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Password:</Form.Label>
            <Col sm="6">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={inputForm.password}
                onChange={handleChanged}
              />
              {formError.password && (
                <div className="text-danger">{formError.password}</div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Gender:</Form.Label>
            <Col sm="6">
              <Form.Select
                name="gender"
                value={inputForm.gender}
                onChange={handleChanged}
              >
                <option value="">Select gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </Form.Select>
              {formError.gender && (
                <div className="text-danger">{formError.gender}</div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Age:</Form.Label>
            <Col sm="6">
              <Form.Control
                type="number"
                placeholder="Age"
                name="age"
                value={inputForm.age}
                onChange={handleChanged}
              />
              {formError.age && (
                <div className="text-danger">{formError.age}</div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Contact No:</Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Contact Number"
                name="contactno"
                value={inputForm.contactno}
                onChange={handleChanged}
              />
              {formError.contactno && (
                <div className="text-danger">{formError.contactno}</div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Blood Group:</Form.Label>
            <Col sm="6">
              <Form.Select
                name="bloodgrp"
                value={inputForm.bloodgrp}
                onChange={handleChanged}
              >
                <option value="">Select blood group</option>
                <option value="A">A</option>
                <option value="A+">A+</option>
                <option value="O">O</option>
                <option value="O+">O+</option>
                <option value="B">B</option>
                <option value="B+">B+</option>
              </Form.Select>
              {formError.bloodgrp && (
                <div className="text-danger">{formError.bloodgrp}</div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Description:</Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Description"
                name="decription"
                value={inputForm.decription}
                onChange={handleChanged}
              />
              {formError.decription && (
                <div className="text-danger">{formError.decription}</div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Select Doctor:</Form.Label>
            <Col sm="6">
              <Form.Select
                name="docter"
                value={inputForm.docter}
                onChange={handleChanged}
              >
                <option value="">Select doctor</option>
                <option value="h">Hardik Donda - Headache</option>
                <option value="s">Chandu Chirkut - Stomach</option>
                <option value="d">Tinku Jadyo - Dentist</option>
                <option value="e">Chota Raju - Eyes</option>
              </Form.Select>
              {formError.docter && (
                <div className="text-danger">{formError.docter}</div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Date:</Form.Label>
            <Col sm="6">
              <Form.Control
                type="date"
                name="date"
                value={inputForm.date}
                onChange={handleChanged}
              />
              {formError.date && (
                <div className="text-danger">{formError.date}</div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">City:</Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={inputForm.city}
                onChange={handleChanged}
              />
              {formError.city && (
                <div className="text-danger">{formError.city}</div>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Address:</Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={inputForm.address}
                onChange={handleChanged}
              />
              {formError.address && (
                <div className="text-danger">{formError.address}</div>
              )}
            </Col>
          </Form.Group>

          <Button type="submit">{isEdit ? "Update" : "Register"}</Button>
        </Form>
      </Container>

      <hr />

      <Container className="mt-4">
        <h2>Patient Records</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Blood Group</th>
                <th>Contact No</th>
                <th>Description</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>City</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Patientdata.length === 0 ? (
                <tr>
                  <td colSpan="14" className="text-center">No records found.</td>
                </tr>
              ) : (
                Patientdata.map((patient, index) => (
                  <tr key={patient.id}>
                    <td>{index + 1}</td>
                    <td>{patient.firstname}</td>
                    <td>{patient.email}</td>
                    <td>{patient.password}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.age}</td>
                    <td>{patient.bloodgrp}</td>
                    <td>{patient.contactno}</td>
                    <td>{patient.decription}</td>
                    <td>{patient.docter}</td>
                    <td>{patient.date}</td>
                    <td>{patient.city}</td>
                    <td>{patient.address}</td>
                    <td>
                      <Button variant="info" size="sm" className="me-2" onClick={() => handleEdit(patient.id)}>Edit</Button>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(patient.id)}>Delete</Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default Managment;
