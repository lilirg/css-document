# drop-shadow()

drop-shadow() 函数定义元素的阴影效果。

## 语法

```css
drop-shadow(<offset-x> <offset-y> <blur-radius>? <color>?);
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<offset-x>` | 水平偏移 | `drop-shadow(5px 5px)` |
| `<offset-y>` | 垂直偏移 | `drop-shadow(5px 5px)` |
| `<blur-radius>` | 模糊半径 | `drop-shadow(5px 5px 10px)` |
| `<color>` | 阴影颜色 | `drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))` |

## 示例

### 基础用法

```css
/* 水平偏移 */
.horizontal {
  filter: drop-shadow(5px 0);
}

/* 垂直偏移 */
.vertical {
  filter: drop-shadow(0 5px);
}

/* 水平和垂直偏移 */
.offset {
  filter: drop-shadow(5px 5px);
}

/* 模糊半径 */
.blur {
  filter: drop-shadow(5px 5px 10px);
}

/* 阴影颜色 */
.color {
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
}
```

### 高级用法

```css
/* 容器 */
.container {
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
}

/* 水平偏移 */
.horizontal {
  filter: drop-shadow(5px 0);
}

/* 垂直偏移 */
.vertical {
  filter: drop-shadow(0 5px);
}

/* 水平和垂直偏移 */
.offset {
  filter: drop-shadow(5px 5px);
}

/* 模糊半径 */
.blur {
  filter: drop-shadow(5px 5px 10px);
}

/* 阴影颜色 */
.color {
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
}

/* 多重阴影 */
.multi {
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5)) drop-shadow(-5px -5px 10px rgba(255, 255, 255, 0.5));
}

/* 响应式布局 */
.responsive {
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
}

/* 卡片布局 */
.card {
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
}

/* 表单布局 */
.form {
  filter: none;
}

/* 图片画廊 */
.gallery {
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
}

/* 混合单位 */
.mixed-units {
  filter: none;
}

/* 带命名的项目 */
.named-items {
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
}

/* 悬停效果 */
.card {
  transition: filter 0.3s ease-in-out;
}

.card:hover {
  filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.5));
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 53+ |
| Firefox | 35+ |
| Safari | 9+ |
| Edge | 79+ |
| iOS Safari | 9+ |
| Android Browser | 53+ |
| Chrome for Android | 53+ |

## 注意事项

- `drop-shadow()` 是 filter 函数
- `drop-shadow()` 定义元素的阴影效果
- 阴影可以是多重的
- 阴影会跟随元素的形状

## 相关属性

- [`filter`](./filter)
- [`box-shadow`](./box-shadow)
- [`text-shadow`](./text-shadow)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: drop-shadow()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/drop-shadow)
- [CSS-Tricks: drop-shadow()](https://css-tricks.com/almanac/properties/f/filter/)
- [W3C CSS Filter Effects](https://www.w3.org/TR/filter-effects/)