import PageWrapper from "../../components/transitions/PageWrapper";
import HomeClient from "./components/HomeClient";

export default function Home() {
  return (
    <PageWrapper>
      <div className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a]">
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16">
          <HomeClient />
        </section>
      </div>
    </PageWrapper>
  );
}

