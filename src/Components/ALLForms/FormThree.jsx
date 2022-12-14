import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function FormThree() {
  const [priAdd, setPriAdd] = useState("");
  const [secAdd, setSecAdd] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const formThreeDispatch = useDispatch();
  const navigate = useNavigate();
  const handleCLick = (e) => {
    e.preventDefault();
    formThreeDispatch({
      type: "FORM_THREE_DATA",
      payload: { priAdd, secAdd, city, state },
    });
    navigate("/summary");
  };
  return (
    <Form>
      <Form.Label>Primary Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Height"
        onChange={(e) => setPriAdd(e.target.value)}
      />
      <Form.Label>Permanent Address </Form.Label>
      <Form.Control
        type="text"
        placeholder="Weight"
        onChange={(e) => setSecAdd(e.target.value)}
      />
      <Form.Label>City</Form.Label>
      <Form.Control
        type="text"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
      />
      <Form.Label>State</Form.Label>
      <Form.Control
        type="text"
        placeholder="State"
        onChange={(e) => setState(e.target.value)}
      />

      <Button variant="primary" type="submit" onClick={handleCLick}>
        Next
      </Button>
    </Form>
  );
}

export default FormThree;
