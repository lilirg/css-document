# isolation

该属性设置元素是否创建新的堆叠上下文。

## 语法

```css
isolation: auto | isolate
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### `auto`

默认值。元素不创建新的堆叠上下文，除非有其他属性（如 `opacity`、`transform`）触发。

### `isolate`

强制元素创建新的堆叠上下文。

## 注意

- 该属性常用于控制混合模式的作用范围
- 创建新的堆叠上下文后，子元素的混合模式不会影响外部元素
- 与 `mix-blend-mode` 配合使用

## 示例

```css
/* 不隔离 */
.el1 {
  isolation: auto;
  mix-blend-mode: multiply;
}

/* 隔离 */
.el2 {
  isolation: isolate;
  mix-blend-mode: multiply;
}
```

```html
<!-- 隔离示例 -->
<div class="container">
  <div class="isolated">隔离元素</div>
  <div class="normal">正常元素</div>
</div>
```

## 使用场景

```css
/* 隔离混合模式 */
.isolated-blend {
  isolation: isolate;
  mix-blend-mode: multiply;
}

/* 不隔离混合模式 */
.non-isolated-blend {
  isolation: auto;
  mix-blend-mode: screen;
}

/* 卡片隔离 */
.card {
  isolation: isolate;
  background: white;
}

/* 模态框隔离 */
.modal {
  isolation: isolate;
  position: fixed;
  z-index: 1000;
}

/* 工具提示隔离 */
.tooltip {
  isolation: isolate;
  position: absolute;
  z-index: 100;
}

/* 下拉菜单隔离 */
.dropdown {
  isolation: isolate;
  position: absolute;
}

/* 固定元素隔离 */
.fixed-element {
  isolation: isolate;
  position: fixed;
}

/* 层叠上下文隔离 */
.stacking-context {
  isolation: isolate;
}

/* 响应式隔离 */
.responsive-isolation {
  isolation: auto;
}

@media (min-width: 768px) {
  .responsive-isolation {
    isolation: isolate;
  }
}
