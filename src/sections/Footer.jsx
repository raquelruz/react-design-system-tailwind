const footerlinks = [
	{ title: "Changelog" },
	{ title: "Customer Services" },
	{ title: "Security" },
	{ title: "Pricing" },
	{ title: "Solution" },
];

export const Footer = () => {
	const columns = ["Product", "Company", "Resource", "Features"];

	return (
		<footer className="py-12 px-30">
			<div className="max-w-6xl mx-auto px-5 flex justify-between flex-wrap">
				{columns.map((col) => (
					<div key={col} className="mb-6 min-w-[120px]">
						<h6 className="font-semibold mb-4">{col}</h6>
						<ul>
							{footerlinks.map((link, index) => (
								<li key={index} className="mb-2 text-secondary hover:text-gray-900 cursor-pointer text-xs">
									{link.title}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</footer>
	);
};
