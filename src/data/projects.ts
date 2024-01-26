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
		link: "xoboid.vercel.app",
		year: 2023,
	},
	{
		title: "celeste",
		description: "a light and minimal client-side web framework",
		link: "celeste.vercel.app",
		year: 2023,
	},
	{
		title: "palegen",
		description: "generate color palettes from images",
		link: "palegen.vercel.app",
		year: 2023,
	},
	{
		title: "orb",
		description: "a webgl library",
		link: "orb3d.vercel.app",
		year: 2023,
	},
];

export default projects;
