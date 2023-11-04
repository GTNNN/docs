import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.76cb5871.js";const g=JSON.parse('{"title":"前端里的拖拖拽拽","description":"","frontmatter":{},"headers":[],"relativePath":"前端里的拖拖拽拽/前端里的拖拖拽拽.md","filePath":"前端里的拖拖拽拽/前端里的拖拖拽拽.md"}'),p={name:"前端里的拖拖拽拽/前端里的拖拖拽拽.md"},o=l(`<h1 id="前端里的拖拖拽拽" tabindex="-1">前端里的拖拖拽拽 <a class="header-anchor" href="#前端里的拖拖拽拽" aria-label="Permalink to &quot;前端里的拖拖拽拽&quot;">​</a></h1><p><a href="https://codesandbox.io/s/beautiful-bassi-1r5veq?file=/src/pages/sort-list/index.tsx" target="_blank" rel="noreferrer">https://codesandbox.io/s/beautiful-bassi-1r5veq?file=/src/pages/sort-list/index.tsx</a></p><blockquote><p>最近在项目中使用了 <a href="https://link.juejin.cn?target=https://react-dnd.github.io/react-dnd/about" title="react-dnd" target="_blank" rel="noreferrer">react-dnd</a>，一个基于 HTML5 的拖拽库，“拖拽能力”丰富了前端的交互方式，基于拖拽能力，会扩展各种各样的拖拽反馈效果，因此有必要学习了解，最好的学习方式就是实操！</p></blockquote><p>拖拽交互常见于各种前端编辑器里，而“编辑器”是一个集成前端技术能力的综合性工程，其中就会涉及到各种形式的拖拽交互，因为“拖拽”是提升用户体验的重要交互方式，所以需要对拖拽的交互效果做各种定制化，作为开发者理应熟练掌握“拖拽”的应用！</p><p>最近在开发一款低代码平台，所以借此机会分享一下关于“拖拽”这一交互的基础知识和实践经验，希望可以给有需要的同学提供一点参考。</p><h1 id="一、html5-中的拖放" tabindex="-1">一、HTML5 中的拖放 <a class="header-anchor" href="#一、html5-中的拖放" aria-label="Permalink to &quot;一、HTML5 中的拖放&quot;">​</a></h1><p>拖（Drag）和放（Drop）是 HTML5 标准的组成部分，了解掌握之后，举一反三，有助于提升我们在拖拽场景下技术方案的设计能力。</p><h2 id="_1-1-draggable-属性" tabindex="-1">1.1 draggable 属性 <a class="header-anchor" href="#_1-1-draggable-属性" aria-label="Permalink to &quot;1.1 draggable 属性&quot;">​</a></h2><p>现代浏览器中，不难发现，图片标签（<code>&lt;img /&gt;</code>）是可以被长按拖拽，但如果需要自定义的 DOM 节点可以被拖拽需要配置以告诉浏览器提供对元素（<code>Element</code> / <code>Tag</code>）支持拖拽的能力。</p><p>而元素是否允许被拖放且可响应 API 操作依赖于 <a href="https://link.juejin.cn?target=https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable" title="draggable" target="_blank" rel="noreferrer">draggable</a> 全局标签属性</p><p><strong>draggable</strong> 是一个布尔值类型的标签属性：</p><ul><li><code>true</code>：元素可被拖拽</li><li><code>false</code>：元素不可拖拽</li></ul><p>当元素设置了 draggable 属性，此时长按就可以自由拖拽了：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6809b3642c454837b5eda33d9feefe85~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt=""></p><h2 id="_1-2-drag-drop-事件" tabindex="-1">1.2 Drag &amp; Drop 事件 <a class="header-anchor" href="#_1-2-drag-drop-事件" aria-label="Permalink to &quot;1.2 Drag &amp; Drop 事件&quot;">​</a></h2><p>HTML 的 <code>drag</code> &amp; <code>drop</code> 使用了“<strong>DOM Event</strong>”和从“<strong>Mouse Event</strong>”继承而来的“<strong>drag event</strong>” 。</p><p><strong>一个典型的拖拽操作：</strong> 用户选中一个可拖拽的（<code>draggable</code>）元素，并将其拖拽（鼠标按住不放）至一个可放置的（<code>droppable</code>）元素上，然后松开鼠标。</p><p>在拖动元素期间，一些与拖放相关的事件会被触发，像 <code>drag</code> 和 <code>dragover</code> 类型的事件会被频繁触发。</p><p>除了定义拖拽事件类型，每个事件类型还赋予了对应的事件处理器</p><table><thead><tr><th>事件类型</th><th>事件处理器</th><th>触发时机</th><th>绑定元素</th></tr></thead><tbody><tr><td><code>dragstart</code></td><td>ondragstart</td><td>当开始拖动一个元素时</td><td>拖拽</td></tr><tr><td><code>drag</code></td><td>ondrag</td><td>当元素被拖动期间按一定频率触发</td><td>拖拽</td></tr><tr><td><code>dragend</code></td><td>ondragend</td><td>当拖动的元素被释放（🖱️松开、按键盘 ESC）时</td><td>拖拽</td></tr><tr><td><code>dragenter</code></td><td>ondragenter</td><td>当拖动元素到一个可释放目标元素时</td><td>放置</td></tr><tr><td><code>dragexit</code></td><td>ondragexit</td><td>当元素变得不再是拖动操作的选中目标时</td><td>放置</td></tr><tr><td><code>dragleave</code></td><td>ondragleave</td><td>当拖动元素离开一个可释放目标元素</td><td>放置</td></tr><tr><td><code>dragover</code></td><td>ondragover</td><td>当元素被拖到一个可释放目标元素上时（100 ms/次）</td><td>放置</td></tr><tr><td><code>drop</code></td><td>ondrop</td><td>当拖动元素在可释放目标元素上释放时</td><td>放置</td></tr></tbody></table><p>各个事件的时机可以用下面这个图简单表示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ac2bc4b8d7b4c3092864f898a3b597d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt=""></p><p><strong>⚠️注意：</strong> <a href="https://link.juejin.cn?target=https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event" title="dragOver" target="_blank" rel="noreferrer">dragOver</a> 事件的默认行为是：“Reset the current drag operation to &quot;none&quot;”。也就是说，如果不阻止放置元素的 dragOver 事件，则放置元素不会响应“拖动元素”的“放置行为”</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 让绑定该事件的元素支持放置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragOver</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 阻止默认的重置行为</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 即可成为拖拽元素的放置区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 让绑定该事件的元素支持放置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragOver</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 阻止默认的重置行为</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 即可成为拖拽元素的放置区</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  e.</span><span style="color:#6F42C1;">preventDefault</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>从设计事件标准来看，如果我们需要自行实现拖拽的效果，就需要从这关键的几个事件去思考设计。</p><h2 id="_1-3-datatransfer" tabindex="-1">1.3 DataTransfer <a class="header-anchor" href="#_1-3-datatransfer" aria-label="Permalink to &quot;1.3 DataTransfer&quot;">​</a></h2><p>在上述的事件类型中，不难发现，放置元素和拖动元素分别绑定了自己的事件，可如何将拖拽元素和放置元素<strong>建立联系</strong>以及<strong>传递数据</strong>？</p><p>这就涉及到 <code>DataTransfer</code> 对象：</p><blockquote><p><code>DataTransfer</code> 对象用于保存拖动并放下（drag and drop）过程中的数据。它可以保存一项或多项数据，这些数据项可以是一种或者多种数据类型。 —— <a href="https://link.juejin.cn?target=https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer" title="DataTransfer - MDN" target="_blank" rel="noreferrer">DataTransfer - MDN</a></p></blockquote><p><code>DataTransfer</code> 对象在不同浏览器上因为标准可能不一样使得 API 有差异，但有几个“标准（常用）”属性和方法需要熟悉</p><p>在 Chrome 浏览器上的 DataTransfer 实例如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b201e470cf714a6ebcb7879c29d50b0d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt=""></p><h3 id="_1-属性" tabindex="-1">(1) 属性 <a class="header-anchor" href="#_1-属性" aria-label="Permalink to &quot;(1) 属性&quot;">​</a></h3><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td><code>dropEffect</code></td><td>获取当前选定的拖放操作类型或者设置的为一个新的类型。值为：none、copy、link、move</td></tr><tr><td><code>effectAllowed</code></td><td>提供所有可用的操作类型。值是：none、copy、copyLink、copyMove、link、linkMove、move、all、uninitialized</td></tr><tr><td><code>files</code></td><td>包含数据传输中可用的所有本地文件的列表。如果拖动操作不涉及拖动文件，则此属性为空列表</td></tr><tr><td><code>items</code> (只读)</td><td>提供一个包含所有拖动数据列表的 DataTransferItemList 对象</td></tr><tr><td><code>types</code> (只读)</td><td>提供一个 dragstart 事件中设置的格式的 strings 数组。</td></tr></tbody></table><h3 id="_2-方法" tabindex="-1">(2) 方法 <a class="header-anchor" href="#_2-方法" aria-label="Permalink to &quot;(2) 方法&quot;">​</a></h3><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td><code>setData(format, value)</code></td><td>设置给定类型的数据。如果该类型的数据不存在，则将其添加到末尾，以便类型列表中的最后一项将是新的格式。如果该类型的数据已经存在，则在相同位置替换现有数据。</td></tr><tr><td><code>getData(format)</code></td><td>检索给定类型的数据，如果该类型的数据不存在或 data transfer 不包含数据，则返回空字符串</td></tr><tr><td><code>clearData([format])</code></td><td>删除与给定类型关联的数据。类型参数是可选的。如果类型为空或未指定，则删除与所有类型关联的数据。如果指定类型的数据不存在，或者 data transfer 中不包含任何数据，则该方法不会产生任何效果。</td></tr><tr><td>\`setDragImage(img</td><td>element, xOffset, yOffset)\`</td></tr></tbody></table><p>在简单的拖拽场景中，其实可以类比 <strong>window.localStorage</strong> 对象的 <code>setItem()</code> 和 <code>getItem()</code> 方法来理解记忆.</p><p>但 <code>getData()</code> 在测试中发现只能在 <code>ondrop</code> 事件中获取到值:</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/220c8d6b604e4b4bbc4e738229a8ca3c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt=""></p><h2 id="_1-4-一个案例掌握拖放-api" tabindex="-1">1.4 一个案例掌握拖放 API <a class="header-anchor" href="#_1-4-一个案例掌握拖放-api" aria-label="Permalink to &quot;1.4 一个案例掌握拖放 API&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;drag&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">draggable</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dragger&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ondragstart</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">handleDragStart</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">event</span><span style="color:#9ECBFF;">)&quot;</span><span style="color:#E1E4E8;">&gt;拖动元素&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;drop&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ondrop</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">handleDrop</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">event</span><span style="color:#9ECBFF;">)&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ondragover</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">allowDrop</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">event</span><span style="color:#9ECBFF;">)&quot;</span><span style="color:#E1E4E8;">&gt;放置区域&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragStart</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    e.dataTransfer.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DRAG_NODE_ID&#39;</span><span style="color:#E1E4E8;">, [e.target.id](http:</span><span style="color:#6A737D;">//e.target.id))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragOver</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDrop</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e.dataTransfer.</span><span style="color:#B392F0;">getData</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DRAG_NODE_ID&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    e.target.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(data));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;drag&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">draggable</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dragger&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ondragstart</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">handleDragStart</span><span style="color:#032F62;">(</span><span style="color:#24292E;">event</span><span style="color:#032F62;">)&quot;</span><span style="color:#24292E;">&gt;拖动元素&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;drop&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ondrop</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">handleDrop</span><span style="color:#032F62;">(</span><span style="color:#24292E;">event</span><span style="color:#032F62;">)&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ondragover</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">allowDrop</span><span style="color:#032F62;">(</span><span style="color:#24292E;">event</span><span style="color:#032F62;">)&quot;</span><span style="color:#24292E;">&gt;放置区域&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragStart</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    e.dataTransfer.</span><span style="color:#6F42C1;">setData</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;DRAG_NODE_ID&#39;</span><span style="color:#24292E;">, [e.target.id](http:</span><span style="color:#6A737D;">//e.target.id))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragOver</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    e.</span><span style="color:#6F42C1;">preventDefault</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDrop</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    e.</span><span style="color:#6F42C1;">preventDefault</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e.dataTransfer.</span><span style="color:#6F42C1;">getData</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;DRAG_NODE_ID&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    e.target.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(data));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p><strong>演示案例：</strong> <a href="https://link.juejin.cn?target=https://codepen.io/DYBOY/pen/eYeyvWm" title="codepen.io/DYBOY/pen/e…" target="_blank" rel="noreferrer">codepen.io/DYBOY/pen/e…</a></p><p><strong>效果：</strong></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d95bc468582b4478b0b6d68a32b1fab4~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt=""></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5d2b574a6554acbb2b7ee85619df5ec~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt=""></p><h2 id="_1-6-兼容性" tabindex="-1">1.6 兼容性 <a class="header-anchor" href="#_1-6-兼容性" aria-label="Permalink to &quot;1.6 兼容性&quot;">​</a></h2><p>是 HTML5 标准提出的能力，因此各大浏览器厂商对于标准的支持有差异，其兼容性参考如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8be2d309ef4a450989a0cadfb23f611f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt=""></p><p>相较于传统的通过鼠标事件：<code>mousedown</code>、<code>mousemove</code>、<code>mouseup</code> 组合实现的拖拽要简单很多，少了放入目标边界的判断，也少了对位置的实时获取操作。</p><p>另外目前的 API 不算多，例如我们想要定制化拖拽的图片大小、鼠标样式等，目前暂时没发现比较方便的解决方式，但是从另一个角度来说，让我们对于拖拽能力的设计和标准有了一个更深切的认识，对于设计实现拖拽交互有了一个“理论”基础！</p><h1 id="二、手搓一个" tabindex="-1">二、手搓一个 <a class="header-anchor" href="#二、手搓一个" aria-label="Permalink to &quot;二、手搓一个&quot;">​</a></h1><p>有了上面的基础知识，那么实现一个列表拖拽排序并不是什么难事。</p><h2 id="_2-1-设计实现" tabindex="-1">2.1 设计实现 <a class="header-anchor" href="#_2-1-设计实现" aria-label="Permalink to &quot;2.1 设计实现&quot;">​</a></h2><p>结合上述的 Drag &amp; Drop 的事件类型，那么拖拽排序主要是针对“拖动对象”之间相互作用关系的逻辑梳理，此处我们暂且区分为：</p><ul><li><strong>源对象：</strong> 拖拽列表中被拖动的单个列表项</li><li><strong>目标对象：</strong> 拖拽列表中和“源对象”产生“相互作用”的列表项</li></ul><p>整体的交互事件的设计思路如下：</p><h3 id="_1-ondragstart" tabindex="-1">(1) ondragstart <a class="header-anchor" href="#_1-ondragstart" aria-label="Permalink to &quot;(1) ondragstart&quot;">​</a></h3><p>此时开始拖拽“源对象”的时机，在此事件回调函数中改变“源对象”的样式，设置拖拽的一些传递参数等初始值。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 源对象开始拖拽</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragStart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DragEvent</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLDivElement</span><span style="color:#E1E4E8;">&gt;) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  e.dataTransfer.effectAllowed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;move&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setDragId</span><span style="color:#E1E4E8;">(e.currentTarget.dataset.index); </span><span style="color:#6A737D;">// 从 dataset 获取拖拽项的 id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 源对象开始拖拽</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragStart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">React</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DragEvent</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">HTMLDivElement</span><span style="color:#24292E;">&gt;) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  e.dataTransfer.effectAllowed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;move&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setDragId</span><span style="color:#24292E;">(e.currentTarget.dataset.index); </span><span style="color:#6A737D;">// 从 dataset 获取拖拽项的 id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="_2-ondragover" tabindex="-1">(2) ondragover <a class="header-anchor" href="#_2-ondragover" aria-label="Permalink to &quot;(2) ondragover&quot;">​</a></h3><p>正与拖拽中的“源对象”产生相互影响的目标对象，此时“源对象”处于“目标对象”的正上方，目标对象 100ms/次的频率调用“目标对象”的 <code>ondragover</code> 中声明的回调事件。</p><p>此时，我们会计算改变“<strong>源对象</strong>”和“<strong>目标对象</strong>”的位置。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 源对象在目标对象上方时</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragOver</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DragEvent</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLDivElement</span><span style="color:#E1E4E8;">&gt;) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 允许放置，阻止默认事件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dropId</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e.currentTarget.dataset.index;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">move</span><span style="color:#E1E4E8;">(dragId, dropId); </span><span style="color:#6A737D;">// 改变原列表数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 源对象在目标对象上方时</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragOver</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">React</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DragEvent</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">HTMLDivElement</span><span style="color:#24292E;">&gt;) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  e.</span><span style="color:#6F42C1;">preventDefault</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 允许放置，阻止默认事件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dropId</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e.currentTarget.dataset.index;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">move</span><span style="color:#24292E;">(dragId, dropId); </span><span style="color:#6A737D;">// 改变原列表数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="_3-ondrag" tabindex="-1">(3) ondrag <a class="header-anchor" href="#_3-ondrag" aria-label="Permalink to &quot;(3) ondrag&quot;">​</a></h3><p>该事件作用于“源对象”，此时正处于拖拽过程中，此时可以改变源对象的 <code>opacity</code>、<code>display(none)</code>、<code>visiblity</code> 样式属性，如果在 <code>dragstart</code> 事件改变，则会导致拖拽拷贝对象丢失。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 源对象被拖拽过程中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDrag</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DragEvent</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLDivElement</span><span style="color:#E1E4E8;">&gt;) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  e.currentTarget.style.opacity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 源对象被拖拽过程中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDrag</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">React</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DragEvent</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">HTMLDivElement</span><span style="color:#24292E;">&gt;) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  e.currentTarget.style.opacity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="_4-ondragend" tabindex="-1">(4) ondragend <a class="header-anchor" href="#_4-ondragend" aria-label="Permalink to &quot;(4) ondragend&quot;">​</a></h3><p>在松手完成“源对象”的放置时，主动调用绑定在“源对象”身上的事件，此时恢复更改的样式。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 源对象被放置完成时</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragEnd</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DragEvent</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLDivElement</span><span style="color:#E1E4E8;">&gt;) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  e.currentTarget.style.opacity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 源对象被放置完成时</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragEnd</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">React</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DragEvent</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">HTMLDivElement</span><span style="color:#24292E;">&gt;) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  e.currentTarget.style.opacity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="_2-2-实现效果" tabindex="-1">2.2 实现效果 <a class="header-anchor" href="#_2-2-实现效果" aria-label="Permalink to &quot;2.2 实现效果&quot;">​</a></h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf398c2c3d5e4f88b0d6684e0bb9d04f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt=""></p><h2 id="_2-3-加点动画" tabindex="-1">2.3 加点动画 <a class="header-anchor" href="#_2-3-加点动画" aria-label="Permalink to &quot;2.3 加点动画&quot;">​</a></h2><p>上面的实现中效果还算可以，但是少了拖拽项的切换过程动画，直接在 dragover 事件中通过 <code>move(dragId, dropId)</code> 方法直接修改了原列表数据的排序，导致切换突变。</p><p>借助 <code>animation</code> 新增 CSS 帧动画：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@keyframes</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">dropUp</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">100%</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">translateY</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@keyframes</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">dropDown</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">100%</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">translateY</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">-5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.drop-up</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">animation</span><span style="color:#E1E4E8;">: dropUp </span><span style="color:#79B8FF;">0.3</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ease-in-out</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">forwards</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.drop-down</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">animation</span><span style="color:#E1E4E8;">: dropDown </span><span style="color:#79B8FF;">0.3</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ease-in-out</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">forwards</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@keyframes</span><span style="color:#24292E;"> </span><span style="color:#E36209;">dropUp</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">100%</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">translateY</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@keyframes</span><span style="color:#24292E;"> </span><span style="color:#E36209;">dropDown</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">100%</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">translateY</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">-5</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.drop-up</span><span style="color:#24292E;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">animation</span><span style="color:#24292E;">: dropUp </span><span style="color:#005CC5;">0.3</span><span style="color:#D73A49;">s</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ease-in-out</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">forwards</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.drop-down</span><span style="color:#24292E;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">animation</span><span style="color:#24292E;">: dropDown </span><span style="color:#005CC5;">0.3</span><span style="color:#D73A49;">s</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ease-in-out</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">forwards</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>同样的在 <code>dragOver</code> 事件中处理，新增逻辑代码：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 源对象在目标对象上方时</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragOver</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DragEvent</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLDivElement</span><span style="color:#E1E4E8;">&gt;) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置动画</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dropId</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e.currentTarget.dataset.index;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dragIndex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">findIndex</span><span style="color:#E1E4E8;">(listData, (</span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [i.id](http:</span><span style="color:#6A737D;">//i.id) === dragId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  const dropIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">findIndex</span><span style="color:#E1E4E8;">(listData, (</span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [i.id](http:</span><span style="color:#6A737D;">//i.id) === dropId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 通过增加对应的 CSS class，实现视觉上的动画过渡</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  e.currentTarget.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;drop-up&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;drop-down&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">if</span><span style="color:#E1E4E8;"> (dragIndex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> dropIndex) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    e.currentTarget.classList.add(</span><span style="color:#9ECBFF;">&quot;drop-down&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  } else if (dragIndex &gt; dropIndex) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    e.currentTarget.classList.add(</span><span style="color:#9ECBFF;">&quot;drop-up&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  } </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 源对象在目标对象上方时</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragOver</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">React</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DragEvent</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">HTMLDivElement</span><span style="color:#24292E;">&gt;) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置动画</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dropId</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e.currentTarget.dataset.index;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dragIndex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">findIndex</span><span style="color:#24292E;">(listData, (</span><span style="color:#E36209;">i</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [i.id](http:</span><span style="color:#6A737D;">//i.id) === dragId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  const dropIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">findIndex</span><span style="color:#24292E;">(listData, (</span><span style="color:#E36209;">i</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [i.id](http:</span><span style="color:#6A737D;">//i.id) === dropId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 通过增加对应的 CSS class，实现视觉上的动画过渡</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  e.currentTarget.classList.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;drop-up&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;drop-down&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (dragIndex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> dropIndex) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    e.currentTarget.classList.add(</span><span style="color:#032F62;">&quot;drop-down&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  } else if (dragIndex &gt; dropIndex) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    e.currentTarget.classList.add(</span><span style="color:#032F62;">&quot;drop-up&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  } </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>增加了动画的效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c91401fe76364dc78d2097a1bce2a2a6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt=""></p><p>看起来似乎好一点了，当然大家可以去扩充动画的效果，亦或者借助三方动画库。</p><h1 id="三、已有拖拽库" tabindex="-1">三、已有拖拽库 <a class="header-anchor" href="#三、已有拖拽库" aria-label="Permalink to &quot;三、已有拖拽库&quot;">​</a></h1><p>目前主流的拖拽库有：</p><ul><li><strong>react-dnd:</strong> <a href="https://link.juejin.cn?target=https://github.com/react-dnd/react-dnd/" title="github.com/react-dnd/r…" target="_blank" rel="noreferrer">github.com/react-dnd/r…</a></li><li><strong>react-beautiful-dnd:</strong> <a href="https://link.juejin.cn?target=https://github.com/atlassian/react-beautiful-dnd/" title="github.com/atlassian/r…" target="_blank" rel="noreferrer">github.com/atlassian/r…</a></li><li><strong>sortablejs:</strong> <a href="https://link.juejin.cn?target=https://sortablejs.github.io/Sortable/" title="sortablejs.github.io/Sortable/" target="_blank" rel="noreferrer">sortablejs.github.io/Sortable/</a></li><li><strong>react-sortable-hoc:</strong> <a href="https://link.juejin.cn?target=https://github.com/clauderic/react-sortable-hoc/" title="github.com/clauderic/r…" target="_blank" rel="noreferrer">github.com/clauderic/r…</a></li></ul><p>关于几者的差异，可以参阅：《<a href="https://juejin.cn/post/6956112150989373448" title="关于react中使用拖拽插件的评测" target="_blank" rel="noreferrer">关于react中使用拖拽插件的评测</a>》</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a53a4dd792a41a591140c402d7c93c4~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt=""></p><h1 id="四、总结" tabindex="-1">四、总结 <a class="header-anchor" href="#四、总结" aria-label="Permalink to &quot;四、总结&quot;">​</a></h1><p>由于低代码平台其实会有丰富的拖拽场景，从可扩展和兼容性上考虑，最终选择了 <code>react-dnd</code> 作为基础拖拽库，当然，在复杂的拖拽场景下，是需要自行扩展该拖拽库，上手难度相对会高一点，不过有了这些“拖拽知识”作为前置基础，那么扩展功能也就不是什么难事了</p><hr><h2 id="手动练习" tabindex="-1">手动练习 <a class="header-anchor" href="#手动练习" aria-label="Permalink to &quot;手动练习&quot;">​</a></h2><blockquote></blockquote><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- &lt;img</span></span>
<span class="line"><span style="color:#6A737D;">      class=&quot;drag&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      draggable=&quot;true&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      @dragstart=&quot;handleDragStartFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      @drag=&quot;handleDragFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      @dragend=&quot;handleDragEndFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      src=&quot;/src/assets/null.png&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      alt=&quot;&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    /&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;div</span></span>
<span class="line"><span style="color:#6A737D;">      @dragenter=&quot;handleDragEnterFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      @dragover=&quot;handleDragOverFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      @dragleave=&quot;handleDragLeaveFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      class=&quot;drop&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    &gt;</span></span>
<span class="line"><span style="color:#6A737D;">      放置区域</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;/div&gt; --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list_item&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">draggable</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:data-id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item.id&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(item, index) in list&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;index&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@dragstart</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleDragStartFn($event)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@drag</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleDragFn($event)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@dragend</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleDragEndFn($event)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@dragover</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleDragOverFn($event)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@drop</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleDropFn($event)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@dragleave</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleDragLeaveFn($event)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{ item.name }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { toRefs, reactive } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vue/reactivity&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;Search&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      list: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;西游记&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;红楼梦&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { id: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;水浒传&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { id: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;三国演义&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { id: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;克拉拉与太阳&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { id: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;望江南&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">move</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">dragId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dropId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dragIndex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> state.list.</span><span style="color:#B392F0;">findIndex</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> dragId</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dropIndex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> state.list.</span><span style="color:#B392F0;">findIndex</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> dropId</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">originItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> state.list[dragIndex];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> newArray </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> state.list.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item);</span></span>
<span class="line"><span style="color:#E1E4E8;">      newArray.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(dragIndex, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 删去源对象</span></span>
<span class="line"><span style="color:#E1E4E8;">      newArray.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(dropIndex, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, originItem); </span><span style="color:#6A737D;">// 在目标对象后添加源对象</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newArray.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(state.list);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragStartFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(e);</span></span>
<span class="line"><span style="color:#E1E4E8;">      e.dataTransfer.effectAllowed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;move&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.dragId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e.target.dataset.id;</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;拖拽开始&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(&quot;拖拽中&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">      e.target.style.opacity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragEndFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      e.target.style.opacity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;拖拽结束&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragEnterFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;有元素进来了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragOverFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;有元素在内部&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dropId</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e.target.dataset.id;</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;目标id:&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> dropId);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dragIndex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> state.list.</span><span style="color:#B392F0;">findIndex</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> state.dragId</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dropIndex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> state.list.</span><span style="color:#B392F0;">findIndex</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> dropId</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      e.target.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;drop-up&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;drop-down&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (dragIndex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> dropIndex) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        e.target.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;drop-down&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (dragIndex </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> dropIndex) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        e.target.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;drop-up&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDragLeaveFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;有元素离开了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      e.target.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;drop-up&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;drop-down&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDropFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;有元素在内部释放了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dropId</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e.target.dataset.id;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">move</span><span style="color:#E1E4E8;">(state.dragId, dropId);</span></span>
<span class="line"><span style="color:#E1E4E8;">      e.target.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;drop-up&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;drop-down&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">toRefs</span><span style="color:#E1E4E8;">(state),</span></span>
<span class="line"><span style="color:#E1E4E8;">      handleDragStartFn,</span></span>
<span class="line"><span style="color:#E1E4E8;">      handleDragFn,</span></span>
<span class="line"><span style="color:#E1E4E8;">      handleDragEndFn,</span></span>
<span class="line"><span style="color:#E1E4E8;">      handleDragEnterFn,</span></span>
<span class="line"><span style="color:#E1E4E8;">      handleDragOverFn,</span></span>
<span class="line"><span style="color:#E1E4E8;">      handleDragLeaveFn,</span></span>
<span class="line"><span style="color:#E1E4E8;">      handleDropFn,</span></span>
<span class="line"><span style="color:#E1E4E8;">      move,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.list</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">solid</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">#f4a620</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ff0099</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.list_item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">60</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.list_item:nth-child</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">odd</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pink</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.list_item:nth-child</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">even</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">skyblue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.drag</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">skyblue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pink</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">user-select</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">cursor</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">grab</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.drop</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#f8f8f8</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">300</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@keyframes</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dropUp</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">100%</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">translateY</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">15</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">transition</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@keyframes</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dropDown</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">100%</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">translateY</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">-15</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">transition</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.drop-up</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">animation</span><span style="color:#E1E4E8;">: dropUp </span><span style="color:#79B8FF;">0.3</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">linear</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">forwards</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.drop-down</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">animation</span><span style="color:#E1E4E8;">: dropDown </span><span style="color:#79B8FF;">0.3</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">linear</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">forwards</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- &lt;img</span></span>
<span class="line"><span style="color:#6A737D;">      class=&quot;drag&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      draggable=&quot;true&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      @dragstart=&quot;handleDragStartFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      @drag=&quot;handleDragFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      @dragend=&quot;handleDragEndFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      src=&quot;/src/assets/null.png&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      alt=&quot;&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    /&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;div</span></span>
<span class="line"><span style="color:#6A737D;">      @dragenter=&quot;handleDragEnterFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      @dragover=&quot;handleDragOverFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      @dragleave=&quot;handleDragLeaveFn(e)&quot;</span></span>
<span class="line"><span style="color:#6A737D;">      class=&quot;drop&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    &gt;</span></span>
<span class="line"><span style="color:#6A737D;">      放置区域</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;/div&gt; --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list_item&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">draggable</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:data-id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item.id&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;(item, index) in list&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;index&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@dragstart</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleDragStartFn($event)&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@drag</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleDragFn($event)&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@dragend</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleDragEndFn($event)&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@dragover</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleDragOverFn($event)&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@drop</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleDropFn($event)&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@dragleave</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleDragLeaveFn($event)&quot;</span></span>
<span class="line"><span style="color:#24292E;">      &gt;</span></span>
<span class="line"><span style="color:#24292E;">        {{ item.name }}</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { toRefs, reactive } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vue/reactivity&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;Search&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      list: [</span></span>
<span class="line"><span style="color:#24292E;">        { id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&quot;西游记&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&quot;红楼梦&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { id: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&quot;水浒传&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { id: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&quot;三国演义&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { id: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&quot;克拉拉与太阳&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { id: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&quot;望江南&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">move</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">dragId</span><span style="color:#24292E;">, </span><span style="color:#E36209;">dropId</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dragIndex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> state.list.</span><span style="color:#6F42C1;">findIndex</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#E36209;">item</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item.id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> dragId</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dropIndex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> state.list.</span><span style="color:#6F42C1;">findIndex</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#E36209;">item</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item.id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> dropId</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">originItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> state.list[dragIndex];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> newArray </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> state.list.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item);</span></span>
<span class="line"><span style="color:#24292E;">      newArray.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(dragIndex, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 删去源对象</span></span>
<span class="line"><span style="color:#24292E;">      newArray.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(dropIndex, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, originItem); </span><span style="color:#6A737D;">// 在目标对象后添加源对象</span></span>
<span class="line"><span style="color:#24292E;">      state.list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newArray.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item);</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(state.list);</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragStartFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(e);</span></span>
<span class="line"><span style="color:#24292E;">      e.dataTransfer.effectAllowed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;move&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      state.dragId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e.target.dataset.id;</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;拖拽开始&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(&quot;拖拽中&quot;);</span></span>
<span class="line"><span style="color:#24292E;">      e.target.style.opacity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragEndFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      e.target.style.opacity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;拖拽结束&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragEnterFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;有元素进来了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragOverFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      e.</span><span style="color:#6F42C1;">preventDefault</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;有元素在内部&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dropId</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e.target.dataset.id;</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;目标id:&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> dropId);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dragIndex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> state.list.</span><span style="color:#6F42C1;">findIndex</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#E36209;">item</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item.id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> state.dragId</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dropIndex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> state.list.</span><span style="color:#6F42C1;">findIndex</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#E36209;">item</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item.id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> dropId</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">      e.target.classList.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;drop-up&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;drop-down&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (dragIndex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> dropIndex) {</span></span>
<span class="line"><span style="color:#24292E;">        e.target.classList.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;drop-down&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (dragIndex </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> dropIndex) {</span></span>
<span class="line"><span style="color:#24292E;">        e.target.classList.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;drop-up&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDragLeaveFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;有元素离开了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      e.target.classList.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;drop-up&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;drop-down&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDropFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;有元素在内部释放了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dropId</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e.target.dataset.id;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">move</span><span style="color:#24292E;">(state.dragId, dropId);</span></span>
<span class="line"><span style="color:#24292E;">      e.target.classList.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;drop-up&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;drop-down&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">toRefs</span><span style="color:#24292E;">(state),</span></span>
<span class="line"><span style="color:#24292E;">      handleDragStartFn,</span></span>
<span class="line"><span style="color:#24292E;">      handleDragFn,</span></span>
<span class="line"><span style="color:#24292E;">      handleDragEndFn,</span></span>
<span class="line"><span style="color:#24292E;">      handleDragEnterFn,</span></span>
<span class="line"><span style="color:#24292E;">      handleDragOverFn,</span></span>
<span class="line"><span style="color:#24292E;">      handleDragLeaveFn,</span></span>
<span class="line"><span style="color:#24292E;">      handleDropFn,</span></span>
<span class="line"><span style="color:#24292E;">      move,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.list</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">absolute</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">solid</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">#f4a620</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ff0099</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.list_item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">300</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">60</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.list_item:nth-child</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">odd</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">pink</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.list_item:nth-child</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">even</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">skyblue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.drag</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">relative</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">skyblue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">line-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">pink</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">user-select</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">cursor</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grab</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.drop</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">300</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">300</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#f8f8f8</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">line-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">300</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@keyframes</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dropUp</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">100%</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">translateY</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">15</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">transition</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">s</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@keyframes</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dropDown</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">100%</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">translateY</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">-15</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">transition</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">s</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.drop-up</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">animation</span><span style="color:#24292E;">: dropUp </span><span style="color:#005CC5;">0.3</span><span style="color:#D73A49;">s</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">linear</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">forwards</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.drop-down</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">animation</span><span style="color:#24292E;">: dropDown </span><span style="color:#005CC5;">0.3</span><span style="color:#D73A49;">s</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">linear</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">forwards</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,91),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{g as __pageData,u as default};
