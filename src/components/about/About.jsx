import "./About.scss";
import image from "../../assets/images/AboutSectionPhoto.png";

function About() {
  return (
    <section className="about" id="about">
      <h3 className="about__title">About</h3>
      <p className="about__copy">
        {`Welcome to Waves Records, where we specialize in Rap, Hip Hop and R&B
        based in Canada. Waves Music Label is the home for music that makes a
        statement. We're not just here to ride the wave; we're here to create
        it. Our artists are not just performers; they are storytellers, poets,
        and visionaries. Founded with a mission to shine a spotlight on both
        emerging and established artists. Our passion for these genres runs
        deep, and it's our mission to elevate every beat, every rhyme, and every
        note to new heights. Join us on this journey as we ride the Waves of rap
        excellence and creativity. Explore our catalog, connect with our
        artists, and be a part of a movement that's shaping the future of
        hip-hop.`}
      </p>
      <img className="about__image" src={image}></img>
    </section>
  );
}

export default About;
