import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../services/axios';
import { API } from '../services/api';
import ReactStars from "react-rating-stars-component";
const VeiwPost = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [posts, setPost] = useState(null);
    const getAllPoest = async () => {
      await axiosInstance.get(`${API.getAllPoest}/${id}`).then((res) => {
        console.log(res.data);
        if (res.data) {
          setPost(res.data);
        }
      });
    };
  
    useEffect(() => {
      getAllPoest();
    }, [id]);
  return (
    <>
  <img src='https://cdn-icons-png.flaticon.com/512/5700/5700554.png' className='backImg' onClick={()=>navigate(-1)}  />
      <div className='container'>
      {posts ? (
        <>
      
          <h2>{posts?.title}</h2>
          <p>{posts?.body}</p>
          <div className='tagsstar'> 
            <p>{posts?.tags}</p>
            <ReactStars
              value={posts?.reactions}
              count={5}
              edit={false}
              // onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              color="#ccc"
            />
          </div>
          {/* You can display other properties of the 'post' object here */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>

    </>
  )
}

export default VeiwPost