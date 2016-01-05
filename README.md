欢迎使用我的移动端的中国地区三级联动。
初次写jq插件，还请大家多多指教。

# 效果
地址：http://demo.hengyi.mobi/index.html

# Quick start
第一步：引入样式文件
<link href="content/css/style.css" rel="stylesheet" />
第二步：引入scripts
<script src="content/lib/jquery-1.10.2.js"></script>
<script src="content/js/hydist.data.js"></script>
<script src="content/js/hydist.js"></script>
请注意：hydist.data.js文件一定要hydist.js文件前
第三步：创建以下Html
<section id="dist-wrap" class="dist-wrap">
    <ul id="target" class="dist-target"></ul>
    <ul id="source" class="dist-source"></ul>
</section>
第四步：神功大成
