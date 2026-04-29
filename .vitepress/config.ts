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
    // 搜索配置
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@vue/search-plugin@0.3.1/dist/vueSearchPlugin.umd.js', async: 'true' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '未找到相关结果',
                resetButtonTitle: '清除搜索条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
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
          collapsed: true,
          items: [
            {
              text: '布局与盒模型',
              collapsed: true,
              items: [
                { text: '显示', link: '/reference/properties/display' },
                { text: '定位', link: '/reference/properties/position' },
                { text: '宽度', link: '/reference/properties/width' },
                { text: '高度', link: '/reference/properties/height' },
                { text: '最小宽度', link: '/reference/properties/min-width' },
                { text: '最大宽度', link: '/reference/properties/max-width' },
                { text: '最小高度', link: '/reference/properties/min-height' },
                { text: '最大高度', link: '/reference/properties/max-height' },
                { text: '边距', link: '/reference/properties/margin' },
                { text: '内边距', link: '/reference/properties/padding' },
                { text: '边框', link: '/reference/properties/border' },
                { text: '边框宽度', link: '/reference/properties/border-width' },
                { text: '边框样式', link: '/reference/properties/border-style' },
                { text: '边框颜色', link: '/reference/properties/border-color' },
                { text: '圆角', link: '/reference/properties/border-radius' },
                { text: '溢出', link: '/reference/properties/overflow' },
                { text: '溢出换行', link: '/reference/properties/white-space' },
                { text: '文本溢出', link: '/reference/properties/text-overflow' },
                { text: '单词换行', link: '/reference/properties/word-break' },
                { text: '单词换行（旧版）', link: '/reference/properties/word-wrap' },
                { text: '盒模型', link: '/reference/properties/box-sizing' },
                { text: '轮廓', link: '/reference/properties/outline' },
                { text: '轮廓偏移', link: '/reference/properties/outline-offset' }
              ]
            },
            {
              text: 'Flexbox 布局',
              collapsed: true,
              items: [
                { text: '弹性方向', link: '/reference/properties/flex-direction' },
                { text: '弹性', link: '/reference/properties/flex' },
                { text: '弹性换行', link: '/reference/properties/flex-wrap' },
                { text: '弹性流', link: '/reference/properties/flex-flow' },
                { text: '弹性增长', link: '/reference/properties/flex-grow' },
                { text: '弹性收缩', link: '/reference/properties/flex-shrink' },
                { text: '弹性基础', link: '/reference/properties/flex-basis' },
                { text: '对齐项目', link: '/reference/properties/align-items' },
                { text: '对齐自身', link: '/reference/properties/align-self' },
                { text: '对齐自身（justify）', link: '/reference/properties/justify-self' },
                { text: 'justify内容', link: '/reference/properties/justify-content' }
              ]
            },
            {
              text: 'Grid 布局',
              collapsed: true,
              items: [
                { text: '网格', link: '/reference/properties/grid' },
                { text: '网格区域', link: '/reference/properties/grid-area' },
                { text: '网格列', link: '/reference/properties/grid-column' },
                { text: '网格行', link: '/reference/properties/grid-row' },
                { text: '网格模板', link: '/reference/properties/grid-template' },
                { text: '网格模板行', link: '/reference/properties/grid-template-rows' },
                { text: '网格模板区域', link: '/reference/properties/grid-template-areas' },
                { text: '网格列间距', link: '/reference/properties/grid-column-gap' },
                { text: '网格行间距', link: '/reference/properties/grid-row-gap' },
                { text: '网格间距', link: '/reference/properties/grid-gap' }
              ]
            },
            {
              text: '容器查询',
              collapsed: true,
              items: [
                { text: '容器', link: '/reference/properties/container' },
                { text: '容器名称', link: '/reference/properties/container-name' },
                { text: '容器类型', link: '/reference/properties/container-type' }
              ]
            },
            {
              text: '变换与动画',
              collapsed: true,
              items: [
                { text: '动画', link: '/reference/properties/animation' },
                { text: '过渡', link: '/reference/properties/transition' },
                { text: '变换', link: '/reference/properties/transform' },
                { text: '变换样式', link: '/reference/properties/transform-style' },
                { text: '透视', link: '/reference/properties/perspective' },
                { text: '背面可见性', link: '/reference/properties/backface-visibility' },
                { text: '变换原点', link: '/reference/properties/transform-origin' }
              ]
            },
            {
              text: '视觉效果',
              collapsed: true,
              items: [
                { text: '颜色', link: '/reference/properties/color' },
                { text: '背景', link: '/reference/properties/background' },
                { text: '背景混合模式', link: '/reference/properties/background-blend-mode' },
                { text: '背景滤镜', link: '/reference/properties/backdrop-filter' },
                { text: '滤镜', link: '/reference/properties/filter' },
                { text: '阴影', link: '/reference/properties/box-shadow' },
                { text: '文本阴影', link: '/reference/properties/text-shadow' },
                { text: '透明度', link: '/reference/properties/opacity' },
                { text: '可见性', link: '/reference/properties/visibility' },
                { text: '指针事件', link: '/reference/properties/pointer-events' },
                { text: '光标', link: '/reference/properties/cursor' },
                { text: '用户选择', link: '/reference/properties/user-select' },
                { text: '连字符', link: '/reference/properties/hyphens' },
                { text: '列表样式', link: '/reference/properties/list-style' },
                { text: '混合模式', link: '/reference/properties/mix-blend-mode' },
                { text: '隔离', link: '/reference/properties/isolation' },
                { text: '包含', link: '/reference/properties/contain' }
              ]
            },
            {
              text: '排版与文本',
              collapsed: true,
              items: [
                { text: '排版', link: '/reference/properties/typography' },
                { text: '对齐', link: '/reference/properties/align-content' },
                { text: '网格列', link: '/reference/properties/grid-template-columns' },
                { text: '顶部', link: '/reference/properties/top' },
                { text: '右侧', link: '/reference/properties/right' },
                { text: '底部', link: '/reference/properties/bottom' },
                { text: '左侧', link: '/reference/properties/left' },
                { text: '层级', link: '/reference/properties/z-index' }
              ]
            }
          ]
        },
        {
          text: '伪类',
          collapsed: true,
          items: [
            { text: '伪类简介', link: '/reference/pseudo-class/intro' },
            {
              text: '状态伪类',
              collapsed: true,
              items: [
                { text: ':active', link: '/reference/pseudo-class/active' },
                { text: ':hover', link: '/reference/pseudo-class/hover' },
                { text: ':focus', link: '/reference/pseudo-class/focus' },
                { text: ':visited', link: '/reference/pseudo-class/visited' },
                { text: ':link', link: '/reference/pseudo-class/link' },
                { text: ':any-link', link: '/reference/pseudo-class/any-link' },
                { text: ':local-link', link: '/reference/pseudo-class/local-link' }
              ]
            },
            {
              text: '表单伪类',
              collapsed: true,
              items: [
                { text: ':enabled', link: '/reference/pseudo-class/enabled' },
                { text: ':disabled', link: '/reference/pseudo-class/disabled' },
                { text: ':checked', link: '/reference/pseudo-class/checked' },
                { text: ':default', link: '/reference/pseudo-class/default' },
                { text: ':valid', link: '/reference/pseudo-class/valid' },
                { text: ':invalid', link: '/reference/pseudo-class/invalid' },
                { text: ':in-range', link: '/reference/pseudo-class/in-range' },
                { text: ':out-of-range', link: '/reference/pseudo-class/out-of-range' },
                { text: ':required', link: '/reference/pseudo-class/required' },
                { text: ':optional', link: '/reference/pseudo-class/optional' },
                { text: ':read-only', link: '/reference/pseudo-class/read-only' },
                { text: ':read-write', link: '/reference/pseudo-class/read-write' },
                { text: ':placeholder-shown', link: '/reference/pseudo-class/placeholder-shown' },
                { text: ':blank', link: '/reference/pseudo-class/blank' },
                { text: ':pattern-mismatch', link: '/reference/pseudo-class/pattern-mismatch' }
              ]
            },
            {
              text: '结构伪类',
              collapsed: true,
              items: [
                { text: ':root', link: '/reference/pseudo-class/root' },
                { text: ':first-child', link: '/reference/pseudo-class/first-child' },
                { text: ':last-child', link: '/reference/pseudo-class/last-child' },
                { text: ':only-child', link: '/reference/pseudo-class/only-child' },
                { text: ':first-of-type', link: '/reference/pseudo-class/first-of-type' },
                { text: ':last-of-type', link: '/reference/pseudo-class/last-of-type' },
                { text: ':only-of-type', link: '/reference/pseudo-class/only-of-type' },
                { text: ':nth-child', link: '/reference/pseudo-class/nth-child' },
                { text: ':nth-last-child', link: '/reference/pseudo-class/nth-last-child' },
                { text: ':nth-of-type', link: '/reference/pseudo-class/nth-of-type' },
                { text: ':empty', link: '/reference/pseudo-class/empty' }
              ]
            },
            {
              text: '其他伪类',
              collapsed: true,
              items: [
                { text: ':target', link: '/reference/pseudo-class/target' },
                { text: ':scope', link: '/reference/pseudo-class/scope' },
                { text: ':fullscreen', link: '/reference/pseudo-class/fullscreen' },
                { text: ':dir()', link: '/reference/pseudo-class/dir()' },
                { text: ':lang()', link: '/reference/pseudo-class/lang()' },
                { text: ':is()', link: '/reference/pseudo-class/is()' },
                { text: ':where()', link: '/reference/pseudo-class/where()' },
                { text: ':has()', link: '/reference/pseudo-class/has()' },
                { text: ':indeterminate', link: '/reference/pseudo-class/indeterminate' },
                { text: ':left', link: '/reference/pseudo-class/left' },
                { text: ':right', link: '/reference/pseudo-class/right' }
              ]
            }
          ]
        },
        {
          text: '函数',
          collapsed: true,
          items: [
            {
              text: '颜色函数',
              collapsed: true,
              items: [
                { text: 'rgb()', link: '/reference/functions/rgb()' },
                { text: 'rgba()', link: '/reference/functions/rgba()' },
                { text: 'hsl()', link: '/reference/functions/hsl()' },
                { text: 'hsla()', link: '/reference/functions/hsla()' }
              ]
            },
            {
              text: '渐变函数',
              collapsed: true,
              items: [
                { text: 'linear-gradient()', link: '/reference/functions/linear-gradient()' },
                { text: 'repeating-linear-gradient()', link: '/reference/functions/repeating-linear-gradient()' },
                { text: 'radial-gradient()', link: '/reference/functions/radial-gradient()' },
                { text: 'repeating-radial-gradient()', link: '/reference/functions/repeating-radial-gradient()' }
              ]
            },
            {
              text: '变换函数',
              collapsed: true,
              items: [
                { text: 'translate()', link: '/reference/functions/translate()' },
                { text: 'translateX()', link: '/reference/functions/translateX()' },
                { text: 'translateY()', link: '/reference/functions/translateY()' },
                { text: 'translateZ()', link: '/reference/functions/translateZ()' },
                { text: 'translate3d()', link: '/reference/functions/translate3d()' },
                { text: 'scale()', link: '/reference/functions/scale()' },
                { text: 'scaleX()', link: '/reference/functions/scaleX()' },
                { text: 'scaleY()', link: '/reference/functions/scaleY()' },
                { text: 'scaleZ()', link: '/reference/functions/scaleZ()' },
                { text: 'scale3d()', link: '/reference/functions/scale3d()' },
                { text: 'rotate()', link: '/reference/functions/rotate()' },
                { text: 'rotateX()', link: '/reference/functions/rotateX()' },
                { text: 'rotateY()', link: '/reference/functions/rotateY()' },
                { text: 'rotateZ()', link: '/reference/functions/rotateZ()' },
                { text: 'skew()', link: '/reference/functions/skew()' },
                { text: 'skewX()', link: '/reference/functions/skewX()' },
                { text: 'skewY()', link: '/reference/functions/skewY()' },
                { text: 'matrix()', link: '/reference/functions/matrix()' },
                { text: 'matrix3d()', link: '/reference/functions/matrix3d()' }
              ]
            },
            {
              text: '形状函数',
              collapsed: true,
              items: [
                { text: 'circle()', link: '/reference/functions/circle()' },
                { text: 'ellipse()', link: '/reference/functions/ellipse()' },
                { text: 'inset()', link: '/reference/functions/inset()' },
                { text: 'polygon()', link: '/reference/functions/polygon()' }
              ]
            },
            {
              text: '其他函数',
              collapsed: true,
              items: [
                { text: 'calc()', link: '/reference/functions/calc()' },
                { text: 'attr()', link: '/reference/functions/attr()' },
                { text: 'drop-shadow()', link: '/reference/functions/drop-shadow()' }
              ]
            }
          ]
        },
        {
          text: '数据类型',
          collapsed: true,
          items: [
            {
              text: '基本类型',
              collapsed: true,
              items: [
                { text: 'number', link: '/reference/data-types/number' },
                { text: 'integer', link: '/reference/data-types/integer' },
                { text: 'length', link: '/reference/data-types/length' },
                { text: 'angle', link: '/reference/data-types/angle' },
                { text: 'time', link: '/reference/data-types/time' },
                { text: 'frequency', link: '/reference/data-types/frequency' },
                { text: 'percentage', link: '/reference/data-types/percentage' },
                { text: 'string', link: '/reference/data-types/string' },
                { text: 'color', link: '/reference/data-types/color' },
                { text: 'image', link: '/reference/data-types/image' }
              ]
            },
            {
              text: '特殊值',
              collapsed: true,
              items: [
                { text: 'inherit', link: '/reference/data-types/inherit' },
                { text: 'initial', link: '/reference/data-types/initial' },
                { text: 'revert', link: '/reference/data-types/revert' },
                { text: 'unset', link: '/reference/data-types/unset' }
              ]
            },
            {
              text: '复合类型',
              collapsed: true,
              items: [
                { text: 'lt_angle_gt', link: '/reference/data-types/lt_angle_gt' },
                { text: 'lt_basic-shape_gt', link: '/reference/data-types/lt_basic-shape_gt' },
                { text: 'lt_blend-mode_gt', link: '/reference/data-types/lt_blend-mode_gt' },
                { text: 'lt_color_gt', link: '/reference/data-types/lt_color_gt' },
                { text: 'lt_frequency_gt', link: '/reference/data-types/lt_frequency_gt' },
                { text: 'lt_gradient_gt', link: '/reference/data-types/lt_gradient_gt' },
                { text: 'lt_image_gt', link: '/reference/data-types/lt_image_gt' },
                { text: 'lt_integer_gt', link: '/reference/data-types/lt_integer_gt' },
                { text: 'lt_length_gt', link: '/reference/data-types/lt_length_gt' },
                { text: 'lt_number_gt', link: '/reference/data-types/lt_number_gt' },
                { text: 'lt_percentage_gt', link: '/reference/data-types/lt_percentage_gt' },
                { text: 'lt_position_gt', link: '/reference/data-types/lt_position_gt' },
                { text: 'lt_ratio_gt', link: '/reference/data-types/lt_ratio_gt' },
                { text: 'lt_resolution_gt', link: '/reference/data-types/lt_resolution_gt' },
                { text: 'lt_string_gt', link: '/reference/data-types/lt_string_gt' },
                { text: 'lt_time_gt', link: '/reference/data-types/lt_time_gt' },
                { text: 'lt_timing-function_gt', link: '/reference/data-types/lt_timing-function_gt' },
                { text: 'lt_url_gt', link: '/reference/data-types/lt_url_gt' },
                { text: 'lt_user-ident_gt', link: '/reference/data-types/lt_user-ident_gt' },
                { text: 'any-value', link: '/reference/data-types/any-value' },
                { text: 'custom-ident', link: '/reference/data-types/custom-ident' },
                { text: 'resolution', link: '/reference/data-types/resolution' },
                { text: 'url', link: '/reference/data-types/url' }
              ]
            }
          ]
        },
        {
          text: '规则',
          collapsed: true,
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

    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lilirg/css-document' }
    ]
  }
})
