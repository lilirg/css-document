# font-variant

该属性用于控制是否使用字体的小型大写字母变体，是一个速记属性。

## 语法

```css
font-variant: normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic(<feature-value>) || historical-forms || styleset(<feature-value>...) || character-variant(<feature-value>...) || swash(<feature-value>) || ornaments(<feature-value>) || annotation(<feature-value>) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]
```

常用简化语法：
```css
font-variant: normal | small-caps
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | normal |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `normal`
使用字体的标准字形。

### `small-caps`
使用小型大写字母（小写的大写形式）。

### `none`
禁用所有 OpenType 特性。

### OpenType 特性值
- `common-ligatures` / `no-common-ligatures` - 常用连字
- `discretionary-ligatures` - 可选连字
- `historical-ligatures` - 历史连字
- `contextual` / `no-contextual` - 上下文替代
- `ordinal` - 序数
- `slashed-zero` - 带斜杠的零
- `lining-nums` / `oldstyle-nums` - 数字样式
- `proportional-nums` / `tabular-nums` - 数字间距

## 注意
1. 小型大写字母不是简单放大，而是专门设计的字形
2. 并非所有字体都支持小型大写字母
3. 该属性是 OpenType 特性的速记属性
4. 使用 `font-variant-*` 子属性可以更精细地控制

## 示例

```css
/* 正常字体 */
p {
  font-variant: normal;
}

/* 小型大写字母 */
.acronym {
  font-variant: small-caps;
}

/* 禁用连字 */
.no-ligatures {
  font-variant: none;
}
```

## 使用场景

```css
/* 1. 缩写词 - 小型大写字母 */
.acronym {
  font-variant: small-caps;
}

/* 2. 首字母大写 - 标题 */
.title {
  font-variant: small-caps;
  font-weight: bold;
}

/* 3. 正常显示 - 正文 */
.body-text {
  font-variant: normal;
}

/* 4. 禁用连字 - 精确控制 */
.precise-text {
  font-variant: none;
}

/* 5. 序数格式 - 日期 */
.ordinal-date {
  font-variant: ordinal;
}
