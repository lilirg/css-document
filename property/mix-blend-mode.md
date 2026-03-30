# mix-blend-mode

该属性设置元素与其背景内容的混合模式。

## 语法

```css
mix-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `normal`       |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### 基本混合模式

| 值 | 说明 |
| :--- | :--- |
| `normal` | 默认值，不混合 |
| `multiply` | 正片叠底，变暗 |
| `screen` | 滤色，变亮 |
| `overlay` | 叠加，增强对比 |

### 变暗混合模式

| 值 | 说明 |
| :--- | :--- |
| `darken` | 变暗，取较暗颜色 |
| `color-burn` | 颜色加深 |

### 变亮混合模式

| 值 | 说明 |
| :--- | :--- |
| `lighten` | 变亮，取较亮颜色 |
| `color-dodge` | 颜色减淡 |

### 对比混合模式

| 值 | 说明 |
| :--- | :--- |
| `hard-light` | 强光 |
| `soft-light` | 柔光 |

### 比较混合模式

| 值 | 说明 |
| :--- | :--- |
| `difference` | 差值 |
| `exclusion` | 排除 |

### 分量混合模式

| 值 | 说明 |
| :--- | :--- |
| `hue` | 色相 |
| `saturation` | 饱和度 |
| `color` | 颜色 |
| `luminosity` | 亮度 |

## 注意

- 该属性与 `background-blend-mode` 不同，后者混合背景层
- 常用于图像叠加效果
- 与 `isolation` 属性配合使用控制混合范围

## 示例

```css
/* 正片叠底 */
.el1 {
  mix-blend-mode: multiply;
}

/* 滤色 */
.el2 {
  mix-blend-mode: screen;
}

/* 叠加 */
.el3 {
  mix-blend-mode: overlay;
}
```

```html
<!-- 混合模式示例 -->
<div class="container">
  <div class="blend multiply">正片叠底</div>
  <div class="blend screen">滤色</div>
  <div class="blend overlay">叠加</div>
</div>
```

## 使用场景

```css
/* 文字叠加 */
.text-overlay {
  mix-blend-mode: multiply;
  color: white;
}

/* 图片叠加 */
.image-overlay {
  mix-blend-mode: screen;
}

/* 渐变叠加 */
.gradient-overlay {
  mix-blend-mode: overlay;
  background: linear-gradient(to right, red, blue);
}

/* 深色模式 */
.darken-mode {
  mix-blend-mode: darken;
}

/* 浅色模式 */
.lighten-mode {
  mix-blend-mode: lighten;
}

/* 颜色加深 */
.color-burn-mode {
  mix-blend-mode: color-burn;
}

/* 颜色减淡 */
.color-dodge-mode {
  mix-blend-mode: color-dodge;
}

/* 强光效果 */
.hard-light-mode {
  mix-blend-mode: hard-light;
}

/* 柔光效果 */
.soft-light-mode {
  mix-blend-mode: soft-light;
}

/* 差值效果 */
.difference-mode {
  mix-blend-mode: difference;
}

/* 排除效果 */
.exclusion-mode {
  mix-blend-mode: exclusion;
}

/* 色相混合 */
.hue-mode {
  mix-blend-mode: hue;
}

/* 饱和度混合 */
.saturation-mode {
  mix-blend-mode: saturation;
}

/* 颜色混合 */
.color-mode {
  mix-blend-mode: color;
}

/* 亮度混合 */
.luminosity-mode {
  mix-blend-mode: luminosity;
}

/* 响应式混合 */
.responsive-blend {
  mix-blend-mode: normal;
}

@media (min-width: 768px) {
  .responsive-blend {
    mix-blend-mode: multiply;
  }
}

/* 动画混合 */
.animated-blend {
  mix-blend-mode: normal;
  animation: blendChange 3s infinite;
}

@keyframes blendChange {
  0%, 100% { mix-blend-mode: normal; }
  25% { mix-blend-mode: multiply; }
  50% { mix-blend-mode: screen; }
  75% { mix-blend-mode: overlay; }
}
