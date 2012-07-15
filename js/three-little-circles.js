var w = 720;
var h = 180;
var data = [1, 2, 3];
var x = [];
var y = [];
for (var i = 0; i < data.length; i++) {
  x.push(Math.random() * 200 + 15);
  y.push((i * 50) + 20);
}

// svg領域の準備(id=chart-2にsvgを追加する)
var svg = d3.select("#chart-2")
            .append("svg")
            .attr("width", w)
            .attr("heigth", h);

// svg領域にcircle要素を追加
svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "little")
    .attr("cx", function(d, i) { return x[i]; })
    .attr("cy", function(d, i) { return y[i]; })
    .attr("r", 12);

// Runボタンをクリックした時の動作
d3.select("#catchCircles").on("click", function() {
  // 一旦 class="select"を削除（初期化）
  svg.selectAll(".select").remove();

  // class="select"というcircle要素を
  // 元のサークルに重ね合わせることで囲い込みを実現
  svg.selectAll(".select")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "select")
      .attr("cx", function(d, i) { return x[i]; })
      .attr("cy", function(d, i) { return y[i]; })
      .attr("r", 60)
      .style("fill", "none")
      .style("stroke", "red")
      .style("stroke-opacity", 1e-6)
      .style("stroke-width", 3)
      .transition()
      .duration(750)
      .attr("r", 12)
      .style("stroke-opacity", 1);
});

d3.select("#clearCatchCircles").on("click", function() {
    svg.selectAll(".select").remove();
});

var data2 = [1, 2];
d3.select("#chartChanger2").on("click", function() {
    svg.selectAll(".little").remove();
    svg.selectAll(".select").remove();

    svg.selectAll(".little")
        .data(data2)
        .enter()
        .append("circle")
        .attr("class", ".little")
        .attr("cx", function(d, i) { return x[i]; })
        .attr("cy", function(d, i) { return y[i]; })
        .attr("r", 12);
});

