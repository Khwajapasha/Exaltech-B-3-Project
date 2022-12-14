import { cardActionAreaClasses } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
const Courses = () => {
  const selector = useSelector((state) => state.CourseReducer);
  return (
    <div>
      {selector.map((item) => {
        return (
          <Card style={{ width: "18rem", display: "inline-block" }}>
            <Card.Img src={item.courseImg} width="16rem" height="300rem" />
            <Card.Title>{item.courseTitle}</Card.Title>
            <Card.Text>{item.courseDesc}</Card.Text>
          </Card>
        );
      })}
    </div>
  );
};
export default Courses;
