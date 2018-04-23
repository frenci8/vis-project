d3.csv("/assets/data/budget.csv", function (error, data) {
    var budget = new dex.csv(data);

    new dex.charts.d3.Treemap({
        'parent':'#TreemapParent',
        'csv':budget
    }).render();
});