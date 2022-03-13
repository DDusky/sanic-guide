(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{591:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"スタートアップ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#スタートアップ"}},[t._v("#")]),t._v(" スタートアップ")]),t._v(" "),a("p",[t._v("最初に、Python 3.7以降が実行されていることを確認します。現在、はPythonバージョン3.7、3.8、および3.9で動作することがわかっています。")]),t._v(" "),a("h2",{attrs:{id:"インストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#インストール"}},[t._v("#")]),t._v(" インストール")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sanic\n")])])]),a("h2",{attrs:{id:"hello-worldアプリケーション"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-worldアプリケーション"}},[t._v("#")]),t._v(" hello, worldアプリケーション")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("多くのデコレーター・ベースのフレームワークのいずれかを使用したことがある人であれば、このフレームワークはおそらく皆さんにとって馴染みのあるものです。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("もしあなたがFlaskや他のフレームワークから来ているのであれば、いくつかの重要な指摘があります。Sanicはパフォーマンス、柔軟性、使いやすさを目指しています。これらの指針は、APIとその動作に目に見える影響を与えます。")])])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyHelloWorldApp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"重要なノート"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要なノート"}},[t._v("#")]),t._v(" 重要なノート")]),t._v(" "),a("ul",[a("li",[t._v("すべてのリクエストハンドラは、sync("),a("code",[t._v("def hello_world")]),t._v(")またはasync("),a("code",[t._v("async def hello_world")]),t._v(")のいずれかになります。明確な理由がない限り、常に`async'を使ってください。")]),t._v(" "),a("li",[a("code",[t._v("request")]),t._v("オブジェクトは、常にハンドラの最初の引数です。他のフレームワークは、インポートされるコンテキスト変数でこれを渡します。"),a("code",[t._v("async")]),t._v("の世界では、これはあまりうまく動作しないでしょうし、それについて明示的に説明することは (よりクリーンでよりパフォーマンス的であることは言うまでもありませんが) はるかに簡単です。")]),t._v(" "),a("li",[t._v("応答タイプを使用する必要があります。他の多くのフレームワークでは、"),a("code",[t._v('return"Hello, world。"')]),t._v("またはthis:"),a("code",[t._v('return {"foo":"bar"}')]),t._v("です。しかし、この暗黙の呼び出しを行うには、チェーン内のどこかで、意味を判断するために貴重な時間を費やす必要があります。この容易さを犠牲にして、Sanicは明示的なコールを要求することにしました。")])]),t._v(" "),a("h3",{attrs:{id:"実行中。。。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#実行中。。。"}},[t._v("#")]),t._v(" 実行中。。。")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("上記のファイルを"),a("code",[t._v("server.py")]),t._v("として保存します。そして、それを起動します。")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("sanic server.app\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("この"),a("strong",[t._v("別の")]),t._v("重要な違いです。他のフレームワークには、組み込みの開発サーバーが付属しており、開発用であることを明示的に示しています。逆のことは、Sanicにも言える。")]),t._v(" "),a("p",[a("strong",[t._v("パッケージ化されたサーバーは、実稼働に対応しています。")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);