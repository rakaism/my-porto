import React from "react";

function article_1() {
	return {
		date: "January, 2024",
		title: "Komparasi Algoritma Topic Modelling LDA VS LSA Pada Berita Detikcom",
		description:
			"This research focuses on the process of applying Topic Modeling by comparing the Latent Semantic Analysis (LSA) and Latent Dirichlet Allocation (LDA) models on news tweet data taken from the Detikcom account.",
		articleLink:
			"https://publikasi.mercubuana.ac.id/index.php/format/article/view/24910",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
	};
}

function article_2() {
	return {
		date: "Desember 2024",
		title: "Pengembangan Sistem Backend User Pada Aplikasi UINSA Food Menggunakan Framework Laravel 10",
		description:
			"The “Online Catering System for UINSA Food” web application project aims to build a platform that enables direct catering orders, complete with detailed menu information.",
		articleLink:
			"https://ipsikom.unipem.ac.id/index.php/ipsikom/article/view/332",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
