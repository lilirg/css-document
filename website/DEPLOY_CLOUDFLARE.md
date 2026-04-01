# Cloudflare Pages 部署指南

## 前置要求

1. 拥有 Cloudflare 账号（免费注册：https://dash.cloudflare.com/sign-up）
2. 安装 Node.js 18+
3. 项目已构建完成（`npm run build`）

## 部署步骤

### 方法一：使用 Wrangler CLI（推荐）

#### 1. 安装 Wrangler

```bash
npm install -g wrangler
```

#### 2. 登录 Cloudflare

```bash
wrangler login
```

浏览器会打开 Cloudflare 登录页面，授权后自动返回。

#### 3. 部署到 Cloudflare Pages

```bash
# 仅部署（需要已构建）
npm run deploy:cloudflare

# 构建并部署
npm run build-and-deploy:cloudflare
```

### 方法二：通过 Cloudflare 控制台

#### 1. 创建 Pages 项目

1. 访问 https://dash.cloudflare.com/sign-up/pages
2. 点击 "Create a project"
3. 选择 "Connect to Git" 或 "Direct upload"

#### 2. 配置项目

| 配置项 | 值 |
|--------|-----|
| **Project name** | `css-document` |
| **Framework preset** | `Docusaurus` |
| **Root directory** | `website` |
| **Build command** | `npm run build` |
| **Build output directory** | `build` |

#### 3. 环境变量（可选）

```
NODE_VERSION = 18
```

## 自定义域名

### 1. 添加自定义域名

1. 进入 Cloudflare Pages 项目
2. 点击 "Custom domains"
3. 输入域名（如 `docs.yourdomain.com`）
4. Cloudflare 会自动配置 DNS 和 SSL

### 2. DNS 配置（如使用其他 DNS 提供商）

```
类型：CNAME
名称：docs
内容：css-document.pages.dev
代理：已代理（橙色云）
```

## 自动部署（Git 集成）

### 1. 连接 GitHub/GitLab

1. Pages 项目 → "Connect to Git"
2. 选择仓库 `css-document`
3. 配置部署设置：
   - **Production branch**: `main`
   - **Root directory**: `website`
   - **Build command**: `npm run build`
   - **Build output directory**: `build`

### 2. 部署触发

- **Production 部署**：推送到 `main` 分支自动触发
- **Preview 部署**：创建 Pull Request 自动触发

## 环境变量配置

### 1. 在 Cloudflare 控制台设置

1. Pages 项目 → Settings → Environment variables
2. 添加变量：
   - `NODE_VERSION`: `18`

### 2. 在 wrangler.toml 设置

```toml
[vars]
MY_VARIABLE = "production_value"
```

## 验证部署

部署完成后，访问：
- **默认域名**: `https://css-document.pages.dev`
- **自定义域名**: `https://docs.yourdomain.com`

## 回滚版本

1. Pages 项目 → Deployments
2. 找到需要回滚的版本
3. 点击 "Promote to production"

## 常见问题

### Q: 部署失败，提示构建错误

**A**: 检查：
1. `website/package.json` 中的 `build` 脚本是否正确
2. 本地是否能成功运行 `npm run build`
3. Node.js 版本是否为 18+

### Q: 访问 404

**A**: 检查 `docusaurus.config.js` 中的 `baseUrl` 配置：
```js
baseUrl: '/',
```

### Q: 国内访问速度慢

**A**: Cloudflare 全球 CDN 已优化，国内访问通常较快。如仍有问题：
1. 启用 Cloudflare 代理（橙色云）
2. 考虑使用 Cloudflare R2 存储静态资源

## 费用说明

Cloudflare Pages 免费套餐：
- ✅ 无限静态站点
- ✅ 每月 100,000 请求
- ✅ 无限带宽
- ✅ 自动 HTTPS/SSL
- ✅ 自定义域名
- ✅ 预览部署

完全满足个人文档站点需求。