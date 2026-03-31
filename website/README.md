# CSS 参考网站

这是一个使用 Docusaurus 构建的 CSS 参考网站。

## 项目结构

```
website/
├── docs/              # 文档内容
│   ├── basics/        # 入门文档
│   ├── concepts/      # 概念文档
│   └── reference/     # 参考文档
├── src/               # 源代码
│   ├── css/           # 自定义 CSS
│   └── pages/         # 页面组件
├── static/            # 静态资源
├── docusaurus.config.js  # Docusaurus 配置
├── sidebars.js        # 侧边栏配置
└── package.json       # 项目依赖
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建生产版本
npm run build

# 预览构建结果
npm run serve
```

## 部署

本项目通过 Vercel 进行自动化部署。

## 相关资源

- [Docusaurus 官方文档](https://docusaurus.io/)
- [MDN Web Docs: CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)