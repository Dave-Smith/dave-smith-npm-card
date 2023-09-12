import chalk from "chalk";
import boxen from "boxen";

const data = {
	name: chalk.yellow.bold("          DAVE SMITH"),
	work: chalk.yellow("Lead Software Developer at Baird"),
	twitter: chalk.yellow("https://twitter.com/smithcommadave"),
	github: chalk.yellow("https://github.com/dave-smith"),
	linkedin: chalk.yellow("https://linkedin.com/in/smithcommadave"),
	web: chalk.yellow("https://dave-smith.github.io"),
	email: chalk.yellow("davesmithsemail@gmail.com"),
	labelWork: chalk.blue("    work:"),
	labelTwitter: chalk.blue(" twitter:"),
	labelGithub: chalk.blue("  github:"),
	labelLinkedin: chalk.blue("linkedin:"),
	labelWeb: chalk.blue("     web:"),
	labelEmail: chalk.blue("   email:")
};

const name = data.name;
const title =  `\n${data.labelWork} ${data.work}`;
const twitter = `${data.labelTwitter} ${data.twitter}`;
const github = `${data.labelGithub} ${data.github}`;
const linkedin = `${data.labelLinkedin} ${data.linkedin}`;
const web = `${data.labelWeb} ${data.web}`;
const email = `${data.labelEmail} ${data.email}`;

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round",
	borderColor: "red"
};

const card = [name, title, twitter, github, linkedin, web, email];
const output = card.join("\n");
console.log(boxen(output, options));
