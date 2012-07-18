var w = 200;
var h = 180;
var x = 50;
var y = 50;


var svg = d3.select("#demo")
            .append("svg")
            .attr("width", w)
            .attr("heigth", h);

var circle = svg.selectAll("circle")
                .data([1]);
circle.enter()
      .append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 10);


// ボタンをクリックしたら
// 一度円を消してサイズを変更して最終的には消す
d3.select("#startDemo").on("click", function() {
    svg.selectAll("circle").remove();
    svg.selectAll("circle")
        .data([1])
        .enter()
        .append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 0)
      .transition()
        .attr("r", 20)
      .transition()
        .attr("r", 20)
      .remove();
});
