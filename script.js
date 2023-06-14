document.addEventListener('DOMContentLoaded', function() {
  var sparkContainer = document.getElementById('sparkContainer');

  document.addEventListener('mousemove', function(event) {
    createSpark(event.clientX, event.clientY);
  });

  function createSpark(x, y) {
    var spark = document.createElement('div');
    spark.className = 'spark';
    spark.style.left = (x - 5) + 'px'; // Adjust position to center the spark
    spark.style.top = (y - 5) + 'px'; // Adjust position to center the spark
    sparkContainer.appendChild(spark);

    // Remove the spark after a short delay
    setTimeout(function() {
      sparkContainer.removeChild(spark);
    }, 500);

    // Trigger fade-in animation
    setTimeout(function() {
      spark.style.opacity = 1;
    }, 10);

    // Trigger fade-out animation
    setTimeout(function() {
      spark.style.opacity = 0;
    }, 400);
  }
});
