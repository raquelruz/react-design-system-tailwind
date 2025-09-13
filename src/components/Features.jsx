import estadisticsIcon from "../media/icons/estadistics-icon.png";
import chatIcon from "../media/icons/chat-icon.png";
import codeIcon from "../media/icons/code-icon.png";

export const Features = () => {
	return (
		<section className="w-full max-w-6xl mx-auto px-sm py-md text-center mb-2xl">
			<div className="m-md space-y-sm">
				<p className="text-primary font-semibold">Features</p>
				<h2>You will never missed a deadline</h2>
				<p>Connect expose and visualize and over 150 Sass tools without engineering mathod</p>
			</div>

			<div className="flex flex-col md:flex-row">
				<div className="flex flex-col items-center p-md gap-sm">
					<img src={estadisticsIcon} alt="" className="w-8 h-8" />
					<h4>Rich Analytics</h4>
					<p className="text-secondary">
						Easy data management with a dedicated admin panel and a developer platform to extend what Polio
						CRM can do.
					</p>
				</div>

				<div className="flex flex-col items-center p-md gap-sm">
					<img src={chatIcon} alt="" className="w-8 h-8" />
					<h4>Rich Analytics</h4>
					<p className="text-secondary">
						Easy data management with a dedicated admin panel and a developer platform to extend what Polio
						CRM can do.
					</p>
				</div>

				<div className="flex flex-col items-center p-md gap-sm">
					<img src={codeIcon} alt="" className="w-8 h-8" />
					<h4>Rich Analytics</h4>
					<p className="text-secondary">
						Easy data management with a dedicated admin panel and a developer platform to extend what Polio
						CRM can do.
					</p>
				</div>
			</div>

			<div className="flex flex-col md:flex-row">
				<div className="flex flex-col items-center p-md gap-sm">
					<img src={estadisticsIcon} alt="" className="w-8 h-8" />
					<h4>Rich Analytics</h4>
					<p className="text-secondary">
						Easy data management with a dedicated admin panel and a developer platform to extend what Polio
						CRM can do.
					</p>
				</div>

				<div className="flex flex-col items-center p-md gap-sm">
					<img src={chatIcon} alt="" className="w-8 h-8" />
					<h4>Rich Analytics</h4>
					<p className="text-secondary">
						Easy data management with a dedicated admin panel and a developer platform to extend what Polio
						CRM can do.
					</p>
				</div>

				<div className="flex flex-col items-center p-md gap-sm">
					<img src={codeIcon} alt="" className="w-8 h-8" />
					<h4>Rich Analytics</h4>
					<p className="text-secondary">
						Easy data management with a dedicated admin panel and a developer platform to extend what Polio
						CRM can do.
					</p>
				</div>
			</div>
		</section>
	);
};
