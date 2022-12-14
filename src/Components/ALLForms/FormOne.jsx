import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function FormOne() {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [fullName, setFullName] = useState("");
  const formOneDispatch = useDispatch();
  const navigate = useNavigate();
  const handleDispatchAndRoute = (e) => {
    e.preventDefault();
    formOneDispatch({
      type: "FORM_ONE_DATA",
      payload: { fname, mname, lname, fullName },
    });
    navigate("/formtwo");
  };
  return (
    <Form>
      <Form.Label>First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="First Name"
        onChange={(e) => setFname(e.target.value)}
      />
      <Form.Label>Middle Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Middle Name"
        onChange={(e) => setMname(e.target.value)}
      />
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Last Name"
        onChange={(e) => setLname(e.target.value)}
      />
      <Form.Label>Full Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
      />

      <Button variant="primary" onClick={handleDispatchAndRoute}>
        Next
      </Button>
    </Form>
  );
}

export default FormOne;
