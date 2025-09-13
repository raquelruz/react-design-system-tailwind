import { useState } from "react";

export const Accordion = ({ items, defaultOpen = null }) => {
	const [openIndex, setOpenIndex] = useState(defaultOpen);

	const toggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="flex flex-col items-center space-y-4">
			{items.map((item, index) => (
				<div key={index} className="w-90 rounded-lg bg-bgfaq overflow-hidden">
					<button
						onClick={() => toggle(index)}
						className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50"
					>
						{item.title}
						<span className="ml-2">{openIndex === index ? "-" : "+"}</span>
					</button>

					{openIndex === index && <div className="p-4 border-t text-gray-600">{item.content}</div>}
				</div>
			))}
		</div>
	);
};
