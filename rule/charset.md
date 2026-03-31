# @charset

`@charset` 规则用于指定 CSS 样式表的字符编码。

## 语法

```css
@charset "charset";

/* 示例 */
@charset "UTF-8";
@charset "ISO-8859-1";
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 不适用（样式表规则） |
| 动画 | 不适用 |

## 属性值

### charset（字符编码）

指定 CSS 样式表的字符编码，常用值：

- `UTF-8`：Unicode 字符编码（推荐）
- `ISO-8859-1`：Latin-1 字符编码
- `GB2312`：简体中文字符编码
- `GBK`：扩展中文字符编码
- `Big5`：繁体中文字符编码

## 示例

### UTF-8 编码

```css
@charset "UTF-8";

/* CSS 样式 */
body {
  font-family: Arial, sans-serif;
  color: #333;
}
```

### GB2312 编码

```css
@charset "GB2312";

/* CSS 样式 */
body {
  font-family: "SimSun", serif;
  color: #333;
}
```

### 注意事项

1. `@charset` 规则必须是 CSS 文件中的第一个规则
2. `@charset` 规则只能在 CSS 文件中使用，不能在 `<style>` 标签中使用
3. `@charset` 规则只能出现一次
4. `@charset` 规则必须在任何注释之前

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 1+ | 完全支持 |
| Firefox | 1+ | 完全支持 |
| Safari | 1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 8+ | 完全支持 |

## 相关链接

- [MDN: @charset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@charset)
- [W3C: CSS Syntax Module Level 3 - @charset](https://www.w3.org/TR/css-syntax-3/#charset-rule)
