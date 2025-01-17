import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import PremiumMember from "../premiumMember/PremiumMember";

const Home = () => {
  return (
    <div className="container mx-auto space-y-32">
      {/* banner */}
      <Banner></Banner>
      {/* premium member card */}
      <PremiumMember></PremiumMember>
      {/* how it work */}
      <HowItWork></HowItWork>
      {/* success counter section */}
      {/* success story */}
      {/* contact us */}
      {/* footer */}
    </div>
  );
};

export default Home;
