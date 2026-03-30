# list-style-position

该属性用于设置列表项标记（如项目符号或数字）的位置。

## 语法

```css
list-style-position: outside;
list-style-position: inside;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `outside` |
| 适用 HTML 元素 | `ul`, `ol` |
| 动画 | 否 |

## 值

### `outside`
标记放置在列表项框的外部。标记不会随文本换行，这是默认值。

### `inside`
标记放置在列表项框的内部。标记会随文本换行，成为文本流的一部分。

## 注意
- `outside` 值下，标记位于列表项左侧，文本不会缩进
- `inside` 值下，标记成为文本流的一部分，会影响文本对齐
- 继承属性，会影响所有子元素

## 示例
```css
.outside-list {
  list-style-position: outside;
}

.inside-list {
  list-style-position: inside;
}
```

```html
<ul class="outside-list">
  <li>外部标记：标记在列表项外部</li>
  <li>这是第二项，文本较长时会换行</li>
</ul>

<ul class="inside-list">
  <li>内部标记：标记在列表项内部</li>
  <li>这是第二项，文本换行时标记保持在内侧</li>
</ul>
```

## 使用场景
```css
/* 1. 默认外部标记（标准列表） */
.standard-list {
  list-style-position: outside;
  padding-left: 20px;
}

/* 2. 内部标记（紧凑布局） */
.compact-list {
  list-style-position: inside;
  padding-left: 0;
}

/* 3. 自定义标记位置 */
.custom-list {
  list-style-position: inside;
  list-style-type: square;
}

/* 4. 导航列表无标记 */
.nav-list {
  list-style-position: outside;
  list-style-type: none;
  padding-left: 0;
}
