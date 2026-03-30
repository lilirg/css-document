# tab-size

该属性设置 Tab 字符（U+0009）的宽度。

## 语法

```css
tab-size: <integer> | <length>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `8`            |
| 适用 HTML 元素 | 块级元素     |
| 动画         | 是             |

## 值

### `<integer>`

使用整数指定 Tab 宽度，表示空格的数量。

### `<length>`

使用长度值指定 Tab 宽度。

## 注意

- 默认值为 8 个空格
- 通常设置为 2 或 4 个空格
- 仅对 `<pre>` 元素和设置了 `white-space: pre` 的元素有效

## 示例

```css
/* 2 个空格 */
.code-2 {
  tab-size: 2;
}

/* 4 个空格 */
.code-4 {
  tab-size: 4;
}

/* 固定宽度 */
.code-fixed {
  tab-size: 20px;
}
```

```html
<!-- Tab 宽度示例 -->
<pre class="code-4">
	function example() {
		console.log("Hello");
	}
</pre>
```

## 使用场景

```css
/* 代码编辑器风格 */
.code-editor {
  tab-size: 2;
  white-space: pre;
  font-family: monospace;
}

/* 4 空格缩进 */
.code-4spaces {
  tab-size: 4;
  white-space: pre;
}

/* 8 空格缩进（默认） */
.code-8spaces {
  tab-size: 8;
  white-space: pre;
}

/* 固定像素宽度 */
.code-pixel {
  tab-size: 30px;
  white-space: pre;
}

/* 终端风格 */
.terminal {
  tab-size: 8;
  white-space: pre;
  font-family: 'Courier New', monospace;
}

/* YAML 风格 */
.yaml {
  tab-size: 2;
  white-space: pre;
}

/* JSON 风格 */
.json {
  tab-size: 2;
  white-space: pre;
}

/* Python 风格 */
.python {
  tab-size: 4;
  white-space: pre;
}

/* C/C++ 风格 */
.cpp {
  tab-size: 4;
  white-space: pre;
}

/* HTML 风格 */
.html {
  tab-size: 2;
  white-space: pre;
}

/* 响应式 Tab 宽度 */
.responsive-tab {
  tab-size: 2;
  white-space: pre;
}

@media (min-width: 768px) {
  .responsive-tab {
    tab-size: 4;
  }
}

/* 代码高亮容器 */
.code-highlight {
  tab-size: 2;
  white-space: pre;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
}

/* 文档缩进 */
.document {
  tab-size: 4;
  white-space: pre;
}

/* 配置文件 */
.config {
  tab-size: 2;
  white-space: pre;
}

/* SQL 查询 */
.sql {
  tab-size: 2;
  white-space: pre;
}

/* Shell 脚本 */
.shell {
  tab-size: 2;
  white-space: pre;
}

/* Markdown 代码块 */
.markdown-code {
  tab-size: 4;
  white-space: pre;
}

/* 缩进动画 */
.animated-tab {
  tab-size: 2;
  white-space: pre;
  animation: tabChange 3s infinite;
}

@keyframes tabChange {
  0%, 100% { tab-size: 2; }
  50% { tab-size: 4; }
}
