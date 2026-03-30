# column-rule-style

该属性设置多列布局中列分隔线的样式。

## 语法

```css
column-rule-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 否 |

## 值

### `none`

默认值。无分隔线。

### `hidden`

隐藏分隔线。

### `dotted`

点状分隔线。

### `dashed`

虚线分隔线。

### `solid`

实线分隔线。

### `double`

双线分隔线。

### `groove`

3D 凹槽分隔线。

### `ridge`

3D 凸脊分隔线。

### `inset`

3D 内嵌分隔线。

### `outset`

3D 外嵌分隔线。

## 注意

- 必须设置此属性才能显示分隔线
- 与 `border-style` 的值相同
- 分隔线高度等于列的高度

## 示例

```css
/* CSS 示例 */
.columns {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: #333;
}
```

```html
<!-- HTML 示例 -->
<div class="columns">
  <p>列之间有实线分隔...</p>
</div>
```

## 使用场景

```css
/* 1. 实线分隔 */
.solid-rule {
  column-count: 2;
  column-rule-style: solid;
  column-rule-color: #ccc;
}

/* 2. 虚线分隔 */
.dashed-rule {
  column-count: 3;
  column-rule-style: dashed;
  column-rule-color: #999;
}

/* 3. 点状分隔 */
.dotted-rule {
  column-count: 2;
  column-rule-style: dotted;
  column-rule-color: #666;
}

/* 4. 双线分隔 */
.double-rule {
  column-count: 2;
  column-rule-style: double;
  column-rule-color: #333;
}
