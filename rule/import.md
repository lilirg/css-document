# @import

`@import` 规则用于从其他 CSS 文件导入样式规则。

## 语法

```css
@import <url> [media-type];
@import <url> (<media-query>);

/* 示例 */
@import "styles.css";
@import url("styles.css");
@import "print.css" print;
@import "mobile.css" (max-width: 768px);
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 不适用（样式表规则） |
| 动画 | 不适用 |

## 属性值

### URL

定义要导入的 CSS 文件的 URL，可以是：

- 相对路径：`"styles.css"`
- 绝对路径：`"/css/styles.css"`
- 完整 URL：`"https://example.com/styles.css"`
- `url()` 函数：`url("styles.css")`

### media-type（媒体类型）

定义导入的样式表适用的媒体类型，可以是：

- `screen`：屏幕
- `print`：打印
- `all`：所有媒体
- `speech`：语音合成器

### media-query（媒体查询）

定义导入的样式表适用的媒体查询条件。

## 示例

### 基本导入

```css
@import "styles.css";

/* CSS 样式 */
body {
  font-family: Arial, sans-serif;
}
```

### 使用 url() 函数

```css
@import url("styles.css");

/* CSS 样式 */
body {
  font-family: Arial, sans-serif;
}
```

### 媒体类型

```css
@import "print.css" print;
@import "mobile.css" screen and (max-width: 768px);

/* CSS 样式 */
body {
  font-family: Arial, sans-serif;
}
```

### 多个导入

```css
@import "reset.css";
@import "base.css";
@import "layout.css";
@import "components.css";

/* CSS 样式 */
body {
  font-family: Arial, sans-serif;
}
```

### 条件导入

```css
/* 仅在屏幕宽度小于 768px 时导入 */
@import "mobile.css" (max-width: 768px);

/* 仅在打印时导入 */
@import "print.css" print;

/* 仅在屏幕宽度大于 1024px 时导入 */
@import "desktop.css" (min-width: 1024px);
```

### 注意事项

1. `@import` 规则必须在其他 CSS 规则之前（除了 `@charset`）
2. `@import` 规则可以出现在 CSS 文件或 `<style>` 标签中
3. 多个 `@import` 规则会按顺序加载，可能影响性能
4. 推荐使用 `<link>` 标签代替 `@import` 以获得更好的性能

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 1+ | 完全支持 |
| Firefox | 1+ | 完全支持 |
| Safari | 1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 5+ | 完全支持 |

## 相关链接

- [MDN: @import](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@import)
- [W3C: CSS Conditional Rules Module Level 3 - @import](https://www.w3.org/TR/css-conditional-3/#import-rule)
