import React from "react";

const Loading = () => {
  return (
    <section id="loading">
      <img src={process.env.PUBLIC_URL + '/clover.png'} alt="clover-logo" />
      <h3>You do! You Want!</h3>
    </section>
  );
};

export default Loading;