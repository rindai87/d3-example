d3.csv("test.csv", function(csv) {
  // CSVは行を１つのオブジェクトとする配列になって読み込まれている
  // 各オブジェクトはhederをキーとして列の値を保持している
  console.log(csv);


  // 行毎に列に対して特定の条件でfilterをかけることができる
  var data = csv.filter(function(row) {
          return row["id"] === "1";
    });
  console.log(data);


  // 特定の列だけを取得する場合
  var data2 = d3.nest()
               .key(function(d) { return d.id; })
               .rollup(function(d) { return d[0].name; })
               .map(csv);
  console.log(data2);
});
