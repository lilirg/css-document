# all

该属性用于重置元素的所有 CSS 属性（除了 `unicode-bidi`）为初始值、继承值或指定值。

## 语法

```css
all: initial | inherit | unset | revert | revert-layer
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 无 |
| 适用 HTML 元素 | 所有元素（除 `::first-line` 和 `::first-letter`） |
| 动画 | 否 |

## 值

### initial
将所有属性重置为其初始值（默认值）：
- 非继承属性使用初始值
- 继承属性使用初始值（而不是父元素的值）

### inherit
将所有属性继承自父元素：
- 所有属性都继承父元素的计算值

### unset
将所有属性重置为 `unset`：
- 如果属性是继承的，则表现为 `inherit`
- 如果属性不是继承的，则表现为 `initial`

### revert
将属性重置为浏览器默认样式：
- 如果属性是用户代理样式表定义的，则恢复为默认值
- 否则表现为 `unset`

### revert-layer
将属性重置为当前层（`@layer`）的初始值：
- 用于 CSS 层（Layers）中
- 恢复为当前层中定义的初始值

## 注意
- `all` 属性不会影响 `unicode-bidi` 属性
- `all` 属性不会影响 CSS 自定义属性（变量）
- `all` 属性不会影响 `direction` 和 `unicode-bidi`
- 使用 `all: initial` 可以完全清除元素的所有样式
- 使用 `all: unset` 可以清除所有样式但保留继承属性

## 示例

```css
/* 重置为初始值 */
.reset-initial {
  all: initial;
}

/* 继承父元素样式 */
.reset-inherit {
  all: inherit;
}

/* 重置为 unset */
.reset-unset {
  all: unset;
}

/* 重置为浏览器默认样式 */
.reset-revert {
  all: revert;
}

/* 清除按钮默认样式 */
.btn-reset {
  all: unset;
  cursor: pointer;
}

/* 清除链接默认样式 */
.link-reset {
  all: unset;
  color: blue;
  text-decoration: underline;
}
```

```html
<!-- HTML 示例 -->
<div class="reset-initial">初始值重置</div>
<div class="reset-inherit">继承重置</div>
<div class="reset-unset">unset 重置</div>
<button class="btn-reset">重置按钮</button>
<a href="#" class="link-reset">重置链接</a>
```

## 使用场景

```css
/* 1. 清除按钮默认样式 */
.btn {
  all: unset;
  cursor: pointer;
  background: #0066cc;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
}

/* 2. 清除链接默认样式 */
.link {
  all: unset;
  color: #0066cc;
  text-decoration: underline;
  cursor: pointer;
}

/* 3. 清除输入框默认样式 */
.input-reset {
  all: unset;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 4px;
}

/* 4. 清除列表默认样式 */
.list-reset {
  all: unset;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 5. 清除标题默认样式 */
.heading-reset {
  all: unset;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

/* 6. 清除卡片默认样式 */
.card-reset {
  all: unset;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
}

/* 7. 完全重置元素 */
.full-reset {
  all: initial;
}

/* 8. 重置为浏览器默认 */
.browser-default {
  all: revert;
}
