# CSS 开发者工具

浏览器开发者工具是前端开发中不可或缺的工具，用于调试、分析和优化 CSS 样式。

## 浏览器开发者工具概述

### 打开开发者工具

| 浏览器 | 快捷键 |
| :--- | :--- |
| Chrome/Edge | F12 或 Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac) |
| Firefox | F12 或 Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac) |
| Safari | Cmd+Option+I (Mac) |

### 主要面板

| 面板 | 功能 |
| :--- | :--- |
| Elements/Inspector | 查看和编辑 HTML 和 CSS |
| Console | 查看日志和执行 JavaScript |
| Sources | 调试 JavaScript 代码 |
| Network | 分析网络请求 |
| Performance | 分析性能 |
| Memory | 分析内存使用 |
| Application | 查看存储和缓存 |

## Elements 面板

### 查看元素

Elements 面板允许你查看 DOM 树和应用的样式。

```
┌─────────────────────────────────────────────┐
│  Elements              Console  Sources ... │
├─────────────────────────────────────────────┤
│  <html>                                     │
│    <head>                                   │
│      <style>                                │
│        .box { color: red; }                 │
│      </style>                               │
│    </head>                                  │
│    <body>                                   │
│      <div class="box">                      │
│        Hello World                          │
│      </div>                                 │
│    </body>                                  │
│  </html>                                    │
└─────────────────────────────────────────────┘
```

### 查看样式

右侧面板显示应用于选中元素的所有样式：

- **Computed**：计算后的最终样式
- **Styles**：所有匹配的 CSS 规则
- **Styles 面板中的规则来源**：
  - 内联样式
  - 用户代理样式表
  - 文档样式表
  - 浏览器扩展样式

### 编辑样式

1. **双击属性值**：直接编辑
2. **添加新属性**：点击空白处
3. **切换属性**：点击复选框
4. **添加选择器**：右键选择器

```css
/* 实时编辑示例 */
.box {
  color: red;        /* 双击修改 */
  font-size: 16px;   /* 添加新属性 */
  /* margin: 10px; */ /* 禁用属性 */
}
```

### 计算样式（Computed）

Computed 面板显示元素最终计算后的所有样式：

- 显示所有继承的样式
- 显示所有应用的样式
- 显示盒模型可视化

### 盒模型可视化

在 Computed 面板中，可以看到盒模型的可视化：

```
┌─────────────────────────────────────┐
│              Margin                 │
│  ┌───────────────────────────────┐  │
│  │          Border               │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │       Padding           │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │     Content       │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

## 选择器匹配

### 查看选择器来源

在 Styles 面板中，每个规则旁边显示其来源：

- `styles.css:10` - 外部样式表
- `:100` - 内联 `<style>` 标签
- `user-agent` - 浏览器默认样式

### 查看选择器优先级

高亮显示的选择器表示当前生效的规则。

```css
/* 优先级较低，被覆盖 */
.box {
  color: red;
}

/* 优先级较高，生效 */
#main .box {
  color: blue;  /* ✓ 生效 */
}
```

## 元素状态模拟

### 伪类状态

在 Styles 面板中，可以强制元素处于特定状态：

- `:hover` - 悬停状态
- `:active` - 激活状态
- `:focus` - 聚焦状态
- `:visited` - 访问状态

```
┌─────────────────────────────────────┐
│  :hover  :active  :focus  :visited  │
└─────────────────────────────────────┘
```

### 使用示例

```css
/* 悬停状态 */
a:hover {
  color: blue;
  text-decoration: underline;
}

/* 强制悬停查看效果 */
```

## 响应式设计工具

### 设备模拟

在开发者工具中切换设备视图：

1. 点击设备工具栏图标（或 Ctrl+Shift+M）
2. 选择预设设备
3. 自定义设备尺寸

### 视口尺寸

```
┌─────────────────────────────────────┐
│  iPhone 12 Pro  |  390 x 844        │
│  Pixel 5        |  393 x 851        │
│  iPad Pro       |  1024 x 768       │
│  Responsive     |  Custom           │
└─────────────────────────────────────┘
```

### 旋转设备

点击旋转图标切换横竖屏。

## CSS 网格和弹性盒可视化

### 网格可视化

1. 在 Elements 面板中选择元素
2. 在 Styles 面板中点击网格图标
3. 查看网格布局可视化

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### 弹性盒可视化

1. 在 Elements 面板中选择元素
2. 在 Styles 面板中点击弹性盒图标
3. 查看弹性盒布局可视化

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## 颜色编辑器

### 颜色选择器

点击颜色值打开颜色选择器：

- 支持多种颜色格式
- 取色器
- 颜色对比度检查

```css
color: #ff0000;  /* 点击打开选择器 */
color: rgb(255, 0, 0);
color: hsl(0, 100%, 50%);
```

### 颜色对比度

检查文本和背景的对比度：

```
对比度：4.5:1 ✓ 符合 WCAG AA 标准
对比度：3.0:1 ✗ 不符合标准
```

## 字体预览

### 查看字体信息

- 字体族
- 字体大小
- 行高
- 字重
- 字体文件

### 自定义字体

```css
@font-face {
  font-family: 'Custom Font';
  src: url('font.woff2') format('woff2');
}
```

## 性能分析

### 渲染性能

在 Performance 面板中分析：

- **Layout** - 布局计算
- **Paint** - 绘制
- **Composite** - 合成

### 强制同步布局

避免强制同步布局，提高性能：

```javascript
// 不推荐 - 强制同步布局
const height = element.offsetHeight;
element.style.width = height + 'px';

// 推荐 - 使用 requestAnimationFrame
requestAnimationFrame(() => {
  const height = element.offsetHeight;
  element.style.width = height + 'px';
});
```

## 样式搜索

### 搜索样式

使用 Ctrl+F（或 Cmd+F）在样式中搜索：

- 选择器
- 属性
- 属性值

### 查找未使用的样式

在 Coverage 面板中查看未使用的 CSS：

1. 打开 Coverage 面板
2. 开始记录
3. 浏览页面
4. 查看未使用的 CSS

## 调试技巧

### 断点调试 CSS

1. 在 Elements 面板中选择元素
2. 在右侧选择器上右键
3. 选择 Break on...
   - attribute modification
   - subtree modifications
   - node removal

### 查看 CSS 动画

1. 打开 Animation 面板（Chrome）
2. 查看当前运行的动画
3. 控制动画播放速度

### 查看 CSS 变量

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}
```

在 Computed 面板中查看 CSS 变量值。

## 最佳实践

1. **使用元素检查器**：快速定位元素
2. **实时编辑样式**：快速原型设计
3. **查看计算样式**：理解最终效果
4. **使用响应式工具**：测试不同设备
5. **分析性能**：优化渲染性能
6. **检查对比度**：确保可访问性

## 相关链接

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/)
- [Safari Web Inspector](https://developer.apple.com/safari/tools/)
- [MDN: 浏览器开发者工具](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools)