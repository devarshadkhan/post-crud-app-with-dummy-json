import React, { useState } from "react";
import axiosInstance from "../services/axios";
import { API } from "../services/api";

const AddPost = () => {
  const [userId, setuUerId] = useState();
  const [body, setBody] = useState();
  const [id, setId] = useState();
  const [title, setTitle] = useState();

  const addPost = async () => {
    const res = await axiosInstance.post(API.addPost, {
      userId: userId,
      body: body,
      title: title,
      id:id
    });
    console.log("hdsuahfushfcudshfjsdhfsdhfsd",res);
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Enter Your ID" value={id} onChange={(e)=>setId(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Enter Your userID" value={userId}  onChange={(e)=>setuUerId(e.target.value)} />
      </div>
      <div>
        {" "}
        <input type="text" placeholder="Enter Your Title" value={title} onChange={(e)=>setTitle(e.target.value)}  />
      </div>
      <div>
        <textarea  placeholder="Enter Your body" value={body} onChange={(e)=>setBody(e.target.value)} />
      </div>
      

      <button onClick={addPost}>Create Post</button>
    </div>
  );
};

export default AddPost;
