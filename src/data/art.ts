type ArtWork = {
	link: string;
	type?: "render" | "experiment";
};

const ArtWorks: ArtWork[] = [
	{
		link: "/art-1.jpg",
		type: "experiment",
	},
	{
		link: "/art-2.jpeg",
		type: "experiment",
	},
	{
		link: "/art-3.jpg",
		type: "experiment",
	},
	{
		link: "/arcane.jpg",
		type: "experiment",
	},
	{
		link: "/c.jpg",
		type: "experiment",
	},
	{
		link: "/r.png",
		type: "experiment",
	},
	{
		link: "/re.jpeg",
		type: "experiment",
	},
	{
		link: "/u.jpg",
		type: "experiment",
	},
	{
		link: "/x.png",
		type: "experiment",
	},
];

export default ArtWorks;
