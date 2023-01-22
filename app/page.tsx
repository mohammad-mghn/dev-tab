import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Contact from "../components/contact/contact";
import Features from "../components/features/features";
import Statuses from "../components/statuses/statuses";
import Broswers from "../components/broswers/broswers";
import Redirect from "../components/redirect/redirect";
import Testimonials from "../components/Testimonials/Testimonials";
import SupportedWebsites from "../components/supportedWebsites/supportedWebsites";

export default function Home() {
  return (
    <div className="px-6 mx-auto lg:max-w-[55rem] 2xl:max-w-[75rem]">
      <Navbar />

      <main className="mt-[6rem] overflow-x-visible">
        <Header />

        <Features />

        <Statuses />

        <SupportedWebsites />

        <Testimonials />

        <Broswers />

        <Contact />

        <Redirect />

        <Footer />
      </main>
    </div>
  );
}
