var matrix = [
  [ 0,  1,  2,  3],
  [ 4,  5,  6,  7],
  [ 8,  9, 10, 11],
  [12, 13, 14, 15], 
];

// body要素を選択
var body = d3.select("body");
// body要素にtable要素を追加
var table = body.append("table");
// table要素に空のtr要素を用意
// enter()でmatrixをbindする
// 最後にmatrix要素分のtr要素を追加
var tr = table.selectAll("tr")
              .data(matrix)
              .enter()
              .append("tr");
// tr要素に空のtd要素を用意
// enter()でmatrixの各行の要素をbindする
// その要素数分だけtd要素を追加
// td要素にデータの値をテキストとして追加
var td = tr.selectAll("td")
            .data(function(d) { return d; })
            .enter()
            .append("td")
            .text(function(d) { return d; });


td = d3.selectAll("table tr").select("td");
td.style("color", function(d, i) { return i ? null : "red"; });
