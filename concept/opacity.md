# 不透明度（Opacity）

不透明度控制元素的透明程度。

## opacity 属性

```css
.element {
  opacity: 1;    /* 完全不透明（默认） */
  opacity: 0.5;  /* 半透明 */
  opacity: 0;    /* 完全透明 */
}
```

### opacity 特性

1. **影响整个元素** - 包括内容和子元素
2. **继承性** - 不继承，但子元素会受父元素影响
3. **层叠** - 影响堆叠上下文

### opacity 示例

```css
/* 完全不透明 */
.opaque {
  opacity: 1;
}

/* 半透明 */
.transparent {
  opacity: 0.5;
}

/* 完全透明 */
.invisible {
  opacity: 0;
}
```

## rgba/hsla 颜色

rgba/hsla 颜色只影响颜色本身，不影响子元素。

```css
/* rgba */
.color-rgba {
  color: rgba(255, 0, 0, 0.5);     /* 半透明红色 */
  background-color: rgba(0, 255, 0, 0.5);  /* 半透明绿色 */
}

/* hsla */
.color-hsla {
  color: hsla(0, 100%, 50%, 0.5);     /* 半透明红色 */
  background-color: hsla(120, 100%, 50%, 0.5);  /* 半透明绿色 */
}
```

## opacity vs rgba/hsla

| 特性 | opacity | rgba/hsla |
| :--- | :--- | :--- |
| 影响范围 | 整个元素 | 颜色本身 |
| 子元素 | 受影响 | 不受影响 |
| 继承性 | 不继承 | 不继承 |
| 性能 | 可能影响 | 更好 |

## opacity 示例

```css
/* 使用 opacity */
.parent {
  opacity: 0.5;
}

/* 使用 rgba */
.parent {
  background-color: rgba(255, 0, 0, 0.5);
  color: black;  /* 不受影响 */
}
```

## 最佳实践

1. **使用 rgba/hsla** - 更精确的控制
2. **避免过度使用 opacity** - 性能影响
3. **考虑可访问性** - 足够的对比度
4. **了解差异** - 选择合适的方法

## 相关链接

- [MDN: opacity](https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity)
- [W3C: CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/)