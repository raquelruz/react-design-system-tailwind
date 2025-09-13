import imageThree from "../media/images/content.png";

export const Grow = () => {
	return (
		<section class="w-full max-w-6xl mx-auto px-md text-center mb-3xl">
			<div className="m-md space-y-sm">
				<h2>Let’s grow together</h2>
				<p className="text-secondary md:mr-3xl md:ml-3xl">
					Explore out full hiring platform with a 15 days free trial no credit card required. Post jobs get
					candidates and manage applicants all in one place.
				</p>

				<button className="bg-primary text-white font-semibold px-6 py-3 rounded-lg">Try it for free</button>

				<div className="flex justify-center">
					<img src={imageThree} alt="A women with computer" className="md:w-200"/>
				</div>
			</div>
		</section>
	);
};
