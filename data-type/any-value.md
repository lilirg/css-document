# 任意值（Any Value）

任意值是 CSS 中用于表示任意值的数据类型。

## 任意值语法

```css
/* 任意值 */
@property --custom-property {
  syntax: '*';
  inherits: false;
  initial-value: '';
}
```

## 任意值应用

### 1. @property

```css
/* 自定义属性 */
@property --custom-property {
  syntax: '*';
  inherits: false;
  initial-value: '';
}

.element {
  --custom-property: any value;
}
```

### 2. calc()

```css
/* calc 中的任意值 */
.element {
  width: calc(100% - 20px);
  height: calc(50vh + 100px);
}
```

### 3. var()

```css
/* var() 中的任意值 */
.element {
  --custom-property: any value;
  property: var(--custom-property);
}
```

## 任意值示例

```css
/* 自定义属性 */
@property --custom-property {
  syntax: '*';
  inherits: false;
  initial-value: '';
}

.element {
  --custom-property: any value;
}

/* calc */
.element {
  width: calc(100% - 20px);
}

/* var() */
.element {
  --custom-property: any value;
  property: var(--custom-property);
}
```

## 最佳实践

1. **了解限制** - 某些属性有特定格式
2. **使用 var()** - 自定义属性
3. **了解 calc()** - 计算表达式
4. **避免过度使用** - 性能影响

## 相关链接

- [MDN: 任意值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/any-value)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)