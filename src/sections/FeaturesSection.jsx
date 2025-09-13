import estadisticsIcon from "../media/icons/estadistics-icon.png";
import chatIcon from "../media/icons/chat-icon.png";
import codeIcon from "../media/icons/code-icon.png";

const features = [
	{
		icon: estadisticsIcon,
		title: "Rich Analytics",
		description:
			"Easy data management with a dedicated admin panel and a developer platform to extend what Polio CRM can do.",
	},
	{
		icon: chatIcon,
		title: "Rich Analytics",
		description: "Work together seamlessly with chat integrations and real-time notifications.",
	},
	{
		icon: codeIcon,
		title: "Rich Analytics",
		description: "Extend functionality with a robust API and developer-friendly platform.",
	},
	{
		icon: estadisticsIcon,
		title: "Rich Analytics",
		description: "Visualize and expose your data with over 150 Sass tools without engineering effort.",
	},
	{
		icon: chatIcon,
		title: "Rich Analytics",
		description: "Provide excellent support with automation and easy communication tools.",
	},
	{
		icon: codeIcon,
		title: "Rich Analytics",
		description: "Build your own workflows and integrations with flexible tools.",
	},
];

export const FeaturesSection = () => {
	return (
		<section className="w-full max-w-6xl mx-auto px-sm py-md text-center mb-2xl">
			<div className="m-md space-y-sm">
				<p className="text-primary font-semibold">Features</p>
				<h2>You will never missed a deadline</h2>
				<p>Connect expose and visualize and over 150 Sass tools without engineering mathod</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-md mt-lg">
				{features.map((feature, index) => (
					<div key={index} className="flex flex-col items-center p-md gap-sm text-center">
						<img src={feature.icon} alt={feature.title} className="w-8 h-8" />
						<h4>{feature.title}</h4>
						<p className="text-secondary">{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};
