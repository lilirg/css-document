# font-feature-settings

`font-feature-settings` 属性控制 OpenType 字体中的高级排版功能，允许启用或禁用特定的字体特性。

## 语法

```css
font-feature-settings: normal | <feature-tag-value>#;
```

### 值

| 值 | 说明 |
| --- | --- |
| `normal` | 不使用任何字体特性功能（默认） |
| `<feature-tag-value>` | 由 4 个字符组成的特性标签，可选地后跟 1 或 0（启用或禁用），以及可选的整数参数 |

### 特性标签示例

| 标签 | 说明 |
| --- | --- |
| `aalt` | 访问所有替代字形 |
| `c2sc` | 小型大写字母转大写字母 |
| `calt` | 上下文交替 |
| `case` | 大小写敏感形式 |
| `ccmp` | 字形组合/分解 |
| `dlig` | 自由连字 |
| `diso` | 离散形式 |
| `frac` | 分数 |
| `kern` | 字距调整 |
| `liga` | 标准连字 |
| `lnum` | 旧式数字 |
| `mark` | 标记定位 |
| `mkmk` | 标记到标记定位 |
| `numr` | 数字形式 |
| `onum` | 旧式数字 |
| `ordn` | 序数 |
| `pnum` | 比例数字 |
| `salt` | 风格替代 |
| `sinf` | 下标 |
| `size` | 视觉字体大小调整 |
| `smcp` | 小写字母转小型大写字母 |
| `sups` | 上标 |
| `swsh` | 花体 |
| `tnum` | 表格数字 |

## 示例

### 启用连字

```css
.text-with-ligatures {
  font-feature-settings: "liga" 1, "dlig" 1;
}
```

### 使用旧式数字

```css
.old-style-numbers {
  font-feature-settings: "onum" 1;
}
```

### 启用小型大写字母

```css
.small-caps {
  font-feature-settings: "smcp" 1;
}
```

### 禁用字距调整

```css
.no-kerning {
  font-feature-settings: "kern" 0;
}
```

### 多个特性组合

```css
.advanced-typography {
  font-feature-settings: 
    "liga" 1,    /* 标准连字 */
    "dlig" 1,    /* 自由连字 */
    "kern" 1,    /* 字距调整 */
    "onum" 1,    /* 旧式数字 */
    "calt" 1;    /* 上下文交替 */
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 16+ |
| Firefox | 4+ |
| Safari | 9+ |
| Edge | 14+ |
| Opera | 12.1+ |
| iOS Safari | 9+ |
| Android Browser | 4.4+ |

## 注意事项

1. **特性标签区分大小写**：必须使用小写的 4 字符标签
2. **值 1 和 0**：1 表示启用，0 表示禁用
3. **参数值**：某些特性需要整数参数
4. **优先使用 `font-variant`**：对于常见特性，建议使用 `font-variant-*` 系列属性
5. **字体支持**：特性效果取决于字体是否包含相应的 OpenType 特性

## 相关属性

- [`font-variant`](font-variant.md) - 字体变体速记
- [`font-variant-caps`](font-variant-caps.md) - 字体变体大写字母
- [`font-variant-numeric`](font-variant-numeric.md) - 字体变体数字
- [`font-variant-ligatures`](font-variant-ligatures.md) - 字体变体连字

## 规范链接

- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop)
- [OpenType Specification](https://docs.microsoft.com/en-us/typography/opentype/spec/)