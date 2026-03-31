# CSS 伪类和伪元素

CSS 伪类（Pseudo-classes）和伪元素（Pseudo-elements）是 CSS 选择器的重要组成部分，它们允许我们选择处于特定状态的元素或元素的特定部分。

## 伪类（Pseudo-classes）

伪类以单冒号 `:` 开头，用于选择处于特定状态的元素。例如，`:hover` 用于选择鼠标悬停时的元素，`:focus` 用于选择获得焦点的元素。

### 状态伪类

| 伪类 | 说明 | 文档 |
| :--- | :--- | :--- |
| `:active` | 选择用户激活（例如点击）的元素 | [`:active`](colon_active.md) |
| `:hover` | 选择用户将鼠标指针悬停在元素上时的元素 | [`:hover`](colon_hover.md) |
| `:focus` | 选择获得键盘焦点或鼠标焦点的元素 | [`:focus`](colon_focus.md) |
| `:visited` | 选择已访问的链接 | [`:visited`](colon_visited.md) |
| `:link` | 选择未曾访问的链接 | [`:link`](colon_link.md) |

### 表单伪类

| 伪类 | 说明 | 文档 |
| :--- | :--- | :--- |
| `:checked` | 选择处于选中状态的单选按钮或复选框 | [`:checked`](colon_checked.md) |
| `:disabled` | 选择处于禁用状态的表单元素 | [`:disabled`](colon_disabled.md) |
| `:enabled` | 选择处于启用状态的表单元素 | [`:enabled`](colon_enabled.md) |
| `:blank` | 选择空输入值的 `<input>` 元素 | [`:blank`](colon_blank.md) |
| `:indeterminate` | 选择未定态的 UI 元素 | [`:indeterminate`](colon_indeterminate.md) |
| `:invalid` | 选择处于无效状态的表单元素 | [`:invalid`](colon_invalid.md) |
| `:valid` | 选择处于有效状态的表单元素 | [`:valid`](colon_valid.md) |
| `:optional` | 选择不是必填的表单元素 | [`:optional`](colon_optional.md) |
| `:required` | 选择必填的表单元素 | [`:required`](colon_required.md) |
| `:read-only` | 选择用户不可更改的元素 | [`:read-only`](colon_read-only.md) |
| `:read-write` | 选择用户可更改的元素 | [`:read-write`](colon_read-write.md) |
| `:in-range` | 选择值在指定范围内的输入元素 | [`:in-range`](colon_in-range.md) |
| `:out-of-range` | 选择值超出指定范围的输入元素 | [`:out-of-range`](colon_out-of-range.md) |

### 结构伪类

| 伪类 | 说明 | 文档 |
| :--- | :--- | :--- |
| `:first-child` | 选择作为其父元素的第一个子元素的元素 | [`:first-child`](colon_first-child.md) |
| `:last-child` | 选择作为其父元素的最后一个子元素的元素 | [`:last-child`](colon_last-child.md) |
| `:first-of-type` | 选择兄弟元素中第一个某种类型的元素 | [`:first-of-type`](colon_first-of-type.md) |
| `:last-of-type` | 选择兄弟元素中最后一个某种类型的元素 | [`:last-of-type`](colon_last-of-type.md) |
| `:only-child` | 选择没有兄弟元素的元素 | [`:only-child`](colon_only-child.md) |
| `:only-of-type` | 选择兄弟元素中某类型仅有的元素 | [`:only-of-type`](colon_only-of-type.md) |
| `:nth-child()` | 选择一列兄弟元素中的元素，按照 `an+b` 形式的式子进行匹配 | [`:nth-child()`](colon_nth-child().md) |
| `:nth-last-child()` | 从后往前倒数选择兄弟元素 | [`:nth-last-child()`](colon_nth-last-child().md) |
| `:nth-of-type()` | 选择某种类型的一列兄弟元素，按照 `an+b` 形式的式子进行匹配 | [`:nth-of-type()`](colon_nth-of-type().md) |
| `:nth-last-of-type()` | 从后往前倒数选择某种类型的一列兄弟元素 | [`:nth-last-of-type()`](colon_nth-last-of-type().md) |

### 函数式伪类

| 伪类 | 说明 | 文档 |
| :--- | :--- | :--- |
| `:not()` | 选择不匹配指定选择器的元素 | [`:not()`](colon_not().md) |
| `:is()` | 匹配传入的选择器列表中的任何选择器 | [`:is()`](colon_is().md) |
| `:dir()` | 基于元素的方向性匹配元素 | [`:dir()`](colon_dir().md) |
| `:lang()` | 基于语言匹配元素 | [`:lang()`](colon_lang().md) |

### 其他伪类

| 伪类 | 说明 | 文档 |
| :--- | :--- | :--- |
| `:root` | 匹配文档的根元素 | [`:root`](colon_root.md) |
| `:target` | 匹配当前 URL 目标的元素 | [`:target`](colon_target.md) |
| `:scope` | 匹配任何为参考点元素的元素 | [`:scope`](colon_scope.md) |
| `:default` | 选择一组相似的元素中默认的一个或更多的 UI 元素 | [`:default`](colon_default.md) |
| `:empty` | 选择没有任何子元素的元素 | [`:empty`](colon_empty.md) |
| `:fullscreen` | 选择处于全屏模式的元素 | [`:fullscreen`](colon_fullscreen.md) |

### 分页媒体伪类

| 伪类 | 说明 | 文档 |
| :--- | :--- | :--- |
| `:first` | 选择分页媒体的第一页 | [`:first`](colon_first.md) |
| `:left` | 选择分页媒体的左手边的页 | [`:left`](colon_left.md) |
| `:right` | 选择分页媒体的右手边的页 | [`:right`](colon_right.md) |

## 伪元素（Pseudo-elements）

伪元素以双冒号 `::` 开头，用于选择元素的特定部分。例如，`::before` 用于在元素内容前插入内容，`::after` 用于在元素内容后插入内容。

| 伪元素 | 说明 | 文档 |
| :--- | :--- | :--- |
| `::before` | 匹配出现在原有元素的实际内容之前的一个可样式化元素 | [`::before`](doublecolon_before.md) |
| `::after` | 匹配出现在原有元素的实际内容之后的一个可样式化元素 | [`::after`](doublecolon_after.md) |
| `::first-letter` | 匹配元素的第一个字母 | [`::first-letter`](doublecolon_first-letter.md) |
| `::first-line` | 匹配包含此伪元素的元素的第一行 | [`::first-line`](doublecolon_first-line.md) |
| `::placeholder` | 匹配显示占位文字的 input 元素 | [`::placeholder`](doublecolon_placeholder.md) |
| `::selection` | 匹配文档中被选择的那部分 | [`::selection`](doublecolon_selection.md) |

## content 属性

`content` 属性与伪元素一起使用，用于在元素前后插入内容。

| 属性 | 说明 | 文档 |
| :--- | :--- | :--- |
| `content` | 用于在元素前后插入内容 | [`content`](content.md) |

## 相关链接

- [MDN: 伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)
- [MDN: 伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)
- [CSS Selectors Level 3](https://www.w3.org/TR/css3-selectors/)
- [CSS Selectors Level 4](https://www.w3.org/TR/css-selectors-4/)