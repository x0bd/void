export type Project = {
	title: string;
	description: string;
	link: string;
	experiment?: boolean;
	year: number;
};

const projects: Project[] = [
	{
		title: "void",
		description: "my personal site + blog",
		link: "https://xoboid.vercel.app",
		year: 2024,
	},
	{
		title: "celeste",
		description: "a light and minimal client-side web framework",
		link: "https://github.com/x0bd/celeste",
		year: 2023,
	},
	{
		title: "palegen",
		description: "generate color palettes from images",
		link: "https://github.com/palegen",
		year: 2023,
	},
	{
		title: "wordle-lite",
		description: "a wordle clone built with the latest web technologies",
		link: "https://wordle-lite.vercel.ap",
		year: 2023,
	},
];

export default projects;
