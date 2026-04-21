import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/resume-intelligence-hub/',
  title: 'Resume Intelligence Hub',
  titleTemplate: ':title | Resume Intelligence Hub',
  description: 'An AI-agent skill to bootstrap a personal career intelligence hub — resumes, interview prep, grant applications, and pre-submission verification. Cross-IDE via AGENTS.md.',

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

  themeConfig: {
    logo: '/hero.svg',
    nav: [
      { text: 'Quick Start', link: '/quick-start' },
      { text: 'Frameworks', link: '/frameworks' },
      { text: 'Workflows', link: '/workflows' },
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
          { text: 'Workflows', link: '/workflows' },
          { text: 'Frameworks', link: '/frameworks' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zenine/resume-intelligence-hub' },
    ],
    search: { provider: 'local' },
    footer: {
      message: 'Released under the <a href="https://github.com/Zenine/resume-intelligence-hub/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2026 Zenine Xu',
    },
  },
})
