//https://react-icons.github.io/react-icons/

import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Carousel from "./components/carousel/Carousel";
import Custom from "./components/custom/Custom";
import Ubications from "./components/ubications/Ubications";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Carousel />
      <Custom/>
      <Ubications/>
      <Footer/>
    </>
  );
}

export default App;
