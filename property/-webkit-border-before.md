# -webkit-border-before

该属性指定 WebKit 浏览器中元素逻辑前边的边框样式（速记属性）。

## 语法

```css
-webkit-border-before: <border-style> || <border-width> || <color>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 参见各个简写属性 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

该属性是速记属性，可以设置以下值：

### 边框样式
- `none` - 无边框
- `solid` - 实线
- `dashed` - 虚线
- `dotted` - 点线
- `double` - 双线
- `groove` - 凹槽
- `ridge` - 脊线
- `inset` - 嵌入
- `outset` - 突出

### 边框宽度
- `thin` - 细
- `medium` - 中等
- `thick` - 粗
- 长度值（如 `1px`、`2px`）

### 边框颜色
- 颜色值（如 `red`、`#ff0000`、`rgb(255,0,0)`）

## 注意
- 该属性是 WebKit 浏览器特有的属性
- 根据书写模式，"前边"可能是上边（水平书写）或左边（垂直书写）
- 与 `border-inline-start` 类似，但带有 WebKit 前缀

## 示例

```css
/* 设置前边边框 */
.element {
  -webkit-border-before: 1px solid #ccc;
}

/* 仅设置样式 */
.element {
  -webkit-border-before: dashed;
}

/* 仅设置宽度 */
.element {
  -webkit-border-before: 2px;
}
```

## 使用场景

```css
/* 场景 1：列表项分隔线 */
li {
  -webkit-border-before: 1px solid #eee;
  padding: 10px 0;
}

/* 场景 2：卡片分隔 */
.card {
  -webkit-border-before: 1px solid #ddd;
  padding: 15px;
}

/* 场景 3：引用块前边框 */
blockquote {
  -webkit-border-before: 4px solid #007bff;
  padding-left: 20px;
}

/* 场景 4：导航项分隔 */
.nav-item {
  -webkit-border-before: 1px dashed #ccc;
  padding: 8px 16px;
}