import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import SinglePost from '../Singlepost/Singlepost';


function Posts() {
  return (
    <div>
      <h1>Find Food Here</h1>
      <SinglePost/>
      {/* <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Business/Individual Name</h5>
          <p class="card-text">
            -3 loaves of bread<br></br>
            -2 apples
          </p>
          <a href="#" class="btn btn-primary">
            Reserve
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Posts;
