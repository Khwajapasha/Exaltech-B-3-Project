import React, { useState } from "react";
import { useDispatch } from "react-redux";
const Dashboard = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [target, setTarget] = useState("");

  const [carImage, setCarouselImage] = useState("");
  const [carTitle, setCarouselTitle] = useState("");
  const [carDesc, setCarouselDesc] = useState("");

  const [cardImage, setCardImage] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardDesc, setCardDesc] = useState("");

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "ADD_LINK", data: { name, link, target } });
  };
  const handleDispatch = () => {
    dispatch({
      type: "ADD_CAROUSEL",
      payload: {
        carouselImage: carImage,
        carouselTitle: carTitle,
        carouselDesc: carDesc,
      },
    });
  };
  const handleCourses = () => {
    dispatch({
      type: "ADD_COURSES",
      meriMarzi: {
        courseImg: cardImage,
        courseTitle: cardTitle,
        courseDesc: cardDesc,
      },
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="link name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="link address"
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="link target"
        onChange={(e) => setTarget(e.target.value)}
      />
      <button onClick={handleClick}>dispatch links</button>
      <br />
      <hr />
      <input
        type="text"
        placeholder="carousel image"
        onChange={(event) => setCarouselImage(event.target.value)}
      />
      <input
        type="text"
        placeholder="carousel title"
        onChange={(k) => setCarouselTitle(k.target.value)}
      />
      <input
        type="text"
        placeholder="carousel desc"
        onChange={(j) => setCarouselDesc(j.target.value)}
      />
      <button onClick={handleDispatch}>Dispacth Carousel</button>
      <br />
      <hr />
      <input
        type="text"
        placeholder="course image"
        onChange={(e) => setCardImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="course title"
        onChange={(e) => setCardTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="course desc"
        onChange={(e) => setCardDesc(e.target.value)}
      />
      <button onClick={handleCourses}>dipatch courses</button>
    </div>
  );
};

export default Dashboard;
