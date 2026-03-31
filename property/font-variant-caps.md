# font-variant-caps

`font-variant-caps` 属性控制小型大写字母（small caps）和其他大写字母变体的显示。

## 语法

```css
font-variant-caps: normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps;
```

### 值

| 值 | 说明 |
| --- | --- |
| `normal` | 不使用任何大写字母变体（默认） |
| `small-caps` | 使用小型大写字母 |
| `all-small-caps` | 将所有字母（包括原本的大写字母）转换为小型大写字母 |
| `petite-caps` | 使用更小的 petite 大写字母 |
| `all-petite-caps` | 将所有字母转换为 petite 大写字母 |
| `unicase` | 使用统一大小写，大写字母和小写字母高度相同 |
| `titling-caps` | 使用标题大写字母（专为大字号标题设计） |

## 示例

### 小型大写字母

```css
.small-caps {
  font-family: "Georgia", serif;
  font-variant-caps: small-caps;
  font-size: 18px;
}
```

### 全部小型大写字母

```css
.all-small-caps {
  font-family: "Georgia", serif;
  font-variant-caps: all-small-caps;
  font-size: 18px;
}
```

### 标题大写字母

```css
.titling {
  font-family: "Georgia", serif;
  font-variant-caps: titling-caps;
  font-size: 48px;
  text-transform: uppercase;
}
```

### 组合使用

```css
.accent-text {
  font-family: "Georgia", serif;
  font-variant-caps: small-caps;
  font-variant-numeric: oldstyle-nums;
  font-size: 16px;
}
```

### HTML 示例

```html
<p class="small-caps">Hello World</p>
<p class="all-small-caps">Hello World</p>
<p class="titling">Hello World</p>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 11+ |
| Firefox | 4+ |
| Safari | 9+ |
| Edge | 14+ |
| Opera | 11.1+ |
| iOS Safari | 9+ |
| Android Browser | 4.4+ |

## 注意事项

1. **字体支持**：效果取决于字体是否包含相应的小写字母字形
2. **降级处理**：如果字体不支持，浏览器会使用普通大写字母缩小显示
3. **可读性**：小型大写字母通常用于缩写、首字母缩写词
4. **标题大写字母**：`titling-caps` 专为大字号标题优化，笔画更细
5. **与 text-transform 的区别**：`font-variant-caps` 使用专门设计的字形，而 `text-transform` 只是改变大小写

## 相关属性

- [`font-variant`](font-variant.md) - 字体变体速记
- [`font-variant-numeric`](font-variant-numeric.md) - 字体变体数字
- [`font-variant-ligatures`](font-variant-ligatures.md) - 字体变体连字
- [`text-transform`](text-transform.md) - 文本转换

## 规范链接

- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3/#font-variant-caps-prop)