import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/resume-intelligence-hub/',
  title: 'Resume Intelligence Hub',
  titleTemplate: ':title | Resume Intelligence Hub',

  head: [
    ['link', { rel: 'icon', href: '/resume-intelligence-hub/hero.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
  ],

  markdown: {
    config: (md) => {
      md.core.ruler.push('escape_vue_interpolation', (state) => {
        for (const token of state.tokens) {
          if (token.type === 'inline' && token.children) {
            for (const child of token.children) {
              if (child.type === 'text' || child.type === 'html_inline') {
                child.content = child.content
                  .replace(/\{\{/g, '&#123;&#123;')
                  .replace(/\}\}/g, '&#125;&#125;')
              }
            }
          }
        }
      })
    }
  },

  ignoreDeadLinks: true,
  cleanUrls: false,

  vite: {
    resolve: { preserveSymlinks: true },
    server: { fs: { strict: false } },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      description: 'An AI-agent skill to bootstrap a personal career intelligence hub — resumes, interview prep, grant applications, and pre-submission verification. Cross-IDE via AGENTS.md.',
      themeConfig: {
        nav: [
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'Frameworks', link: '/frameworks' },
          { text: 'Philosophy', link: '/philosophy' },
          { text: 'GitHub', link: 'https://github.com/Zenine/resume-intelligence-hub' },
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Quick Start', link: '/quick-start' },
              { text: 'Philosophy', link: '/philosophy' },
            ],
          },
          {
            text: 'Reference',
            items: [
              { text: 'Frameworks', link: '/frameworks' },
            ],
          },
        ],
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      description: '在 AI IDE 里一句话搭起个人职业发展中枢——简历定制、面试准备、课题申报、投递前核查。通过 AGENTS.md 跨 IDE 通用。',
      themeConfig: {
        nav: [
          { text: '快速开始', link: '/zh/quick-start' },
          { text: '方法论', link: '/zh/frameworks' },
          { text: '设计哲学', link: '/zh/philosophy' },
          { text: 'GitHub', link: 'https://github.com/Zenine/resume-intelligence-hub' },
        ],
        sidebar: {
          '/zh/': [
            {
              text: '入门',
              items: [
                { text: '快速开始', link: '/zh/quick-start' },
                { text: '设计哲学', link: '/zh/philosophy' },
              ],
            },
            {
              text: '参考',
              items: [
                { text: '方法论', link: '/zh/frameworks' },
              ],
            },
          ],
        },
        outline: { label: '页面导航' },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '最后更新于' },
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '切换语言',
      },
    },
  },

  themeConfig: {
    logo: '/hero.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zenine/resume-intelligence-hub' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询',
                backButtonTitle: '关闭搜索',
                noResultsText: '无结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
    footer: {
      message: 'Released under the <a href="https://github.com/Zenine/resume-intelligence-hub/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2026 Zenine Xu',
    },
  },
})
