欢迎使用我的移动端的中国地区三级联动。
初次写jq插件，还请大家多多指教。

# 效果
地址：http://demo.hengyi.mobi/index.html

# Quick start
第一步：引入样式文件
```html
<link href="content/css/style.css" rel="stylesheet" />
```
第二步：引入scripts  
```html
<script src="content/lib/jquery-1.10.2.js"></script>  
<script src="content/js/hydist.data.js"></script>  
<script src="content/js/hydist.js"></script>
```
请注意：hydist.data.js文件一定要放在hydist.js文件前  
第三步：创建以下Html  
```html
<section id="dist-wrap" class="dist-wrap">  
    <ul id="target" class="dist-target"></ul>  
	<ul id="source" class="dist-source"></ul>  
</section>
```
第四步：神功大成  

# Options
## display
type:`String`
Default:`none`
设置是否显示，默认是不显示的,它的值有`none`和`block`
`none`：不显示
`block`：显示

## province
type：`String`
Default:北京市
