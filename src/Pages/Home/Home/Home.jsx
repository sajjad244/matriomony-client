import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import FAQSection from "../FAQSection/FAQSection";
import HowItWork from "../HowItWork/HowItWork";
import PremiumMember from "../premiumMember/PremiumMember";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

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
      <SuccessCounter></SuccessCounter>
      {/* success story */}
      <SuccessStory></SuccessStory>
      <WhyChooseUs></WhyChooseUs>
      <FAQSection></FAQSection>
      {/* contact us */}
      <ContactUs></ContactUs>
      {/* footer */}
    </div>
  );
};

export default Home;
