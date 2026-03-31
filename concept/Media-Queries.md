# 媒体查询 (Media Queries)

媒体查询允许您根据设备的特性（如宽度、高度、方向、分辨率等）应用不同的样式。

## 语法

```css
/* 基本语法 */
@media <media-type> and (<media-feature>) {
  /* CSS 规则 */
}

/* 常用媒体类型 */
@media screen { }
@media print { }
@media all { }

/* 常用媒体特性 */
@media (max-width: 768px) { }
@media (min-width: 768px) { }
@media (orientation: portrait) { }
@media (orientation: landscape) { }
@media (resolution: 2dppx) { }

/* 逻辑运算 */
@media not <media-type> { }
@media only <media-type> { }
@media (<media-feature>) and (<media-feature>) { }
@media (<media-feature>) or (<media-feature>) { }
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 媒体类型

| 媒体类型 | 描述 |
| :--- | :--- |
| `all` | 适用于所有设备（默认） |
| `screen` | 适用于屏幕设备 |
| `print` | 适用于打印设备 |
| `speech` | 适用于屏幕阅读器 |

## 媒体特性

| 媒体特性 | 描述 |
| :--- | :--- |
| `width` | 视口宽度 |
| `height` | 视口高度 |
| `device-width` | 设备屏幕宽度 |
| `device-height` | 设备屏幕高度 |
| `orientation` | 设备方向（`portrait` 或 `landscape`） |
| `aspect-ratio` | 视口宽高比 |
| `device-aspect-ratio` | 设备屏幕宽高比 |
| `resolution` | 设备分辨率 |
| `scan` | 显示类型（`progressive` 或 `interlace`） |
| `grid` | 是否使用网格显示（`0` 或 `1`） |
| `update` | 更新频率（`none`、`slow`、`fast`） |
| `overflow` | 滚动行为（`none`、`block`、`inline`、`both`） |
| `hover` | 支持悬停（`none`、`hover`） |
| `pointer` | 指针设备（`none`、`coarse`、`fine`） |

## 示例

### 基本媒体查询

```css
/* 当视口宽度小于 768px 时 */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}

/* 当视口宽度大于 768px 时 */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}
```

### 方向查询

```css
/* 竖屏模式 */
@media (orientation: portrait) {
  .video {
    width: 100%;
    height: auto;
  }
}

/* 横屏模式 */
@media (orientation: landscape) {
  .video {
    width: 50%;
    height: auto;
  }
}
```

### 分辨率查询

```css
/* 高分辨率屏幕 */
@media (resolution: 2dppx) {
  .logo {
    background-image: url(logo@2x.png);
    background-size: contain;
  }
}

/* 超高分辨率屏幕 */
@media (resolution: 3dppx) {
  .logo {
    background-image: url(logo@3x.png);
    background-size: contain;
  }
}
```

### 组合查询

```css
/* 宽度小于 768px 且为横屏 */
@media (max-width: 768px) and (orientation: landscape) {
  .sidebar {
    display: none;
  }
}

/* 宽度大于 1024px 且分辨率高于 2x */
@media (min-width: 1024px) and (resolution: 2dppx) {
  .image {
    background-image: url(image@2x.png);
  }
}
```

### 打印样式

```css
/* 打印时隐藏导航 */
@media print {
  .nav,
  .sidebar,
  .footer {
    display: none;
  }
  
  .content {
    width: 100%;
    padding: 0;
  }
  
  a {
    color: black;
    text-decoration: none;
  }
  
  a::after {
    content: " (" attr(href) ")";
  }
}
```

### 悬停和指针查询

```css
/* 不支持悬停的设备 */
@media (hover: none) {
  .button {
    /* 移动设备样式 */
  }
}

/* 支持悬停的设备 */
@media (hover: hover) {
  .button:hover {
    background-color: #0056b3;
  }
}

/* 精确指针设备 */
@media (pointer: fine) {
  .tooltip {
    display: none;
  }
}

/* 粗略指针设备 */
@media (pointer: coarse) {
  .button {
    padding: 12px 20px;
  }
}
```

### 响应式断点

```css
/* 超小屏幕（手机） */
@media (max-width: 575.98px) {
  .container {
    padding: 10px;
  }
}

/* 小屏幕（平板） */
@media (min-width: 576px) and (max-width: 767.98px) {
  .container {
    padding: 15px;
  }
}

/* 中等屏幕（桌面） */
@media (min-width: 768px) and (max-width: 991.98px) {
  .container {
    padding: 20px;
  }
}

/* 大屏幕（大桌面） */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .container {
    padding: 25px;
  }
}

/* 超大屏幕（超大桌面） */
@media (min-width: 1200px) {
  .container {
    padding: 30px;
  }
}
```

### 深色模式

```css
/* 深色模式 */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #121212;
    --text-color: #ffffff;
  }
}

/* 浅色模式 */
@media (prefers-color-scheme: light) {
  :root {
    --bg-color: #ffffff;
    --text-color: #121212;
  }
}
```

### 减少动画

```css
/* 减少动画 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 21+ |
| Firefox | 6+ |
| Safari | 5+ |
| Edge | 12+ |
| IE | 9+ |

## 相关链接

- [MDN Web Docs: 媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries)
- [CSS Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/)
- [Responsive Design Guidelines](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks)
