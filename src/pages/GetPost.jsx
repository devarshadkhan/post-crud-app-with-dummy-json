// import React, { useEffect, useState } from "react";
// import axiosInstance from "../services/axios";
// import { API } from "../services/api";
// import ReactStars from "react-rating-stars-component";
// import PostCard from "../components/PostCard";
// import ResponsivePagination from 'react-responsive-pagination';
// import 'react-responsive-pagination/themes/classic.css';

// const GetPost = () => {
//   const [posts, setPost] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1); // Current page state
//   const [totalPages, setTotalPages] = useState(1); // Total pages state
//   const getAllPoest = async () => {
//     await axiosInstance.get(`https://dummyjson.com/posts?limit=10&skip=${(currentPage - 1) * 10}`).then((res) => {
//       console.log(res);
//       if (res.data.posts) {
//         setPost(res.data.posts);
//         setTotalPages(res.data.limit);
//       }
//     });
//   };

//   useEffect(() => {
//     getAllPoest();
//   }, []);

//   //paginate

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage); // Update the current page when the user changes page
//   };

//   return (
//     <>

//     {/* <PostCard /> */}

//        <div className="container">
//          {posts.map((item, id) => {
//           return (
//             <div key={id}>
//             <PostCard item={item} />
//             </div>
//           );
//         })}
//         <ResponsivePagination
//       current={currentPage}
//       total={totalPages}
//       onPageChange={handlePageChange}
//     />
//        </div>

//     </>
//   );
// };

// export default GetPost;

import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axios";
import { API } from "../services/api";
import ReactStars from "react-rating-stars-component";
import PostCard from "../components/PostCard";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { Link } from "react-router-dom";

const GetPost = () => {
  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [totalPages, setTotalPages] = useState(1); // Total pages state
  const limitPerPage = 10; // Number of items per page

  const getAllPosts = async (page) => {
    try {
      const response = await axiosInstance.get(
        `${API.getAllPoest}?limit=${limitPerPage}&skip=${
          (page - 1) * limitPerPage
        }`
      );

      if (response.data.posts) {
        setPost(response.data.posts);
        setTotalPages(Math.ceil(response.data.total / limitPerPage)); // Calculate total pages based on the total number of items
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getAllPosts(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage); // Update the current page when the user changes page
    getAllPosts(newPage); // Fetch data for the new page
  };

  // serach api

  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);

  const getSearchPost = async () => {
    try {
      const response = await axiosInstance.get(
        `https://dummyjson.com/posts/search?q=${search || ""}`
      );

      if (response.data.posts) {
        setPost(response.data.posts);
        setTotalPages(Math.ceil(response.data.total / limitPerPage)); // Calculate total pages based on the total number of items
        setSearched(true);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const debounce = (func, delay) => {
    let timeoutId;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };
  const debouncedFetchData = debounce(getSearchPost, 500);
  useEffect(() => {
    debouncedFetchData();
  }, [search]);
  return (
    <>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Link to="/createpost" >Create post</Link>
      <div className="container">
        {searched && posts.length === 0 ? (
          <p>No results found.</p>
        ) : (
          posts.map((item, id) => (
            <div key={id}>
              <PostCard item={item} />
            </div>
          ))
        )}
      </div>
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default GetPost;
