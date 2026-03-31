# @media

`@media` 规则用于根据设备特性应用不同的 CSS 样式，是响应式设计的核心。

## 语法

```css
@media media-type and (media-feature) {
  /* CSS rules */
}

/* 示例 */
@media screen {
  body {
    background-color: white;
  }
}

@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 属性值

### media-type（媒体类型）

定义样式适用的媒体类型：

| 媒体类型 | 说明 |
| :--- | :--- |
| `all` | 所有设备（默认值） |
| `screen` | 屏幕设备 |
| `print` | 打印设备 |
| `speech` | 语音合成器 |
| `handheld` | 手持设备（已废弃） |
| `tty` | 固定字符宽度设备（已废弃） |
| `tv` | 电视设备（已废弃） |

### media-feature（媒体特性）

定义设备的特性：

| 媒体特性 | 说明 | 类型 |
| :--- | :--- | :--- |
| `width` | 视口宽度 | 长度 |
| `height` | 视口高度 | 长度 |
| `device-width` | 设备屏幕宽度 | 长度 |
| `device-height` | 设备屏幕高度 | 长度 |
| `orientation` | 设备方向 | `portrait` \| `landscape` |
| `aspect-ratio` | 视口宽高比 | 比率 |
| `device-aspect-ratio` | 设备屏幕宽高比 | 比率 |
| `resolution` | 分辨率 | 分辨率 |
| `color` | 颜色位深度 | 整数 |
| `color-index` | 颜色索引表大小 | 整数 |
| `monochrome` | 单色位深度 | 整数 |
| `hover` | 设备是否支持悬停 | `hover` \| `none` |
| `pointer` | 指针设备类型 | `coarse` \| `fine` \| `none` |
| `prefers-color-scheme` | 用户颜色偏好 | `light` \| `dark` |
| `prefers-reduced-motion` | 用户减少动画偏好 | `no-preference` \| `reduce` |
| `scan` | 扫描方式 | `progressive` \| `interlace` |
| `grid` | 是否使用网格 | 整数 |

## 示例

### 基本媒体查询

```css
/* 所有屏幕设备 */
@media screen {
  body {
    background-color: white;
  }
}

/* 打印设备 */
@media print {
  .no-print {
    display: none;
  }
}
```

### 最大宽度

```css
/* 屏幕宽度小于等于 768px */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 10px;
  }
  
  .sidebar {
    display: none;
  }
}
```

### 最小宽度

```css
/* 屏幕宽度大于等于 1024px */
@media (min-width: 1024px) {
  .container {
    width: 960px;
    margin: 0 auto;
  }
}
```

### 范围查询

```css
/* 屏幕宽度在 768px 到 1024px 之间 */
@media (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 750px;
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

### 高分辨率屏幕

```css
/* 高分辨率屏幕（Retina） */
@media (min-resolution: 2dppx) {
  .logo {
    background-image: url("logo@2x.png");
    background-size: contain;
  }
}
```

### 深色模式

```css
/* 深色模式 */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a1a1a;
    color: #ffffff;
  }
  
  .card {
    background-color: #2d2d2d;
  }
}

/* 浅色模式 */
@media (prefers-color-scheme: light) {
  body {
    background-color: #ffffff;
    color: #000000;
  }
  
  .card {
    background-color: #f5f5f5;
  }
}
```

### 减少动画

```css
/* 用户偏好减少动画 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 复合查询

```css
/* 屏幕设备且宽度小于 768px */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
}

/* 打印设备且宽度小于 1000px */
@media print and (max-width: 1000px) {
  .no-print {
    display: none;
  }
}
```

### 多个媒体查询

```css
/* 超小屏幕 */
@media (max-width: 480px) {
  .container {
    padding: 5px;
  }
}

/* 小屏幕 */
@media (min-width: 481px) and (max-width: 768px) {
  .container {
    padding: 10px;
  }
}

/* 中等屏幕 */
@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    padding: 20px;
  }
}

/* 大屏幕 */
@media (min-width: 1025px) {
  .container {
    padding: 30px;
  }
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 21+ | 完全支持 |
| Firefox | 4+ | 完全支持 |
| Safari | 5+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 9+ | 完全支持 |

## 相关链接

- [MDN: @media](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media)
- [W3C: CSS Media Queries Level 4 - @media](https://www.w3.org/TR/mediaqueries-4/#at-media)
