import React from 'react'

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container flex">
            <div className="left">
                <div className="img">
                    <img src="https://m.media-amazon.com/images/I/71UNtJMhNHL._AC_SX569_.jpg "  alt=""  />
                </div>
                
            </div>
            <div className="right topMargin">
                <h1>
                    I AM A <br />
                    WEB DESIGNER
                </h1>
                <div className="socialIcon">
                    <i className="fab fa-facebook-f facebook"></i>
                    <i className="fab fa-instagram instagram"></i>
                    <i className="fab fa-twitter twitter"></i>
                    <i className="fab fa-youtube youtube"></i>
                    <i className="fab fa-pinterest pinterest"></i>
                    <i className="fab fa-dribbble dribbble"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt voluptatem ut ipsum non, 
                    tenetur recusandae ipsam eum harum iusto hic voluptates, Quis debitis, iste repellendus hic eaque 
                    ipsa magni omnis eligendi obcaecati? quasi nobis nemo asperiores.</p>
                    <button className="primary-btn">Contact us</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
