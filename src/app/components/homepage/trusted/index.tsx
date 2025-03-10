import MediaIntro from "./MediaIntro";
import Testimonials from "../../ui/swiper/testimonials";
import Backed from "./Backed";
import SocialMedia from "./SocialMedia";

const InvestorsSection = () => {
  return (
    <div className="bg-primary relative overflow-hidden bg-gradient-to-b px-4 py-20 text-white sm:rounded-4xl sm:py-32">
      <Backed />
      <MediaIntro />
      <Testimonials />
      <SocialMedia />
    </div>
  );
};

export default InvestorsSection;
