# font-family

该属性用于指定元素的字体系列，可以包含多个字体名称作为备用。

## 语法

```css
font-family: <family-name> | <generic-family>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 取决于用户代理 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<family-name>`
具体的字体族名称，如 "Arial", "Microsoft YaHei", "Times New Roman"。

### `<generic-family>`
通用字体族，作为备用：
- `serif` - 衬线字体（如 Times）
- `sans-serif` - 无衬线字体（如 Arial）
- `monospace` - 等宽字体（如 Courier）
- `cursive` - 手写体
- `fantasy` - 装饰性字体
- `system-ui` - 系统 UI 字体

## 注意
1. 字体名称包含空格时需用引号包裹，如 `"Microsoft YaHei"`
2. 建议始终提供通用字体族作为最终备用
3. 字体按优先级从左到右排列，浏览器依次尝试
4. 避免使用过长的字体列表，影响性能

## 示例

```css
/* 基本用法 */
p {
  font-family: Arial, sans-serif;
}

/* 多字体备用 */
h1 {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

/* 中文字体 */
body {
  font-family: "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif;
}
```

## 使用场景

```css
/* 1. 无衬线字体 - 现代界面 */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* 2. 衬线字体 - 正式文档 */
.article {
  font-family: "Times New Roman", Georgia, "Songti SC", serif;
}

/* 3. 等宽字体 - 代码显示 */
code {
  font-family: "Consolas", "Monaco", "Courier New", monospace;
}

/* 4. 中文优先 - 本地化 */
.chinese-content {
  font-family: "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
}

/* 5. 系统 UI 字体 - 原生体验 */
.ui-element {
  font-family: system-ui, -apple-system, sans-serif;
}
