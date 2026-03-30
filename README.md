# CSS 参考

一个通用的 CSS 参考，包含所有重要的属性和信息，从基础学习 CSS。

本参考旨在为 CSS 开发进程中提供 CSS 语法和属性的说明解释，提供在常规业务中提供最佳实践。

---

阅读本参考时，您可能会发现很多内容在互联网上已经存在。

我们编辑文档时，以 [MDN Web Docs](https://developer.mozilla.org/ "MDN Web Docs") 为准，比较明确的定义和用法，会直接以该站为准，甚至直接引用。

---

MDN Web Docs（Mozilla Developer Network）是一个权威的 Web 技术文档网站，提供了关于 HTML、CSS、JavaScript 等前端技术的详细文档和教程。MDN Web Docs 由 Mozilla 开发者网络提供，其内容由全球的贡献者维护和更新，以确保信息的准确性和时效性。

MDN Web Docs 不仅提供了丰富的技术文档和教程，还为 Web 开发人员提供了各种 API、属性和技术的详细说明，以及各种浏览器兼容性信息和规范。此外，MDN Web Docs 还提供了许多示例代码和演示，帮助开发人员更好地理解和使用 Web 技术。

因此，可以说 MDN Web Docs 是一个权威的 Web 技术文档网站，对于 Web 开发人员来说是非常重要的学习资源。

本参考相对于 MDN Web Docs，更倾向一般业务应用实践和特征功能的最佳实践。

---

## 完成进度

| 模块 | 状态 | 进度 |
|------|------|------|
| 基础内容 | ⏲ 进行中 | 20% |
| └─ 规则集 | ✅ 完成 | 100% |
| └─ 选择器 | ✅ 完成 | 100% |
| └─ 冲突 - 层叠、优先级、继承 | ⏲ 进行中 | 50% |
| └─ 盒模型 | ⏲ 待开始 | 0% |
| └─ 值与单位 | ⏲ 待开始 | 0% |
| └─ 替换元素和表单 | ⏲ 待开始 | 0% |
| └─ 开发者工具 | ⏲ 待开始 | 0% |
| └─ 布局排版 | ⏲ 待开始 | 0% |
| └─ 响应式 | ⏲ 待开始 | 0% |
| └─ 兼容 | ⏲ 待开始 | 0% |
| └─ 性能 | ⏲ 待开始 | 0% |
| 概念 | ⏲ 待开始 | 0% |
| 属性 | 📍 进行中 | 40% |
| └─ 动画与过渡 | ✅ 完成 | 100% |
| └─ 背景 | ✅ 完成 | 100% |
| 规则 | ⏲ 待开始 | 0% |
| 伪类 | ⏲ 待开始 | 0% |
| 函数 | ⏲ 待开始 | 0% |
| 数据类型 | ⏲ 待开始 | 0% |

### 属性

参考 [MDN CSS 属性参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)

#### 已完成的属性 ✅

| 属性 | 说明 |
|------|------|
| [`all`](property/all.md) | 重置所有 CSS 属性 |
| [`animation`](property/animation.md) | 动画速记属性 |
| [`animation-delay`](property/animation-delay.md) | 动画延迟时间 |
| [`animation-direction`](property/animation-direction.md) | 动画方向 |
| [`animation-duration`](property/animation-duration.md) | 动画持续时间 |
| [`animation-fill-mode`](property/animation-fill-mode.md) | 动画填充模式 |
| [`animation-iteration-count`](property/animation-iteration-count.md) | 动画迭代次数 |
| [`animation-name`](property/animation-name.md) | 动画名称 |
| [`animation-play-state`](property/animation-play-state.md) | 动画播放状态 |
| [`animation-timing-function`](property/animation-timing-function.md) | 动画时间函数 |
| [`appearance`](property/appearance.md) | 元素的原生 UI 外观 |
| [`backdrop-filter`](property/backdrop-filter.md) | 背景模糊效果 |
| [`background`](property/background.md) | 背景速记属性 |
| [`background-attachment`](property/background-attachment.md) | 背景附着方式 |
| [`background-blend-mode`](property/background-blend-mode.md) | 背景混合模式 |
| [`background-clip`](property/background-clip.md) | 背景裁剪区域 |
| [`background-color`](property/background-color.md) | 背景颜色 |
| [`background-image`](property/background-image.md) | 背景图像 |
| [`background-origin`](property/background-origin.md) | 背景定位原点 |
| [`background-position`](property/background-position.md) | 背景位置 |
| [`background-repeat`](property/background-repeat.md) | 背景重复方式 |
| [`background-size`](property/background-size.md) | 背景尺寸 |
| [`border`](property/border.md) | 边框速记属性 |
| [`border-bottom`](property/border-bottom.md) | 下边框速记 |
| [`border-bottom-color`](property/border-bottom-color.md) | 下边框颜色 |
| [`border-bottom-left-radius`](property/border-bottom-left-radius.md) | 下左边框圆角 |
| [`border-bottom-right-radius`](property/border-bottom-right-radius.md) | 下右边框圆角 |
| [`border-bottom-style`](property/border-bottom-style.md) | 下边框样式 |
| [`border-bottom-width`](property/border-bottom-width.md) | 下边框宽度 |
| [`border-collapse`](property/border-collapse.md) | 边框合并 |
| [`border-color`](property/border-color.md) | 边框颜色速记 |
| [`border-image`](property/border-image.md) | 边框图像速记 |
| [`border-image-outset`](property/border-image-outset.md) | 边框图像外扩 |
| [`border-image-repeat`](property/border-image-repeat.md) | 边框图像重复 |
| [`border-image-slice`](property/border-image-slice.md) | 边框图像切片 |
| [`border-image-source`](property/border-image-source.md) | 边框图像源 |
| [`border-image-width`](property/border-image-width.md) | 边框图像宽度 |
| [`border-left`](property/border-left.md) | 左边框速记 |
| [`border-left-color`](property/border-left-color.md) | 左边框颜色 |
| [`border-left-style`](property/border-left-style.md) | 左边框样式 |
| [`border-left-width`](property/border-left-width.md) | 左边框宽度 |
| [`border-radius`](property/border-radius.md) | 圆角速记 |
| [`border-right`](property/border-right.md) | 右边框速记 |
| [`border-right-color`](property/border-right-color.md) | 右边框颜色 |
| [`border-right-style`](property/border-right-style.md) | 右边框样式 |
| [`border-right-width`](property/border-right-width.md) | 右边框宽度 |
| [`border-spacing`](property/border-spacing.md) | 边框间距 |
| [`border-style`](property/border-style.md) | 边框样式速记 |
| [`border-top`](property/border-top.md) | 上边框速记 |
| [`border-top-color`](property/border-top-color.md) | 上边框颜色 |
| [`border-top-left-radius`](property/border-top-left-radius.md) | 上左边框圆角 |
| [`border-top-right-radius`](property/border-top-right-radius.md) | 上右边框圆角 |
| [`border-top-style`](property/border-top-style.md) | 上边框样式 |
| [`border-top-width`](property/border-top-width.md) | 上边框宽度 |
| [`border-width`](property/border-width.md) | 边框宽度速记 |
| [`color`](property/color.md) | 文本颜色 |
| [`transition`](property/transition.md) | 过渡速记属性 |
| [`transition-delay`](property/transition-delay.md) | 过渡延迟 |
| [`transition-duration`](property/transition-duration.md) | 过渡持续时间 |
| [`transition-property`](property/transition-property.md) | 过渡属性 |
| [`transition-timing-function`](property/transition-timing-function.md) | 过渡时间函数 |
| [`counter-increment`](property/counter-increment.md) | 计数器递增 |
| [`counter-reset`](property/counter-reset.md) | 计数器重置 |
| [`mask`](property/mask.md) | 遮罩速记属性 |
| [`mask-clip`](property/mask-clip.md) | 遮罩裁剪 |
| [`mask-image`](property/mask-image.md) | 遮罩图像 |
| [`mask-mode`](property/mask-mode.md) | 遮罩模式 |
| [`mask-origin`](property/mask-origin.md) | 遮罩原点 |
| [`mask-position`](property/mask-position.md) | 遮罩位置 |
| [`mask-repeat`](property/mask-repeat.md) | 遮罩重复 |
| [`mask-size`](property/mask-size.md) | 遮罩尺寸 |
| [`mask-type`](property/mask-type.md) | 遮罩类型 |
| [`page-break-after`](property/page-break-after.md) | 分页后断点（旧） |
| [`page-break-before`](property/page-break-before.md) | 分页前断点（旧） |
| [`page-break-inside`](property/page-break-inside.md) | 分页内断点（旧） |

#### 待完善的属性

##### 布局 Layout

- [ ] [`bottom`](property/bottom.md) - 底部定位
- [ ] [`box-shadow`](property/box-shadow.md) - 盒子阴影
- [ ] [`box-sizing`](property/box-sizing.md) - 盒子模型
- [ ] [`break-after`](property/break-after.md) - 分页后断点
- [ ] [`break-before`](property/break-before.md) - 分页前断点
- [ ] [`break-inside`](property/break-inside.md) - 分页内断点
- [ ] [`caption-side`](property/caption-side.md) - 表格标题位置
- [ ] [`clear`](property/clear.md) - 清除浮动
- [ ] [`clip`](property/clip.md) - 裁剪区域
- [ ] [`clip-path`](property/clip-path.md) - 裁剪路径
- [ ] [`column-count`](property/column-count.md) - 列数
- [ ] [`column-fill`](property/column-fill.md) - 列填充
- [ ] [`column-gap`](property/column-gap.md) - 列间距
- [ ] [`column-rule`](property/column-rule.md) - 列分隔线速记
- [ ] [`column-rule-color`](property/column-rule-color.md) - 列分隔线颜色
- [ ] [`column-rule-style`](property/column-rule-style.md) - 列分隔线样式
- [ ] [`column-rule-width`](property/column-rule-width.md) - 列分隔线宽度
- [ ] [`column-span`](property/column-span.md) - 列跨列
- [ ] [`column-width`](property/column-width.md) - 列宽
- [ ] [`columns`](property/columns.md) - 列速记
- [ ] [`display`](property/display.md) - 显示类型
- [ ] [`float`](property/float.md) - 浮动
- [ ] [`height`](property/height.md) - 高度
- [ ] [`left`](property/left.md) - 左侧定位
- [ ] [`margin`](property/margin.md) - 外边距速记
- [ ] [`margin-bottom`](property/margin-bottom.md) - 下外边距
- [ ] [`margin-left`](property/margin-left.md) - 左外边距
- [ ] [`margin-right`](property/margin-right.md) - 右外边距
- [ ] [`margin-top`](property/margin-top.md) - 上外边距
- [ ] [`max-height`](property/max-height.md) - 最大高度
- [ ] [`max-width`](property/max-width.md) - 最大宽度
- [ ] [`min-height`](property/min-height.md) - 最小高度
- [ ] [`min-width`](property/min-width.md) - 最小宽度
- [ ] [`object-fit`](property/object-fit.md) - 对象适配
- [ ] [`object-position`](property/object-position.md) - 对象位置
- [ ] [`overflow`](property/overflow.md) - 溢出处理
- [ ] [`overflow-x`](property/overflow-x.md) - X 轴溢出
- [ ] [`overflow-y`](property/overflow-y.md) - Y 轴溢出
- [ ] [`padding`](property/padding.md) - 内边距速记
- [ ] [`padding-bottom`](property/padding-bottom.md) - 下内边距
- [ ] [`padding-left`](property/padding-left.md) - 左内边距
- [ ] [`padding-right`](property/padding-right.md) - 右内边距
- [ ] [`padding-top`](property/padding-top.md) - 上内边距
- [ ] [`perspective`](property/perspective.md) - 透视距离
- [ ] [`perspective-origin`](property/perspective-origin.md) - 透视原点
- [ ] [`position`](property/position.md) - 定位方式
- [ ] [`resize`](property/resize.md) - 可调整大小
- [ ] [`right`](property/right.md) - 右侧定位
- [ ] [`table-layout`](property/table-layout.md) - 表格布局
- [ ] [`top`](property/top.md) - 顶部定位
- [ ] [`vertical-align`](property/vertical-align.md) - 垂直对齐
- [ ] [`width`](property/width.md) - 宽度
- [ ] [`z-index`](property/z-index.md) - 堆叠顺序

##### 字体与文本 Font & Text

- [ ] [`direction`](property/direction.md) - 文本方向
- [ ] [`empty-cells`](property/empty-cells.md) - 空单元格
- [ ] [`filter`](property/filter.md) - 滤镜效果
- [ ] [`font`](property/font.md) - 字体速记
- [ ] [`font-family`](property/font-family.md) - 字体系列
- [ ] [`font-size`](property/font-size.md) - 字体大小
- [ ] [`font-size-adjust`](property/font-size-adjust.md) - 字体大小调整
- [ ] [`font-stretch`](property/font-stretch.md) - 字体宽度
- [ ] [`font-style`](property/font-style.md) - 字体样式
- [ ] [`font-synthesis`](property/font-synthesis.md) - 字体合成
- [ ] [`font-variant`](property/font-variant.md) - 字体变体
- [ ] [`font-weight`](property/font-weight.md) - 字体粗细
- [ ] [`hanging-punctuation`](property/hanging-punctuation.md) - 悬挂标点
- [ ] [`hyphens`](property/hyphens.md) - 连字符
- [ ] [`letter-spacing`](property/letter-spacing.md) - 字母间距
- [ ] [`line-height`](property/line-height.md) - 行高
- [ ] [`list-style`](property/list-style.md) - 列表样式速记
- [ ] [`list-style-image`](property/list-style-image.md) - 列表图像
- [ ] [`list-style-position`](property/list-style-position.md) - 列表位置
- [ ] [`list-style-type`](property/list-style-type.md) - 列表类型
- [ ] [`text-align`](property/text-align.md) - 文本对齐
- [ ] [`text-align-last`](property/text-align-last.md) - 最后一行对齐
- [ ] [`text-decoration`](property/text-decoration.md) - 文本装饰速记
- [ ] [`text-decoration-color`](property/text-decoration-color.md) - 装饰颜色
- [ ] [`text-decoration-line`](property/text-decoration-line.md) - 装饰线类型
- [ ] [`text-decoration-style`](property/text-decoration-style.md) - 装饰线样式
- [ ] [`text-indent`](property/text-indent.md) - 文本缩进
- [ ] [`text-justify`](property/text-justify.md) - 文本两端对齐
- [ ] [`text-orientation`](property/text-orientation.md) - 文本方向
- [ ] [`text-overflow`](property/text-overflow.md) - 文本溢出
- [ ] [`text-rendering`](property/text-rendering.md) - 文本渲染
- [ ] [`text-shadow`](property/text-shadow.md) - 文本阴影
- [ ] [`text-transform`](property/text-transform.md) - 文本转换
- [ ] [`white-space`](property/white-space.md) - 空白处理
- [ ] [`word-break`](property/word-break.md) - 单词换行
- [ ] [`word-spacing`](property/word-spacing.md) - 单词间距
- [ ] [`word-wrap`](property/word-wrap.md) - 单词换行（旧）
- [ ] [`writing-mode`](property/writing-mode.md) - 书写模式

##### 其他属性

- [ ] [`backface-visibility`](property/backface-visibility.md) - 背面可见性
- [ ] [`cursor`](property/cursor.md) - 光标
- [ ] [`isolation`](property/isolation.md) - 隔离模式
- [ ] [`mix-blend-mode`](property/mix-blend-mode.md) - 混合模式
- [ ] [`opacity`](property/opacity.md) - 透明度
- [ ] [`outline`](property/outline.md) - 轮廓速记
- [ ] [`outline-color`](property/outline-color.md) - 轮廓颜色
- [ ] [`outline-offset`](property/outline-offset.md) - 轮廓偏移
- [ ] [`outline-style`](property/outline-style.md) - 轮廓样式
- [ ] [`outline-width`](property/outline-width.md) - 轮廓宽度
- [ ] [`pointer-events`](property/pointer-events.md) - 指针事件
- [ ] [`quotes`](property/quotes.md) - 引用符号
- [ ] [`shape-image-threshold`](property/shape-image-threshold.md) - 形状图像阈值
- [ ] [`shape-margin`](property/shape-margin.md) - 形状边距
- [ ] [`shape-outside`](property/shape-outside.md) - 形状外部
- [ ] [`tab-size`](property/tab-size.md) - Tab 字符宽度
- [ ] [`touch-action`](property/touch-action.md) - 触摸操作
- [ ] [`transform`](property/transform.md) - 变换
- [ ] [`transform-origin`](property/transform-origin.md) - 变换原点
- [ ] [`transform-style`](property/transform-style.md) - 变换样式
- [ ] [`unicode-bidi`](property/unicode-bidi.md) - Unicode 双向算法
- [ ] [`visibility`](property/visibility.md) - 可见性
- [ ] [`will-change`](property/will-change.md) - 即将变化
- [ ] [`orphans`](property/orphans.md) - 孤行
- [ ] [`widows`](property/widows.md) - 孤行（末页）

##### 遮罩 Mask

- [ ] [`mask-border`](property/mask-border.md) - 遮罩边框速记
- [ ] [`mask-border-mode`](property/mask-border-mode.md) - 遮罩边框模式
- [ ] [`mask-border-outset`](property/mask-border-outset.md) - 遮罩边框外扩
- [ ] [`mask-border-repeat`](property/mask-border-repeat.md) - 遮罩边框重复
- [ ] [`mask-border-slice`](property/mask-border-slice.md) - 遮罩边框切片
- [ ] [`mask-border-source`](property/mask-border-source.md) - 遮罩边框源
- [ ] [`mask-border-width`](property/mask-border-width.md) - 遮罩边框宽度
- [ ] [`mask-composite`](property/mask-composite.md) - 遮罩合成
