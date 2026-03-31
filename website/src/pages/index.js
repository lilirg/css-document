import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Home() {
  return (
    <Layout
      title="CSS 参考"
      description="一个广泛的 CSS 参考，包含所有重要的属性和信息，从基础学习CSS">
      <div className="hero">
        <div className="container">
          <h1>CSS 参考</h1>
          <p>一个广泛的 CSS 参考，包含所有重要的属性和信息</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/docs/intro" className="button button--primary">开始学习</Link>
            <Link to="/docs/concepts/intro" className="button button--secondary">学习概念</Link>
            <Link to="/docs/reference/intro" className="button button--secondary">查看参考</Link>
          </div>
        </div>
      </div>
      
      <main>
        <div className="container">
          <div className="row" style={{ marginTop: '2rem' }}>
            <div className="col col--4">
              <h2>入门</h2>
              <p>从基础开始学习 CSS，包括简介、选择器、盒模型、布局等。</p>
              <Link to="/docs/basics/whatisCSS">查看入门内容 &rarr;</Link>
            </div>
            <div className="col col--4">
              <h2>概念</h2>
              <p>深入理解 CSS 的核心概念，包括层叠、优先级、BFC、Flexbox 等。</p>
              <Link to="/docs/concepts/intro">查看概念内容 &rarr;</Link>
            </div>
            <div className="col col--4">
              <h2>参考</h2>
              <p>查找 CSS 属性、规则、函数和数据类型的详细文档。</p>
              <Link to="/docs/reference/intro">查看参考内容 &rarr;</Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;