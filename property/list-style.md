# list-style

该属性是列表样式的速记属性，用于一次性设置列表项的所有样式。

## 语法

```css
list-style: type position image;
list-style: disc inside url("bullet.png");
list-style: none;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 各子属性初始值 |
| 适用 HTML 元素 | `ul`, `ol` |
| 动画 | 否 |

## 值

### `<list-style-type>`
设置列表项标记的类型：
- `none` - 无标记
- `disc` - 实心圆（默认）
- `circle` - 空心圆
- `square` - 方块
- `decimal` - 十进制数字
- `lower-alpha` - 小写字母
- `upper-alpha` - 大写字母
- `lower-roman` - 小写罗马数字
- `upper-roman` - 大写罗马数字

### `<list-style-position>`
设置标记的位置：
- `outside` - 标记在列表项外部（默认）
- `inside` - 标记在列表项内部

### `<list-style-image>`
设置自定义图像作为列表项标记：
- `url("image.png")` - 图像路径
- `none` - 无图像（默认）

## 注意
- 速记属性会同时设置所有子属性
- 未指定的子属性会恢复为其初始值
- 继承属性，会影响所有子元素

## 示例
```css
ul {
  list-style: disc outside;
}

ol {
  list-style: decimal inside;
}

.custom-list {
  list-style: square url("bullet.png") outside;
}
```

```html
<ul>
  <li>列表项 1</li>
  <li>列表项 2</li>
</ul>

<ol>
  <li>有序项 1</li>
  <li>有序项 2</li>
</ol>
```

## 使用场景
```css
/* 1. 移除默认列表样式 */
.nav-list {
  list-style: none;
  padding: 0;
}

/* 2. 使用罗马数字的目录 */
.toc {
  list-style: upper-roman outside;
}

/* 3. 自定义图像标记 */
.feature-list {
  list-style: square url("icons/check.png") inside;
}

/* 4. 嵌套列表的不同样式 */
ul ul {
  list-style: circle outside;
}
