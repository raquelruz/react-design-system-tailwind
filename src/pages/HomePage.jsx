import { Hero } from "../components/Hero";
import { OurClients } from "../components/OurClients";
import { Features } from "../components/Features";
import { Create } from "../components/Create";
import { Grow } from "../components/Grow";

export const HomePage = () => {
	return (
		<>
			<Hero />
			<OurClients />
            <Features />
            <Create />
			<Grow />
		</>
	);
};
