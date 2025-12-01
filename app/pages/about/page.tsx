import PageWrapper from "../../components/transitions/PageWrapper";
import AboutClient from "./components/AboutClient";

export default function About() {
  return (
    <PageWrapper>
      <div className="relative min-h-screen w-full bg-[#1a1a1a]">
        <section className="relative w-full flex items-start justify-center px-4 sm:px-8 md:px-16 lg:px-24 pt-24 sm:pt-32 md:pt-40 py-16 sm:py-20 md:py-24">
          <div className="relative w-full max-w-7xl flex gap-6 items-start">
            <AboutClient />
        </div>
      </section>
    </div>
    </PageWrapper>
  );
}
