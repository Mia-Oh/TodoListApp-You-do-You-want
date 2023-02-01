const About = () => {
  return (
    <section id="about">
      <img src={process.env.PUBLIC_URL + '/clover.png'} alt="clover-logo" />
      <h3>You do! You Want!</h3>
      <p>노래 가사와 함께 To do list를 정리해 보세요!</p>
      <p>행운의 클로버가 그 날의 행운을 가져다 줄거에요</p>
      <p>그럼 행운을 빌어요!</p>
    </section>
  );
};

export default About;