# 模板库提交规则

```
config.json 		# 当前模板的名称及版本号（目前未加入版本号的识别）
layout.html 		# 当前模板的公用框架页面
template.entry.js 	# 当前模板的公用框架JS
template.vue 		# 当前模板所生成的实例项目页面js
template.header.html 		# 当前模板所生成的实例项目页面中需要自定义放在head标签中的内容
template.dompreloader.html 		# 当前模板所生成的实例项目页面中，需要优先vue加载的内容，可以是任何css，html，js
```


# 模板库可用变量
```
[page_name]    		# 页面文件名
[page_path] 			# 页面的物理全路径
[base_url] 	   		# 页面相对于项目的base路径

```

# 模板分类
```
clean    		    # 纯净模板(带header、dompreloader配置,用于head标签和在vue加载之前的代码载入的配置)
web    		    	# web端模板(带header、dompreloader配置,用于head标签和在vue加载之前的代码载入的配置)
mobile 			    # 移动端模板
mobile-loading 	# 移动端初始带loading

```
