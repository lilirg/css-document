# text-transform

该属性用于控制文本的大小写显示。

## 语法

```css
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: full-width;
text-transform: full-size-kana;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `none`
默认值。不改变文本大小写。

### `capitalize`
每个单词的首字母大写。

### `uppercase`
所有字母转换为大写。

### `lowercase`
所有字母转换为小写。

### `full-width`
将字符转换为全角形式。

### `full-size-kana`
将小型假名转换为正常大小。

## 注意
- 只影响拉丁字母和假名
- 继承属性
- 不会改变 HTML 中的实际内容，只改变显示
- 对中文等无大小写概念的语言无影响

## 示例
```css
.upper {
  text-transform: uppercase;
}

.lower {
  text-transform: lowercase;
}

.capitalize {
  text-transform: capitalize;
}
```

```html
<p class="upper">
  Hello World
</p>

<p class="lower">
  HELLO WORLD
</p>

<p class="capitalize">
  hello world
</p>
```

## 使用场景
```css
/* 1. 导航菜单大写 */
.nav-menu {
  text-transform: uppercase;
}

/* 2. 标题首字母大写 */
.article-title {
  text-transform: capitalize;
}

/* 3. 按钮文本大写 */
.btn {
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 4. 恢复原始大小写 */
.original-case {
  text-transform: none;
}
