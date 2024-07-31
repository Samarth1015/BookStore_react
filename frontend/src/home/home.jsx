import Banner from "../component/Banner";
import CardPart from "../component/Cardbox";
import Footeri from "../component/footer";
import Navbar from "../component/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner></Banner>
      <CardPart></CardPart>
      <Footeri></Footeri>
    </>
  );
}
