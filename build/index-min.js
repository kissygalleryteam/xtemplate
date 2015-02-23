define("kg/xtemplate/4.1.3/index",["kg/xtemplate/4.1.3/runtime"],function(e,t,a){var n,r,i,s,o,u=e("kg/xtemplate/4.1.3/runtime");n=function(e){function t(e,a,n,r){if(!e.length)return a;r=r||a,n=n||0;var i=e[0],s="t"+n;return["("+a+" != null ? ",t(e.slice(1),"("+s+"="+r+i+")",++n,s)," : ",r,")"].join("")}function a(e,a,n,r){return e?t(a.slice(1),n):r}var n=/\\*"/g,r=/\\*'/g,i=[].push,s={};s.undefined=s["null"]=s["true"]=s["false"]=1;var o=e={genStackJudge:t,isGlobalId:function(e){return s[e.string]?1:0},chainedVariableRead:function(e,t,n,r,i,s){var u=o.convertIdPartsToRawAccessor(e,t,n),p=u.parts,h=p[0],l="";r&&(l="scope.root.");var c=l+"affix",f=l+"data",b=["(","(t=("+c+h+")) !== undefined ? ",n.length>1?a(s,p,"t",c+u.str):"t"," : "];return i?b=b.concat(["(","(t = "+f+h+") !== undefined ? ",n.length>1?a(s,p,"t",f+u.str):"t","  : ",s?"scope.resolveLooseUp("+u.arr+")":"scope.resolveUp("+u.arr+")",")"]):b.push(a(s,p,f+h,f+u.str)),b.push(")"),b.join("")},convertIdPartsToRawAccessor:function(e,t,a){var n,r,i,s,u,p=[],h=[],l="";for(n=0,r=a.length;r>n;n++)i=a[n],s=i.type,s?(u=e[s](i),o.pushToArray(t,u.source),"function"===s&&(l=1),h.push("["+u.exp+"]"),p.push(u.exp)):(h.push("."+i),p.push(o.wrapByDoubleQuote(i)));return{str:h.join(""),arr:"["+p.join(",")+"]",parts:h,funcRet:l,resolvedParts:p}},wrapByDoubleQuote:function(e){return'"'+e+'"'},wrapBySingleQuote:function(e){return"'"+e+"'"},joinArrayOfString:function(e){return o.wrapByDoubleQuote(e.join('","'))},escapeSingleQuoteInCodeString:function(e,t){return e.replace(t?n:r,function(e){return e.length%2&&(e="\\"+e),e})},escapeString:function(e,t){return e=t?o.escapeSingleQuoteInCodeString(e,0):e.replace(/\\/g,"\\\\").replace(/'/g,"\\'"),e=e.replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")},pushToArray:function(e,t){t&&i.apply(e,t)}};return e}(),r=function(e){var t=function(e){function t(e,t){return t=t||1,e[e.length-t]}function a(e,t){for(var a in t)e[a]=t[a]}function n(e){return"[object Array]"===Object.prototype.toString.call(e)}function r(e,t,a){if(e){var r,i,s,o=0;if(a=a||null,n(e))for(s=e.length,i=e[0];s>o&&t.call(a,i,o,e)!==!1;i=e[++o]);else for(r in e)if(t.call(a,e[r],r,e)===!1)break}}function i(e,t){for(var a=0,n=t.length;n>a;a++)if(t[a]===e)return!0;return!1}var s={},o={SHIFT_TYPE:1,REDUCE_TYPE:2,ACCEPT_TYPE:0,TYPE_INDEX:0,PRODUCTION_INDEX:1,TO_INDEX:2},u=function(e){var t=this;t.rules=[],a(t,e),t.resetInput(t.input,t.filename)};u.prototype={resetInput:function(e,t){a(this,{input:e,filename:t,matched:"",stateStack:[u.STATIC.INITIAL],match:"",text:"",firstLine:1,lineNumber:1,lastLine:1,firstColumn:1,lastColumn:1})},getCurrentRules:function(){var e=this,t=e.stateStack[e.stateStack.length-1],a=[];return e.mapState&&(t=e.mapState(t)),r(e.rules,function(e){var n=e.state||e[3];n?i(t,n)&&a.push(e):t===u.STATIC.INITIAL&&a.push(e)}),a},pushState:function(e){this.stateStack.push(e)},popState:function(e){e=e||1;for(var t;e--;)t=this.stateStack.pop();return t},showDebugInfo:function(){var e=this,t=u.STATIC.DEBUG_CONTEXT_LIMIT,a=e.matched,n=e.match,r=e.input;a=a.slice(0,a.length-n.length);var i=(a.length>t?"...":"")+a.slice(0-t).replace(/\n/g," "),s=n+r;return s=s.slice(0,t).replace(/\n/g," ")+(s.length>t?"...":""),i+s+"\n"+new Array(i.length+1).join("-")+"^"},mapSymbol:function(e){return this.symbolMap[e]},mapReverseSymbol:function(e){var t,a=this,n=a.symbolMap,r=a.reverseSymbolMap;if(!r&&n){r=a.reverseSymbolMap={};for(t in n)r[n[t]]=t}return r?r[e]:e},lex:function(){var t,n,r,i,s,o=this,p=o.input,h=o.getCurrentRules();if(o.match=o.text="",!p)return o.mapSymbol(u.STATIC.END_TAG);for(t=0;t<h.length;t++){n=h[t];var l=n.regexp||n[1],c=n.token||n[0],f=n.action||n[2]||e;if(r=p.match(l)){s=r[0].match(/\n.*/g),s&&(o.lineNumber+=s.length),a(o,{firstLine:o.lastLine,lastLine:o.lineNumber,firstColumn:o.lastColumn,lastColumn:s?s[s.length-1].length-1:o.lastColumn+r[0].length});var b;return b=o.match=r[0],o.matches=r,o.text=b,o.matched+=b,i=f&&f.call(o),i=i===e?c:o.mapSymbol(i),p=p.slice(b.length),o.input=p,i?i:o.lex()}}}},u.STATIC={INITIAL:"I",DEBUG_CONTEXT_LIMIT:20,END_TAG:"$EOF"};var p=new u({rules:[[0,/^[\s\S]*?(?={{)/,function(){var e,t=this,a=t.text,n=0;return(e=a.match(/\\+$/))&&(n=e[0].length),n%2?(t.pushState("et"),a=a.slice(0,-1)):t.pushState("t"),n&&(a=a.replace(/\\+$/g,function(e){return new Array(e.length/2+1).join("\\")})),t.text=a,"CONTENT"}],["b",/^[\s\S]+/,0],["b",/^[\s\S]{2,}?(?:(?={{)|$)/,function(){this.popState()},["et"]],["c",/^{{\{?(?:#|@)/,function(){var e=this,t=e.text;4===t.length?e.pushState("p"):e.pushState("e")},["t"]],["d",/^{{\{?\//,function(){var e=this,t=e.text;4===t.length?e.pushState("p"):e.pushState("e")},["t"]],["e",/^{{\s*else\s*}}/,function(){this.popState()},["t"]],[0,/^{{![\s\S]*?}}/,function(){this.popState()},["t"]],["b",/^{{%([\s\S]*?)%}}/,function(){this.text=this.matches[1]||"",this.popState()},["t"]],["f",/^{{\{?/,function(){var e=this,t=e.text;3===t.length?e.pushState("p"):e.pushState("e")},["t"]],[0,/^\s+/,0,["p","e"]],["g",/^,/,0,["p","e"]],["h",/^}}}/,function(){this.popState(2)},["p"]],["h",/^}}/,function(){this.popState(2)},["e"]],["i",/^\(/,0,["p","e"]],["j",/^\)/,0,["p","e"]],["k",/^\|\|/,0,["p","e"]],["l",/^&&/,0,["p","e"]],["m",/^===/,0,["p","e"]],["n",/^!==/,0,["p","e"]],["o",/^>=/,0,["p","e"]],["p",/^<=/,0,["p","e"]],["q",/^>/,0,["p","e"]],["r",/^</,0,["p","e"]],["s",/^\+/,0,["p","e"]],["t",/^-/,0,["p","e"]],["u",/^\*/,0,["p","e"]],["v",/^\//,0,["p","e"]],["w",/^%/,0,["p","e"]],["x",/^!/,0,["p","e"]],["y",/^"(\\[\s\S]|[^\\"\n])*"/,function(){this.text=this.text.slice(1,-1).replace(/\\"/g,'"')},["p","e"]],["y",/^'(\\[\s\S]|[^\\'\n])*'/,function(){this.text=this.text.slice(1,-1).replace(/\\'/g,"'")},["p","e"]],["z",/^\d+(?:\.\d+)?(?:e-?\d+)?/i,0,["p","e"]],["aa",/^=/,0,["p","e"]],["ab",/^\.\./,function(){this.pushState("ws")},["p","e"]],["ac",/^\//,function(){this.popState()},["ws"]],["ac",/^\./,0,["p","e"]],["ad",/^\[/,0,["p","e"]],["ae",/^\]/,0,["p","e"]],["af",/^\{/,0,["p","e"]],["ag",/^\:/,0,["p","e"]],["ah",/^\}/,0,["p","e"]],["ab",/^[a-zA-Z_$][a-zA-Z0-9_$]*/,0,["p","e"]]]});return s.lexer=p,p.symbolMap={$EOF:"a",CONTENT:"b",OPEN_BLOCK:"c",OPEN_CLOSE_BLOCK:"d",INVERSE:"e",OPEN_TPL:"f",COMMA:"g",CLOSE:"h",L_PAREN:"i",R_PAREN:"j",OR:"k",AND:"l",LOGIC_EQUALS:"m",LOGIC_NOT_EQUALS:"n",GE:"o",LE:"p",GT:"q",LT:"r",PLUS:"s",MINUS:"t",MULTIPLY:"u",DIVIDE:"v",MODULUS:"w",NOT:"x",STRING:"y",NUMBER:"z",EQUALS:"aa",ID:"ab",SEP:"ac",L_BRACKET:"ad",R_BRACKET:"ae",L_BRACE:"af",COLON:"ag",R_BRACE:"ah",$START:"ai",program:"aj",statements:"ak",statement:"al","function":"am",id:"an",expression:"ao",params:"ap",hash:"aq",param:"ar",conditionalOrExpression:"as",listExpression:"at",objectExpression:"au",objectPart:"av",conditionalAndExpression:"aw",equalityExpression:"ax",relationalExpression:"ay",additiveExpression:"az",multiplicativeExpression:"ba",unaryExpression:"bb",primaryExpression:"bc",hashSegment:"bd",idSegments:"be"},s.productions=[["ai",["aj"]],["aj",["ak","e","ak"],function(){return new this.yy.ProgramNode({filename:this.lexer.filename,line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1,this.$3)}],["aj",["ak"],function(){return new this.yy.ProgramNode({filename:this.lexer.filename,line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["ak",["al"],function(){return[this.$1]}],["ak",["ak","al"],function(){this.$1.push(this.$2)}],["al",["c","am","h","aj","d","an","h"],function(){return new this.yy.BlockStatement({filename:this.lexer.filename,line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$2,this.$4,this.$6,4!==this.$1.length)}],["al",["f","ao","h"],function(){return new this.yy.ExpressionStatement({filename:this.lexer.filename,line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$2,3!==this.$1.length)}],["al",["b"],function(){return new this.yy.ContentStatement({filename:this.lexer.filename,line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["am",["an","i","ap","g","aq","j"],function(){return new this.yy.Function({filename:this.lexer.filename,line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1,this.$3,this.$5)}],["am",["an","i","ap","j"],function(){return new this.yy.Function({filename:this.lexer.filename,line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1,this.$3)}],["am",["an","i","aq","j"],function(){return new this.yy.Function({filename:this.lexer.filename,line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1,null,this.$3)}],["am",["an","i","j"],function(){return new this.yy.Function({filename:this.lexer.filename,line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["ap",["ap","g","ar"],function(){this.$1.push(this.$3)}],["ap",["ar"],function(){return[this.$1]}],["ar",["ao"]],["ao",["as"]],["ao",["ad","at","ae"],function(){return new this.yy.ArrayExpression(this.$2)}],["ao",["ad","ae"],function(){return new this.yy.ArrayExpression([])}],["ao",["af","au","ah"],function(){return new this.yy.ObjectExpression(this.$2)}],["ao",["af","ah"],function(){return new this.yy.ObjectExpression([])}],["av",["y","ag","ao"],function(){return[this.$1,this.$3]}],["av",["ab","ag","ao"],function(){return[this.$1,this.$3]}],["au",["av"],function(){return[this.$1]}],["au",["au","g","av"],function(){this.$1.push(this.$3)}],["at",["ao"],function(){return[this.$1]}],["at",["at","g","ao"],function(){this.$1.push(this.$3)}],["as",["aw"]],["as",["as","k","aw"],function(){return new this.yy.ConditionalOrExpression(this.$1,this.$3)}],["aw",["ax"]],["aw",["aw","l","ax"],function(){return new this.yy.ConditionalAndExpression(this.$1,this.$3)}],["ax",["ay"]],["ax",["ax","m","ay"],function(){return new this.yy.EqualityExpression(this.$1,"===",this.$3)}],["ax",["ax","n","ay"],function(){return new this.yy.EqualityExpression(this.$1,"!==",this.$3)}],["ay",["az"]],["ay",["ay","r","az"],function(){return new this.yy.RelationalExpression(this.$1,"<",this.$3)}],["ay",["ay","q","az"],function(){return new this.yy.RelationalExpression(this.$1,">",this.$3)}],["ay",["ay","p","az"],function(){return new this.yy.RelationalExpression(this.$1,"<=",this.$3)}],["ay",["ay","o","az"],function(){return new this.yy.RelationalExpression(this.$1,">=",this.$3)}],["az",["ba"]],["az",["az","s","ba"],function(){return new this.yy.AdditiveExpression(this.$1,"+",this.$3)}],["az",["az","t","ba"],function(){return new this.yy.AdditiveExpression(this.$1,"-",this.$3)}],["ba",["bb"]],["ba",["ba","u","bb"],function(){return new this.yy.MultiplicativeExpression(this.$1,"*",this.$3)}],["ba",["ba","v","bb"],function(){return new this.yy.MultiplicativeExpression(this.$1,"/",this.$3)}],["ba",["ba","w","bb"],function(){return new this.yy.MultiplicativeExpression(this.$1,"%",this.$3)}],["bb",["x","bb"],function(){return new this.yy.UnaryExpression(this.$1,this.$2)}],["bb",["t","bb"],function(){return new this.yy.UnaryExpression(this.$1,this.$2)}],["bb",["bc"]],["bc",["y"],function(){return new this.yy.String({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["bc",["z"],function(){return new this.yy.Number({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["bc",["an"]],["bc",["i","ao","j"],function(){return this.$2}],["aq",["aq","g","bd"],function(){this.$1.value.push(this.$3)}],["aq",["bd"],function(){return new this.yy.Hash({line:this.lexer.firstLine,col:this.lexer.firstColumn},[this.$1])}],["bd",["an","aa","ao"],function(){return[this.$1,this.$3]}],["an",["be"],function(){return new this.yy.Id({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["be",["am"],function(){return[this.$1]}],["be",["be","ac","ab"],function(){this.$1.push(this.$3)}],["be",["be","ad","ao","ae"],function(){this.$1.push(this.$3)}],["be",["ab"],function(){return[this.$1]}]],s.table={gotos:{0:{aj:4,ak:5,al:6},2:{am:8,an:9,be:10},3:{am:18,an:19,ao:20,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},5:{al:30},11:{am:18,an:19,ao:35,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},12:{am:18,an:19,bb:36,bc:28,be:10},13:{am:18,an:19,bb:37,bc:28,be:10},16:{am:18,an:19,ao:39,as:21,at:40,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},17:{au:44,av:45},29:{ak:60,al:6},31:{aj:61,ak:5,al:6},32:{am:18,an:63,ao:64,ap:65,aq:66,ar:67,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,bd:68,be:10},34:{am:18,an:19,ao:70,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},47:{am:18,an:19,aw:78,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},48:{am:18,an:19,ax:79,ay:24,az:25,ba:26,bb:27,bc:28,be:10},49:{am:18,an:19,ay:80,az:25,ba:26,bb:27,bc:28,be:10},50:{am:18,an:19,ay:81,az:25,ba:26,bb:27,bc:28,be:10},51:{am:18,an:19,az:82,ba:26,bb:27,bc:28,be:10},52:{am:18,an:19,az:83,ba:26,bb:27,bc:28,be:10},53:{am:18,an:19,az:84,ba:26,bb:27,bc:28,be:10},54:{am:18,an:19,az:85,ba:26,bb:27,bc:28,be:10},55:{am:18,an:19,ba:86,bb:27,bc:28,be:10},56:{am:18,an:19,ba:87,bb:27,bc:28,be:10},57:{am:18,an:19,bb:88,bc:28,be:10},58:{am:18,an:19,bb:89,bc:28,be:10},59:{am:18,an:19,bb:90,bc:28,be:10},60:{al:30},72:{am:18,an:19,ao:98,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},74:{am:18,an:19,ao:99,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},75:{am:18,an:19,ao:100,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},76:{av:101},91:{am:18,an:102,be:10},92:{am:18,an:19,ao:103,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},93:{am:18,an:63,ao:64,aq:104,ar:105,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,bd:68,be:10},95:{am:18,an:106,bd:107,be:10}},action:{0:{b:[1,e,1],c:[1,e,2],f:[1,e,3]},1:{a:[2,7],e:[2,7],c:[2,7],f:[2,7],b:[2,7],d:[2,7]},2:{ab:[1,e,7]},3:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7],ad:[1,e,16],af:[1,e,17]},4:{a:[0]},5:{a:[2,2],d:[2,2],b:[1,e,1],c:[1,e,2],e:[1,e,29],f:[1,e,3]},6:{a:[2,3],e:[2,3],c:[2,3],f:[2,3],b:[2,3],d:[2,3]},7:{i:[2,59],ac:[2,59],ad:[2,59],h:[2,59],k:[2,59],l:[2,59],m:[2,59],n:[2,59],o:[2,59],p:[2,59],q:[2,59],r:[2,59],s:[2,59],t:[2,59],u:[2,59],v:[2,59],w:[2,59],j:[2,59],ae:[2,59],g:[2,59],aa:[2,59],ah:[2,59]},8:{i:[2,56],ac:[2,56],ad:[2,56],h:[1,e,31]},9:{i:[1,e,32]},10:{i:[2,55],h:[2,55],k:[2,55],l:[2,55],m:[2,55],n:[2,55],o:[2,55],p:[2,55],q:[2,55],r:[2,55],s:[2,55],t:[2,55],u:[2,55],v:[2,55],w:[2,55],j:[2,55],ae:[2,55],g:[2,55],aa:[2,55],ah:[2,55],ac:[1,e,33],ad:[1,e,34]},11:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7],ad:[1,e,16],af:[1,e,17]},12:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},13:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},14:{h:[2,48],k:[2,48],l:[2,48],m:[2,48],n:[2,48],o:[2,48],p:[2,48],q:[2,48],r:[2,48],s:[2,48],t:[2,48],u:[2,48],v:[2,48],w:[2,48],j:[2,48],ae:[2,48],g:[2,48],ah:[2,48]},15:{h:[2,49],k:[2,49],l:[2,49],m:[2,49],n:[2,49],o:[2,49],p:[2,49],q:[2,49],r:[2,49],s:[2,49],t:[2,49],u:[2,49],v:[2,49],w:[2,49],j:[2,49],ae:[2,49],g:[2,49],ah:[2,49]},16:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7],ad:[1,e,16],ae:[1,e,38],af:[1,e,17]},17:{y:[1,e,41],ab:[1,e,42],ah:[1,e,43]},18:{h:[2,56],k:[2,56],i:[2,56],l:[2,56],m:[2,56],n:[2,56],o:[2,56],p:[2,56],q:[2,56],r:[2,56],s:[2,56],t:[2,56],u:[2,56],v:[2,56],w:[2,56],ac:[2,56],ad:[2,56],j:[2,56],ae:[2,56],g:[2,56],aa:[2,56],ah:[2,56]},19:{h:[2,50],k:[2,50],l:[2,50],m:[2,50],n:[2,50],o:[2,50],p:[2,50],q:[2,50],r:[2,50],s:[2,50],t:[2,50],u:[2,50],v:[2,50],w:[2,50],j:[2,50],ae:[2,50],g:[2,50],ah:[2,50],i:[1,e,32]},20:{h:[1,e,46]},21:{h:[2,15],j:[2,15],ae:[2,15],g:[2,15],ah:[2,15],k:[1,e,47]},22:{h:[2,26],k:[2,26],j:[2,26],ae:[2,26],g:[2,26],ah:[2,26],l:[1,e,48]},23:{h:[2,28],k:[2,28],l:[2,28],j:[2,28],ae:[2,28],g:[2,28],ah:[2,28],m:[1,e,49],n:[1,e,50]},24:{h:[2,30],k:[2,30],l:[2,30],m:[2,30],n:[2,30],j:[2,30],ae:[2,30],g:[2,30],ah:[2,30],o:[1,e,51],p:[1,e,52],q:[1,e,53],r:[1,e,54]},25:{h:[2,33],k:[2,33],l:[2,33],m:[2,33],n:[2,33],o:[2,33],p:[2,33],q:[2,33],r:[2,33],j:[2,33],ae:[2,33],g:[2,33],ah:[2,33],s:[1,e,55],t:[1,e,56]},26:{h:[2,38],k:[2,38],l:[2,38],m:[2,38],n:[2,38],o:[2,38],p:[2,38],q:[2,38],r:[2,38],s:[2,38],t:[2,38],j:[2,38],ae:[2,38],g:[2,38],ah:[2,38],u:[1,e,57],v:[1,e,58],w:[1,e,59]},27:{h:[2,41],k:[2,41],l:[2,41],m:[2,41],n:[2,41],o:[2,41],p:[2,41],q:[2,41],r:[2,41],s:[2,41],t:[2,41],u:[2,41],v:[2,41],w:[2,41],j:[2,41],ae:[2,41],g:[2,41],ah:[2,41]},28:{h:[2,47],k:[2,47],l:[2,47],m:[2,47],n:[2,47],o:[2,47],p:[2,47],q:[2,47],r:[2,47],s:[2,47],t:[2,47],u:[2,47],v:[2,47],w:[2,47],j:[2,47],ae:[2,47],g:[2,47],ah:[2,47]},29:{b:[1,e,1],c:[1,e,2],f:[1,e,3]},30:{a:[2,4],e:[2,4],c:[2,4],f:[2,4],b:[2,4],d:[2,4]},31:{b:[1,e,1],c:[1,e,2],f:[1,e,3]},32:{i:[1,e,11],j:[1,e,62],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7],ad:[1,e,16],af:[1,e,17]},33:{ab:[1,e,69]},34:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7],ad:[1,e,16],af:[1,e,17]},35:{j:[1,e,71]},36:{h:[2,46],k:[2,46],l:[2,46],m:[2,46],n:[2,46],o:[2,46],p:[2,46],q:[2,46],r:[2,46],s:[2,46],t:[2,46],u:[2,46],v:[2,46],w:[2,46],j:[2,46],ae:[2,46],g:[2,46],ah:[2,46]},37:{h:[2,45],k:[2,45],l:[2,45],m:[2,45],n:[2,45],o:[2,45],p:[2,45],q:[2,45],r:[2,45],s:[2,45],t:[2,45],u:[2,45],v:[2,45],w:[2,45],j:[2,45],ae:[2,45],g:[2,45],ah:[2,45]},38:{h:[2,17],j:[2,17],ae:[2,17],g:[2,17],ah:[2,17]},39:{ae:[2,24],g:[2,24]},40:{g:[1,e,72],ae:[1,e,73]},41:{ag:[1,e,74]},42:{ag:[1,e,75]},43:{h:[2,19],j:[2,19],ae:[2,19],g:[2,19],ah:[2,19]},44:{g:[1,e,76],ah:[1,e,77]},45:{ah:[2,22],g:[2,22]},46:{a:[2,6],e:[2,6],c:[2,6],f:[2,6],b:[2,6],d:[2,6]},47:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},48:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},49:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},50:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},51:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},52:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},53:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},54:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},55:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},56:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},57:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},58:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},59:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7]},60:{a:[2,1],d:[2,1],b:[1,e,1],c:[1,e,2],f:[1,e,3]},61:{d:[1,e,91]},62:{h:[2,11],i:[2,11],ac:[2,11],ad:[2,11],k:[2,11],l:[2,11],m:[2,11],n:[2,11],o:[2,11],p:[2,11],q:[2,11],r:[2,11],s:[2,11],t:[2,11],u:[2,11],v:[2,11],w:[2,11],j:[2,11],ae:[2,11],g:[2,11],aa:[2,11],ah:[2,11]},63:{g:[2,50],j:[2,50],k:[2,50],l:[2,50],m:[2,50],n:[2,50],o:[2,50],p:[2,50],q:[2,50],r:[2,50],s:[2,50],t:[2,50],u:[2,50],v:[2,50],w:[2,50],i:[1,e,32],aa:[1,e,92]},64:{g:[2,14],j:[2,14]},65:{g:[1,e,93],j:[1,e,94]},66:{g:[1,e,95],j:[1,e,96]},67:{g:[2,13],j:[2,13]},68:{j:[2,53],g:[2,53]},69:{i:[2,57],ac:[2,57],ad:[2,57],h:[2,57],k:[2,57],l:[2,57],m:[2,57],n:[2,57],o:[2,57],p:[2,57],q:[2,57],r:[2,57],s:[2,57],t:[2,57],u:[2,57],v:[2,57],w:[2,57],j:[2,57],ae:[2,57],g:[2,57],aa:[2,57],ah:[2,57]},70:{ae:[1,e,97]},71:{h:[2,51],k:[2,51],l:[2,51],m:[2,51],n:[2,51],o:[2,51],p:[2,51],q:[2,51],r:[2,51],s:[2,51],t:[2,51],u:[2,51],v:[2,51],w:[2,51],j:[2,51],ae:[2,51],g:[2,51],ah:[2,51]},72:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7],ad:[1,e,16],af:[1,e,17]},73:{h:[2,16],j:[2,16],ae:[2,16],g:[2,16],ah:[2,16]},74:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7],ad:[1,e,16],af:[1,e,17]},75:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7],ad:[1,e,16],af:[1,e,17]},76:{y:[1,e,41],ab:[1,e,42]},77:{h:[2,18],j:[2,18],ae:[2,18],g:[2,18],ah:[2,18]},78:{h:[2,27],k:[2,27],j:[2,27],ae:[2,27],g:[2,27],ah:[2,27],l:[1,e,48]},79:{h:[2,29],k:[2,29],l:[2,29],j:[2,29],ae:[2,29],g:[2,29],ah:[2,29],m:[1,e,49],n:[1,e,50]},80:{h:[2,31],k:[2,31],l:[2,31],m:[2,31],n:[2,31],j:[2,31],ae:[2,31],g:[2,31],ah:[2,31],o:[1,e,51],p:[1,e,52],q:[1,e,53],r:[1,e,54]},81:{h:[2,32],k:[2,32],l:[2,32],m:[2,32],n:[2,32],j:[2,32],ae:[2,32],g:[2,32],ah:[2,32],o:[1,e,51],p:[1,e,52],q:[1,e,53],r:[1,e,54]},82:{h:[2,37],k:[2,37],l:[2,37],m:[2,37],n:[2,37],o:[2,37],p:[2,37],q:[2,37],r:[2,37],j:[2,37],ae:[2,37],g:[2,37],ah:[2,37],s:[1,e,55],t:[1,e,56]},83:{h:[2,36],k:[2,36],l:[2,36],m:[2,36],n:[2,36],o:[2,36],p:[2,36],q:[2,36],r:[2,36],j:[2,36],ae:[2,36],g:[2,36],ah:[2,36],s:[1,e,55],t:[1,e,56]},84:{h:[2,35],k:[2,35],l:[2,35],m:[2,35],n:[2,35],o:[2,35],p:[2,35],q:[2,35],r:[2,35],j:[2,35],ae:[2,35],g:[2,35],ah:[2,35],s:[1,e,55],t:[1,e,56]},85:{h:[2,34],k:[2,34],l:[2,34],m:[2,34],n:[2,34],o:[2,34],p:[2,34],q:[2,34],r:[2,34],j:[2,34],ae:[2,34],g:[2,34],ah:[2,34],s:[1,e,55],t:[1,e,56]},86:{h:[2,39],k:[2,39],l:[2,39],m:[2,39],n:[2,39],o:[2,39],p:[2,39],q:[2,39],r:[2,39],s:[2,39],t:[2,39],j:[2,39],ae:[2,39],g:[2,39],ah:[2,39],u:[1,e,57],v:[1,e,58],w:[1,e,59]},87:{h:[2,40],k:[2,40],l:[2,40],m:[2,40],n:[2,40],o:[2,40],p:[2,40],q:[2,40],r:[2,40],s:[2,40],t:[2,40],j:[2,40],ae:[2,40],g:[2,40],ah:[2,40],u:[1,e,57],v:[1,e,58],w:[1,e,59]},88:{h:[2,42],k:[2,42],l:[2,42],m:[2,42],n:[2,42],o:[2,42],p:[2,42],q:[2,42],r:[2,42],s:[2,42],t:[2,42],u:[2,42],v:[2,42],w:[2,42],j:[2,42],ae:[2,42],g:[2,42],ah:[2,42]},89:{h:[2,43],k:[2,43],l:[2,43],m:[2,43],n:[2,43],o:[2,43],p:[2,43],q:[2,43],r:[2,43],s:[2,43],t:[2,43],u:[2,43],v:[2,43],w:[2,43],j:[2,43],ae:[2,43],g:[2,43],ah:[2,43]},90:{h:[2,44],k:[2,44],l:[2,44],m:[2,44],n:[2,44],o:[2,44],p:[2,44],q:[2,44],r:[2,44],s:[2,44],t:[2,44],u:[2,44],v:[2,44],w:[2,44],j:[2,44],ae:[2,44],g:[2,44],ah:[2,44]},91:{ab:[1,e,7]},92:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7],ad:[1,e,16],af:[1,e,17]},93:{i:[1,e,11],t:[1,e,12],x:[1,e,13],y:[1,e,14],z:[1,e,15],ab:[1,e,7],ad:[1,e,16],af:[1,e,17]},94:{h:[2,9],i:[2,9],ac:[2,9],ad:[2,9],k:[2,9],l:[2,9],m:[2,9],n:[2,9],o:[2,9],p:[2,9],q:[2,9],r:[2,9],s:[2,9],t:[2,9],u:[2,9],v:[2,9],w:[2,9],j:[2,9],ae:[2,9],g:[2,9],aa:[2,9],ah:[2,9]},95:{ab:[1,e,7]},96:{h:[2,10],i:[2,10],ac:[2,10],ad:[2,10],k:[2,10],l:[2,10],m:[2,10],n:[2,10],o:[2,10],p:[2,10],q:[2,10],r:[2,10],s:[2,10],t:[2,10],u:[2,10],v:[2,10],w:[2,10],j:[2,10],ae:[2,10],g:[2,10],aa:[2,10],ah:[2,10]},97:{i:[2,58],ac:[2,58],ad:[2,58],h:[2,58],k:[2,58],l:[2,58],m:[2,58],n:[2,58],o:[2,58],p:[2,58],q:[2,58],r:[2,58],s:[2,58],t:[2,58],u:[2,58],v:[2,58],w:[2,58],j:[2,58],ae:[2,58],g:[2,58],aa:[2,58],ah:[2,58]},98:{ae:[2,25],g:[2,25]},99:{ah:[2,20],g:[2,20]},100:{ah:[2,21],g:[2,21]},101:{ah:[2,23],g:[2,23]},102:{h:[1,e,108],i:[1,e,32]},103:{j:[2,54],g:[2,54]},104:{g:[1,e,95],j:[1,e,109]},105:{g:[2,12],j:[2,12]},106:{i:[1,e,32],aa:[1,e,92]},107:{j:[2,52],g:[2,52]},108:{a:[2,5],e:[2,5],c:[2,5],f:[2,5],b:[2,5],d:[2,5]},109:{h:[2,8],i:[2,8],ac:[2,8],ad:[2,8],k:[2,8],l:[2,8],m:[2,8],n:[2,8],o:[2,8],p:[2,8],q:[2,8],r:[2,8],s:[2,8],t:[2,8],u:[2,8],v:[2,8],w:[2,8],j:[2,8],ae:[2,8],g:[2,8],aa:[2,8],ah:[2,8]}}},s.parse=function(a,n){var i,s,u,p,h,l=this,c=l.lexer,f=l.table,b=f.gotos,m=f.action,y=l.productions,x=n?"in file: "+n+" ":"",v=[],d=[0],g=[];for(c.resetInput(a,n);;){if(i=t(d),s||(s=c.lex()),p=s?m[i]&&m[i][s]:null,!p){var E,w=[];throw m[i]&&r(m[i],function(e,t){p=e[o.TYPE_INDEX];var a=[];a[o.SHIFT_TYPE]="shift",a[o.REDUCE_TYPE]="reduce",a[o.ACCEPT_TYPE]="accept",w.push(a[p]+":"+l.lexer.mapReverseSymbol(t))}),E=x+"syntax error at line "+c.lineNumber+":\n"+c.showDebugInfo()+"\nexpect "+w.join(", "),new Error(E)}switch(p[o.TYPE_INDEX]){case o.SHIFT_TYPE:g.push(s),v.push(c.text),d.push(p[o.TO_INDEX]),s=null;break;case o.REDUCE_TYPE:var j=y[p[o.PRODUCTION_INDEX]],S=j.symbol||j[0],$=j.action||j[2],T=j.rhs||j[1],C=T.length;h=t(v,C),u=e,l.$$=h;for(var k=0;C>k;k++)l["$"+(C-k)]=t(v,k+1);$&&(u=$.call(l)),h=u!==e?u:l.$$;var I=-1*C;d.splice(I,C),v.splice(I,C),g.splice(I,C),g.push(S),v.push(h);var z=b[t(d)][S];d.push(z);break;case o.ACCEPT_TYPE:return h}}},s}();return"undefined"!=typeof a&&(e=t),e}(),i=function(e){function t(e,t){var a=e.length,n=t.length;if(a!==n)return 0;for(var r=0;a>r;r++)if(e[r]!==t[r])return 0;return 1}var a={};return a.ProgramNode=function(e,t,a){var n=this;n.pos=e,n.statements=t,n.inverse=a},a.ProgramNode.prototype.type="program",a.BlockStatement=function(e,a,n,r,i){var s,o=r.parts,u=this;if(!t(a.id.parts,o))throw s="in file: "+e.filename+" syntax error at line "+e.line+", col "+e.col+":\nexpect {{/"+a.id.parts+"}} not {{/"+o+"}}",new Error(s);u.escape=i,u.pos=e,u.func=a,u.program=n},a.BlockStatement.prototype.type="blockStatement",a.ExpressionStatement=function(e,t,a){var n=this;n.pos=e,n.value=t,n.escape=a},a.ExpressionStatement.prototype.type="expressionStatement",a.ContentStatement=function(e,t){var a=this;a.pos=e,a.value=t},a.ContentStatement.prototype.type="contentStatement",a.UnaryExpression=function(e,t){this.value=t,this.unaryType=e},a.Function=function(e,t,a,n){var r=this;r.pos=e,r.id=t,r.params=a,r.hash=n},a.Function.prototype.type="function",a.UnaryExpression.prototype.type="unaryExpression",a.MultiplicativeExpression=function(e,t,a){var n=this;n.op1=e,n.opType=t,n.op2=a},a.MultiplicativeExpression.prototype.type="multiplicativeExpression",a.AdditiveExpression=function(e,t,a){var n=this;n.op1=e,n.opType=t,n.op2=a},a.AdditiveExpression.prototype.type="additiveExpression",a.RelationalExpression=function(e,t,a){var n=this;n.op1=e,n.opType=t,n.op2=a},a.RelationalExpression.prototype.type="relationalExpression",a.EqualityExpression=function(e,t,a){var n=this;n.op1=e,n.opType=t,n.op2=a},a.EqualityExpression.prototype.type="equalityExpression",a.ConditionalAndExpression=function(e,t){var a=this;a.op1=e,a.op2=t,a.opType="&&"},a.ConditionalAndExpression.prototype.type="conditionalAndExpression",a.ConditionalOrExpression=function(e,t){var a=this;a.op1=e,a.op2=t,a.opType="||"},a.ConditionalOrExpression.prototype.type="conditionalOrExpression",a.String=function(e,t){var a=this;a.pos=e,a.value=t},a.String.prototype.type="string",a.Number=function(e,t){var a=this;a.pos=e,a.value=t},a.Number.prototype.type="number",a.Hash=function(e,t){var a=this;a.pos=e,a.value=t},a.Hash.prototype.type="hash",a.ArrayExpression=function(e){this.list=e},a.ArrayExpression.prototype.type="arrayExpression",a.ObjectExpression=function(e){this.obj=e},a.ObjectExpression.prototype.type="objectExpression",a.Id=function(e,t){var a=this,n=[],r=0;a.pos=e;for(var i=0,s=t.length;s>i;i++){var o=t[i];".."===o?r++:n.push(o)}a.parts=n,a.string=n.join("."),a.depth=r},a.Id.prototype.type="id",e=a}(),s=function(e){function t(e){return["function "+e+"(scope, buffer, undefined) {","var data = scope.data;","var affix = scope.affix;"]}function a(e,t){return t+e.uuid++}function s(e){var t,n,r,i,s=[],o=e.opType,u=this[e.op1.type](e.op1),p=this[e.op2.type](e.op2),h=a(this,"exp");return t=u.exp,n=p.exp,r=u.source,i=p.source,x(s,r),s.push("var "+h+" = "+t+";"),"&&"===o||"||"===o?(s.push("if("+("&&"===o?"":"!")+"("+h+")){"),x(s,i),s.push(h+" = "+n+";"),s.push("}")):(x(s,i),s.push(h+" = ("+t+")"+o+"("+n+");")),{exp:h,source:s}}function o(e,t){Q!==e.line&&(Q=e.line,t.push("pos.line = "+e.line+";"))}function p(e,n){for(var r,i=a(e,"func"),s=t(i),o=0,u=n.length;u>o;o++)r=n[o],x(s,e[r.type](r).source);return s.push(O),s.push("}"),x(e.functionDeclares,s),i}function h(e,n){var r=a(e,"func"),i=t(r),s=e[n.type](n);return x(i,s.source),i.push("return "+s.exp+";"),i.push("}"),x(e.functionDeclares,i),r}function l(e,t){var a,n,r,i=e.config.catchError,s=[E,U,i?"try {":""];for(n=0,r=t.length;r>n;n++)a=t[n],x(s,e[a.type](a,{top:1}).source);return s.splice.apply(s,[2,0].concat(e.functionDeclares).concat("")),s.push(O),i&&(s.push("} catch(e) {"),s.push("if(!e.xtpl){"),s.push("buffer.error(e);"),s.push("}else{ throw e; }"),s.push("}")),{params:["undefined"],source:s.join("\n")}}function c(e,t,a,n,r,i){var s=[],o=t.params,u=t.hash,p=[],h="set"===t.id.string;o&&M(o,function(t){var a=e[t.type](t);x(s,a.source),p.push(a.exp)});var l=[];u&&M(u.value,function(t){var a=t[1],n=t[0],r=e[a.type](a);if(x(s,r.source),h){var i=y.convertIdPartsToRawAccessor(e,s,n.parts).resolvedParts;l.push({key:i,depth:n.depth,value:r.exp})}else{if(1!==n.parts.length||"string"!=typeof n.parts[0])throw new Error("invalid hash parameter");l.push([v(n.string),r.exp])}});var c="";if(p.length||l.length||a||n||i||r){if(a&&(c+=",escape:1"),p.length&&(c+=",params:["+p.join(",")+"]"),l.length){var f=[];h?(m.each(l,function(e){f.push("{key:["+e.key.join(",")+"],value:"+e.value+", depth:"+e.depth+"}")}),c+=",hash: ["+f.join(",")+"]"):(m.each(l,function(e){f.push(e[0]+":"+e[1])}),c+=",hash: {"+f.join(",")+"}")}n&&(c+=",fn: "+n),i&&(c+=",inverse: "+i),r&&(c+=",elseIfs: "+r),c="{"+c.slice(1)+"}"}return{exp:c||"{}",funcParams:p,source:s}}function f(e,t,n,r){var i=[];o(t.pos,i);var s,u,l=t.id,f=l.string;f in F&&(r=0);var b,m=l.parts;if("elseif"===f)return{exp:"",source:[]};if(n){var v,d,g,E,C,k,I=n.program,z=I.inverse,A=[],P=I.statements,q=[];for(b=0;b<P.length;b++)k=P[b],"expressionStatement"===k.type&&(C=k.value)&&(C=C.parts)&&1===C.length&&(C=C[0])&&"function"===C.type&&"elseif"===C.id.string?(E&&A.push(E),E={condition:C.params[0],statements:[]}):E?E.statements.push(k):q.push(k);if(E&&A.push(E),v=p(e,q),z&&(g=p(e,z)),A.length){var N=[];for(b=0;b<A.length;b++){var L=A[b],R=h(e,L.condition);N.push("{test: "+R+",fn : "+p(e,L.statements)+"}")}d="["+N.join(",")+"]"}s=c(e,t,r,v,d,g),x(i,s.source)}var O=e.config.isModule;if(!("include"!==f&&"parse"!==f&&"extend"!==f||t.params&&1===t.params.length))throw new Error("include/parse/extend can only has one parameter!");if(O&&("include"===f||"parse"===f)&&(t.params[0]={type:"raw",value:'require("'+t.params[0].value+'")'}),s||(s=c(e,t,r,null,null,null),x(i,s.source)),n||(u=a(e,"callRet"),i.push("var "+u)),f in F)"extend"===f?(i.push("runtime.extendTpl = "+s.exp),i.push("buffer = buffer.async(function(newBuffer){runtime.extendTplBuffer = newBuffer;});"),O&&i.push("runtime.extendTplFn = require("+s.exp+".params[0])")):"include"===f?i.push("buffer = root."+(O?"includeModule":"include")+"(scope,"+s.exp+",buffer,tpl);"):"parse"===f?i.push("buffer = root."+(O?"includeModule":"include")+"(new scope.constructor(),"+s.exp+",buffer,tpl);"):i.push(B(w,{lhs:n?"buffer":u,name:f,option:s.exp}));else if(n)i.push(B(j,{option:s.exp,idParts:y.convertIdPartsToRawAccessor(e,i,m).arr}));else{var _=y.convertIdPartsToRawAccessor(e,i,m);_.funcRet?i.push(B($,{lhs:u,params:s.funcParams.join(","),idParts:_.arr,depth:l.depth})):i.push(B(l.depth?T:S,{lhs:u,option:s.exp,idParts:_.arr,depth:l.depth}))}return{exp:u,source:i}}function b(e){this.functionDeclares=[],this.config=e,this.uuid=0}for(var m=u.util,y=n,x=y.pushToArray,v=y.wrapByDoubleQuote,d=["var t;"],g=0;10>g;g++)d.push("var t"+g+";");var E=d.concat(["var tpl = this;","var root = tpl.root;","var buffer = tpl.buffer;","var scope = tpl.scope;","var runtime = tpl.runtime;","var name = tpl.name;","var pos = tpl.pos;","var data = scope.data;","var affix = scope.affix;","var nativeCommands = root.nativeCommands;","var utils = root.utils;"]).join("\n"),w="{lhs} = {name}Command.call(tpl, scope, {option}, buffer);",j="buffer = callCommandUtil(tpl, scope, {option}, buffer, {idParts});",S="{lhs} = callFnUtil(tpl, scope, {option}, buffer, {idParts});",$="{lhs} = callDataFnUtil([{params}], {idParts});",T="{lhs} = callFnUtil(tpl, scope, {option}, buffer, {idParts}, {depth});",C="var {lhs} = {value};",k="var {lhs} = scope.resolve({idParts},{depth});",I="var {lhs} = scope.resolveLoose({idParts},{depth});",z=["function {functionName}({params}){","{body}","}"].join("\n"),A=["","//# sourceURL = {name}.js"].join("\n"),P='var {name}Command = nativeCommands["{name}"];',q='var {name}Util = utils["{name}"];',N="buffer = buffer.write({value});",L="buffer.data += {value};",R="buffer = buffer.writeEscaped({value});",O="return buffer;",_=u,D=r;D.yy=i;var U=[],B=m.substitute,M=m.each,F=_.nativeCommands,Y=_.utils;M(Y,function(e,t){U.push(B(q,{name:t}))}),M(F,function(e,t){U.push(B(P,{name:t}))}),U=U.join("\n");var Q=1;b.prototype={constructor:b,raw:function(e){return{exp:e.value}},arrayExpression:function(e){for(var t,a=e.list,n=a.length,r=[],i=[],s=0;n>s;s++)t=this[a[s].type](a[s]),x(r,t.source),i.push(t.exp);
return{exp:"["+i.join(",")+"]",source:r}},objectExpression:function(e){for(var t,a=e.obj,n=a.length,r=[],i=[],s=0;n>s;s++){var o=a[s];t=this[o[1].type](o[1]),x(r,t.source),i.push(v(o[0])+": "+t.exp)}return{exp:"{"+i.join(",")+"}",source:r}},conditionalOrExpression:s,conditionalAndExpression:s,relationalExpression:s,equalityExpression:s,additiveExpression:s,multiplicativeExpression:s,unaryExpression:function(e){var t=this[e.value.type](e.value);return{exp:e.unaryType+"("+t.exp+")",source:t.source}},string:function(e){return{exp:y.wrapBySingleQuote(y.escapeString(e.value,1)),source:[]}},number:function(e){return{exp:e.value,source:[]}},id:function(e){var t=[],n=this,r=!n.config.strict;if(o(e.pos,t),y.isGlobalId(e))return{exp:e.string,source:t};var i=e.depth,s=e.parts,u=a(n,"id");if(i)return t.push(B(r?I:k,{lhs:u,idParts:y.convertIdPartsToRawAccessor(n,t,s).arr,depth:i})),{exp:u,source:t};var p,h,l=s[0];if("this"===l)return h=s.slice(1),t.push(B(C,{lhs:u,value:h.length?y.chainedVariableRead(n,t,h,void 0,void 0,r):"data"})),{exp:u,source:t};if("root"===l)return h=s.slice(1),p=h.join("."),p&&(p="."+p),t.push(B(C,{lhs:u,value:p?y.chainedVariableRead(n,t,h,!0,void 0,r):"scope.root.data",idParts:p})),{exp:u,source:t};if("function"===s[0].type){for(var c=y.convertIdPartsToRawAccessor(n,t,s).resolvedParts,f=1;f<c.length;f++)c[f]="["+c[f]+"]";var b;if(r)b=y.genStackJudge(c.slice(1),c[0]);else{b=c[0];for(var m=1;m<c.length;m++)b+=c[m]}t.push(B(C,{lhs:u,value:b}))}else t.push(B(C,{lhs:u,value:y.chainedVariableRead(n,t,s,!1,!0,r)}));return{exp:u,source:t}},"function":function(e,t){return f(this,e,!1,t)},blockStatement:function(e){return f(this,e.func,e)},expressionStatement:function(e){var t,a,n=[],r=e.escape,i=e.value,s=i.type;return t=this[s](i,r),x(n,t.source),a=t.exp,n.push(B(r?R:N,{value:a})),{exp:"",source:n}},contentStatement:function(e){return{exp:"",source:[B(L,{value:y.wrapBySingleQuote(y.escapeString(e.value,0))})]}}};var G,X=0;return G={parse:function(e,t){if(e){var a;try{a=D.parse(e,t)}catch(n){var r;r=n instanceof Error?n:new Error(n);var i="XTemplate error ";throw r.stack=i+r.stack,r.message=i+r.message,r}return a}return{statements:[]}},compileToStr:function(e){var t=G.compileToJson(e);return B(z,{functionName:e.functionName||"",params:t.params.join(","),body:t.source})},compileToJson:function(e){var t=e.name=e.name||"xtemplate"+ ++X,a=e.content,n=G.parse(a,t);return l(new b(e),n.statements)},compile:function(e,t,a){var n=G.compileToJson(m.merge(a,{content:e,name:t}));return Function.apply(null,n.params.concat(n.source+B(A,{name:t})))}},e=G}(),o=function(e){function t(e,a){var i=typeof e;if("string"!==i&&"function"!==i&&(a=e,e=void 0),a=this.config=r.merge(t.globalConfig,a),"string"===i)try{e=this.compile(e,a.name)}catch(s){this.compileError=s}n.call(this,e,a)}function a(){}var n=u,r=n.util,i=s,o=i.compile;return a.prototype=n.prototype,t.prototype=new a,t.prototype.constructor=t,t.prototype.compile=function(e,t){return o(e,t,this.config)},t.prototype.render=function(e,t,a){"function"==typeof t&&(a=t);var r=this.compileError;if(!r)return n.prototype.render.apply(this,arguments);if(!a)throw r;a(r)},e=r.mix(t,{config:n.config,compile:o,Compiler:i,Scope:n.Scope,Runtime:n,addCommand:n.addCommand,removeCommand:n.removeCommand})}(),a.exports=o});