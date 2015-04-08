0.x 是 KISSY 1.4.x 的 xtemplate


下面的 Demo 使用 JSBin 服务，如果看不到请使用科学上网技巧。


## 简介 

kg/xtemplate 是 Kissy 团队为了适应淘宝业务而开发的一款前端模板语言，已经在淘宝系业务中大量应用。作为一款语法成熟，高效的模板语言，其不止在浏览器中得到了广泛的应用，同时在淘宝系也广泛应用于 NodeJS 项目中，进而实现了良好的前后端 View 层的模板共享。

本文档单面向 kpm 中的 Kissy 进行介绍，期望刚接触此模板语言的同学也可以快速上手。

## First things first

本章意在让一个没有接触过这门模板语言的人也可以快速的学习使用。

### 使用 KPM 中的  kg/xtemplate

现在让我们来看看怎么开始使用 KPM 中的 kg/xtemplate。

XTemplate 在 `kg(Kissy Gallery)` 中被称为 `kg/xtemplate` （全小写）。如果我们要使用 4.1.4 版本，就应该使用 "kg/xtemplate/4.1.4/" 这个包名来获得。

例子：
<iframe style="width:100%; height:300px" src="http://jsbin.com/qejiga/3/watch?html,js,output" ></iframe>

### 前提知识：编译和运行

此模板语言使用时分为编译和运行两个阶段。编译即是将模板语言编译成 JavaScript 目标代码，执行即是执行 JavaScript 目标代码。

所以使用时可以分为两种组合搭配：

1. 浏览器编译 + 浏览器执行
2. 项目构建时编译 + 浏览器执行

其中第 2 种我们使用术语 `预编译` 来代称。

### 浏览器编译 + 浏览器执行

这是一种最简便的使用办法，将 kg/xtemplate 编译为 JavaScript 的过程将在浏览器中执行，在项目发布前不需要做任何的构建编译工作。不过代价是`耗时的编译过程`将在浏览器中进行。如果只是一点点的片段，也未尝不可。

例子：

<iframe style="width:100%; height:300px" src="http://jsbin.com/qazeku/2/watch?html,js,output" ></iframe>


### 项目构建时编译 + 浏览器执行 （预编译）

编译过程放在项目发布前的`项目构建时`来进行无疑是最好的。因为`耗时的解析编译`的过程在发布前的项目构建时就进行了，在浏览器中执行的直接就是 JavaScript 目标的代码。

#### 免去加载代码编译部分的代码

因为代码已经提前从 kg/xtemplate 翻译到了 JavaScript 这样就不用再加载代码编译部分的代码了。现在只需要引入 `kg/xtemplate/runtime` 即可，这里面包含了 kg/xtemplate 运行时的一些必要依赖。

例子：

<iframe style="width:100%; height:300px" src="http://jsbin.com/wicaqi/3/watch?html,js,output" ></iframe>


其中的 `tplFunction` 可以由项目构建工具自动编译完成然后通过 `require()` 加载进来。这里直接将编译后的结果放在了 Demo 里面。 


#### 预编译

淘宝系内部使用的项目构建套件（工具）已经很好的支持了自动构建时预编译、以及开发时的自动 `watch` ，推荐直接使用。 比如：XCake。厂外同学（或者没有使用现有打包套件的同学）可以使用 [kissy-xtemplate](https://www.npmjs.com/packages/kissy-xtemplate) 这个 Node 模块，或者 [grunt-kissy-xtemplate](https://www.npmjs.com/package/grunt-kissy-template) 这个 Grunt 插件来编译。这两个模块的文档已经很清晰了，这里就不再赘述了。

参考：

* [kissy-xtemplate](https://www.npmjs.com/packages/kissy-xtemplate)
* [grunt-kissy-xtemplate](https://www.npmjs.com/package/grunt-kissy-template)



### 语言的基本形式

这是一个帮助你快速理解语法定义的小篇幅，详细的语法参考参见后面的章节。


#### 语句的标记方法


##### 标记方法

标记方式与 PHP、ASP 这类语言有一定类似性。kg/xtemplate 中的语句都是用 {{}} 括起来的。如 

```
{{$a}}
```

就是引用一个量 `$a` 的值，并直接输出。

注意，双花括号的语法对输出值默认进行了 HTML 转义，如果需要输出未经转义的值，需要使用 `{{{$a}}}`，三个花括号的标记方法。


##### 非标记内的内容

如：

```
{{$a}}bc
```

中的 `bc` 部分会原封不动的输出。


##### 块语法形式

块语法是一种类似 HTML 标签的语法形式，由一对标记组成，其形式如下：

```
{{#each($list)}}
    {{$aAtList}}
{{/each}}
```

开始标记使用 `{{#...}}` 定义，结束标记使用 `{{/...}}` 定义。
块形式语法主要使用在流程控制上，如 循环、条件判断语句 等。 
注意，块内部的上下文环境、特殊语法标记，不同的块形式的语句可能有所不同。
在某些冲突情形下（如在VM语法环境中，#符号可能会有冲突），可以用 @ 符号代替，即 `{{@each($list)}}`。


##### 逃逸标记


如：

```
{{% {{$a}} %}}
```

其中的 `{{$a}}` 会直接输出，并不会当成 kg/xtemplate 语言。


##### 注释标记

```
{{! Comments }}
```

这个标记用来书写注释，并不会输出任何内容。



### 术语定义

* 编译：将 kg/xtemplate 语言编译成 JavaScript 目标代码的过程。
* 执行：执行 JavaScript 目标代码的过程。
* 预编译：把编译过程放在项目构建过程中的行为。
* 构建工具：
	* 已经将大部分构建项目构建问题都进行了覆盖的项目构建工具，如 XCake 。
	* 类似 Grunt、Gulp 的构建工具（以及其生态圈）。


## XTemplate 模板语法
---

本文档是 XTemplate 支持的语法功能的一个整体简介。

### 变量

变量会从当前模板的上下文上查找值，如果你想输出一个变量的值，可以使用：

```
{{ username }}
```

这样模板引擎将会从上下文上去查找变量 `name` 然后打印出来。变量可以使用 `.` 来访问属性，和 javascript 一样，也可以用 `[]`。

```
{{ user.name }}
{{ user["name"] }}
```

和 javascript 一样，这两种方式的结果都是一样的。

如果一个变量的值是 `undefined` 或者 `null`，什么也不会被输出。同样的，如果引用了 `undefined` 或者 `null` 的属性，也不会输出任何值（也不会报错）。下面的这些操作当 `foo === undefined` 的时候，都不会输出任何值：`{{ foo }}`, `{{ foo.bar }}`, `{{ foo.bar.baz }}`。

#### 支持的数据类型

XTemplate 支持 javascript 中所有的基本数据类型。

- `Boolean`
- `Number`
- `String`
- `null`
- `undefined`
- `Object`
- `Array`

#### 输出

使用 `{{ foo }}` 来输出 `escape` 之后的数据, `{{{ foo }}}` 来输出 `unescape` 的原始数据。

```html
escaped: {{ foo }}
unescaped: {{{ foo }}}
```

使用数据 `{ foo: "<script>" }` 渲染这个模板，将会得到下面的结果：

```html
escaped: &lt;script&gt;
unescaped: <script>
```

如果你希望输出最原始的数据（包括 `{{}}`），你需要使用 `{{% %}}` 语法：

```
{{%

{{x}}

%}}
```

渲染这个模板，将会得到下面的结果：

```
{{x}}
```


如果想要给模板增加一些注释，请使用 `{{! comment }}`：


```
output before comment
{{! This is comment }}
output after comment
```

渲染这个模板，将会得到下面的结果：

```
output before comment

output after comment
```

#### 作用域

每一个模板都有一个独立的作用域，在子模板中可以访问到父模板的上下文，但是在子模板中定义或者修改变量不会影响到父模板的变量。就像 javascript 中一样。

parent.xtpl:

```
{{ set (a = 1, b = 2) }}
{{include ("sub.xtpl") }}
in parent:
a = {{ a }}
b = {{ b }}
```

sub.xtpl:

```
in sub:
{{ set b = 3 }}
a = {{ a }}
b = {{ b }}
```

渲染 `parent.xtpl`，将会得到下面的结果：

```
in sub:
a: 1
b: 3
in parent:
a: 1
b: 2
```

#### 根数据

通过 `root.foo` 可以放问到渲染的根数据（调用 `render` 方法时传递进去的数据）。

用数据 `{name: "foo", array: [name: "bar"]}` 渲染下面的模板:

```
{{#each(arr)}}
{{root.name}} {{name}}
{{/each}}
```

将会得到结果：

```
foo bar
```

### 方法和逻辑

你可以使用变量上 javascript 提供的方法：

```javascript
var x = [1, 2, 3];
```

```
{{#each(x.slice(1))}}{{this}} {{/each}} // => 2 3
```

#### 操作符

XTemplate 支持在数据上使用一些操作符：

- 加: `+`
- 减: `-`
- 乘: `*`
- 除: `/`
- 余: `%`

例子:

```
{{x+y}}
{{x + "1"}}
{{ y - 1 }}
```

#### 比较

- `===`
- `!==`
- `>`
- `>=`
- `<`
- `<=`

例子:

```
{{#if( x===1 )}}
1
{{elseif (x===2)}}
2
{{else}}
3
{{/if}}

{{#if ( (x+1) > 2 )}}
{{/if}}
```

#### 逻辑操作

- `||`
- `&&`
- `!`

例子:

```
{{#if(x>1 && y<2)}}
{{/if}}

{{#if(!x)}}
{{/if}}
```

#### 函数调用

如果你传递了 javascript 的方法到模板中，你可以像在 javascript 中一样使用它.

{{ foo(1, 2, 3) }}

#### 内置函数

##### range(start, end, [step])

如果需要迭代一些固定的数字，`range` 可以很方便的生成一个数字集合给你。这些数字从 `start` 开始，然后按照 `step` (默认为1) 的数量进行递增或者递减，直到数字到达了 `stop`（不会包括 `stop`）。

```
{{#each(range(0,3))}}{{this}}{{/each}}
{{#each(range(3,0))}}{{this}}{{/each}}
{{#each(range(3,0,2))}}{{this}}{{/each}}
```

渲染这个模板，将会得到结果：

```
012
321
31
```

##### set(key=value, [key=value])

`set` 让你定义或者修改一个变量。

```
{{set(x=1)}}
{{set(y=3,z=2)}}
{{x}}
{{y+z}}
```
渲染这个模板，将会得到结果：

```
1
5
```

### 命令

命令是一些特殊的区块，对于这些特殊的区块，XTemplate 会做特殊的处理。XTemplate 自带了一些内置的命令，你也可以自己定义一些自己的命令。

#### if

`if` 检查一个条件，让你可以选择性的输出内容，它和 javascript 中的 `if` 完全一致。

```
{{# if (variable) }}
    It is true
{{/ if }}
```

如果 `variable` 定义了且值为 true, 将会输出 `It is true`，否则什么都不会输出。

同样，可以通过 `elseif` 和 `else` 增加判断中的其他条件：

```
{{# if (hungry) }}
    I am hungry
{{ elseif (tired) }}
    I am tired
{{ else }}
    I am good!
{{/ if }}
```

#### with

`with` 命令和 javascript 中的 `with` 类似：

```javascript
var a = {
    b: 1
}
```

```
{{#with(a)}}
{{b}} // 1
{{/with}}
```

#### each

`each` 可以对 arrays 和 dictionaries 进行迭代：

##### arrays

```
{{set (array = [{
    name: "foo"
}, {
    name: "bar"
}])}}

{{#each(array)}}
    {{xindex}} {{this.name}}
{{/each}}
```

渲染这个模版，将会得到结果：

```
0 foo
1 bar
```

##### dictionaries

```
{{set (dictionary = {
    foo: "bar",
    hello: "world"
})}}

{{#each(dictionary,"value","key")}}
    {{key}} {{value}}
{{/each}}
```

渲染这个模版，将会得到结果：

```
foo bar
hello world
```

##### 访问上层变量

在 `with` 和 `each` 中，可以通过 `../` 来访问外层的同名变量.

```
{{#with(x)}}
    {{#each(b)}}
        {{../a}}{{a}} // 12
    {{/each}}
{{/with}}
```

使用数据 `{a: 1, b: [{a: 2}] }` 渲染上面的页面，将会得到结果：

```
12
```

#### 宏

宏允许你定义一个可复用的代码片段，和 javascript 中的函数有点类似，下面是一个例子：

```
{{#macro("test","param", default=1)}}
    param is {{param}} {{default}}
{{/macro}}
```

Now you can call this macro like:

```
{{macro("test","2")}}
{{macro("test", "2", default=2)}}
```

渲染结果是：

```
param is 2 1
param is 2 2
```

注意: 在宏中，你不能访问外层作用域上的任何变量，但是仍然可以通过 `root` 来访问根数据。

#### include

include 引入其他的模板。它在你想要共享不同的小的区块时非常有用。

```
{{ include ("item.html") }}
```

如果希望在引入子模版的时候同时在子模版的上下文上设置其他的值，可以通过 `include` 后面的参数传入。

在 `parent.html` 中：

```
{{ set (x = "x", y = "y") }}
{{ include ("sub.html", xx = x, yy = x)}}
```

在 `sub.html` 中：

```
x: {{x}}
y: {{y}}
xx: {{xx}}
yy: {{yy}}
```

渲染 `parent.html` 将会得到结果：

```
x: x
y: y
xx: x
yy: x
```

#### parse

如果希望能够让子模版拥有一个完全独立的上下文，不需要父级作用域，则可以使用 `parse`。

在 `parent.html` 中：

```
{{ set (x = "x", y = "y") }}
{{ parse ("sub.html", xx = x, yy = x)}}
```

在 `sub.html` 中：

```
x: {{x}}
y: {{y}}
xx: {{xx}}
yy: {{yy}}
```

渲染 `parent.html` 将会得到结果：

```
x:
y:
xx: x
yy: x
```

### 模板继承

模板继承可以让你更容易的来复用模板。当编写一个 template 的时候，你可以定义 `blocks`，这样在子模板中可以重写掉这些 block。

如果有一个模板 `parent.xtpl`：

```html
<!doctype html>
<html>
    <head>
        <meta name="charset" content="utf-8" />
        <title>{{title}}</title>
        {{{block ("head")}}}
    </head>
    <body>
        {{{block ("body")}}}
    </body>
</html>
```

和一个子模板 `child.xtpl`:

```html
{{extend ("./parent")}}

{{#block ("head")}}
    <link type="text/css" href="test.css" rev="stylesheet" rel="stylesheet"/>
{{/block}}

{{#block ("body")}}
    <h2>{{title}}</h2>
{{/block}}
```
```

然后我们使用数据 `{title: 'XTemplate'}` 渲染 `child.xtpl`，将会得到下面的结果：

```html
<!doctype html>
<html>
    <head>
        <meta name="charset" content="utf-8" />
        <title>XTemplate</title>
        <link type="text/css" href="test.css" rev="stylesheet" rel="stylesheet"/>
    </head>
    <body>
        <h2>XTemplate</h2>
    </body>
</html>
```

### 保留关键词

- `debugger`
- `each`
- `extend`
- `include`
- `macro`
- `parse`
- `range`
- `set`
- `with`



## 如何扩展模板功能

### 扩展 Command

kg/xtemplate 提供了一种扩展模板中 Command 的功能，可以在模板中可以调用 JS 中的某个 Function。一个简单的例子：

<iframe style="width:100%; height:300px" src="http://jsbin.com/xaqoya/5/watch?html,js,output" ></iframe>

这是一个最基础的定义的例子，其中 自定义 Command 可以在三个级别定义（就像CSS可以在不同级别定义样式一样）。

* 全局 Command

```
XTemplate.addCommand('succ',function(scope, option){
    var n = option.params[0];
    return n + 1;
});

```

* 在 new XTemplate 时


```
var xtpl = new XTemplate(
	tplStr, 
	{
		commands : function(scope, option){
			var n = option.params[0];
    		return n + 1;
		}
	}
);

```

* 在 render 时


```
var xtpl = new XTemplate(tplStr);
xtpl.render(tplContext, {
	commands : function(scope, option){
		var n = option.params[0];
   		return n + 1;
	}
});

```

上面都是进行了一些同步的过程，xtpl 同时可以异步返回。具体请参见 API 文档中的 `custom command` 章节。


### 宏(Macro)

kg/xtemplate 提供了一种简单的方式来复用一些子过程，我们称之为宏（更像是函数，请与处理文件等内容的宏区分开）。例子如下：


```
{{#macro("test","param", default=1)}}
    param is {{param}} {{default}}
{{/macro}}

{{macro("test","2")}}
{{macro("test", "2", default=2)}}
```

注意，宏不是可以访问父作用域，不过可以通过 root.key 来访问根数据。



## XTemplate API
---

### Class

XTemplate/XTemplateRuntime

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>content</td>
        <td>String</td>
        <td>template content string</td>
    </tr>
    <tr>
            <td>config</td>
            <td>Object</td>
            <td>
            <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th style="width: 100px;">name</th>
                        <th style="width: 50px;">type</th>
                        <th>description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>name</td>
                        <td>String</td>
                        <td>name of template for error report</td>
                    </tr>
                    <tr>
                        <td>loader</td>
                        <td>Object</td>
                        <td>contains a load function to load included template</td>
                    </tr>
                    <tr>
                        <td>commands</td>
                        <td>Object</td>
                        <td>command definition</td>
                        </tr>
                    </tbody>
                </table></td>
        </tr>
    </tbody>
</table>


### Methods


```javascript
String render(data:Object, [option:Object, callback:Function]) // render data
```

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>data</td>
          <td>Object</td>
          <td>data object to be rendered</td>
      </tr>
      <tr>
          <td>option</td>
          <td>Object</td>
          <td>support runtime commands. for example: {commands: {}}</td>
      </tr>
      <tr>
          <td>callback</td>
          <td>Function</td>
          <td>callback function after render</td>
      </tr>
    </tbody>
</table>

### TplWrap

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>scope</td>
        <td>Scope</td>
        <td>scope object when loader is invoked</td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>full name of template to be loaded</td>
    </tr>
    <tr>
        <td>originalName</td>
        <td>String</td>
        <td>originalName name of template to be loaded. for example: {{ include('./a') }}; name is maybe /code/a, originalName is ./a</td>
    </tr>
</table>

#### Members

### Buffer

#### Members

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>data</td>
        <td>String</td>
        <td>string to be written into buffer</td>
    </tr>
    <tr>
        <td>tpl</td>
        <td>Object</td>
        <td>TplWrap object belonged to this buffer</td>
    </tr>
</table>

#### Methods


```javascript
Buffer write(data:String)
```

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>data</td>
        <td>String</td>
        <td>string to be written into buffer</td>
    </tr>
</table>

```javascript
Buffer writeEscaped(data:String)
```

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>data</td>
        <td>String</td>
        <td>first escape string, then write it into buffer</td>
    </tr>
</table>

```javascript
Buffer async(fn:Function) // generate a new buffer as the first parameter of callback

Buffer end() // mark escape of current buffer

Buffer error(reason) // mark error of current render
```

### Scope


#### Members


```javascript
parent // parent scope

root // topmost scope
```

#### Methods


```javascript
void setParent(scope: Scope)

void setData(data) // set data of current scope

var getData()

void set(name, value) // set kv value of current scope

void get(name)
```

### custom command

#### global command


sync inline command

```javascript
XTemplate.addCommand('xInline',function(scope, option){
  return option.params[0]+'1';
});
```

use buffer

```javascript
XTemplate.addCommand('xInline',function(scope, option, buffer){
  return buffer.write(option.params[0] + 1);
});
```

```
{{xInline(1)}} // => 2
```

sync block command

```javascript
XTemplate.addCommand('xBlock',function(scope, option, buffer){
  return option.fn(scope, buffer).write(option.params[0]);
});
```

```
{{#xBlock(1)}}
2
{{/xBlock}}
// => 21
```

async inline command

```javascript
XTemplate.addCommand('xInline',function(scope, option,buffer){
  buffer = buffer.async(function(newBuffer){
    setTimeout(function(){
        newBuffer.write(option.params[0] + 1).end();
    },10);
  });
  return buffer;
});
```

```
{{xInline(1)}} // => 2
```

async block command

```javascript
XTemplate.addCommand('xInline',function(scope, option,buffer){
  buffer = buffer.async(function(newBuffer){
    setTimeout(function(){
        var newScope = xtpl.XTemplate.Scope({ret:2});
        newScope.setParent(scope);
        option.fn(newScope, newBuffer);
    },10);
  });
  buffer.write(option.params[0]);
  return buffer;
});
```

```
{{#xBlock(1)}}
{{ret}}
{{/xBlock}}
// => 21
```

### loader

a object which contains a load function (called when user invoke native include command) and passed to XTemplate config

```javascript
void load(tpl:TplWrap, callback:Function)
```

for example, XTemplate load precompiled template by require from modulex:

```javascript
var loader = {
    cache: {},
    load: function (tpl, callback) {
        var name = tpl.name;
        var cache = this.cache;
        if (cache[name]) {
            return callback(undefined, cache[name]);
        }
        require([name], {
            success: function (tpl) {
                cache[name] = tpl;
                callback(undefined, tpl);
            },
            error: function () {
                var error = 'template "' + params.name + '" does not exist';
                util.log(error, 'error');
                callback(error);
            }
        });
    }
};
```

### compiler

XTemplate.Compiler

#### Methods

##### compile
```
Object compile(content, name): get compiled function of template whose content is content and name is name
```

##### parse
```
Object parse(content, name): get compiled ast of template whose content is content and name is name
```

##### compileToStr
```
String compileToStr(param:Object): get function string of template whose content is content and name is name
```

param include:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>name</td>
        <td>String</td>
        <td></td>
        <td>name of template</td>
    </tr>
    <tr>
        <td>content</td>
        <td>String</td>
        <td></td>
        <td>content of template</td>
    </tr>
    <tr>
        <td>isModule</td>
        <td>Boolean</td>
        <td>false</td>
        <td>whether generate module require</td>
    </tr>
    </tbody>
</table>
