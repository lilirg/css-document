# text-shadow

`text-shadow` CSS 属性为文本添加阴影效果。

## 语法

```css
/* 无阴影 */
text-shadow: none;

/* 两个值 - 水平偏移 | 垂直偏移 */
text-shadow: 2px 2px;

/* 三个值 - 水平偏移 | 垂直偏移 | 模糊半径 */
text-shadow: 2px 2px 4px;

/* 四个值 - 水平偏移 | 垂直偏移 | 模糊半径 | 颜色 */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

/* 多个阴影（用逗号分隔） */
text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 2em blue;
```

## 值

### 长度值

阴影的偏移量和模糊半径使用长度值。

- **水平偏移**：阴影在水平方向上的偏移
- **垂直偏移**：阴影在垂直方向上的偏移
- **模糊半径**：阴影的模糊程度（可选）

```css
text-shadow: 2px 2px;
text-shadow: 0.5em 0.5em 0.2em;
text-shadow: -1px -1px 2px;
```

### 颜色

阴影的颜色（可选）。

```css
text-shadow: 2px 2px 4px red;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
text-shadow: 2px 2px 4px #333;
```

### `none`

不应用阴影。这是默认值。

```css
text-shadow: none;
```

## 示例

### 基本阴影

```css
/* 简单的黑色阴影 */
.basic-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* 无模糊的硬阴影 */
.hard-shadow {
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
}
```

### 多个阴影

```css
/* 多层阴影效果 */
.multi-shadow {
  text-shadow: 
    1px 1px 2px black,
    2px 2px 4px black,
    3px 3px 6px black;
}

/* 霓虹灯效果 */
.neon {
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #0ff,
    0 0 20px #0ff,
    0 0 35px #0ff;
}
```

### 文字描边效果

```css
/* 文字描边 */
.stroke {
  text-shadow: 
    1px 0 0 #000,
    -1px 0 0 #000,
    0 1px 0 #000,
    0 -1px 0 #000;
}

/* 粗描边 */
.thick-stroke {
  text-shadow: 
    2px 0 0 #000,
    -2px 0 0 #000,
    0 2px 0 #000,
    0 -2px 0 #000,
    2px 2px 0 #000,
    -2px -2px 0 #000,
    2px -2px 0 #000,
    -2px 2px 0 #000;
}
```

### 发光效果

```css
/* 发光文字 */
.glow {
  color: #fff;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #ff00de,
    0 0 15px #ff00de;
}

/* 柔和阴影 */
.soft-shadow {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
```

### 实际应用

```css
/* 标题 */
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: white;
}

/* 按钮文字 */
.button-text {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: bold;
}

/* 卡片标题 */
.card-title {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 1+ |
| Edge | 12+ |
| Firefox | 3.5+ |
| Safari | 1+ |
| Opera | 10.5+ |

## 注意事项

1. **性能考虑**：过多的阴影或过大的模糊半径可能会影响性能。

2. **可读性**：使用阴影时应确保文字仍然清晰可读。

3. **多个阴影**：可以指定多个阴影，用逗号分隔，按从左到右的顺序渲染。

4. **模糊半径**：模糊半径为 0 时产生硬阴影，值越大阴影越模糊。

5. **负值**：偏移量可以使用负值来改变阴影方向。

6. **与 box-shadow 的区别**：`text-shadow` 只影响文本，`box-shadow` 影响元素盒子。

## 相关属性

- [`box-shadow`](box-shadow.md) - 盒子阴影
- [`color`](color.md) - 文本颜色
- [`filter`](filter.md) - 滤镜效果

## 规范

- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3/#text-shadow)
