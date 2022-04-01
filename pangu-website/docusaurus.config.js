// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: '盘古开发框架',
	//tagline: '一套轻量灵活的 Java 开源企业级单体开发 & 微服务分布式开发治理框架',
	tagline: '一套轻量灵活-成熟可靠的工业级分布式微服务开发和治理框架（兼容单体分层架构）',
	url: 'https://pulanos.gitee.io',
	//baseUrl: '/',
	baseUrl:'/pangu-framework/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',
	organizationName: '盘古开发框架,普蓝开源社区', // Usually your GitHub org/user name.
	projectName: 'pangu-framework', // Usually your repo name.
    plugins: [require.resolve("docusaurus-plugin-image-zoom")],
	// 百度统计
	scripts: [
	    {src: 'https://hm.baidu.com/hm.js?8a2c2aae78c4983e3cf661fea34e6353',  async: true}
	],
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/',
				},
				blog: {
					blogSidebarTitle: '最新发布博客',
					showReadingTime: true,
					blogSidebarCount: 5,
					postsPerPage: 10,
					// Please change this to your repo.
					editUrl: 'https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/',
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
						to: '/blog',
						label: '博客专栏',
						position: 'left'
					},
					{
						to: '/docs/faq',
						label: '常见问答',
						position: 'left'
					},
					{
						href: '/docs/community',
						label: '社区',
						position: 'left',
					},
					{
						to: '/docs/thanks',
						label: '致敬',
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
							label: '开发指南',
							to: '/docs/intro',
						}, {
							label: '博客专栏',
							to: '/blog',
						}
						,{
							label: '常见问答',
							to: '/docs/faq',
						}
						],
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
								to: '/docs/thanks',
							},{
								label: '开源中国',
								href: 'https://www.oschina.net/',
							},
							{
								label: 'Apache Software Foundation',
								href: 'https://www.apache.org/',
							}
						],
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} 普蓝开源社区  Released under <a target="_blank" class="ghostwhite" href="https://www.apache.org/licenses/LICENSE-2.0">Apache V2 license</a>`,
			},
			hideableSidebar: true,
			zoom: {
			      selector: '.markdown :not(em) > img,.markdown > img',
			      config: {
			        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
			        background: {
			          light: 'rgb(255, 255, 255)',
			          dark: 'rgb(50, 50, 50)'
			        }
			      }
			    },
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			metadata: [
			      {name: 'author', content: '普蓝开源社区'},
				  {name: 'keywords', content: '盘古开发框架 分布式微服务架构 垂直单体分层架构 普蓝开源社区'}
			    ]
		}),
};

module.exports = config;
