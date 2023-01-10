import React from "react";

const Feedback = () => {
  return (
    <section id="feedback">
      <div id="author">
        <img src={process.env.PUBLIC_URL + '/author.jpg'} alt="clover-logo" />
        <div className="cate">
          <img src={process.env.PUBLIC_URL + '/github.png'} alt="github-logo" />      
          <a  href="https://github.com/Mia-Oh">github.com/Mia-Oh</a><br />
        </div>
        <div className="cate">
          <img src={process.env.PUBLIC_URL + '/blog.png'} alt="blog-logo" />  
          <a  href="https://mia-mia.tistory.com/">mia-mia.tistory.com/</a><br />
        </div>
        <div className="cate">
          <img src={process.env.PUBLIC_URL + '/youtube.png'} alt="youtoub-logo" />  
          <a  href="https://www.youtube.com/@miatube3164">밍튜브 Mia Tube</a><br />
        </div>
      </div>
      <div id="copyright">
        <p>logo 출처: www.flaticon.com/authors/freepik</p>
        <p>그외 출처: www.flaticon.com</p>
      </div>
    </section>
  );
};

export default Feedback;