# 模板库提交规则

```
config.json 		# 当前模板的名称及版本号（目前未加入版本号的识别）
layout.html 		# 当前模板的公用框架页面
template.entry.js 	# 当前模板的公用框架JS
template.vue 		# 当前模板所生成的实例项目页面js
```


# 模板库可用变量
```
[page_name]    		# 页面文件名
[page_path] 		# 页面的物理全路径
[base_url] 	   		# 页面相对于项目的base路径
```

# 模板分类
```
clean    		    # 纯净模板
web    		    	# web端模板(带head、dom的placerholder配置,用于head标签和在vue加载之前的代码载入的配置)
mobile 			    # 移动端模板(带head、dom的placerholder配置,用于head标签和在vue加载之前的代码载入的配置)
```
# 配置head标签、vue加载之前的代码
在.json文件中
```
{
	"template":"web",
	"version":"1.0",
	"polyfill":false,//是否使用polyfill兼容古老浏览器
	"head-placeholder":["head1.css","head2.js","head3.html","head4.else"],
	"dom-placeholder":["dom1.css","dom2.js","dom3.html","dom4.else"]
}
```
head-placeholder、dom-placeholder给出的值可以是一个数组，可以是一个字符串，
是数组的情况下，会按照给出的顺序，合并给出的文件里边的内容，放到相应的被替换的位置

head-placeholder、dom-placeholder也可以不给：
```
{
	"template":"web",
	"version":"1.0"
}
```