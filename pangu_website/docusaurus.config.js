// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: '盘古开发框架',
	tagline: '一套轻量灵活的Java开源企业级单体开发 & 微服务分布式开发治理框架',
	url: 'https://your-docusaurus-test-site.com',
	//baseUrl: '/',
	baseUrl:'/pangu-framework/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: '普蓝开源社区', // Usually your GitHub org/user name.
	projectName: 'pangu-framework', // Usually your repo name.

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: '盘古开发框架®',
				logo: {
					alt: '盘古开发框架',
					src: 'img/logo.svg',
				},
				items: [{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: '开发指南',
					},
					{
						href: 'https://gitee.com/pulanos/pangu-framework',
						label: '视频教程',
						position: 'left',
					},
					{
						to: '/blog',
						label: '博客专栏',
						position: 'left'
					},
					{
						href: 'https://gitee.com/pulanos/pangu-framework',
						label: 'Gitee',
						position: 'right',
					},
					{
						href: 'https://gitee.com/pulanos/pangu-framework',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [{
						title: 'Docs',
						items: [{
							label: '十分钟快速入门',
							to: '/docs/intro',
						}, {
							label: '开发指南',
							to: '/docs/intro',
						},{
							label: '视频教程',
							href: 'https://gitee.com/pulanos/pangu-framework',
						}],
					},
					{
						title: 'Community',
						items: [{
								label: 'Gitee Issues',
								href: 'https://gitee.com/pulanos/pangu-framework/issues?state=all',
							},{
								label: 'Gitee PanGu Framework',
								href: 'https://gitee.com/pulanos/pangu-framework',
							},
							{
								label: 'GitHub PanGu Framework',
								href: 'https://gitee.com/pulanos/pangu-framework',
							}
						],
					},
					{
						title: 'More',
						items: [{
								label: '致敬 & 鸣谢',
								to: '/blog',
							},{
								label: '开源中国',
								to: 'https://www.oschina.net/',
							},
							{
								label: 'Apache Software Foundation',
								href: 'https://www.apache.org/',
							}
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} 盘古开发框架`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
