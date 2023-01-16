import Header from "../components/header/header";

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
    <main className="mt-[6rem]">
      <Header />

      <Features />

      {/* about */}

      <Statuses />

      <SupportedWebsites />

      <Testimonials />

      <Broswers />

      <Contact />

      <Redirect />

      <Footer />
    </main>
  );
}
