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
Method one   
```js
 $("#address").hydist();
 ```   
 Method two
 ```js
 $("#test2").hydist({
    wrap: "#xx",
    target: "#yy",
    source: "#zz",
    province: "湖南省",
    city: "衡阳市",
    district: "衡南县"
});
 ```    
 Method three   
```html   
$("#method-three").hydist({
	wrap: "#xx3",
    target: "#yy3",
    source: "#zz3",
    getValue:function(names){
       	$("#test3").val(names.join(' '));
       	console.log($("#test3").val());
    }    
});
```   


# Options    
## wrap   
type:`String`   
Default:`#dist-wrap`   
包着源列表和目标列表，控制它们的显示   

## target   
type:`String`   
Default:`#target`   
目标列表，即选中的省市   

## source   
type:`String`   
Default:`#source`   
源列表，即提供选择的省市区(或县)   

## display  
type:`String`  
Default:`none`  
设置是否显示，默认是不显示的,它的值有`none`和`block`  
`none`：不显示  
`block`：显示  

## province  
type：`String`  
Default:北京市  

## code   
type:`Number`      
Default:86   
各省市区(县)的编号，默认值86即代表中国   

# Method  
## getValue(names)  
#### names  
type:`Array`  
Default:[]

为了方便把选择的地区名称赋给其它的，特添加了此方法，names数组是即选中的省、市、区(县)的名称。