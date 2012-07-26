// http://www.h2.dion.ne.jp/~defghi/svgMemo/svgMemo_20.htm
// の写経+α

// svg要素の高さと幅を追加するfunction
var addSvgElement = function (DivTagId) {
    var cssDivTagIdStr = '#' + DivTagId;
    var w = 200;
    var h = 200;
    var svg = d3.select(cssDivTagIdStr)
                .append("svg")
                .attr("width", w)
                .attr("heigth", h);
    return svg;
};

// 1. DOMツリーにHTML要素を追加する
// <div id="canvas1">にsvg要素を追加
var svg = d3.select("#canvas1")
            .append("svg")
            .attr("width", 200)
            .attr("height", 200);

// 2. 円を追加する
// <div id="canvas2">にsvg要素を追加
var svg = addSvgElement("canvas2");
var circle = svg.append("circle")
                .attr("cx", 100)
                .attr("cy", 100)
                .attr("r", 80)
                .attr("fill", "red")
                .attr("stroke", "orange")
                .attr("stroke-width", 10);

// 3. scaleオブジェクトによる値の変換
// domain : 定義域
// range : 値域
var svg = addSvgElement("canvas3");
// x:[0,100], y:[0,180]となるような範囲を用意
// y = 1.8xとなる直線の範囲
var scale = d3.scale.linear().domain([0,100]).range([0,180]);
// yはy=1.8xにxの値を代入した結果が返っているのと同等
var line = svg.append("line")
                .attr("x1", 0)
                .attr("y1", scale(0))
                .attr("x2", 100)
                .attr("y2", scale(100))
                .attr("stroke", "blue")
                .attr("stroke-width", 1);
var circle = svg.append("circle")
                .attr("cx", 75)
                .attr("cy", scale(75))
                .attr("r", 5)
                .attr("fill", "none")
                .attr("stroke", "red")
                .attr("stroke-width", 1);
