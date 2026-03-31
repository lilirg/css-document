# @page

`@page` 规则用于定义打印文档时页面的样式，主要用于控制分页和页面布局。

## 语法

```css
@page {
  /* CSS properties */
}

@page :pseudo-class {
  /* CSS properties */
}

/* 示例 */
@page {
  size: A4;
  margin: 2cm;
}

@page :first {
  margin: 3cm;
}

@page :left {
  margin-left: 3cm;
}

@page :right {
  margin-right: 3cm;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 不适用（页面规则） |
| 动画 | 不适用 |

## 属性值

### page-size（页面大小）

定义页面的尺寸：

| 页面大小 | 说明 |
| :--- | :--- |
| `A4` | A4 纸张（210mm × 297mm） |
| `A3` | A3 纸张（297mm × 420mm） |
| `letter` | 美国信纸（8.5in × 11in） |
| `legal` | 美国法律用纸（8.5in × 14in） |
| `landscape` | 横向 |
| `portrait` | 纵向 |

### margin（页边距）

定义页面的边距：

| 属性 | 说明 |
| :--- | :--- |
| `margin` | 所有边距 |
| `margin-top` | 上边距 |
| `margin-right` | 右边距 |
| `margin-bottom` | 下边距 |
| `margin-left` | 左边距 |

### bleed（出血）

定义打印出血区域：

```css
bleed: 3mm;
```

### marks（标记）

定义打印标记：

| 标记类型 | 说明 |
| :--- | :--- |
| `crop` | 裁剪标记 |
| `cross` | 交叉标记 |
| `center` | 居中标记 |
| `corner` | 角标 |
| `color` | 颜色标记 |

## 示例

### 基本页面设置

```css
@page {
  size: A4;
  margin: 2cm;
}
```

### 首页设置

```css
@page :first {
  margin-top: 3cm;
  padding-top: 1cm;
}
```

### 左右页设置

```css
@page :left {
  margin-left: 3cm;
  margin-right: 2cm;
}

@page :right {
  margin-left: 2cm;
  margin-right: 3cm;
}
```

### 横向页面

```css
@page landscape {
  size: landscape;
  margin: 2cm;
}

@page portrait {
  size: portrait;
  margin: 2cm;
}
```

### 自定义页面大小

```css
@page {
  size: 210mm 297mm;
  margin: 2cm;
}
```

### 带标记的页面

```css
@page {
  size: A4;
  margin: 1cm;
  bleed: 3mm;
  marks: crop cross;
}
```

### 页眉页脚

```css
@page {
  @top-center {
    content: "文档标题";
    font-size: 10pt;
  }
  
  @top-right {
    content: "第 " counter(page) " 页";
    font-size: 10pt;
  }
  
  @bottom-center {
    content: "公司名称";
    font-size: 8pt;
  }
}
```

### 复杂页眉页脚

```css
@page {
  size: A4;
  margin: 2cm;
  
  @top-left {
    content: "章节标题";
    font-size: 9pt;
  }
  
  @top-center {
    content: "文档标题";
    font-size: 9pt;
  }
  
  @top-right {
    content: "作者";
    font-size: 9pt;
  }
  
  @bottom-left {
    content: "公司名称";
    font-size: 8pt;
  }
  
  @bottom-center {
    content: "第 " counter(page) " 页";
    font-size: 8pt;
  }
  
  @bottom-right {
    content: "日期";
    font-size: 8pt;
  }
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 1+ | 完全支持 |
| Firefox | 1+ | 完全支持 |
| Safari | 1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 8+ | 完全支持 |

## 相关链接

- [MDN: @page](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@page)
- [W3C: CSS Paged Media Module Level 3 - @page](https://www.w3.org/TR/css-page-3/#at-page-rule)
