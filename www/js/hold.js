$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("4YAYUcrnd31jyJmX02Hoc7EGE1Qu72024uYENHzM", "oNpuYlbJ0XuRoDPllcUzidFWHCkO3HcaT1ZSnJxA");

    var Hold = Parse.Object.extend("Hold");
    var hold = new Hold();
    hold.save({
      X: [12, 124, 12423,1, 12],
      Y: [1243, 453, 2342, 21, 12],
      duration: 32
      }).then(function(object) {
      alert("yay! it worked");
    });

});
