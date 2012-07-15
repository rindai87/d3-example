// d3.jsの基本：body部にpタグを作って文字列を挿入
d3.select("body").append("p").text("hello d3.js");

// 複数のデータに対応するpタグを用意して、それぞれ
// 動的に異なる処理を行わせる
d3.select("body").selectAll("p")
    .data([4,8,10,5,15])
    .enter()
    .append("p")
    .text(function(d) { return "I'm number " + d + "!"});

// 上記をデータ定義、挿入、削除の３つに分解する
// update
var p = d3.select("body").selectAll("p")
            .data([4,8,10,5,15])
            .text(String);

// enter
p.enter().append("p");

// remove
p.exit().remove("p");


d3.selectAll("circle").transition()
    .duration(750)
.delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d * scale); });



