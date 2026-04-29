# flex

flex 属性是一个简写属性，用于设置 Flexbox 项目的弹性行为。

## 语法

```css
flex: flex-grow flex-shrink flex-basis;
```

## 属性值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | `1 1 auto` | `flex: auto` |
| `none` | `0 0 auto` | `flex: none` |
| `grow` | `grow 1 auto` | `flex: 1` |
| `grow shrink` | `grow shrink auto` | `flex: 1 1` |
| `grow shrink basis` | `grow shrink basis` | `flex: 1 1 100px` |

## 示例

### 基础用法

```css
/* 项目占据所有可用空间 */
.item {
  flex: 1;
}

/* 项目不伸缩 */
.item {
  flex: none;
}

/* 项目根据内容大小伸缩 */
.item {
  flex: auto;
}

/* 项目占据两倍空间 */
.item {
  flex: 2;
}
```

### 高级用法

```css
/* 容器 */
.container {
  display: flex;
}

/* 项目 1：占据 2 倍空间 */
.item-1 {
  flex: 2;
}

/* 项目 2：占据 1 倍空间 */
.item-2 {
  flex: 1;
}

/* 项目 3：占据 1 倍空间 */
.item-3 {
  flex: 1;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 29+ |
| Firefox | 28+ |
| Safari | 9+ |
| Edge | 12+ |
| iOS Safari | 9.2+ |
| Android Browser | 4.4+ |
| Chrome for Android | 62+ |

## 注意事项

- `flex: 1` 等同于 `flex: 1 1 0%`
- `flex: auto` 等同于 `flex: 1 1 auto`
- `flex: none` 等同于 `flex: 0 0 auto`
- 当 `flex-basis` 为 `auto` 时，项目大小基于内容
- 当 `flex-basis` 为 `0%` 时，项目大小基于比例分配

## 相关属性

- [`display`](./display)
- [`flex-direction`](./flex-direction)
- [`flex-wrap`](./flex-wrap)
- [`justify-content`](./justify-content)
- [`align-items`](./align-items)
- [`align-content`](./align-content)

## 相关资源

- [MDN Web Docs: flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [W3C CSS Flexible Box Layout](https://www.w3.org/TR/css-flexbox-1/)