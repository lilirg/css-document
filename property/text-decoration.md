# text-decoration

该属性是文本装饰的速记属性，用于设置文本的装饰线样式。

## 语法

```css
text-decoration: underline;
text-decoration: line-through dotted red;
text-decoration: none;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<text-decoration-line>`
设置装饰线类型：
- `none` - 无装饰线
- `underline` - 下划线
- `overline` - 上划线
- `line-through` - 删除线

### `<text-decoration-style>`
设置装饰线样式：
- `solid` - 实线（默认）
- `double` - 双线
- `dotted` - 点线
- `dashed` - 虚线
- `wavy` - 波浪线

### `<text-decoration-color>`
设置装饰线颜色。

### `<text-decoration-thickness>`
设置装饰线粗细。

## 注意
- 速记属性会同时设置所有子属性
- 未指定的子属性会恢复为其初始值
- 继承属性，会影响所有子元素

## 示例
```css
.underline {
  text-decoration: underline;
}

.deletion {
  text-decoration: line-through;
}

.custom {
  text-decoration: underline wavy red;
}
```

```html
<p class="underline">带下划线的文本</p>
<p class="deletion">带删除线的文本</p>
<p class="custom">带波浪下划线的红色文本</p>
```

## 使用场景
```css
/* 1. 移除链接下划线 */
a {
  text-decoration: none;
}

/* 2. 悬停时显示下划线 */
a:hover {
  text-decoration: underline;
}

/* 3. 价格删除线 */
.old-price {
  text-decoration: line-through;
  color: #999;
}

/* 4. 重要提示下划线 */
.important {
  text-decoration: underline wavy red;
}
