# font-variant-ligatures

`font-variant-ligatures` 属性控制连字（ligatures）和上下文交替形式的显示。连字是将两个或多个字符组合成一个特殊字形的排版技术。

## 语法

```css
font-variant-ligatures: normal | none | <common-lig-values> <discretionary-lig-values> <historical-lig-values> <contextual-values>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `normal` | 使用字体定义的常规连字（默认） |
| `none` | 禁用所有连字和上下文交替形式 |
| `common-ligatures` | 启用常用连字（如 fi, fl, ff） |
| `no-common-ligatures` | 禁用常用连字 |
| `discretionary-ligatures` | 启用装饰性连字 |
| `no-discretionary-ligatures` | 禁用装饰性连字 |
| `historical-ligatures` | 启用历史连字 |
| `no-historical-ligatures` | 禁用历史连字 |
| `contextual` | 启用上下文交替形式 |
| `no-contextual` | 禁用上下文交替形式 |

## 示例

### 启用常用连字

```css
.with-ligatures {
  font-family: "Georgia", serif;
  font-variant-ligatures: common-ligatures;
  font-size: 48px;
}
```

### 禁用所有连字

```css
.no-ligatures {
  font-family: "Georgia", serif;
  font-variant-ligatures: none;
  font-size: 48px;
}
```

### 启用装饰性连字

```css
.decorative-ligatures {
  font-family: "Garamond", serif;
  font-variant-ligatures: discretionary-ligatures;
  font-size: 48px;
}
```

### 启用历史连字

```css
.historical-ligatures {
  font-family: "Garamond", serif;
  font-variant-ligatures: historical-ligatures;
  font-size: 48px;
}
```

### 组合使用

```css
.full-ligatures {
  font-family: "Garamond", serif;
  font-variant-ligatures: 
    common-ligatures 
    discretionary-ligatures 
    historical-ligatures 
    contextual;
  font-size: 48px;
}
```

### HTML 示例

```html
<p class="with-ligatures">Office, flame, fish</p>
<p class="no-ligatures">Office, flame, fish</p>
<p class="decorative-ligatures">st, ct, th</p>
```

## 常见连字示例

| 字符组合 | 连字形式 | 说明 |
| --- | --- | --- |
| fi | ﬁ | 常用连字 |
| fl | ﬂ | 常用连字 |
| ff | ﬀ | 常用连字 |
| ffi | ﬃ | 常用连字 |
| ffl | ﬄ | 常用连字 |
| st | ﬆ | 装饰性连字 |
| ct | ﬁ | 装饰性连字 |
| th | ﹪ | 装饰性连字 |
| qu | ﬄ | 历史连字 |

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

1. **字体支持**：连字效果取决于字体是否包含相应的连字字形
2. **常用连字**：`fi`、`fl` 等是最常见的连字，大多数西文字体都支持
3. **装饰性连字**：装饰性连字主要用于特殊排版场景，如标题、标志
4. **历史连字**：历史连字用于复古风格的排版
5. **性能考虑**：启用连字可能略微影响文本渲染性能
6. **可读性**：在某些情况下，禁用连字可能提高可读性（如代码、技术文档）

## 相关属性

- [`font-variant`](font-variant.md) - 字体变体速记
- [`font-variant-caps`](font-variant-caps.md) - 字体变体大写字母
- [`font-variant-numeric`](font-variant-numeric.md) - 字体变体数字
- [`font-feature-settings`](font-feature-settings.md) - OpenType 字体特性

## 规范链接

- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3/#font-variant-ligatures-prop)