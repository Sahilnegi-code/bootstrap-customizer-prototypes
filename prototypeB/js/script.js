$(document).ready(function() {
    
  var variableInputs = $("#bt-variables input");
  var preview = $("#preview");
  
  // Init event handlers
  for (var i=0; i<variableInputs.length; ++i) {
    var variableInput = variableInputs[i];
    $(variableInput).colorpicker();
    $(variableInput).keyup(updateVariables);
    $(variableInput).colorpicker().on('changeColor', updateVariables);
  }
  
  // Update variables
  function updateVariables() {
    preview.css("color", $("#text-color").val());
    preview.css("background-color", $("#body-bg").val());
  }
});
