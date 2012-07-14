// svg領域の高さと幅を設定
var width = 500;
var height = 50;

// dataset
//var dataset = [5, 10, 15, 20, 25];
var dataset = [5];

// bodyタグ内に幅500, 高さ50のsvgタグを生成
var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("heigth", height);

// circleタグを作る
var circle = svg.selectAll("circle")
                .data(dataset)
                .enter()
                .append("circle")
                .attr("cx", function(d, i) {
                      return (i * 50) + 25;
                    })
                .attr("cy", height/2)
                .attr("r", function(d) {
                      return d;
                    });

// fillやstroke等のattributeを入れることもできる
/*
.attr("fill", "yellow")
.attr("stroke", "orange")
.attr("stroke-width", function(d) {
        return d/2;
      });
*/


circle.transition()
  .duration(750)
  .delay(function(d, i) {
          return i * 10;
        })
  .attr("r", function(d) { return Math.sqrt(d * scale); });
