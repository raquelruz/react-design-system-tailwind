import { Hero } from "../components/Hero";
import { ClientsSection } from "../sections/ClientsSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { CreateSection } from "../sections/CreateSection";
import { GrowSection } from "../sections/GrowSection";
import { FaqsSection } from "../sections/FaqSection";
import { Footer } from "../sections/Footer";

export const HomePage = () => {
	return (
		<>
			<Hero />
			<ClientsSection />
            <FeaturesSection />
            <CreateSection />
			<GrowSection />
			<FaqsSection />
			<Footer />
		</>
	);
};
