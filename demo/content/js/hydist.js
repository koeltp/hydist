/*!
 * hydist v0.1
 *
 * Copyright (c) 2016 横溢科技
 * Released under the MIT license
 *
 * Date: 2015-01-05
 */
(function ($) {
    'use strict';

    if (typeof ChineseDistricts === 'undefined') {
        throw new Error('请把hydist.data.js放在hydist.js前面');
    }


    var NAMESPACE = "dist";
    var EVENT_CLICK = "click." + NAMESPACE;


    function Dist(element, options) {
        var DEFAULTS = {
            wrap: "#dist-wrap",
            target: "#target",
            source: "#source",
            display: "none",
            province: "",
            city: "",
            district: "",
            code: 86
        }
        this.$element = $(element);
        this.options = $.extend({}, DEFAULTS, $.isPlainObject(options) && options);
        this.init();
    }
    Dist.prototype = {
        constructor: Dist,
        init: function () {
            $(this.options.wrap).css("display", this.options.display);
            this.bind();
            this.rest();
        },

        bind: function () {
            var _this = this;
            $(_this.options.target).on(EVENT_CLICK, "li", function () {
                _this.targetClick(this);
            });

            $(_this.options.source).on(EVENT_CLICK, "li", function () {
                _this.sourceClick(this);
            });
            console.log($(_this.$element));
            $(_this.$element).click(function () {

                $(_this.options.wrap).show();
            });
        },
        rest: function () {
            var _this = this, target_htmls = [], source_htmls = [];
            var names = [];
            $.each([this.options.province, this.options.city, this.options.district], function (index, item) {
                var data = _this.getData();
                source_htmls = [];

                $.each(data, function (i, n) {
                    var html = _this.getHtml(i, n);
                    if (n === item) {
                        names.push(item);
                        target_htmls.push(html);
                        _this.options.code = i;
                    }
                    source_htmls.push(html);
                });
                if (!item) return false;
            });

            _this.setName(names);

            if (this.options.district) {
                target_htmls.pop();
            }
            $(this.options.target).append(target_htmls.join(' '));
            $(this.options.source).append(source_htmls.join(' '));
        },
        setName: function (names) {
            if (!names && names.length <= 0) return;

            if ($(this.$element).is("input") == false && this.options.province) {
                $(this.$element).text(names.join(' '));
                return;
            }
            $(this.$element).val(names.join(' '));
        },
        targetClick: function (el) {
            $(el).nextAll().remove();
            $(el).remove();

            this.options.code = $(el).data("parentcode");
            this.output();
        },
        sourceClick: function (el) {
            this.options.code = $(el).data("code");
            var result = this.output();

            if (!!result) {
                $(this.options.target).append($(el));
                return;
            }

            $(this.options.wrap).hide();
            var names = [];
            $(this.options.target).children("li").each(function (index, item) {
                names.push($(item).data("name"));
            });

            names.push($(el).data("name"));

            this.setName(names);
        },
        output: function () {
            var data_list = this.getData(this.options.code);
            if ($.isPlainObject(data_list)) {
                this.setSource(data_list);
                return true;
            }
        },

        setSource: function (data) {
            var list = [];
            var _this = this;
            $.each(data, function (i, n) {
                list.push(_this.getHtml(i, n));
            });

            $(this.options.source).html(list.join(''));
        },
        getHtml: function (code, name) {
            return '<li data-parentcode="' + this.options.code + '" data-name="' + name + '" data-code="' + code + '">' + name + '</li>';
        },
        getData: function () {
            var dist_list = $.isNumeric(this.options.code) ? ChineseDistricts[this.options.code] : null;
            return dist_list;
        }
    };

    $.fn.extend({
        "hydist": function (options) {
            return this.each(function () {
                new Dist($(this), options);
            });
        }
    });

})(jQuery);