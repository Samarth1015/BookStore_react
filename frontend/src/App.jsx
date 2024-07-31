import Navbar from "./component/navbar";
import Banner from "./component/Banner";

import Footeri from "./component/footer";
import CardPart from "./component/Cardbox";
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner></Banner>
      <CardPart></CardPart>
      <Footeri></Footeri>
    </div>
  );
};

export default App;
