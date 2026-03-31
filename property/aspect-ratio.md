# aspect-ratio

`aspect-ratio` CSS 属性指定元素的首选宽高比，浏览器会根据此比例自动计算元素的尺寸。

## 语法

```css
/* 单个比值 */
aspect-ratio: 16 / 9;
aspect-ratio: 4 / 3;
aspect-ratio: 1;

/* 使用关键字 */
aspect-ratio: auto;

/* 多个比值（使用第一个有效的） */
aspect-ratio: 16 / 9 auto;
```

## 值

### 比值

使用两个数字表示宽高比，用 `/` 分隔。

```css
aspect-ratio: 16 / 9;
aspect-ratio: 4 / 3;
aspect-ratio: 1 / 1;
aspect-ratio: 2.35 / 1;
```

### `auto`

使用元素的固有比例（如图像的固有比例），或没有比例限制。

```css
aspect-ratio: auto;
```

### 多个比值

可以指定多个比值，浏览器使用第一个有效的比值。

```css
aspect-ratio: 16 / 9 auto;
```

## 示例

### 响应式图片容器

```css
/* 16:9 视频容器 */
.video-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000;
}

/* 1:1 正方形 */
.square {
  width: 200px;
  aspect-ratio: 1 / 1;
}

/* 4:3 图片容器 */
.image-container {
  width: 100%;
  aspect-ratio: 4 / 3;
  background-color: #f0f0f0;
}
```

### 卡片组件

```css
/* 卡片保持 3:2 比例 */
.card {
  width: 300px;
  aspect-ratio: 3 / 2;
  background-color: #fff;
  border: 1px solid #ccc;
}

/* 响应式卡片 */
.responsive-card {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16 / 9;
}
```

### 网格布局

```css
/* 网格项保持正方形 */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.grid-item {
  aspect-ratio: 1 / 1;
  background-color: #e0e0e0;
}
```

### 占位符

```css
/* 加载占位符 */
.placeholder {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 头像占位符 */
.avatar-placeholder {
  width: 80px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #ddd;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 88+ |
| Edge | 88+ |
| Firefox | 89+ |
| Safari | 15+ |
| Opera | 74+ |

## 注意事项

1. **首选比值**：`aspect-ratio` 指定的是首选比值，当其他尺寸约束冲突时可能被覆盖。

2. **尺寸约束**：通常需要设置一个维度（宽度或高度），另一个维度会自动计算。

3. **与 padding 技巧对比**：`aspect-ratio` 是更现代的方法，替代了传统的 `padding-bottom` 技巧。

4. **内容影响**：如果内容超出，可能会破坏宽高比。

5. **响应式**：非常适合创建响应式布局中的固定比例容器。

## 相关属性

- [`width`](width.md) - 宽度
- [`height`](height.md) - 高度
- [`max-width`](max-width.md) - 最大宽度
- [`max-height`](max-height.md) - 最大高度

## 规范

- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/css-align-3/#aspect-ratio)