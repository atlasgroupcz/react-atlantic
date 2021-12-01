(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{jP0L:function(t,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",(function(){return m})),o.d(e,"default",(function(){return j}));var n=o("Fcif"),p=o("+I+c"),i=(o("mXGw"),o("/FXl")),a=o("TjRS"),r=o("Fuda"),l=o("4V3q"),c=o("ZFoC"),b=o("XZSK"),s=o("DbHl"),d=(o("aD51"),["components"]),m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Tooltips/Tooltips.docs.mdx"}});u="Component";var u,T={_frontmatter:m},O=a.a;function j(t){var e,o=t.components,u=Object(p.a)(t,d);return Object(i.b)(O,Object(n.a)({},T,u,{components:o,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"tooltips"},"Tooltips"),Object(i.b)("p",null,"Is a component that displays a tooltip when the user hovers over an element."),Object(i.b)("h2",{id:"tooltip-usage"},"Tooltip usage"),Object(i.b)("h3",{id:"predisposition"},"Predisposition"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Before usage, you need to wrap your ",Object(i.b)("inlineCode",{parentName:"p"},"App")," in ",Object(i.b)("inlineCode",{parentName:"p"},"Tooltips")," provider")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"import { Tooltips } from '@atlasgroup/react-atlantic';\n\n// App.tsx\nexport const App = () => (\n    <OtherProvider>\n        <Tooltips>// Your app</Tooltips>\n    </OtherProvider>\n);\n")),Object(i.b)("h3",{id:"then-you-are-set-to-go-for-specific-tooltip-usage"},"Then you are set to go for specific tooltip usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'import { useTooltip, Text } from \'@atlasgroup/react-atlantic\';\n\nexport const Component = () => {\n    const tooltip = useTooltip();\n    return (\n        <Text ref={tooltip} data-title="Text to display" data-position="left">\n            Czech Republic🇨🇿\n        </Text>\n    );\n};\n')),Object(i.b)("h2",{id:"different-positions"},"Different positions"),Object(i.b)(c.b,{__position:0,__code:'() => {\n  const Component = () => {\n    const tooltip = useTooltip()\n    return (\n      <WrapperVertical>\n        <Text ref={tooltip} data-title="Left" data-position="left">\n          Hover over me 👋🏻\n        </Text>\n        <Text ref={tooltip} data-title="Right" data-position="right">\n          Hover over me 👋🏼\n        </Text>\n        <Text ref={tooltip} data-title="Top" data-position="top">\n          Hover over me 👋🏾\n        </Text>\n        <Text ref={tooltip} data-title="Bottom" data-position="bottom">\n          Hover over me 👋🏿\n        </Text>\n      </WrapperVertical>\n    )\n  }\n  return (\n    <Tooltips>\n      <Component />\n    </Tooltips>\n  )\n}',__scope:(e={props:u,DefaultLayout:a.a,Tooltips:r.b,useTooltip:l.a,Playground:c.b,Text:b.Text,WrapperVertical:s.b},e.DefaultLayout=a.a,e._frontmatter=m,e),mdxType:"Playground"},(function(){return Object(i.b)(r.b,{mdxType:"Tooltips"},Object(i.b)((function(){var t=Object(l.a)();return Object(i.b)(s.b,{mdxType:"WrapperVertical"},Object(i.b)(b.Text,{ref:t,"data-title":"Left","data-position":"left",mdxType:"Text"},"Hover over me 👋🏻"),Object(i.b)(b.Text,{ref:t,"data-title":"Right","data-position":"right",mdxType:"Text"},"Hover over me 👋🏼"),Object(i.b)(b.Text,{ref:t,"data-title":"Top","data-position":"top",mdxType:"Text"},"Hover over me 👋🏾"),Object(i.b)(b.Text,{ref:t,"data-title":"Bottom","data-position":"bottom",mdxType:"Text"},"Hover over me 👋🏿"))}),{mdxType:"Component"}))})),Object(i.b)("h2",{id:"tooltips-provider-props"},"Tooltips provider props"),Object(i.b)("h3",{id:"hidetooltips"},"hideTooltips"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can hide the tooltips globally by passing ",Object(i.b)("inlineCode",{parentName:"p"},"hideTooltip")," prop to ",Object(i.b)("inlineCode",{parentName:"p"},"Tooltips")," provider")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"<Tooltips hideTooltips={true}>{/*Component*/}</Tooltips>\n")),Object(i.b)("h3",{id:"contentattr"},"contentAttr"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also pass ",Object(i.b)("inlineCode",{parentName:"p"},"contentAttr")," & ",Object(i.b)("inlineCode",{parentName:"p"},"positionAttr")," props to the ",Object(i.b)("inlineCode",{parentName:"p"},"Tooltips")," provider to change the ",Object(i.b)("inlineCode",{parentName:"p"},"content")," and ",Object(i.b)("inlineCode",{parentName:"p"},"position")," attribute of tooltips respectivelly")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'<Tooltips contentAttr="data-content" positionAttr="data-place">\n    {/*Component*/}\n</Tooltips>\n')),Object(i.b)("h3",{id:"tooltip"},"Tooltip"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Last but not least, you can pass ",Object(i.b)("inlineCode",{parentName:"p"},"Tooltip")," prop to the ",Object(i.b)("inlineCode",{parentName:"p"},"Tooltips")," provider to change the component used for tooltips")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"const StyledTooltip = styled.div`\n    color: red;\n`;\n\n<Tooltips Tooltip={StyledTooltip}>{/*Component*/}</Tooltips>;\n")))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Tooltips/Tooltips.docs.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-tooltips-tooltips-docs-mdx-3a156c5f086408f3753d.js.map