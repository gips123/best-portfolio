import PageWrapper from "../../components/transitions/PageWrapper";
import PageHeader from "../../components/ui/PageHeader";
import ContactInfo from "./components/ContactInfo";
import SocialMedia from "./components/SocialMedia";
import { contactPageData } from "../../dummy/contactData";

export default function Contact() {
  return (
    <PageWrapper>
      <div className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a]">
        <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 md:py-24">
          <div className="relative w-full max-w-7xl">
            <PageHeader
              title={contactPageData.title}
              description={contactPageData.description}
            />

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
                <ContactInfo />
                <SocialMedia />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
