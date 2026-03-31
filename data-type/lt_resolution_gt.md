# resolution

`resolution` 数据类型表示分辨率值，主要用于 `@media` 查询中的 `resolution` 媒体特性。

## 语法

```css
/* 基本用法 */
@media (resolution: 2dppx) {
  /* CSS 规则 */
}

/* dpi */
@media (resolution: 150dpi) {
  /* CSS 规则 */
}

/* dpcm */
@media (resolution: 60dpcm) {
  /* CSS 规则 */
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 单位

| 单位 | 描述 |
| :--- | :--- |
| `dppx` | 每 CSS 像素的设备像素 |
| `dpi` | 每英寸点数 |
| `dpcm` | 每厘米点数 |

## 示例

### 媒体查询

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

/* 低分辨率屏幕 */
@media (resolution: 1dppx) {
  .logo {
    background-image: url(logo.png);
  }
}
```

### 转换

```css
/* 1dppx = 96dpi */
/* 2dppx = 192dpi */
/* 3dppx = 288dpi */
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 29+ |
| Firefox | 18+ |
| Safari | 7+ |
| Edge | 12+ |
| IE | 9+ |

## 相关链接

- [MDN Web Docs: resolution](https://developer.mozilla.org/zh-CN/docs/Web/CSS/resolution)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#resolution)
