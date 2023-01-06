import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import header1 from "../../assets/img/head-1.jpg"
import header2 from "../../assets/img/header-img.svg"
import Spline from '@splinetool/react-spline';
import './Banner.scss';


const Banner = () => {
  const toRotate = ["efine", "esign", "evelop", "eliver"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState('');
  const [bannerImg, setBannerImg] = useState(header1);
  // how fast one after another is typed
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // interval between each word
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    return () => {
      clearInterval(ticker)
    };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
    if (fullText === 'esign') {
      setBannerImg(header2);
    } else {
      setBannerImg(header1);
    }
  }
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/*<span className="tagline">*/}
            {/*  Hi there, I am Claire!*/}
            {/*</span>*/}
            <motion.div
              whileInView={{x:[-100,0], opacity:[0,1]}}
              transition={{duration: 0.5}}
              className="banner-greeting"
            >
              <h1> &#128075; Hi there, I'm <span className="claire">Claire</span> !</h1>
            </motion.div>
              <h1>{'I D'}<span className="wrap">{text}</span>{'|'}</h1>
            <motion.div
              whileInView={{opacity:[0,1]}}
              transition={{duration: 1.0, delayChildren: 2.0}}
              className="banner-description"
            >
              <h2>inspiring & impactful technical solutions that bring people together.</h2>
            </motion.div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/*<img src={header2} alt="header" />*/}
            <Spline className="spline" scene="https://prod.spline.design/oL6YodAY88ex5K3M/scene.splinecode" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;
