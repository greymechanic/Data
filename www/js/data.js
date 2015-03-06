$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("4YAYUcrnd31jyJmX02Hoc7EGE1Qu72024uYENHzM", "oNpuYlbJ0XuRoDPllcUzidFWHCkO3HcaT1ZSnJxA");

    var Data = Parse.Object.extend("Data");

    var DataSet = Parse.Collection.extend({
        model: Data
    });

    var DataSetView =  Parse.View.extend({
        template: Handlebars.compile($('#dataSet-tpl').html()),
        render: function(){
            var collection = { data: this.collection.toJSON() };
            this.$el.html(this.template(collection));
        }
    });

    var dataSet = new DataSet();

    dataSet.fetch({
        success: function(dataSet) {
            var dataSetView = new DataSetView({ collection: dataSet });
            dataSetView.render();
            $('#putMyDataHere').html(dataSetView.el);
            console.log(dataSet);
        },
        error: function(dataSet, error) {
            console.log(error);
        }
    });

});
