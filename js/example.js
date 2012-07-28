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

// 4. scaleオブジェクトを使った棒グラフ
var svg = addSvgElement("canvas4");
var scale = d3.scale.linear().domain([0,100]).range([0,180]);
// xの位置を20ずつずらす
// yの位置は190からy = 1.8xを引いたの位置に設定。高さはyの位置に設定
for (var i = 0; i < 10; i++) {
  svg.append("rect").attr("x", i * 20).attr("y", 180 + 10 - scale(i*10)).attr("height", scale(i*10));
}
// selectAllで設定済みのrectに対して一括でwidthとblueで色をつける
svg.selectAll("rect").attr("width", 20).attr("fill", "blue");


// 5. attrメソッドの動作を確認する
// select, selectAll, appendメソッドで得られたオブジェクトをselectionオブジェクトと呼ぶ
// selectでは条件に合致した最初のdomオブジェクトを保持する
// selectAllでは条件に合致した全てのdomオブジェクトを保持する
// selectionオブジェクトに対してattrメソッドを用いて属性値を設定する
var svg = addSvgElement("canvas5");
var data = {key1: 10, key2: 10, key3: 180, key4: 180, key5: "blue"};
svg.append("rect")
    .attr("x", function() { return data.key1; })
    .attr("y", function() { return data.key2; })
    .attr("height", function() { return data.key3; })
    .attr("width", function() { return data.key4; })
    .attr("fill", function() { return data.key5; });

// 6. selectAllを用いてデータを一括で設定する
// まずselectAllで空のselectionオブジェクトを用意
// dataメソッド、enterメソッドでデータをひもづけると
// 動的に要素を生成することができる

// これによってデータの定義と図形作成のロジックが分離している
// d3.jsがdata driven document libraryとうたっている理由
var svg = addSvgElement("canvas6");
var dataAttr = [
      {key1: 10, key2: 10, key3: 80, key4: 80, key5: "green"},
      {key1: 110, key2: 110, key3: 80, key4: 80, key5: "blue"}
    ];
svg.selectAll("rect")
    .data(dataAttr)
    .enter()
    .append("rect")
    .attr("x", function(d,i) {return d.key1;})
    .attr("y", function(d,i) {return d.key2;})
    .attr("height", function(d,i) {return d.key3;})
    .attr("width", function(d,i) {return d.key4;})
    .attr("fill", function(d,i) {return d.key5;});

