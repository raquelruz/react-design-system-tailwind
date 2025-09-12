import imageOne from "../media/images/image-removebg-preview 1.png";

export const Hero = () => {
	return (
		<section className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
			<div className="flex-1 text-center md:text-left space-y-6">
				<h1 className="text-3xl md:text-5xl font-bold leading-snug">
					Make Your First <span className="text-primary">Impression</span> Count
				</h1>

				<p className="text-secondary text-base md:text-lg max-w-md mx-auto md:mx-0">
					Powerful self-serve product analytics to help you convert, engage and retain more users.
				</p>

				<div className="flex justify-center md:justify-start gap-4">
					<button className="bg-primary text-white font-semibold px-6 py-3 rounded-lg">Get started</button>
					<button className="[border:1px_solid_lightgray] text-secondary px-6 py-3 font-semibold rounded-lg">
						Watch demo
					</button>
				</div>
			</div>

			<div className="flex-1 flex justify-center md:justify-end">
				<img src={imageOne} alt="Hero product" className="max-w-sm md:max-w-md lg:max-w-lg" />
			</div>
		</section>
	);
};
