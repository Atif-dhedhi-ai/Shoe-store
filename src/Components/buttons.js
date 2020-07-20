import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

function Button() {
  // const Men = "Men"
  // const Women = "Women"
  // const Children = "Children"

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Link to="/product1/Men" >
            <img className="item" src="images/Men.jpg" alt="Men" width="250px" height="250px" />

          </Link>
          <Carousel.Caption>
            <h3 style={{ color: "brown" }}>Men</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/product1/Women"> <img className="item" src="images/women.png" alt="Women" width="250px" height="250px" />
          </Link>

          <Carousel.Caption>
            <h3>Women</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/product1/Children"> <img className="item" src="images/child.jpg" alt="Children" width="250px" height="250px" />
          </Link>
          <Carousel.Caption>
            <h3>Children</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  );
}

export default Button;
//     <div>
// <ol>
//         <li>
// <Link to="/product1/Men" >
// <img className="item" src="images/Men.jpg" alt="Men" width="250px" height="250px"/>
//    <h2> Men </h2>
// </Link>

//     </li>
//         <li>

//           <Link to="/product1/Women"> <img className="item" src="images/women.png" alt="Women" width="250px" height="250px"/>
//          <h2> Women </h2> </Link>
//          </li>
//         <li>

//           <Link to="/product1/Children"> <button> Children </button> </Link>
//     </li>
//   </ol>


// 	</div> 

{/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
    {/* <!-- Indicators --> */}
    // <ol className="carousel-indicators">
    //   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    //   <li data-target="#myCarousel" data-slide-to="1"></li>
    //   <li data-target="#myCarousel" data-slide-to="2"></li>
    // </ol>

    // {/* <!-- Wrapper for slides --> */}
    // <div className="carousel-inner">
    //   <div className="item active">
    //     <img src="images/Men.jpg" alt="Men" />
    //   </div>

    //   <div className="item">
    //     <img src="images/Women.png" alt="Women" />
    //   </div>

    //   <div className="item">
    //     <img src="#" alt="Children" />
    //   </div>
    // </div>

    // {/* <!-- Left and right controls --> */}
    // <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    //   <span className="glyphicon glyphicon-chevron-left"></span>
    //   <span className="sr-only">Previous</span>
    // </a>
    // <a className="right carousel-control" href="#myCarousel" data-slide="next">
    //   <span className="glyphicon glyphicon-chevron-right"></span>
    //   <span className="sr-only">Next</span>
    // </a>
    //         </div>
    //          */}