(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{381:function(t,s,a){t.exports=a.p+"assets/img/error-html-debug.78b6e41a.png"},382:function(t,s,a){t.exports=a.p+"assets/img/error-html-no-debug.a9ef0bb1.png"},583:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"例外エラー"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例外エラー"}},[t._v("#")]),t._v(" 例外エラー")]),t._v(" "),n("h2",{attrs:{id:"sanicの例外を使う"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sanicの例外を使う"}},[t._v("#")]),t._v(" Sanicの例外を使う")]),t._v(" "),n("p",[t._v("場合によっては、ハンドラの実行を停止し、ステータスコード応答を返すようにSanicに指示する必要があります。このために 「SanicException」 を発生させることができ、残りはSanicが行います。")]),t._v(" "),n("p",[t._v("オプションの"),n("code",[t._v("status_code")]),t._v("引数を渡すことができます。デフォルトでは、SanicExceptionは内部サーバエラー500応答を返します。")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exceptions "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SanicException\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/youshallnotpass"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("no_no")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" SanicException"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Something went wrong."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status_code"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("501")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Sanicはいくつかの標準的な例外を提供しています。これらはそれぞれ、応答で適切なHTTPステータスコードを自動的に生成します。詳しくは"),n("a",{attrs:{href:"https://sanic.readthedocs.io/en/latest/sanic/api_reference.html#module-sanic.exceptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("APIリファレンスを確認"),n("OutboundLink")],1),t._v("を参照してください。")]),t._v(" "),n("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("p",[t._v("あなた自身が実装すべき一般的な例外は以下の通りです。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("InvalidUsage")]),t._v(" (400)")]),t._v(" "),n("li",[n("code",[t._v("Unauthorized")]),t._v(" (401)")]),t._v(" "),n("li",[n("code",[t._v("Forbidden")]),t._v(" (403)")]),t._v(" "),n("li",[n("code",[t._v("NotFound")]),t._v(" (404)")]),t._v(" "),n("li",[n("code",[t._v("ServerError")]),t._v(" (500)")])])]),t._v(" "),n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" exceptions\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/login"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    user "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" some_login_func"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" exceptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NotFound"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Could not find user with username=')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])])]),t._v(" "),n("h2",{attrs:{id:"取り扱い"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#取り扱い"}},[t._v("#")]),t._v(" 取り扱い")]),t._v(" "),n("p",[t._v("Sanicはエラーページを表示することで例外を自動的に処理するので、多くの場合、ユーザ自身が処理する必要はありません。ただし、例外が発生したときの処理をより詳細に制御したい場合は、ハンドラを自分で実装できます。")]),t._v(" "),n("p",[t._v("Sanicはこのためのデコレータを提供しており、これはSanic標準の例外だけでなく、アプリケーションがスローする可能性のある"),n("strong",[t._v("任意の")]),t._v("例外にも適用されます。")]),t._v(" "),n("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("p",[t._v("ハンドラを追加する最も簡単な方法は、"),n("code",[t._v("@app.exception()")]),t._v("を使用して1つ以上の例外を渡すことです。")])]),t._v(" "),n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exceptions "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" NotFound\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exception")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NotFound"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SomeCustomException"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ignore_404s")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yep, I totally found the page: {}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),n("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("p",[n("code",[t._v("Exception")]),t._v("をキャッチすることで、catchallハンドラを作成することもできます。")])]),t._v(" "),n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exception")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch_anything")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])])]),t._v(" "),n("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("p",[n("code",[t._v("app.error_handler.add()")]),t._v("を使用してエラー・ハンドラを追加することもできます。")])]),t._v(" "),n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("server_error_handler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Oops, server error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error_handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" server_error_handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),n("h2",{attrs:{id:"組み込みのエラー処理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#組み込みのエラー処理"}},[t._v("#")]),t._v(" 組み込みのエラー処理")]),t._v(" "),n("p",[t._v("Sanicには、例外用にHTML、JSON、およびテキストの3つの形式が用意されています。以下の "),n("a",{attrs:{href:"#fallback-handler"}},[t._v("Fallback handler")]),t._v(" セクションに例があります。")]),t._v(" "),n("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"custom-block new"},[n("p",{staticClass:"custom-block-title"},[t._v("NEW in v21.9")]),t._v(" "),n("p",[t._v("route_which形式を使用するには、"),n("code",[t._v("error_format")]),t._v("キーワード引数を使用します。")])])]),t._v(" "),n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error_format"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])])]),t._v(" "),n("h2",{attrs:{id:"カスタムエラー処理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#カスタムエラー処理"}},[t._v("#")]),t._v(" カスタムエラー処理")]),t._v(" "),n("p",[t._v("場合によっては、デフォルトで提供される機能にさらにエラー処理機能を追加する必要があります。この場合、次のようにSanicのデフォルトのエラーハンドラをサブクラス化できます。")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handlers "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ErrorHandler\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomErrorHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ErrorHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("''' handles errors that have no error handlers assigned '''")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You custom error handling logic...")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error_handler "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CustomErrorHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"ハンドルフォールバック"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ハンドルフォールバック"}},[t._v("#")]),t._v(" ハンドルフォールバック")]),t._v(" "),n("p",[t._v("Sanicには3つのフォールバック例外ハンドラがあります。")]),t._v(" "),n("ol",[n("li",[t._v("HTML ("),n("em",[t._v("default")]),t._v(")")]),t._v(" "),n("li",[t._v("Text")]),t._v(" "),n("li",[t._v("JSON")])]),t._v(" "),n("p",[t._v("これらのハンドラは、アプリケーションが"),n("RouterLink",{attrs:{to:"/guide/deployment/development.html"}},[t._v("デバッグモード")]),t._v("にあるかどうかによって、異なる詳細レベルを表示します。")],1),t._v(" "),n("h3",{attrs:{id:"html"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FALLBACK_ERROR_FORMAT "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html"')]),t._v("\n")])])]),n("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(381),alt:"Error"}})])]),t._v(" "),n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(382),alt:"Error"}})])])]),t._v(" "),n("h3",{attrs:{id:"text"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[t._v("#")]),t._v(" Text")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FALLBACK_ERROR_FORMAT "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v("\n")])])]),n("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:8000/exc -i\nHTTP/1.1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" Internal Server Error\ncontent-length: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("590")]),t._v("\nconnection: keep-alive\ncontent-type: text/plain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("charset")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf-8\n\n⚠️ "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" — Internal Server Error\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\nThat "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" when that thing broke that other thing? That happened.\n\nServerError: That "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" when that thing broke that other thing? That happened. "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" handling path /exc\nTraceback of __BASE__ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n\n  ServerError: That "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" when that thing broke that other thing? That happened.\n    File /path/to/sanic/app.py, line "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("986")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" handle_request\n    response "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" await response\n\n    File /path/to/server.py, line "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("222")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" exc\n    raise ServerError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n")])])])]),t._v(" "),n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:8000/exc -i\nHTTP/1.1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" Internal Server Error\ncontent-length: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("134")]),t._v("\nconnection: keep-alive\ncontent-type: text/plain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("charset")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf-8\n\n⚠️ "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" — Internal Server Error\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\nThat "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" when that thing broke that other thing? That happened.\n")])])])])]),t._v(" "),n("h3",{attrs:{id:"json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[t._v("#")]),t._v(" JSON")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FALLBACK_ERROR_FORMAT "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),t._v("\n")])])]),n("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:8000/exc -i\nHTTP/1.1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" Internal Server Error\ncontent-length: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("129")]),t._v("\nconnection: keep-alive\ncontent-type: application/json\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Internal Server Error"')]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"That time when that thing broke that other thing? That happened."')]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/exc"')]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"args"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exceptions"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ServerError"')]),t._v(",\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exception"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"That time when that thing broke that other thing? That happened."')]),t._v(",\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"frames"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/sanic/app.py"')]),t._v(",\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"line"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("986")]),t._v(",\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"handle_request"')]),t._v(",\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"response = await response"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/server.py"')]),t._v(",\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"line"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("222")]),t._v(",\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exc"')]),t._v(",\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"raise ServerError("')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])])]),t._v(" "),n("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:8000/exc -i\nHTTP/1.1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" Internal Server Error\ncontent-length: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("530")]),t._v("\nconnection: keep-alive\ncontent-type: application/json\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Internal Server Error"')]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"That time when that thing broke that other thing? That happened."')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])]),t._v(" "),n("h3",{attrs:{id:"自動"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自動"}},[t._v("#")]),t._v(" 自動")]),t._v(" "),n("p",[t._v("Sanicには、使用するフォールバックオプションを推測するためのオプションも用意されています。これはまだ"),n("strong",[t._v("実験的な機能です")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FALLBACK_ERROR_FORMAT "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);