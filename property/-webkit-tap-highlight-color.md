# -webkit-tap-highlight-color

该属性指定 WebKit 浏览器中用户触摸元素时显示的高亮颜色。

## 语法

```css
-webkit-tap-highlight-color: <color> | transparent
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 浏览器默认值 |
| 适用 HTML 元素 | 可点击元素 |
| 动画 | 否 |

## 值

### `<color>`
高亮颜色值（如 `rgba(0,0,0,0.1)`、`#ccc`）。

### `transparent`
透明，不显示高亮效果。

## 注意
- 该属性是 WebKit 浏览器特有的属性（主要在移动设备上）
- 用于控制触摸时的视觉反馈
- 设置为 `transparent` 可以禁用触摸高亮效果

## 示例

```css
/* 禁用触摸高亮 */
.button {
  -webkit-tap-highlight-color: transparent;
}

/* 自定义高亮颜色 */
.button {
  -webkit-tap-highlight-color: rgba(0, 123, 255, 0.3);
}
```

## 使用场景

```css
/* 场景 1：禁用按钮触摸高亮 */
.btn {
  -webkit-tap-highlight-color: transparent;
  padding: 10px 20px;
  background: #007bff;
  color: white;
}

/* 场景 2：自定义链接高亮颜色 */
a {
  -webkit-tap-highlight-color: rgba(0, 123, 255, 0.2);
}

/* 场景 3：卡片点击效果 */
.card {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  padding: 15px;
}

/* 场景 4：导航项触摸反馈 */
.nav-item {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.05);
  padding: 10px 15px;
}