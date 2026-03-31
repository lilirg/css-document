# ratio

`ratio` 数据类型表示宽高比值。

## 语法

```css
/* 基本用法 */
.element {
  aspect-ratio: 16 / 9;
}

/* 单个数字 */
.element {
  aspect-ratio: 1;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持 |

## 示例

### aspect-ratio

```css
/* 16:9 比例 */
.element {
  aspect-ratio: 16 / 9;
}

/* 4:3 比例 */
.element {
  aspect-ratio: 4 / 3;
}

/* 正方形 */
.element {
  aspect-ratio: 1 / 1;
}

/* 竖屏 */
.element {
  aspect-ratio: 9 / 16;
}
```

### object-fit

```css
/* 保持比例 */
.element {
  object-fit: cover;
  object-fit: contain;
  object-fit: fill;
  object-fit: scale-down;
}
```

### 实用示例

```css
/* 响应式图片 */
.image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* 视频容器 */
.video-container {
  aspect-ratio: 16 / 9;
  background-color: #000;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 88+ |
| Firefox | 89+ |
| Safari | 14.1+ |
| Edge | 88+ |
| IE | 不支持 |

## 相关链接

- [MDN Web Docs: ratio](https://developer.mozilla.org/zh-CN/docs/Web/CSS/ratio)
- [CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/#ratios)
