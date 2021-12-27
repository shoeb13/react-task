import "./write.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Write(props) {

  const [blog, setBlog] = useState({
    title:"",
    post:""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setBlog((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function onAdd(event) {
    props.addBlog(blog);

    //event.preventDefault();
    setBlog({
      title: "",
      post: ""
    });

    alert("blog created succesfully")



  
  }

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
   
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} /> 
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            name="title"
            onChange={handleChange}
            value={blog.title}
            required
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            name="post"
            onChange={handleChange}
            value={blog.post}
            required
          />
        </div>
        <Link to="/">
        <button className="writeSubmit" type="submit" onClick={onAdd}  >
          Publish
        </button>
        </Link>
      </form>
    </div>
  );
}
