# rgb()

`rgb()` 函数用于通过红（Red）、绿（Green）、蓝（Blue）三个颜色通道来定义颜色。

## 语法

```css
/* 基本语法 */
rgb(red, green, blue)

/* 参数范围 */
rgb(255, 0, 0)      /* 纯红色 */
rgb(0, 255, 0)      /* 纯绿色 */
rgb(0, 0, 255)      /* 纯蓝色 */
rgb(255, 255, 255)  /* 白色 */
rgb(0, 0, 0)        /* 黑色 */
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

## 示例

### 基本颜色

```css
/* 红色 */
.red {
  color: rgb(255, 0, 0);
}

/* 绿色 */
.green {
  color: rgb(0, 255, 0);
}

/* 蓝色 */
.blue {
  color: rgb(0, 0, 255);
}

/* 白色 */
.white {
  color: rgb(255, 255, 255);
}

/* 黑色 */
.black {
  color: rgb(0, 0, 0);
}
```

### 灰色

```css
/* 浅灰色 */
.light-gray {
  color: rgb(200, 200, 200);
}

/* 中灰色 */
.medium-gray {
  color: rgb(128, 128, 128);
}

/* 深灰色 */
.dark-gray {
  color: rgb(64, 64, 64);
}
```

### 使用百分比

```css
/* 红色 */
.red-percent {
  color: rgb(100%, 0%, 0%);
}

/* 绿色 */
.green-percent {
  color: rgb(0%, 100%, 0%);
}

/* 蓝色 */
.blue-percent {
  color: rgb(0%, 0%, 100%);
}

/* 白色 */
.white-percent {
  color: rgb(100%, 100%, 100%);
}

/* 黑色 */
.black-percent {
  color: rgb(0%, 0%, 0%);
}
```

### 混合颜色

```css
/* 黄色（红 + 绿） */
.yellow {
  color: rgb(255, 255, 0);
}

/* 青色（绿 + 蓝） */
.cyan {
  color: rgb(0, 255, 255);
}

/* 洋红色（红 + 蓝） */
.magenta {
  color: rgb(255, 0, 255);
}

/* 橙色 */
.orange {
  color: rgb(255, 165, 0);
}

/* 紫色 */
.purple {
  color: rgb(128, 0, 128);
}

/* 粉色 */
.pink {
  color: rgb(255, 192, 203);
}
```

### 渐变效果

```css
/* RGB 颜色渐变 */
.gradient {
  background: linear-gradient(
    to right,
    rgb(255, 0, 0),
    rgb(0, 255, 0),
    rgb(0, 0, 255)
  );
}
```

### 动画效果

```css
@keyframes color-change {
  0% {
    background-color: rgb(255, 0, 0);
  }
  50% {
    background-color: rgb(0, 255, 0);
  }
  100% {
    background-color: rgb(0, 0, 255);
  }
}

.animated {
  animation: color-change 2s infinite;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 1+ | 完全支持 |
| Firefox | 1+ | 完全支持 |
| Safari | 1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 3+ | 完全支持 |

## 相关链接

- [MDN: rgb()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/rgb)
- [W3C: CSS Color Module Level 3 - rgb()](https://www.w3.org/TR/css-color-3/#rgb-color)
