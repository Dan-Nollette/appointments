var lower_case = function(string1) {
  return string1.toLowerCase();
};

$(document).ready(function() {
  $("form#appointments").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var description = $("#description").val();
    var date = $("#date").val();
    var startTime = $("#start-time").val();
    var endTime = $("#end-time").val();
		$("#nameOutput").text(name);
		$("#descriptionOutput").text(description);
		$("#dateOutput").text(date);
		$("#endTimeOutput").text(endTime);
		$("#startTimeOutput").text(startTime);
  });

});
