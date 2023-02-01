function Footer(){

  return (
    <div id="footer">
      <img src={process.env.PUBLIC_URL + '/clover.png'} alt="clover-logo" />
      <p>You do! You Want!</p>
    </div>
  );
}

export default Footer;