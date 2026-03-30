# -webkit-box-reflect

该属性指定 WebKit 浏览器中元素倒影（反射）的显示方式。

## 语法

```css
-webkit-box-reflect: [direction] [offset] [image]
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `direction`
倒影的方向：
- `above` - 上方倒影
- `below` - 下方倒影（默认）
- `left` - 左侧倒影
- `right` - 右侧倒影

### `offset`
倒影与元素之间的间距（可选），可以是长度值。

### `image`
倒影的遮罩图像（可选），用于控制倒影的渐隐效果。

## 注意
- 该属性是 WebKit 浏览器特有的属性（Chrome、Safari）
- 主要用于创建元素的镜像反射效果
- 性能开销较大，建议谨慎使用

## 示例

```css
/* 下方倒影，无偏移 */
.element {
  -webkit-box-reflect: below;
}

/* 下方倒影，10px 偏移 */
.element {
  -webkit-box-reflect: below 10px;
}

/* 使用渐变遮罩 */
.element {
  -webkit-box-reflect: below 0 linear-gradient(to bottom, transparent 50%, white 100%);
}
```

## 使用场景

```css
/* 场景 1：卡片倒影效果 */
.card {
  -webkit-box-reflect: below 10px linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 100%);
  padding: 20px;
  background: white;
}

/* 场景 2：按钮倒影效果 */
.button {
  -webkit-box-reflect: below 5px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
}

/* 场景 3：图片倒影效果 */
.image {
  -webkit-box-reflect: below 0 linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.8) 100%);
}

/* 场景 4：左侧倒影 */
.sidebar-item {
  -webkit-box-reflect: left 10px;
  padding: 10px;
}