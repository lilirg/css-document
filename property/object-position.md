# object-position

该属性设置替换元素（如 `<img>` 或 `<video>`）内容在容器中的位置。

## 语法

```css
object-position: <length> | <percentage> | center | top | bottom | left | right
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `50% 50%`（居中） |
| 适用 HTML 元素 | 替换元素（img、video、object 等） |
| 动画 | 是 |

## 值

### `<length>`
固定偏移值。

### `<percentage>`
相对于容器宽度和高度的百分比。

### `center`
居中对齐。

### `top` / `bottom`
顶部/底部对齐。

### `left` / `right`
左侧/右侧对齐。

## 注意

- 通常与 `object-fit` 配合使用
- 第一个值表示水平位置，第二个值表示垂直位置
- 支持单值（同时设置水平和垂直）

## 示例

```css
/* CSS 示例 */
img {
  width: 200px;
  height: 150px;
  object-fit: cover;
  object-position: top;
}
```

```html
<!-- HTML 示例 -->
<img src="image.jpg" alt="示例图片" />
```

## 使用场景

```css
/* 1. 顶部对齐 */
.top-aligned {
  width: 300px;
  height: 200px;
  object-fit: cover;
  object-position: top;
}

/* 2. 特定位置 */
.specific-position {
  width: 300px;
  height: 200px;
  object-fit: cover;
  object-position: 25% 50%;
}

/* 3. 底部对齐 */
.bottom-aligned {
  width: 300px;
  height: 200px;
  object-fit: cover;
  object-position: bottom;
}

/* 4. 左对齐 */
.left-aligned {
  width: 300px;
  height: 200px;
  object-fit: cover;
  object-position: left;
}

/* 5. 自定义偏移 */
.custom-offset {
  width: 300px;
  height: 200px;
  object-fit: cover;
  object-position: 100px 50px;
}
