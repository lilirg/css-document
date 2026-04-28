import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/css-document/',
  srcDir: 'docs',
  title: "CSS 参考",
  description: "从基础概念到高级特性的完整 CSS 学习资料",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '基础知识', link: '/basics/whatisCSS' },
      { text: '核心概念', link: '/concepts/intro' },
      { text: '参考文档', link: '/reference/intro' }
    ],

    sidebar: {
      // 首页
      '/': [
        {
          text: '简介',
          collapsed: false,
          items: [
            { text: '首页', link: '/' },
            { text: '入门', link: '/intro' }
          ]
        }
      ],

      // 基础知识
      '/basics/': [
        {
          text: '基础知识',
          collapsed: false,
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

      // 核心概念
      '/concepts/': [
        {
          text: '核心概念',
          collapsed: false,
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

      // 参考文档 - 总览
      '/reference/': [
        {
          text: '参考文档',
          collapsed: false,
          items: [
            { text: '参考简介', link: '/reference/intro' }
          ]
        },
        {
          text: '属性',
          collapsed: true,
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
          collapsed: true,
          items: [
            { text: '伪类简介', link: '/reference/pseudo-class/intro' },
            { text: ':active', link: '/reference/pseudo-class/active' },
            { text: ':any-link', link: '/reference/pseudo-class/any-link' },
            { text: ':blank', link: '/reference/pseudo-class/blank' },
            { text: ':checked', link: '/reference/pseudo-class/checked' },
            { text: ':default', link: '/reference/pseudo-class/default' },
            { text: ':dir()', link: '/reference/pseudo-class/dir()' },
            { text: ':disabled', link: '/reference/pseudo-class/disabled' },
            { text: ':empty', link: '/reference/pseudo-class/empty' },
            { text: ':enabled', link: '/reference/pseudo-class/enabled' },
            { text: ':first-child', link: '/reference/pseudo-class/first-child' },
            { text: ':first-of-type', link: '/reference/pseudo-class/first-of-type' },
            { text: ':focus', link: '/reference/pseudo-class/focus' },
            { text: ':fullscreen', link: '/reference/pseudo-class/fullscreen' },
            { text: ':has()', link: '/reference/pseudo-class/has()' },
            { text: ':hover', link: '/reference/pseudo-class/hover' },
            { text: ':in-range', link: '/reference/pseudo-class/in-range' },
            { text: ':indeterminate', link: '/reference/pseudo-class/indeterminate' },
            { text: ':invalid', link: '/reference/pseudo-class/invalid' },
            { text: ':is()', link: '/reference/pseudo-class/is()' },
            { text: ':lang()', link: '/reference/pseudo-class/lang()' },
            { text: ':last-child', link: '/reference/pseudo-class/last-child' },
            { text: ':last-of-type', link: '/reference/pseudo-class/last-of-type' },
            { text: ':left', link: '/reference/pseudo-class/left' },
            { text: ':link', link: '/reference/pseudo-class/link' },
            { text: ':local-link', link: '/reference/pseudo-class/local-link' },
            { text: ':not()', link: '/reference/pseudo-class/not()' },
            { text: ':nth-child', link: '/reference/pseudo-class/nth-child' },
            { text: ':nth-last-child', link: '/reference/pseudo-class/nth-last-child' },
            { text: ':nth-of-type', link: '/reference/pseudo-class/nth-of-type' },
            { text: ':only-child', link: '/reference/pseudo-class/only-child' },
            { text: ':only-of-type', link: '/reference/pseudo-class/only-of-type' },
            { text: ':optional', link: '/reference/pseudo-class/optional' },
            { text: ':out-of-range', link: '/reference/pseudo-class/out-of-range' },
            { text: ':pattern-mismatch', link: '/reference/pseudo-class/pattern-mismatch' },
            { text: ':placeholder-shown', link: '/reference/pseudo-class/placeholder-shown' },
            { text: ':read-only', link: '/reference/pseudo-class/read-only' },
            { text: ':read-write', link: '/reference/pseudo-class/read-write' },
            { text: ':required', link: '/reference/pseudo-class/required' },
            { text: ':right', link: '/reference/pseudo-class/right' },
            { text: ':root', link: '/reference/pseudo-class/root' },
            { text: ':scope', link: '/reference/pseudo-class/scope' },
            { text: ':target', link: '/reference/pseudo-class/target' },
            { text: ':valid', link: '/reference/pseudo-class/valid' },
            { text: ':visited', link: '/reference/pseudo-class/visited' },
            { text: ':where()', link: '/reference/pseudo-class/where()' }
          ]
        },
        {
          text: '函数',
          collapsed: true,
          items: [
            { text: 'attr()', link: '/reference/functions/attr()' },
            { text: 'calc()', link: '/reference/functions/calc()' },
            { text: 'circle()', link: '/reference/functions/circle()' },
            { text: 'ellipse()', link: '/reference/functions/ellipse()' },
            { text: 'hsl()', link: '/reference/functions/hsl()' },
            { text: 'hsla()', link: '/reference/functions/hsla()' },
            { text: 'inset()', link: '/reference/functions/inset()' },
            { text: 'linear-gradient()', link: '/reference/functions/linear-gradient()' },
            { text: 'matrix()', link: '/reference/functions/matrix()' },
            { text: 'matrix3d()', link: '/reference/functions/matrix3d()' },
            { text: 'polygon()', link: '/reference/functions/polygon()' },
            { text: 'radial-gradient()', link: '/reference/functions/radial-gradient()' },
            { text: 'repeating-linear-gradient()', link: '/reference/functions/repeating-linear-gradient()' },
            { text: 'repeating-radial-gradient()', link: '/reference/functions/repeating-radial-gradient()' },
            { text: 'rgb()', link: '/reference/functions/rgb()' },
            { text: 'rgba()', link: '/reference/functions/rgba()' },
            { text: 'rotate()', link: '/reference/functions/rotate()' },
            { text: 'rotateX()', link: '/reference/functions/rotateX()' },
            { text: 'rotateY()', link: '/reference/functions/rotateY()' },
            { text: 'rotateZ()', link: '/reference/functions/rotateZ()' },
            { text: 'scale()', link: '/reference/functions/scale()' },
            { text: 'scale3d()', link: '/reference/functions/scale3d()' },
            { text: 'scaleX()', link: '/reference/functions/scaleX()' },
            { text: 'scaleY()', link: '/reference/functions/scaleY()' },
            { text: 'scaleZ()', link: '/reference/functions/scaleZ()' },
            { text: 'skew()', link: '/reference/functions/skew()' },
            { text: 'skewX()', link: '/reference/functions/skewX()' },
            { text: 'skewY()', link: '/reference/functions/skewY()' },
            { text: 'translate()', link: '/reference/functions/translate()' },
            { text: 'translate3d()', link: '/reference/functions/translate3d()' },
            { text: 'translateX()', link: '/reference/functions/translateX()' },
            { text: 'translateY()', link: '/reference/functions/translateY()' },
            { text: 'translateZ()', link: '/reference/functions/translateZ()' }
          ]
        },
        {
          text: '数据类型',
          collapsed: true,
          items: [
            { text: '角度', link: '/reference/data-types/angle' },
            { text: 'any-value', link: '/reference/data-types/any-value' },
            { text: '颜色', link: '/reference/data-types/color' },
            { text: 'custom-ident', link: '/reference/data-types/custom-ident' },
            { text: '频率', link: '/reference/data-types/frequency' },
            { text: '图像', link: '/reference/data-types/image' },
            { text: 'inherit', link: '/reference/data-types/inherit' },
            { text: 'initial', link: '/reference/data-types/initial' },
            { text: '整数', link: '/reference/data-types/integer' },
            { text: '长度', link: '/reference/data-types/length' },
            { text: 'number', link: '/reference/data-types/number' },
            { text: '百分比', link: '/reference/data-types/percentage' },
            { text: '分辨率', link: '/reference/data-types/resolution' },
            { text: 'revert', link: '/reference/data-types/revert' },
            { text: '字符串', link: '/reference/data-types/string' },
            { text: '时间', link: '/reference/data-types/time' },
            { text: 'unset', link: '/reference/data-types/unset' },
            { text: 'url', link: '/reference/data-types/url' }
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
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lilirg/css-document' }
    ]
  }
})
