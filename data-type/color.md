# 颜色（Color）

颜色是 CSS 中最重要的数据类型之一，用于设置文本、背景、边框等的色彩。

## 颜色表示方法

### 1. 预定义颜色名称

CSS 支持 148 个预定义颜色名称：

```css
.color {
  color: red;
  background-color: blue;
  border-color: green;
}
```

常用颜色名称：

| 颜色名称 | RGB 值 | 说明 |
| :--- | :--- | :--- |
| `red` | `rgb(255, 0, 0)` | 红色 |
| `blue` | `rgb(0, 0, 255)` | 蓝色 |
| `green` | `rgb(0, 128, 0)` | 绿色 |
| `white` | `rgb(255, 255, 255)` | 白色 |
| `black` | `rgb(0, 0, 0)` | 黑色 |
| `gray` | `rgb(128, 128, 128)` | 灰色 |
| `yellow` | `rgb(255, 255, 0)` | 黄色 |
| `cyan` | `rgb(0, 255, 255)` | 青色 |
| `magenta` | `rgb(255, 0, 255)` | 洋红色 |
| `orange` | `rgb(255, 165, 0)` | 橙色 |

### 2. RGB 颜色

使用红、绿、蓝三个通道表示颜色：

```css
/* 整数表示 */
.color {
  color: rgb(255, 0, 0);     /* 红色 */
  color: rgb(0, 255, 0);     /* 绿色 */
  color: rgb(0, 0, 255);     /* 蓝色 */
}

/* 百分比表示 */
.color {
  color: rgb(100%, 0%, 0%);  /* 红色 */
  color: rgb(0%, 100%, 0%);  /* 绿色 */
  color: rgb(0%, 0%, 100%);  /* 蓝色 */
}
```

### 3. RGBA 颜色

在 RGB 基础上增加透明度通道：

```css
.color {
  color: rgba(255, 0, 0, 0.5);     /* 半透明红色 */
  color: rgba(0, 255, 0, 0.8);     /* 80% 不透明绿色 */
  color: rgba(0, 0, 255, 1);       /* 完全不透明蓝色 */
}
```

### 4. HSL 颜色

使用色相、饱和度、亮度表示颜色：

```css
/* HSL 表示 */
.color {
  color: hsl(0, 100%, 50%);    /* 红色 */
  color: hsl(120, 100%, 50%);  /* 绿色 */
  color: hsl(240, 100%, 50%);  /* 蓝色 */
}

/* HSLA 表示（带透明度） */
.color {
  color: hsla(0, 100%, 50%, 0.5);    /* 半透明红色 */
  color: hsla(120, 100%, 50%, 0.8);  /* 80% 不透明绿色 */
}
```

### 5. 十六进制颜色

使用十六进制表示 RGB 值：

```css
/* 标准格式 */
.color {
  color: #ff0000;    /* 红色 */
  color: #00ff00;    /* 绿色 */
  color: #0000ff;    /* 蓝色 */
}

/* 缩写格式 */
.color {
  color: #f00;       /* 红色 */
  color: #0f0;       /* 绿色 */
  color: #00f;       /* 蓝色 */
}

/* 带透明度 */
.color {
  color: #ff000080;  /* 半透明红色 */
  color: #f008;      /* 缩写格式 */
}
```

### 6. Lab/LCH 颜色

CIE 标准颜色空间，更符合人类视觉：

```css
.color {
  color: lab(50% 50 50);
  color: lch(50% 70 25);
}
```

## 颜色值

### 透明度

透明度范围从 `0`（完全透明）到 `1`（完全不透明）：

```css
.color {
  color: rgba(255, 0, 0, 0);     /* 完全透明 */
  color: rgba(255, 0, 0, 0.5);   /* 半透明 */
  color: rgba(255, 0, 0, 1);     /* 完全不透明 */
}
```

### 颜色函数

```css
/* opacity() - 设置不透明度 */
.color {
  color: color(red opacity(50%));
}

/* contrast() - 对比度调整 */
.color {
  color: contrast(red, 50%);
}
```

## 颜色示例

```css
/* 预定义颜色 */
.button {
  background-color: blue;
  color: white;
}

/* RGB 颜色 */
.card {
  background-color: rgb(240, 240, 240);
  border: 1px solid rgb(200, 200, 200);
}

/* HSL 颜色 */
.header {
  background-color: hsl(200, 100%, 90%);
  color: hsl(200, 100%, 20%);
}

/* 十六进制颜色 */
.footer {
  background-color: #333;
  color: #fff;
}

/* 透明度 */
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
```

## 最佳实践

1. **使用 HSL** - 更直观的颜色调整
2. **使用 CSS 变量** - 颜色主题管理
3. **考虑可访问性** - 足够的对比度
4. **避免过度使用透明度** - 性能影响

## 相关链接

- [MDN: 颜色](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)
- [W3C: CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/)