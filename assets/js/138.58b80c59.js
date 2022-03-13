(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{593:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"authentication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),n("blockquote",[n("p",[t._v("認証と認可を制御するにはどうすればよいですか。")])]),t._v(" "),n("p",[t._v("これは、いくつかのスニペットに詰め込むのが非常に複雑な問題です。しかし、これはこの問題に取り組む方法についてのアイデアを提供するはずです。この例では "),n("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT"),n("OutboundLink")],1),t._v("を使用していますが、この概念はセッションやその他のスキームにも同様に適用できます。")]),t._v(" "),n("tabs",[n("tab",{attrs:{name:"server.py"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" auth "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" protected\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" login "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" login\n\napp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AuthApp"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECRET "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"KEEP_IT_SECRET_KEEP_IT_SAFE"')]),t._v("\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blueprint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("login"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/secret"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@protected")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("secret")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"To go fast, you must be fast."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),n("tab",{attrs:{name:"login.py"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" jwt\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Blueprint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text\n\nlogin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Blueprint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"login"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url_prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/login"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@login"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_login")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    token "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jwt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECRET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),n("tab",{attrs:{name:"auth.py"}},[n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" functools "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" wraps\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" jwt\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("check_token")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        jwt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECRET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" algorithms"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HS256"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" jwt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exceptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InvalidTokenError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("protected")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapped"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("decorator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@wraps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("decorated_function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            is_authenticated "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" check_token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" is_authenticated"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                response "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You are unauthorized."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" decorated_function\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" decorator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapped"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("このデコレーターのパターンは、 "),n("RouterLink",{attrs:{to:"/en/guide/best-practices/decorators.html"}},[t._v("decorators page")]),t._v(" から取得されます。")],1)])],1),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:9999/secret -i\nHTTP/1.1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),t._v(" Unauthorized\ncontent-length: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\nconnection: keep-alive\ncontent-type: text/plain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("charset")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf-8\n\nあなたは許可されていません。\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:9999/login -X POST                                                                                                                                                                               "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" ↵\neyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.rjxS7ztIGt5tpiRWS8BGLUqjQFca4QOetHcZTi061DE\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:9999/secret -i -H "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.rjxS7ztIGt5tpiRWS8BGLUqjQFca4QOetHcZTi061DE"')]),t._v("\nHTTP/1.1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\ncontent-length: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v("\nconnection: keep-alive\ncontent-type: text/plain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("charset")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf-8\n\nTo go fast, you must be fast.\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:9999/secret -i -H "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.BAD"')]),t._v("                                        \nHTTP/1.1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),t._v(" Unauthorized\ncontent-length: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\nconnection: keep-alive\ncontent-type: text/plain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("charset")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf-8\n\nYou are unauthorized.\n")])])]),n("p",[t._v("また、コミュニティからいくつかのリソースをチェックアウトします。")]),t._v(" "),n("ul",[n("li",[t._v("Awesome Sanic - "),n("a",{attrs:{href:"https://github.com/mekicha/awesome-sanic/blob/master/README.md#authentication",target:"_blank",rel:"noopener noreferrer"}},[t._v("Authorization"),n("OutboundLink")],1),t._v(" & "),n("a",{attrs:{href:"https://github.com/mekicha/awesome-sanic/blob/master/README.md#session",target:"_blank",rel:"noopener noreferrer"}},[t._v("Session"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=Uqgoj43ky6A",target:"_blank",rel:"noopener noreferrer"}},[t._v("EuroPython 2020 - Overcoming access control in web APIs"),n("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);