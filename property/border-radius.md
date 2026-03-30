# border-radius

该属性用于设置元素边框的圆角效果，可以是一个、两个、三个或四个值。

## 语法

```css
border-radius: <length>{1,4} [ / <length>{1,4} ]?
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

### length
圆角半径值：
- 绝对单位（如 `4px`, `8pt`, `0.5in`）
- 相对单位（如 `2em`, `50%`, `1rem`）
- 必须为正值

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 所有四个角使用相同圆角 |
| 2 个值 | 左上/右下使用第一个值，右上/左下使用第二个值 |
| 3 个值 | 左上、右上/左下、右下分别使用对应值 |
| 4 个值 | 左上、右上、右下、左下分别使用对应值（顺时针） |

### 斜杠语法
使用 `/` 可以分别设置水平和垂直半径：
```css
/* 水平半径 / 垂直半径 */
border-radius: 100px / 50px;  /* 椭圆圆角 */
border-radius: 50% / 100%;    /* 水平椭圆 */
```

## 注意
- 圆角值不能超过元素宽度/高度的一半（除非使用百分比）
- 使用 `50%` 可以将正方形变成圆形，矩形变成椭圆形
- 可以使用 `border-top-left-radius`, `border-top-right-radius`, `border-bottom-right-radius`, `border-bottom-left-radius` 分别设置
- 圆角与 `border-image` 不兼容
- 圆角动画需要浏览器支持

## 示例

```css
/* 1 个值 - 所有角相同 */
.box {
  border-radius: 8px;
}

/* 2 个值 - 对角相同 */
.box {
  border-radius: 8px 16px;
}

/* 3 个值 */
.box {
  border-radius: 8px 16px 24px;
}

/* 4 个值 - 左上 / 右上 / 右下 / 左下 */
.box {
  border-radius: 8px 16px 24px 32px;
}

/* 圆形（正方形） */
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

/* 椭圆（矩形） */
.ellipse {
  width: 200px;
  height: 100px;
  border-radius: 50%;
}

/* 斜杠语法 - 椭圆圆角 */
.elliptical {
  border-radius: 100px / 50px;
}

/* 单角设置 */
.only-top-left {
  border-top-left-radius: 8px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">8px 圆角</div>
<div class="circle">圆形</div>
<div class="ellipse">椭圆</div>
<div class="elliptical">椭圆圆角</div>
```

## 使用场景

```css
/* 1. 按钮圆角 */
.btn {
  border-radius: 4px;
  padding: 10px 20px;
}

/* 2. 胶囊按钮 */
.btn-pill {
  border-radius: 50px;
  padding: 10px 20px;
}

/* 3. 圆形头像 */
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

/* 4. 卡片圆角 */
.card {
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 5. 仅顶部圆角（标签效果） */
.tab {
  border-radius: 8px 8px 0 0;
}

/* 6. 对话气泡 */
.bubble {
  border-radius: 16px 16px 16px 0;
}

/* 7. 完全圆角（正方形变圆形） */
.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
