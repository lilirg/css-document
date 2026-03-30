# font-synthesis

该属性用于控制浏览器是否可以合成缺失的字体样式，如粗体或斜体。

## 语法

```css
font-synthesis: none | [ weight || style || small-caps || position ]
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | weight style |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `none`
禁止浏览器合成任何字体样式。

### `weight`
允许浏览器合成粗体样式。

### `style`
允许浏览器合成斜体样式。

### `small-caps`
允许浏览器合成小型大写字母。

### `position`
允许浏览器合成上标/下标样式。

## 注意
1. 合成的字体样式可能不如真正的字体变体美观
2. 建议优先使用完整的字体家族，包含所有需要的变体
3. 该属性主要用于控制字体回退行为
4. 现代浏览器默认允许合成 weight 和 style

## 示例

```css
/* 禁止合成 */
.no-synthesis {
  font-synthesis: none;
}

/* 仅允许合成粗体 */
.weight-only {
  font-synthesis: weight;
}

/* 仅允许合成斜体 */
.style-only {
  font-synthesis: style;
}

/* 允许所有合成 */
.all-synthesis {
  font-synthesis: weight style small-caps;
}
```

## 使用场景

```css
/* 1. 禁止合成 - 保持字体原貌 */
.pure-font {
  font-family: "Custom Font", sans-serif;
  font-synthesis: none;
}

/* 2. 允许粗体合成 - 灵活回退 */
.flexible-bold {
  font-family: "Light Font", sans-serif;
  font-synthesis: weight;
}

/* 3. 允许斜体合成 - 强调文本 */
.emphasis-italic {
  font-family: "Regular Font", sans-serif;
  font-synthesis: style;
}

/* 4. 禁止斜体合成 - 保持设计 */
.no-italic {
  font-family: "Design Font", sans-serif;
  font-synthesis: weight;
}

/* 5. 完整合成 - 最大兼容性 */
.max-compatibility {
  font-family: "Base Font", sans-serif;
  font-synthesis: weight style small-caps position;
}
