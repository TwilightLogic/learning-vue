# Learn Vue
### 首先先创建一个vue实例
```js
const vm = Vue.createApp({
	data() {
		return {
			firstName: 'Logic',
			lastName: 'Wixx',
		};
	},
}).mount('#app');
```

### Proxy
A figure that can be used to represent the value of something in calculation

Without a Proxy
``` js
vm.$data.firstName;
```

With a Proxy
``` js
vm.firstName;
```

### Method
其实是为了与view分开，单独写页面逻辑代码会看起来清楚一些吧
Tips: Method其实是一个对象

```js
const vm = Vue.createApp({
	data() {
		return {
			firstName: 'Logic',
			lastName: 'Wixx',
		};
	},
	method: {
	// 要从实例中访问数据，我们需要用到this关键字
	// 记得不要用箭头函数，因为代理机制所以会导致this关键字用不了
		fullName() {
			return `${this.firstName} ${this.lastName.toUpperCase()}`;
		},
	}
}).mount('#app');
```

其实调用这个fullName()也很简单，只需要 ⬇️
```html
<div id="app">
	{{ fullName() }}
</div>
```

### v-model
利用v-model可以把data中的值传到我们想要的html中；反过来，我们在html中输入的值也会改变data中的值，所以我们称`v-model`可以在组件上使用以实现双向绑定。
他们又叫`reactivity: reactivity is any changes to the data is immediately reflected on the page`
```html
<div id="app">
	{{ fullName() }}
	
	<label>First Name</label>
	<input type="text" v-model="firstName" />
</div>
```

#### 我们可以在v-model后限定一些变量的类型
.number
```html
<label>Age</label>
<input type="text" v-model.number="age" />
<!-- 这里input框的value就是number类型了，而不是默认的string
类型 -->
```
.lazy .trim
lazy会在推迟数据的更改，直到用户输入完（按下回车或者鼠标移到外面点击）
trim就是删除两边的空白字符咯
```html
<label>First Name</label>
<input type="text" v-model.lazy.trim="firstName" />
```


### v-bind
其实就是允许一个html的tag拥有动态的属性(property)，比如 ⬇️
前提：在data上面添加url(https://www.google.com) 属性
```html
 <div>
	 <!-- <a href="https://www.google.com">google</a> -->
	 <a v-bind:href="url">google</a>
	 <!-- 其实也可以去掉前面的v-bind，只留下冒号 ⬇️ -->
	 <a :href="url">google</a>
 </div>
```

### v-html
用于插入动态的html(by javascript)
前提，data中有`raw_url: '<a href="https://www.google.com">Google</a>'`这个属性
```html
 <div>
	 <p v-html:"raw_url"></p>
 </div>
```

### v-on
用于做事件监听
```html
<!-- 
这个就表示鼠标点击事件(v-on:click)，等号后面是expression，感觉可以写个方法名在上面，也可以写个表达式(类似于age--)
-->
<!-- 
	v-on:click="function()"
	⬇️ 缩写 ⬇️
	@click="function()"
-->
<div class="age-input">
	<button type="button" v-on:click="age--">Increment</button>
	<p>{{ age }}</p>
	<button type="button" v-on:click="increment">Decrement</button>
</div>
```

也可以用来阻止默认事件的发生，相当于`e.preventDefault();`
```html
<input
	type="text"
	:value="lastName"
	@input.prevent="updateLastName('Last name event triggered!', $event)"
/>
```

### 来谈谈methods和computed还有watch
其实当页面引用了vue data关键字的属性，并且这些属性发生改变的时候，就会执行methods中定义的函数。有些时候我们并不需要执行所有的这些methods，所以我们用computed（跟methods平级的另一个对象）来进行“方法”的调用
其实computed总是被期望用来return回一个值的，但是用methods我们就可以

watch可以监听data里的属性
> 期望接受一个对象，其中键是需要侦听的响应式组件实例属性 (例如，通过 `data` 或 `computed` 声明的属性)——值是相应的回调函数。
```js
const vm = createApp({
	data(){
		age: 20;
	},
	watch: {
		age(newVal, oldVal) {
			setTimeout(() => {
				this.age = 20;
			}, 3000)
		}
	}
}).mount('#app');
```

### Binding classes
https://cn.vuejs.org/guide/essentials/class-and-style.html#binding-html-classes
我们可以在完成某事件后，自动为一个元素添加上一个class
```html
<div class="circle" :class="{ background-purple: isPurple }">
```
> :class后面是一个能包含class list的对象，键为class name，值为判断的条件值
> ⬆️ 但是加了很多class的话，代码就会变得很长，可阅读性就很差。我们可以在computed中优化他

```html
<div class="circle" :class="circle_classes">
```
```js
let vm = Vue.createApp({
	data() {
	return {
		isPurple: false,
	};
},
computed: {
	circle_classes() {
		return { purple: this.isPurple };
	},
},
}).mount('#app');
```

### v-if
拿来做判断的，例如：如果v-if条件为真，那我们就能显示该html中的内容。
```html
<div id="app">
	<p v-if="mode === 1">Show v-if directive content</p>
	<p v-else-if="mode === 2">v-else-if</p>
	<p v-else>v-else</p>
</div>
```

```js
const vm = Vue.createApp({
	data() {
		return {
			mode: 1,
		};
	}
}).mount('#app');
```

其实`v-show`也是差不多的功能，只不过渲染的方式不同，`v-show`会把style设置成`display: none`，而不是像`v-if`一样直接删除掉元素

### v-for
为了循环data中的数组元素，或者一些特殊数组（里面包含着对象）
```html
<div id="app">
	<ul class="list">
		<!-- 这里的:class只是为了加一个鸟的名字的class给每个li元素 -->
		<li v-for="(bird, index) in birds" :class="bird">
			{{ bird }} - {{ index }}
		</li>
	</ul>

	<!-- 这里是为了遍历出数组里的对象的属性 -->
	<ul class="list">
		<li v-for="person in people">{{ person.name }} - {{ person.age }}</li>
	<ul>
</div>
```
```js 
let vm = Vue.createApp({
	data() {
		return {
			birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
			people: [
				{ name: 'John', age: 20 },
				{ name: 'Rick', age: 18 },
				{ name: 'Amy', age: 33 },
			],
		};
	},
}).mount('#app');
```

#### :key=""
这个是为了给每个item一个id标识
> 这样的话我们input框输入一些信息会跟着`person.name`走，非常的智能
```html
<div id="app">
	<button type="button" class="move" @click="move">Move to Bottom</button>
		<div class="card" v-for="person in people" :key="person.name">
			<h3>{{ person.name }}</h3>
			<p>{{ person.message }}</p>
			<input type="text" />
		</div>
</div>
```
```js
let vm = Vue.createApp({
	data() {
		return {
			birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
			people: [
				{ name: 'John', age: 20 },
				{ name: 'Rick', age: 18 },
				{ name: 'Amy', age: 33 },
			],
		};
	},
	methods: {
		move() {
			// this.people.shift()这个返回被删除的元素
			const first = this.people.shift();
			// first进入队尾
			this.people.push(first);
		},
	},
}).mount('#app');
```

### mount
The process of Vue inserting itself into the document is call **mounting** 
我们也可以不用立即挂载实例到app上
```js
let vm = Vue.createApp({
	data() {
		return {
			message: 'Hello world!',
		};
	},
});

setTimeout(() => {
	vm.mount('#app');
}, 3000);
```

### Lifecycle
其实在Vue.createApp({})后，我们就开始了vue的生命周期

> Vue的生命周期如下
> btw，如果我们不想让用户继续交互，销毁实例的方法是vm.unmount()
> ![vue的生命周期](https://github.com/TwilightLogic/learning-vue/blob/master/vueLearning-notes/pic/Screenshot%202023-03-01%20at%2013.59.24.png?raw=true)
> **8个hooks ⬇️**
> 1. beforeCreate() // 在组件实例初始化完成之后立即调用，但是还没有数据传到template上
> 2. created()
> 3. beforeMount()
> 4. mounted()
> 5. beforeUpdate()
> 6. updated()
> 7. beforeUnmount()
> 8. unmounted()

### Virtual DOM
![pic2](https://github.com/TwilightLogic/learning-vue/blob/master/vueLearning-notes/pic/Screenshot%202023-03-02%20at%2010.22.07.png?raw=true)

可能首先要了解一下Vue的编译，它会把HTML转换成JS对象
![pic](https://github.com/TwilightLogic/learning-vue/blob/master/vueLearning-notes/pic/Screenshot%202023-03-02%20at%2010.13.32.png?raw=true)

反正Vue引用Virtual DOM的原因是因为能提高性能就对了
![pic4](https://github.com/TwilightLogic/learning-vue/blob/master/vueLearning-notes/pic/Screenshot%202023-03-02%20at%2010.18.44.png?raw=true)

### Proxy
**Proxy** 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

### Vue Complier
其实如果没用complier性能会更高，但是我们需要用render()来渲染模板，会变得有点麻烦，但之后会介绍vue-cli，可以简化这个过程，并且性能也会更好
```html
<!DOCTYPE >
<html>
	<head>
		<title>VueJS Course</title>
		<link rel="stylesheet" type="text/css" href="main.css" />
	</head>
	
	<body>
		<div id="app2"></div>  
		
		<script src="https://unpkg.com/vue@next"></script>
		<script src="app.js"></script>
	</body>
</html>
```
```js
let vm2 = Vue.createApp({
	data() {
		return {
			messageNew: 'Fucking world!',
		};
	},
	// Vue without complier
	render() {
		return Vue.h('h1', this.messageNew);
	},
}).mount('#app2');
```

### Components
> **What are Components?**
> -   ﻿Components are the pieces that make up your application. (Ex: header, footer, posts, lists, etc.)
> -   ﻿Makes it easy to manage the sections of your page.

```js
let vm = Vue.createApp({
	// data来自component
}).mount('#app);

// 在创建好实例后才可以创建component
// 第一个参数：组建名字，第二个参数：跟上面的createApp一样，能在里面创建data, methods, computed...
vm.component('hello', {
	template: '<h1>{{message}}</h1>',
	data() {
		return {
			message: 'Hello the fucking world!',
		};
	}
})
```

tips: 标签的名称是我们上面为组件定义的名字`hello`
```html
<!DOCTYPE >
<html>
	<head>
		<title>VueJS Course</title>
		<link rel="stylesheet" type="text/css" href="main.css" />
	</head>
	
	<body>
		<div id="app">
			<hello></hello>
		</div>
		
		<script src="https://unpkg.com/vue@next"></script>
		<script src="app.js"></script>
	</body>
</html>
```