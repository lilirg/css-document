# 字符串（String）

字符串是 CSS 中用于表示文本的数据类型。

## 字符串语法

```css
/* 单引号 */
.element {
  content: 'Hello';
}

/* 双引号 */
.element {
  content: "World";
}

/* 包含引号 */
.element {
  content: "He said 'Hello'";
  content: 'She said "World"';
}
```

## 字符串应用

### 1. content

```css
/* 简单字符串 */
.element::before {
  content: 'Hello';
}

/* 包含空格 */
.element::before {
  content: 'Hello World';
}

/* 包含特殊字符 */
.element::before {
  content: 'Hello\nWorld';
}
```

### 2. attr()

```css
/* 从属性获取字符串 */
.element::before {
  content: attr(data-label);
}
```

### 3. url()

```css
/* URL 字符串 */
.element {
  background-image: url('image.png');
}
```

### 4. calc()

```css
/* calc 中的字符串 */
.element {
  content: calc(10px + 20px);  /* 不是字符串 */
}
```

## 字符串示例

```css
/* 简单字符串 */
.element::before {
  content: 'Hello';
}

/* 包含空格 */
.element::before {
  content: 'Hello World';
}

/* 包含特殊字符 */
.element::before {
  content: 'Hello\nWorld';
}

/* 从属性获取 */
.element::before {
  content: attr(data-label);
}
```

## 字符串转义

```css
/* 转义特殊字符 */
.element::before {
  content: 'Hello\'World';
  content: "Hello\"World";
  content: 'Hello\\World';
}
```

## 最佳实践

1. **使用单引号** - 简单字符串
2. **使用双引号** - 包含单引号
3. **转义特殊字符** - 正确处理
4. **了解限制** - 某些属性需要特定格式

## 相关链接

- [MDN: 字符串](https://developer.mozilla.org/zh-CN/docs/Web/CSS/string)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)