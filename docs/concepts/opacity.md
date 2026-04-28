# 不透明度（Opacity）

不透明度控制元素的透明程度。

## 什么是不透明度？

不透明度（Opacity）是 CSS 中控制元素透明程度的属性。不透明度值范围从 0（完全透明）到 1（完全不透明）。

## opacity 属性

```css
.element {
  opacity: 1;    /* 完全不透明 */
  opacity: 0.5;  /* 半透明 */
  opacity: 0;    /* 完全透明 */
}
```

## 不透明度示例

```css
/* 完全不透明 */
.opaque {
  opacity: 1;
}

/* 半透明 */
.semi-transparent {
  opacity: 0.5;
}

/* 完全透明 */
.transparent {
  opacity: 0;
}
```

## 不透明度与 rgba()

`rgba()` 函数可以设置颜色的不透明度：

```css
/* 使用 rgba() */
.element {
  background-color: rgba(255, 0, 0, 0.5);  /* 半透明红色 */
}

/* 使用 opacity */
.element {
  background-color: red;
  opacity: 0.5;
}
```

### 区别

- `rgba()` - 只影响颜色
- `opacity` - 影响整个元素及其子元素

## 不透明度继承

不透明度会影响子元素：

```css
.parent {
  opacity: 0.5;
}

.child {
  /* 继承父元素的不透明度 */
}
```

## 相关资源

- [MDN Web Docs: 不透明度](https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity)
- [CSS-Tricks: Opacity](https://css-tricks.com/almanac/properties/o/opacity/)