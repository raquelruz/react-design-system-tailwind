import { Hero } from "../components/Hero";
import { ClientsSection } from "../sections/ClientsSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { CreateSection } from "../sections/CreateSection";
import { GrowSection } from "../sections/GrowSection";

export const HomePage = () => {
	return (
		<>
			<Hero />
			<ClientsSection />
            <FeaturesSection />
            <CreateSection />
			<GrowSection />
		</>
	);
};
