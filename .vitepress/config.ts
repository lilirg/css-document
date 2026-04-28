import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/css-document/',
  srcDir: 'docs',
  title: "CSS 参考",
  description: "从基础概念到高级特性的完整 CSS 学习资料",
  ignoreDeadLinks: true,
  head: [
    // PWA 图标配置
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    // PWA 配置
    ['meta', { name: 'theme-color', content: '#4A90D9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '基础知识', link: '/basics/whatisCSS' },
      { text: '核心概念', link: '/concepts/intro' },
      { text: '参考文档', link: '/reference/intro' },
      { text: 'AI 开发', link: '/ai/index' }
    ],

    sidebar: {
      '/': [
        {
          text: '简介',
          items: [
            { text: '首页', link: '/' },
            { text: '入门', link: '/intro' }
          ]
        }
      ],
      '/basics/': [
        {
          text: '基础知识',
          items: [
            { text: '什么是 CSS', link: '/basics/whatisCSS' },
            { text: '组合', link: '/basics/composition' },
            { text: '开发者工具', link: '/basics/devtools' },
            { text: '布局基础', link: '/basics/layout' },
            { text: '性能', link: '/basics/performance' },
            { text: '替换表单', link: '/basics/replaced-forms' },
            { text: '响应式设计', link: '/basics/responsive' },
            { text: '选择器', link: '/basics/selector' },
            { text: '值与单位', link: '/basics/values-units' },
            { text: '兼容性', link: '/basics/compatibility' }
          ]
        }
      ],
      '/concepts/': [
        {
          text: '核心概念',
          items: [
            { text: '概念简介', link: '/concepts/intro' },
            { text: '动画时间函数', link: '/concepts/animation-timing' },
            { text: '混合模式', link: '/concepts/blend-mode' },
            { text: 'BFC', link: '/concepts/block-formatting-context' },
            { text: '盒模型', link: '/concepts/box-model' },
            { text: '层叠', link: '/concepts/cascade' },
            { text: '颜色模型', link: '/concepts/color-models' },
            { text: '颜色空间', link: '/concepts/color-space' },
            { text: '包含块', link: '/concepts/containing-block' },
            { text: '缓动函数', link: '/concepts/easing-function' },
            { text: 'Flex 上下文', link: '/concepts/flex-formatting-context' },
            { text: '格式化上下文', link: '/concepts/formatting-context' },
            { text: 'Grid 上下文', link: '/concepts/grid-formatting-context' },
            { text: '继承', link: '/concepts/inheritance' },
            { text: '布局上下文', link: '/concepts/layout-context' },
            { text: '正常流', link: '/concepts/normal-flow' },
            { text: '透明度', link: '/concepts/opacity' },
            { text: '优先级', link: '/concepts/specificity' },
            { text: '层叠上下文', link: '/concepts/stacking-context' },
            { text: '变换原点', link: '/concepts/transform-origin' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考文档',
          items: [{ text: '参考简介', link: '/reference/intro' }]
        },
        {
          text: '属性',
          items: [
            { text: '动画', link: '/reference/properties/animation' },
            { text: '边框', link: '/reference/properties/border' },
            { text: '颜色', link: '/reference/properties/color' },
            { text: '显示', link: '/reference/properties/display' },
            { text: '定位', link: '/reference/properties/position' },
            { text: '排版', link: '/reference/properties/typography' }
          ]
        },
        {
          text: '伪类',
          items: [
            { text: '伪类简介', link: '/reference/pseudo-class/intro' },
            { text: ':active', link: '/reference/pseudo-class/active' },
            { text: ':focus', link: '/reference/pseudo-class/focus' },
            { text: ':hover', link: '/reference/pseudo-class/hover' },
            { text: ':nth-child', link: '/reference/pseudo-class/nth-child' }
          ]
        },
        {
          text: '函数',
          items: [
            { text: 'attr()', link: '/reference/functions/attr()' },
            { text: 'calc()', link: '/reference/functions/calc()' },
            { text: 'hsl()', link: '/reference/functions/hsl()' },
            { text: 'linear-gradient()', link: '/reference/functions/linear-gradient()' }
          ]
        },
        {
          text: '数据类型',
          items: [
            { text: '角度', link: '/reference/data-types/angle' },
            { text: '颜色', link: '/reference/data-types/color' },
            { text: '整数', link: '/reference/data-types/integer' },
            { text: '长度', link: '/reference/data-types/length' },
            { text: '数字', link: '/reference/data-types/number' },
            { text: '百分比', link: '/reference/data-types/percentage' },
            { text: '字符串', link: '/reference/data-types/string' },
            { text: '时间', link: '/reference/data-types/time' },
            { text: 'url', link: '/reference/data-types/url' }
          ]
        },
        {
          text: '规则',
          items: [
            { text: '规则简介', link: '/reference/rules/intro' },
            { text: '@charset', link: '/reference/rules/charset' },
            { text: '@document', link: '/reference/rules/document' },
            { text: '@font-face', link: '/reference/rules/font-face' },
            { text: '@keyframes', link: '/reference/rules/keyframes' },
            { text: '@media', link: '/reference/rules/media' },
            { text: '@supports', link: '/reference/rules/supports' }
          ]
        }
      ],
      '/ai/': [
        {
          text: 'AI 开发',
          items: [
            { text: 'AI 辅助 CSS 开发指南', link: '/ai/index' },
            { text: 'CSS 开发规范', link: '/ai/css-rules' },
            { text: 'Tailwind CSS 使用指南', link: '/ai/tailwind-css' },
            { text: '推荐 Skills', link: '/ai/skills-recommendation' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lilirg/css-document' }
    ]
  }
})
