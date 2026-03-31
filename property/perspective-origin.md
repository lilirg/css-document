# perspective-origin

`perspective-origin` 属性定义 `perspective` 属性的透视原点位置。

## 语法

```css
perspective-origin: <position>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `50% 50%` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<length>` | 使用长度值定位 |
| `<percentage>` | 使用百分比定位 |
| `top` | 顶部对齐 |
| `bottom` | 底部对齐 |
| `left` | 左侧对齐 |
| `right` | 右侧对齐 |
| `center` | 居中对齐 |

## 注意

- 定义透视消失点的位置
- 可以指定一个或两个值
- 单个值时，第二个值默认为 `center`
- 与 `perspective` 属性配合使用

## 示例

```css
/* 透视原点在左上角 */
.container {
  perspective: 1000px;
  perspective-origin: top left;
}

/* 透视原点在右侧 */
.container {
  perspective: 1000px;
  perspective-origin: right center;
}
```

## 使用场景

```css
/* 3D 场景，透视原点在底部 */
.scene {
  perspective: 800px;
  perspective-origin: 50% 100%;
}

.scene .element {
  transform: rotateX(45deg);
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 支持（需 -webkit- 前缀） |
| Firefox | 支持 |
| Safari | 支持（需 -webkit- 前缀） |
| Edge | 支持 |

## 相关属性

- [`perspective`](perspective.md) - 透视距离
- [`transform`](transform.md) - 变换
- [`transform-style`](transform-style.md) - 变换样式

## 规范

- [CSS Transforms Module Level 1](https://www.w3.org/TR/css-transforms-1/#perspective-origin-property)
