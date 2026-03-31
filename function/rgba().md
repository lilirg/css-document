# rgba()

`rgba()` 函数用于通过红（Red）、绿（Green）、蓝（Blue）三个颜色通道和透明度（Alpha）来定义颜色。

## 语法

```css
/* 基本语法 */
rgba(red, green, blue, alpha)

/* 参数范围 */
rgba(255, 0, 0, 1.0)      /* 不透明的纯红色 */
rgba(255, 0, 0, 0.5)      /* 半透明的纯红色 */
rgba(255, 0, 0, 0)        /* 完全透明的红色 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### red（红色通道）

定义红色的强度，取值范围：

- **整数**：`0` 到 `255`
  - `0`：无红色
  - `255`：最大红色强度
- **百分比**：`0%` 到 `100%`
  - `0%`：无红色
  - `100%`：最大红色强度

### green（绿色通道）

定义绿色的强度，取值范围：

- **整数**：`0` 到 `255`
  - `0`：无绿色
  - `255`：最大绿色强度
- **百分比**：`0%` 到 `100%`
  - `0%`：无绿色
  - `100%`：最大绿色强度

### blue（蓝色通道）

定义蓝色的强度，取值范围：

- **整数**：`0` 到 `255`
  - `0`：无蓝色
  - `255`：最大蓝色强度
- **百分比**：`0%` 到 `100%`
  - `0%`：无蓝色
  - `100%`：最大蓝色强度

### alpha（透明度）

定义颜色的透明度，取值范围：

- **数值**：`0` 到 `1`
  - `0`：完全透明
  - `1`：完全不透明
  - `0.5`：半透明

## 示例

### 基本颜色

```css
/* 红色 */
.red {
  color: rgba(255, 0, 0, 1.0);
}

/* 绿色 */
.green {
  color: rgba(0, 255, 0, 1.0);
}

/* 蓝色 */
.blue {
  color: rgba(0, 0, 255, 1.0);
}

/* 白色 */
.white {
  color: rgba(255, 255, 255, 1.0);
}

/* 黑色 */
.black {
  color: rgba(0, 0, 0, 1.0);
}
```

### 不同透明度

```css
/* 不透明 */
.opaque {
  background-color: rgba(255, 0, 0, 1.0);
}

/* 半透明 */
.semi-transparent {
  background-color: rgba(255, 0, 0, 0.5);
}

/* 完全透明 */
.transparent {
  background-color: rgba(255, 0, 0, 0);
}
```

### 覆盖效果

```css
/* 两个半透明层叠加 */
.overlay {
  position: relative;
}

.overlay::before,
.overlay::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
}

.overlay::before {
  background-color: rgba(255, 0, 0, 0.5);
}

.overlay::after {
  background-color: rgba(0, 255, 0, 0.5);
}
```

### 渐变效果

```css
/* RGBA 颜色渐变 */
.gradient {
  background: linear-gradient(
    to right,
    rgba(255, 0, 0, 1.0),
    rgba(255, 0, 0, 0.0)
  );
}
```

### 悬停效果

```css
/* 悬停时改变透明度 */
.button {
  background-color: rgba(0, 123, 255, 0.8);
  transition: background-color 0.3s;
}

.button:hover {
  background-color: rgba(0, 123, 255, 1.0);
}
```

### 遮罩效果

```css
/* 半透明遮罩 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
```

### 使用百分比

```css
/* 红色 */
.red-percent {
  color: rgba(100%, 0%, 0%, 0.5);
}

/* 绿色 */
.green-percent {
  color: rgba(0%, 100%, 0%, 0.5);
}

/* 蓝色 */
.blue-percent {
  color: rgba(0%, 0%, 100%, 0.5);
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 1+ | 完全支持 |
| Firefox | 1+ | 完全支持 |
| Safari | 1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 9+ | 完全支持 |

## 相关链接

- [MDN: rgba()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/rgba)
- [W3C: CSS Color Module Level 3 - rgba()](https://www.w3.org/TR/css-color-3/#rgba-color)
