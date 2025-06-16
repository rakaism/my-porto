const INFO = {
	main: {
		title: "My Portfolio",
		name: "Rakadian Audiga Pratama",
		email: "rakadianp@gmail.com",
		logo: "avatar-logo.png",
	},

	socials: {
		github: "https://github.com/rakaism",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/raka_audiga",
		whatsapp: "https://wa.me/6285704232262",
	},

	homepage: {
		title: "Backend web developer, and amateur musician.",
		description:
			"Hi, i'm Rakadian Audiga Pratama. Final-year Information System student at UIN Sunan Ampel Surabaya, specializing in backend web development and currently delving into DevOps and IoT technologies across various industries. With strong programming skills and a high enthusiasm for web development and a high enthusiasm for cloud-native practices and infrastructure as code, I am committed to continuous growth and contributing to technological industry innovations.",
	},

	about: {
		title: "Striving to achive many things at this stage of life",
		description:
			"Focusing not only on technology but also on personal growth. I am dedicated to building my career and honing my mental resilience and knowledge to ensure a promising future. I enjoy learning, collaborating with others, have a strong work ethic, always open to new ideas and am receptive to feedback and suggestions.",
	},

	articles: {
		title: "Struggle, contend, wriggle.",
		description:
			"My online publications to share my knowledge and experiences with others.",
	},

	projects: [
		{
			title: "UINSA Food",
			projectSS: "food/food.gif",
			description:
				"A web application for online catering. Using Laravel, this web application has already implemented three multi-level user roles (user, seller, and admin), each with their own panel. Each order automatically generates an invoice for each level. My role in this project is as a backend developer.",
			logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
			logoProject: "food/food.png",
		},

		{
			title: "AIO Downloader",
			projectSS: "aio/aio.gif",
			description:
				"Simple web application enables users to download a variety of content from social media platforms such as tiktok, instagram, and spotify, and also includes a basic background remover. It leverages third-party API integrations to extract media links. The project's tech stack includes Nextjs, Tailwind, RapidAPI, and Vercel.",
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0_yhGEmhIF8QjL7poBJqowjSlIw0kKKOJA&s",
			logoProject: "aio/aio.jpg",
			linkText: "View Project",
			link: "https://github.com/rakaism/aio-download",
		},

		{
			title: "Ceria (Cetak Kartu Tanda Mahasiswa UINSA)",
			projectSS: "ceria/ceria.gif",
			description:
				"A web application designed to automatically generate student card designs from user input. Users can download or print the student card according to the selected data. This web application has already been implemented at UINSA Press. My role in this project is as a fullstack developer. The stack I used in this web application is Laravel, Vite, and MySQL.",
			logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
			logoProject: "ceria/Ceria.png",
			// linkText: "View Project",
		},
	],
};

export default INFO;
