import { Accordion } from "../components/Accordion";
import { SectionContainer } from "../components/SectionContainer";

const faqs = [
	{
		title: "Is there a free trial available?",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Is there a free trial available?",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Is there a free trial available?",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Is there a free trial available?",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

export const FaqsSection = () => {
	return (
		<SectionContainer
			title="Frequently asked questions"
			content="Everything you need to know about Jahedin"
			childrenContainerStyle="grid grid-cols-1 gap-lg"
		>
			<Accordion items={faqs} defaultOpen={0} />
		</SectionContainer>
	);
};
