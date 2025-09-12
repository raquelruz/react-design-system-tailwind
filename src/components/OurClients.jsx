import ibmLogo from "../media/images/IBM_logo.png";
import cocacolaLogo from "../media/images/Coca-Cola_logo.png";
import amazonLogo from "../media/images/Amazon_logo.png";
import fedexLogo from "../media/images/FedEx_Express.png";
import walmartLogo from "../media/images/Walmart_logo.png";

export const OurClients = () => {
	return (
		<section className="w-full max-w-6xl mx-auto px-6 py-16 text-center">
			<p className="text-secondary text-lg md-text-xl mb-10">Already loved and trusted by product teams</p>

			<div className="flex flex-col gap-6">
				<div className="flex gap-8 overflow-x-auto md:justify-center md:overflow-visible scrollbar-hide">
					<img src={ibmLogo} alt="IBM Logo" className="h-6 md:h-8x" />
					<img src={cocacolaLogo} alt="Coca-Cola Logo" className="h-6 md:h-8" />
					<img src={amazonLogo} alt="Amazon Logo" className="h-6 md:h-8" />
					<img src={fedexLogo} alt="FedEx Logo" className="h-6 md:h-8" />
					<img src={walmartLogo} alt="Walmart Logo" className="h-6 md:h-8" />
				</div>

				<div className="flex gap-8 overflow-x-auto md:justify-center md:overflow-visible scrollbar-hide">
					<img src={cocacolaLogo} alt="Coca-Cola Logo" className="h-6 md:h-8" />
					<img src={amazonLogo} alt="Amazon Logo" className="h-6 md:h-8" />
					<img src={walmartLogo} alt="Walmart Logo" className="h-6 md:h-8" />
					<img src={ibmLogo} alt="IBM Logo" className="h-6 md:h-8" />
					<img src={fedexLogo} alt="FedEx Logo" className="h-6 md:h-8" />
				</div>
			</div>
		</section>
	);
};
