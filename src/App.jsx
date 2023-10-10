import "./App.scss";
import About from "./components/about/About";
import Form from "./components/demos-form/Form";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Partners from "./components/partners/Partners";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="max-width">
        <Partners />
        <About />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default App;
