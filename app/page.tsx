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
    <main className={"overflow-x-hidden"}>
      <div className="px-6 mx-auto lg:max-w-[55rem] 2xl:max-w-[75rem]">
        <Navbar />
      </div>

      <div className="mt-[6rem] px-6 w-full mx-auto lg:max-w-[55rem] 2xl:max-w-[75rem]">
        <Header />
      </div>

      <Features />

      <div className="mt-[6rem] px-6 w-full overflow-x-hidden lg:overflow-x-visible mx-auto lg:max-w-[55rem] 2xl:max-w-[75rem]">
        <Statuses />

        <SupportedWebsites />

        <Testimonials />

        <Broswers />

        <Contact />

        <Redirect />

        <Footer />
      </div>
    </main>
  );
}
