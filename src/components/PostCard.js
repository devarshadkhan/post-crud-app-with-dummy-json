import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const PostCard = ({ item }) => {
  return (
    <>
     {/* <Link to={`veiwpost/${item.id}${item.title}`}> */}

     <div className="card">
        <div className="card__body">
          <span className="tag tag-blue">{item.tags}</span>
          {/* <span className="tag tag-brown">{item.tags[1]}</span>
          <span className="tag tag-red">{item.tags[2]}</span> */}
          <h4>{item.title}</h4>
          <p>{item.body?.toString()?.substr(0,100)} <Link  to={`veiwpost/${item.id}`}><b> read more</b></Link> </p>
        </div>
        <div className="card__footer">
          <div className="user">
            <ReactStars
              value={item.reactions}
              count={5}
              edit={false}
              // onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
        </div>
      </div>
 
      {/* <div className="card">
    <div className="card__header">
      <img
        src="https://source.unsplash.com/600x400/?food"
        alt="card__image"
        className="card__image"
        width={600}
      />
    </div>
    <div className="card__body">
      <span className="tag tag-brown">Food</span>
      <h4>Delicious Food</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque
        quidem!
      </p>
    </div>
    <div className="card__footer">
      <div className="user">
        <img
          src="https://i.pravatar.cc/40?img=2"
          alt="user__image"
          className="user__image"
        />
        <div className="user__info">
          <h5>Jony Doe</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card__header">
      <img
        src="https://source.unsplash.com/600x400/?car,automobile"
        alt="card__image"
        className="card__image"
        width={600}
      />
    </div>
    <div className="card__body">
      <span className="tag tag-red">Automobile</span>
      <h4>Race to your heart content</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque
        quidem!
      </p>
    </div>
    <div className="card__footer">
      <div className="user">
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="user__image"
          className="user__image"
        />
        <div className="user__info">
          <h5>John Doe</h5>
          <small>2d ago</small>
        </div>
      </div>
    </div>
  </div> */}
    </>
  );
};

export default PostCard;
