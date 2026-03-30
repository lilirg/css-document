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

## 参考网站：

- [https://drafts.csswg.org/css-2024/](https://drafts.csswg.org/css-2024/)
- [https://drafts.csswg.org/css-syntax/](https://drafts.csswg.org/css-syntax/)
- [https://drafts.csswg.org/css-cascade-6/](https://drafts.csswg.org/css-cascade-6/)

## 完成进度

| 模块 | 状态 | 进度 |
| --- | --- |------|
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
| 属性 | 📍 进行中 | 85% |
| 规则 | ⏲ 待开始 | 0% |
| 伪类 | ⏲ 待开始 | 0% |
| 函数 | ⏲ 待开始 | 0% |
| 数据类型 | ⏲ 待开始 | 0% |

### 属性

参考 [MDN CSS 属性参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)

#### 按 W3C CSS 模块分组

##### 🎬 动画与过渡 (Animations & Transitions)

| 属性 | 说明 |
| --- | --- |
| [`animation`](property/animation.md) | 动画速记属性 |
| [`animation-delay`](property/animation-delay.md) | 动画延迟时间 |
| [`animation-direction`](property/animation-direction.md) | 动画方向 |
| [`animation-duration`](property/animation-duration.md) | 动画持续时间 |
| [`animation-fill-mode`](property/animation-fill-mode.md) | 动画填充模式 |
| [`animation-iteration-count`](property/animation-iteration-count.md) | 动画迭代次数 |
| [`animation-name`](property/animation-name.md) | 动画名称 |
| [`animation-play-state`](property/animation-play-state.md) | 动画播放状态 |
| [`animation-timing-function`](property/animation-timing-function.md) | 动画时间函数 |
| [`transition`](property/transition.md) | 过渡速记属性 |
| [`transition-delay`](property/transition-delay.md) | 过渡延迟 |
| [`transition-duration`](property/transition-duration.md) | 过渡持续时间 |
| [`transition-property`](property/transition-property.md) | 过渡属性 |
| [`transition-timing-function`](property/transition-timing-function.md) | 过渡时间函数 |

##### 🎨 背景与边框 (Backgrounds & Borders)

| 属性 | 说明 |
| --- | --- |
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

##### 🌈 颜色 (Colors)

| 属性 | 说明 |
| --- | --- |
| [`color`](property/color.md) | 文本颜色 |
| [`opacity`](property/opacity.md) | 透明度 |

##### 🔤 字体 (Fonts)

| 属性 | 说明 |
| --- | --- |
| [`font`](property/font.md) | 字体速记 |
| [`font-family`](property/font-family.md) | 字体系列 |
| [`font-size`](property/font-size.md) | 字体大小 |
| [`font-size-adjust`](property/font-size-adjust.md) | 字体大小调整 |
| [`font-stretch`](property/font-stretch.md) | 字体宽度 |
| [`font-style`](property/font-style.md) | 字体样式 |
| [`font-synthesis`](property/font-synthesis.md) | 字体合成 |
| [`font-variant`](property/font-variant.md) | 字体变体 |
| [`font-weight`](property/font-weight.md) | 字体粗细 |

##### 📝 文本 (Text)

| 属性 | 说明 |
| --- | --- |
| [`direction`](property/direction.md) | 文本方向 |
| [`hanging-punctuation`](property/hanging-punctuation.md) | 悬挂标点 |
| [`hyphens`](property/hyphens.md) | 连字符 |
| [`letter-spacing`](property/letter-spacing.md) | 字母间距 |
| [`line-height`](property/line-height.md) | 行高 |
| [`tab-size`](property/tab-size.md) | Tab 字符宽度 |
| [`text-align`](property/text-align.md) | 文本对齐 |
| [`text-align-last`](property/text-align-last.md) | 最后一行对齐 |
| [`text-indent`](property/text-indent.md) | 文本缩进 |
| [`text-justify`](property/text-justify.md) | 文本两端对齐 |
| [`text-orientation`](property/text-orientation.md) | 文本方向 |
| [`text-rendering`](property/text-rendering.md) | 文本渲染 |
| [`text-transform`](property/text-transform.md) | 文本转换 |
| [`white-space`](property/white-space.md) | 空白处理 |
| [`word-break`](property/word-break.md) | 单词换行 |
| [`word-spacing`](property/word-spacing.md) | 单词间距 |
| [`word-wrap`](property/word-wrap.md) | 单词换行（旧） |

##### 📦 盒模型 (Box Model)

| 属性 | 说明 |
| --- | --- |
| [`box-sizing`](property/box-sizing.md) | 盒子模型 |
| [`margin`](property/margin.md) | 外边距速记 |
| [`margin-bottom`](property/margin-bottom.md) | 下外边距 |
| [`margin-left`](property/margin-left.md) | 左外边距 |
| [`margin-right`](property/margin-right.md) | 右外边距 |
| [`margin-top`](property/margin-top.md) | 上外边距 |
| [`padding`](property/padding.md) | 内边距速记 |
| [`padding-bottom`](property/padding-bottom.md) | 下内边距 |
| [`padding-left`](property/padding-left.md) | 左内边距 |
| [`padding-right`](property/padding-right.md) | 右内边距 |
| [`padding-top`](property/padding-top.md) | 上内边距 |

##### 📐 弹性布局 (Flexbox)

| 属性 | 说明 |
| --- | --- |
| [`align-content`](property/align-content.md) | 对齐内容 |
| [`align-items`](property/align-items.md) | 对齐项目 |
| [`align-self`](property/align-self.md) | 对齐自身 |
| [`flex`](property/flex.md) | 弹性速记 |
| [`flex-basis`](property/flex-basis.md) | 弹性基准 |
| [`flex-direction`](property/flex-direction.md) | 弹性方向 |
| [`flex-flow`](property/flex-flow.md) | 弹性流 |
| [`flex-grow`](property/flex-grow.md) | 弹性增长 |
| [`flex-shrink`](property/flex-shrink.md) | 弹性收缩 |
| [`flex-wrap`](property/flex-wrap.md) | 弹性换行 |
| [`justify-content`](property/justify-content.md) | 主轴对齐 |
| [`order`](property/order.md) | 顺序 |

##### 📊 网格布局 (Grid)

| 属性 | 说明 |
| --- | --- |
| [`grid`](property/grid.md) | 网格速记 |
| [`grid-area`](property/grid-area.md) | 网格区域 |
| [`grid-auto-columns`](property/grid-auto-columns.md) | 自动列宽 |
| [`grid-auto-flow`](property/grid-auto-flow.md) | 自动流 |
| [`grid-auto-rows`](property/grid-auto-rows.md) | 自动行高 |
| [`grid-column`](property/grid-column.md) | 网格列 |
| [`grid-column-end`](property/grid-column-end.md) | 网格列结束 |
| [`grid-column-gap`](property/grid-column-gap.md) | 网格列间距 |
| [`grid-column-start`](property/grid-column-start.md) | 网格列开始 |
| [`grid-gap`](property/grid-gap.md) | 网格间距 |
| [`grid-row`](property/grid-row.md) | 网格行 |
| [`grid-row-end`](property/grid-row-end.md) | 网格行结束 |
| [`grid-row-gap`](property/grid-row-gap.md) | 网格行间距 |
| [`grid-row-start`](property/grid-row-start.md) | 网格行开始 |
| [`grid-template`](property/grid-template.md) | 网格模板 |
| [`grid-template-areas`](property/grid-template-areas.md) | 网格模板区域 |
| [`grid-template-columns`](property/grid-template-columns.md) | 网格模板列 |
| [`grid-template-rows`](property/grid-template-rows.md) | 网格模板行 |

##### 📄 多列布局 (Multi-column)

| 属性 | 说明 |
| --- | --- |
| [`column-count`](property/column-count.md) | 列数 |
| [`column-fill`](property/column-fill.md) | 列填充 |
| [`column-gap`](property/column-gap.md) | 列间距 |
| [`column-rule`](property/column-rule.md) | 列分隔线速记 |
| [`column-rule-color`](property/column-rule-color.md) | 列分隔线颜色 |
| [`column-rule-style`](property/column-rule-style.md) | 列分隔线样式 |
| [`column-rule-width`](property/column-rule-width.md) | 列分隔线宽度 |
| [`column-span`](property/column-span.md) | 列跨列 |
| [`column-width`](property/column-width.md) | 列宽 |
| [`columns`](property/columns.md) | 列速记 |

##### 📍 定位 (Positioning)

| 属性 | 说明 |
| --- | --- |
| [`bottom`](property/bottom.md) | 底部定位 |
| [`left`](property/left.md) | 左侧定位 |
| [`position`](property/position.md) | 定位方式 |
| [`right`](property/right.md) | 右侧定位 |
| [`top`](property/top.md) | 顶部定位 |
| [`z-index`](property/z-index.md) | 堆叠顺序 |

##### 📃 分页媒体 (Paged Media)

| 属性 | 说明 |
| --- | --- |
| [`break-after`](property/break-after.md) | 分页后断点 |
| [`break-before`](property/break-before.md) | 分页前断点 |
| [`break-inside`](property/break-inside.md) | 分页内断点 |
| [`page-break-after`](property/page-break-after.md) | 分页后断点（旧） |
| [`page-break-before`](property/page-break-before.md) | 分页前断点（旧） |
| [`page-break-inside`](property/page-break-inside.md) | 分页内断点（旧） |
| [`orphans`](property/orphans.md) | 孤行 |
| [`widows`](property/widows.md) | 孤行（末页） |

##### 🎭 遮罩 (Masking)

| 属性 | 说明 |
| --- | --- |
| [`mask`](property/mask.md) | 遮罩速记属性 |
| [`mask-border`](property/mask-border.md) | 遮罩边框速记 |
| [`mask-border-mode`](property/mask-border-mode.md) | 遮罩边框模式 |
| [`mask-border-outset`](property/mask-border-outset.md) | 遮罩边框外扩 |
| [`mask-border-repeat`](property/mask-border-repeat.md) | 遮罩边框重复 |
| [`mask-border-slice`](property/mask-border-slice.md) | 遮罩边框切片 |
| [`mask-border-source`](property/mask-border-source.md) | 遮罩边框源 |
| [`mask-border-width`](property/mask-border-width.md) | 遮罩边框宽度 |
| [`mask-clip`](property/mask-clip.md) | 遮罩裁剪 |
| [`mask-composite`](property/mask-composite.md) | 遮罩合成 |
| [`mask-image`](property/mask-image.md) | 遮罩图像 |
| [`mask-mode`](property/mask-mode.md) | 遮罩模式 |
| [`mask-origin`](property/mask-origin.md) | 遮罩原点 |
| [`mask-position`](property/mask-position.md) | 遮罩位置 |
| [`mask-repeat`](property/mask-repeat.md) | 遮罩重复 |
| [`mask-size`](property/mask-size.md) | 遮罩尺寸 |
| [`mask-type`](property/mask-type.md) | 遮罩类型 |

##### 🎞️ 合成与混合 (Compositing & Blending)

| 属性 | 说明 |
| --- | --- |
| [`backdrop-filter`](property/backdrop-filter.md) | 背景模糊效果 |
| [`isolation`](property/isolation.md) | 隔离模式 |
| [`mix-blend-mode`](property/mix-blend-mode.md) | 混合模式 |

##### 🔄 变换 (Transforms)

| 属性 | 说明 |
| --- | --- |
| [`backface-visibility`](property/backface-visibility.md) | 背面可见性 |
| [`perspective`](property/perspective.md) | 透视距离 |
| [`perspective-origin`](property/perspective-origin.md) | 透视原点 |
| [`transform`](property/transform.md) | 变换 |
| [`transform-origin`](property/transform-origin.md) | 变换原点 |
| [`transform-style`](property/transform-style.md) | 变换样式 |

##### 🎨 滤镜效果 (Filter Effects)

| 属性 | 说明 |
| --- | --- |
| [`filter`](property/filter.md) | 滤镜效果 |

##### 📜 滚动条 (Scrollbars)

| 属性 | 说明 |
| --- | --- |
| [`scrollbar-color`](property/scrollbar-color.md) | 滚动条颜色 |
| [`scrollbar-width`](property/scrollbar-width.md) | 滚动条宽度 |

##### 👤 用户界面 (User Interface)

| 属性 | 说明 |
| --- | --- |
| [`appearance`](property/appearance.md) | 元素的原生 UI 外观 |
| [`caret-color`](property/caret-color.md) | 光标颜色 |
| [`cursor`](property/cursor.md) | 光标 |
| [`outline`](property/outline.md) | 轮廓速记 |
| [`outline-color`](property/outline-color.md) | 轮廓颜色 |
| [`outline-offset`](property/outline-offset.md) | 轮廓偏移 |
| [`outline-style`](property/outline-style.md) | 轮廓样式 |
| [`outline-width`](property/outline-width.md) | 轮廓宽度 |
| [`pointer-events`](property/pointer-events.md) | 指针事件 |
| [`resize`](property/resize.md) | 可调整大小 |
| [`touch-action`](property/touch-action.md) | 触摸操作 |
| [`user-select`](property/user-select.md) | 用户选择 |
| [`visibility`](property/visibility.md) | 可见性 |
| [`will-change`](property/will-change.md) | 即将变化 |

##### 📖 书写模式 (Writing Modes)

| 属性 | 说明 |
| --- | --- |
| [`caption-side`](property/caption-side.md) | 表格标题位置 |
| [`direction`](property/direction.md) | 文本方向 |
| [`text-orientation`](property/text-orientation.md) | 文本方向 |
| [`unicode-bidi`](property/unicode-bidi.md) | Unicode 双向算法 |
| [`writing-mode`](property/writing-mode.md) | 书写模式 |

##### 📢 溢出 (Overflow)

| 属性 | 说明 |
| --- | --- |
| [`overflow`](property/overflow.md) | 溢出处理 |
| [`overflow-x`](property/overflow-x.md) | X 轴溢出 |
| [`overflow-y`](property/overflow-y.md) | Y 轴溢出 |

##### 🔤 Ruby 标注 (Ruby)

| 属性 | 说明 |
| --- | --- |
| [`ruby-align`](property/ruby-align.md) | Ruby 对齐 |
| [`ruby-merge`](property/ruby-merge.md) | Ruby 合并 |
| [`ruby-position`](property/ruby-position.md) | Ruby 位置 |

##### 🗣️ 语音 (Speech)

| 属性 | 说明 |
| --- | --- |
| [`voice-balance`](property/voice-balance.md) | 语音平衡 |
| [`voice-duration`](property/voice-duration.md) | 语音持续时间 |
| [`voice-pitch`](property/voice-pitch.md) | 语音音高 |
| [`voice-range`](property/voice-range.md) | 语音范围 |
| [`voice-rate`](property/voice-rate.md) | 语音速率 |
| [`voice-stress`](property/voice-stress.md) | 语音重音 |
| [`voice-volume`](property/voice-volume.md) | 语音音量 |

##### 📄 页面生成与标记 (GCPM)

| 属性 | 说明 |
| --- | --- |
| [`string-set`](property/string-set.md) | 字符串集 |

##### 🔷 形状 (Shapes)

| 属性 | 说明 |
| --- | --- |
| [`shape-image-threshold`](property/shape-image-threshold.md) | 形状图像阈值 |
| [`shape-margin`](property/shape-margin.md) | 形状边距 |
| [`shape-outside`](property/shape-outside.md) | 形状外部 |

##### ✏️ 文本装饰 (Text Decoration)

| 属性 | 说明 |
| --- | --- |
| [`text-decoration`](property/text-decoration.md) | 文本装饰速记 |
| [`text-decoration-color`](property/text-decoration-color.md) | 装饰颜色 |
| [`text-decoration-line`](property/text-decoration-line.md) | 装饰线类型 |
| [`text-decoration-style`](property/text-decoration-style.md) | 装饰线样式 |
| [`text-decoration-thickness`](property/text-decoration-thickness.md) | 装饰线厚度 |

##### 📏 行网格 (Line Grid)

| 属性 | 说明 |
| --- | --- |
| *(暂无)* |

##### ✂️ 分块 (Fragmentation)

| 属性 | 说明 |
| --- | --- |
| *(暂无)* |

##### 📐 逻辑属性 (Logical Properties)

| 属性 | 说明 |
| --- | --- |
| [`border-block`](property/border-block.md) | 块边框速记 |
| [`border-block-end`](property/border-block-end.md) | 块结束边框 |
| [`border-block-start`](property/border-block-start.md) | 块开始边框 |
| [`border-inline`](property/border-inline.md) | 行内边框速记 |
| [`border-inline-end`](property/border-inline-end.md) | 行内结束边框 |
| [`border-inline-start`](property/border-inline-start.md) | 行内开始边框 |
| [`margin-block`](property/margin-block.md) | 块外边距速记 |
| [`margin-block-end`](property/margin-block-end.md) | 块结束外边距 |
| [`margin-block-start`](property/margin-block-start.md) | 块开始外边距 |
| [`margin-inline`](property/margin-inline.md) | 行内外边距速记 |
| [`margin-inline-end`](property/margin-inline-end.md) | 行内结束外边距 |
| [`margin-inline-start`](property/margin-inline-start.md) | 行内开始外边距 |
| [`padding-block`](property/padding-block.md) | 块内边距速记 |
| [`padding-block-end`](property/padding-block-end.md) | 块结束内边距 |
| [`padding-block-start`](property/padding-block-start.md) | 块开始内边距 |
| [`padding-inline`](property/padding-inline.md) | 行内内边距速记 |
| [`padding-inline-end`](property/padding-inline-end.md) | 行内结束内边距 |
| [`padding-inline-start`](property/padding-inline-start.md) | 行内开始内边距 |

##### 🎯 值与级联 (Values & Cascading)

| 属性 | 说明 |
| --- | --- |
| [`all`](property/all.md) | 重置所有 CSS 属性 |
| [`counter-increment`](property/counter-increment.md) | 计数器递增 |
| [`counter-reset`](property/counter-reset.md) | 计数器重置 |
| [`counter-set`](property/counter-set.md) | 计数器设置 |

##### 🖌️ 浏览器前缀属性

###### Firefox (-moz-)

| 属性 | 说明 |
| --- | --- |
| [`-moz-float-edge`](property/-moz-float-edge.md) | Firefox 高度/宽度模型 |
| [`-moz-force-broken-image-icon`](property/-moz-force-broken-image-icon.md) | Firefox 损坏图像图标 |
| [`-moz-orient`](property/-moz-orient.md) | Firefox 元素方向 |
| [`-moz-user-focus`](property/-moz-user-focus.md) | Firefox 焦点控制 |
| [`-moz-user-input`](property/-moz-user-input.md) | Firefox 输入控制 |

###### WebKit (-webkit-)

| 属性 | 说明 |
| --- | --- |
| [`-webkit-border-before`](property/-webkit-border-before.md) | WebKit 前边边框速记 |
| [`-webkit-box-reflect`](property/-webkit-box-reflect.md) | WebKit 元素倒影 |
| [`-webkit-mask-box-image`](property/-webkit-mask-box-image.md) | WebKit 遮罩边框图像速记 |
| [`-webkit-mask-composite`](property/-webkit-mask-composite.md) | WebKit 遮罩组合方式 |
| [`-webkit-mask-position-x`](property/-webkit-mask-position-x.md) | WebKit 遮罩 X 轴位置 |
| [`-webkit-mask-position-y`](property/-webkit-mask-position-y.md) | WebKit 遮罩 Y 轴位置 |
| [`-webkit-mask-repeat-x`](property/-webkit-mask-repeat-x.md) | WebKit 遮罩 X 轴重复 |
| [`-webkit-mask-repeat-y`](property/-webkit-mask-repeat-y.md) | WebKit 遮罩 Y 轴重复 |
| [`-webkit-tap-highlight-color`](property/-webkit-tap-highlight-color.md) | WebKit 触摸高亮颜色 |
| [`-webkit-text-fill-color`](property/-webkit-text-fill-color.md) | WebKit 文本填充颜色 |
| [`-webkit-text-security`](property/-webkit-text-security.md) | WebKit 文本安全显示 |
| [`-webkit-text-stroke`](property/-webkit-text-stroke.md) | WebKit 文本描边速记 |
| [`-webkit-text-stroke-color`](property/-webkit-text-stroke-color.md) | WebKit 文本描边颜色 |
| [`-webkit-text-stroke-width`](property/-webkit-text-stroke-width.md) | WebKit 文本描边宽度 |
| [`-webkit-touch-callout`](property/-webkit-touch-callout.md) | WebKit 触摸调用菜单 |

##### 📋 其他属性

| 属性 | 说明 |
| --- | --- |
| [`box-shadow`](property/box-shadow.md) | 盒子阴影 |
| [`clear`](property/clear.md) | 清除浮动 |
| [`clip`](property/clip.md) | 裁剪区域 |
| [`clip-path`](property/clip-path.md) | 裁剪路径 |
| [`display`](property/display.md) | 显示类型 |
| [`empty-cells`](property/empty-cells.md) | 空单元格 |
| [`float`](property/float.md) | 浮动 |
| [`height`](property/height.md) | 高度 |
| [`list-style`](property/list-style.md) | 列表样式速记 |
| [`list-style-image`](property/list-style-image.md) | 列表图像 |
| [`list-style-position`](property/list-style-position.md) | 列表位置 |
| [`list-style-type`](property/list-style-type.md) | 列表类型 |
| [`max-height`](property/max-height.md) | 最大高度 |
| [`max-width`](property/max-width.md) | 最大宽度 |
| [`min-height`](property/min-height.md) | 最小高度 |
| [`min-width`](property/min-width.md) | 最小宽度 |
| [`object-fit`](property/object-fit.md) | 对象适配 |
| [`object-position`](property/object-position.md) | 对象位置 |
| [`quotes`](property/quotes.md) | 引用符号 |
| [`table-layout`](property/table-layout.md) | 表格布局 |
| [`vertical-align`](property/vertical-align.md) | 垂直对齐 |
| [`width`](property/width.md) | 宽度 |

## 待完成的属性（根据 W3C CSS 规范）

### 核心属性（高优先级）

| 属性 | 说明 | 状态 |
| --- | --- | --- |
| [`contain`](property/contain.md) | 包含 | ⏲ 待开始 |
| [`content-visibility`](property/content-visibility.md) | 内容可见性 | ⏲ 待开始 |
| [`inset`](property/inset.md) | 定位速记 | ⏲ 待开始 |
| [`gap`](property/gap.md) | 间距速记 | ⏲ 待开始 |
| [`scroll-behavior`](property/scroll-behavior.md) | 滚动行为 | ⏲ 待开始 |
| [`scroll-snap-type`](property/scroll-snap-type.md) | 滚动捕捉类型 | ⏲ 待开始 |
| [`scroll-snap-align`](property/scroll-snap-align.md) | 滚动捕捉对齐 | ⏲ 待开始 |
| [`scroll-margin`](property/scroll-margin.md) | 滚动外边距速记 | ⏲ 待开始 |
| [`scroll-padding`](property/scroll-padding.md) | 滚动内边距速记 | ⏲ 待开始 |
| [`text-overflow`](property/text-overflow.md) | 文本溢出 | ⏲ 待开始 |
| [`text-shadow`](property/text-shadow.md) | 文本阴影 | ⏲ 待开始 |
| [`text-underline-offset`](property/text-underline-offset.md) | 下划线偏移 | ⏲ 待开始 |
| [`accent-color`](property/accent-color.md) | 强调色 | ⏲ 待开始 |
| [`color-scheme`](property/color-scheme.md) | 颜色方案 | ⏲ 待开始 |
| [`scrollbar-gutter`](property/scrollbar-gutter.md) | 滚动条间距 | ⏲ 待开始 |
| [`aspect-ratio`](property/aspect-ratio.md) | 宽高比 | ⏲ 待开始 |
| [`content`](property/content.md) | 内容 | ⏲ 待开始 |
| [`line-clamp`](property/line-clamp.md) | 行裁剪 | ⏲ 待开始 |

### 字体相关属性

| 属性 | 说明 | 状态 |
| --- | --- | --- |
| [`font-feature-settings`](property/font-feature-settings.md) | 字体特性设置 | ⏲ 待开始 |
| [`font-kerning`](property/font-kerning.md) | 字体 Kerning | ⏲ 待开始 |
| [`font-optical-sizing`](property/font-optical-sizing.md) | 字体光学缩放 | ⏲ 待开始 |
| [`font-palette`](property/font-palette.md) | 字体调色板 | ⏲ 待开始 |
| [`font-variation-settings`](property/font-variation-settings.md) | 字体变体设置 | ⏲ 待开始 |
| [`font-variant-caps`](property/font-variant-caps.md) | 字体变体大写字母 | ⏲ 待开始 |
| [`font-variant-numeric`](property/font-variant-numeric.md) | 字体变体数字 | ⏲ 待开始 |
| [`font-variant-east-asian`](property/font-variant-east-asian.md) | 字体变体东亚 | ⏲ 待开始 |
| [`font-variant-ligatures`](property/font-variant-ligatures.md) | 字体变体连字 | ⏲ 待开始 |

### 文本相关属性

| 属性 | 说明 | 状态 |
| --- | --- | --- |
| [`text-emphasis`](property/text-emphasis.md) | 文本强调速记 | ⏲ 待开始 |
| [`text-emphasis-color`](property/text-emphasis-color.md) | 文本强调颜色 | ⏲ 待开始 |
| [`text-emphasis-style`](property/text-emphasis-style.md) | 文本强调样式 | ⏲ 待开始 |
| [`text-emphasis-position`](property/text-emphasis-position.md) | 文本强调位置 | ⏲ 待开始 |
| [`text-size-adjust`](property/text-size-adjust.md) | 文本大小调整 | ⏲ 待开始 |
| [`text-combine-upright`](property/text-combine-upright.md) | 文本组合直立 | ⏲ 待开始 |
| [`line-break`](property/line-break.md) | 换行 | ⏲ 待开始 |

### 逻辑属性补充

| 属性 | 说明 | 状态 |
| --- | --- | --- |
| [`border-block-color`](property/border-block-color.md) | 块边框颜色 | ⏲ 待开始 |
| [`border-block-style`](property/border-block-style.md) | 块边框样式 | ⏲ 待开始 |
| [`border-block-width`](property/border-block-width.md) | 块边框宽度 | ⏲ 待开始 |
| [`border-inline-color`](property/border-inline-color.md) | 行内边框颜色 | ⏲ 待开始 |
| [`border-inline-style`](property/border-inline-style.md) | 行内边框样式 | ⏲ 待开始 |
| [`border-inline-width`](property/border-inline-width.md) | 行内边框宽度 | ⏲ 待开始 |
| [`border-start-start-radius`](property/border-start-start-radius.md) | 开始开始圆角 | ⏲ 待开始 |
| [`border-start-end-radius`](property/border-start-end-radius.md) | 开始结束圆角 | ⏲ 待开始 |
| [`border-end-start-radius`](property/border-end-start-radius.md) | 结束开始圆角 | ⏲ 待开始 |
| [`border-end-end-radius`](property/border-end-end-radius.md) | 结束结束圆角 | ⏲ 待开始 |
| [`inset-block`](property/inset-block.md) | 块定位速记 | ⏲ 待开始 |
| [`inset-block-start`](property/inset-block-start.md) | 块开始定位 | ⏲ 待开始 |
| [`inset-block-end`](property/inset-block-end.md) | 块结束定位 | ⏲ 待开始 |
| [`inset-inline`](property/inset-inline.md) | 行内定位速记 | ⏲ 待开始 |
| [`inset-inline-start`](property/inset-inline-start.md) | 行内开始定位 | ⏲ 待开始 |
| [`inset-inline-end`](property/inset-inline-end.md) | 行内结束定位 | ⏲ 待开始 |

### 动画与过渡新属性

| 属性 | 说明 | 状态 |
| --- | --- | --- |
| [`animation-timeline`](property/animation-timeline.md) | 动画时间线 | ⏲ 待开始 |
| [`animation-range`](property/animation-range.md) | 动画范围 | ⏲ 待开始 |
| [`animation-range-start`](property/animation-range-start.md) | 动画范围开始 | ⏲ 待开始 |
| [`animation-range-end`](property/animation-range-end.md) | 动画范围结束 | ⏲ 待开始 |
| [`scroll-timeline`](property/scroll-timeline.md) | 滚动时间线 | ⏲ 待开始 |
| [`view-timeline`](property/view-timeline.md) | 视图时间线 | ⏲ 待开始 |

### 分页媒体补充

| 属性 | 说明 | 状态 |
| --- | --- | --- |
| [`bleed`](property/bleed.md) | 出血 | ⏲ 待开始 |
| [`marks`](property/marks.md) | 标记 | ⏲ 待开始 |
| [`size`](property/size.md) | 页面尺寸 | ⏲ 待开始 |

### 其他补充

| 属性 | 说明 | 状态 |
| --- | --- | --- |
| [`box-decoration-break`](property/box-decoration-break.md) | 盒子装饰片段 | ⏲ 待开始 |
| [`forced-color-adjust`](property/forced-color-adjust.md) | 强制颜色调整 | ⏲ 待开始 |
| [`transform-box`](property/transform-box.md) | 变换盒子 | ⏲ 待开始 |
| [`overflow-anchor`](property/overflow-anchor.md) | 溢出锚点 | ⏲ 待开始 |
| [`overflow-block`](property/overflow-block.md) | 块溢出 | ⏲ 待开始 |
| [`overflow-inline`](property/overflow-inline.md) | 行内溢出 | ⏲ 待开始 |
| [`overflow-clip-margin`](property/overflow-clip-margin.md) | 溢出裁剪边距 | ⏲ 待开始 |
| [`max-lines`](property/max-lines.md) | 最大行数 | ⏲ 待开始 |
| [`speak`](property/speak.md) | 语音 | ⏲ 待开始 |
| [`speak-as`](property/speak-as.md) | 语音方式 | ⏲ 待开始 |
| [`caret`](property/caret.md) | 光标速记 | ⏲ 待开始 |
| [`caret-shape`](property/caret-shape.md) | 光标形状 | ⏲ 待开始 |
| [`outline`](property/outline.md) | 轮廓速记 | ⏲ 待开始 |
| [`outline-color`](property/outline-color.md) | 轮廓颜色 | ⏲ 待开始 |
| [`outline-style`](property/outline-style.md) | 轮廓样式 | ⏲ 待开始 |
| [`outline-width`](property/outline-width.md) | 轮廓宽度 | ⏲ 待开始 |
| [`outline-offset`](property/outline-offset.md) | 轮廓偏移 | ⏲ 待开始 |
