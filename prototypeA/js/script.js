$(document).ready(function() {

  var iframe = $("#iframe")[0];
  var autoSync = $("#autosync");  
  var variableInputs = $("#bt-variables input");
  
   $(iframe).load(function(){
     var iframeHead = $(iframe).contents().find("head")[0];
     var link = document.createElement("link");
     link.rel = "stylesheet/less";
     link.type = "text/css";
     link.href = "bootstrap/bootstrap.less";
     var script1 = document.createElement("script");
     script1.text = "less = {env: \"production\"};";
     var script2 = document.createElement("script");;
     script2.src = "js/less.js";
     iframeHead.appendChild(link);
     iframeHead.appendChild(script1);
     iframeHead.appendChild(script2);
    }); 
  
  
  // Init event handlers
  for (var i=0; i<variableInputs.length; ++i) {
    var variableInput = variableInputs[i];
    $(variableInput).colorpicker();
    $(variableInput).keyup(function(){onChange(variableInput);});
    $(variableInput).colorpicker().on('changeColor', function(ev){onChange(variableInput)});
  }
  
  $("#refresh").click(updateVariables);
  
  function onChange(variableInput) {
    if (autoSync.prop("checked")) {
      var oldValue = variableInput.value;
      setTimeout(function(){
        if (variableInput.value == oldValue) {
          updateVariables();
        }
      }, 1000);
    }
  }
  
  // Update variables
  function updateVariables() {
    var varMap = {};
    for (var i=0; i<variableInputs.length; ++i) {
      var variableInput = variableInputs[i];
      var name = '@' + variableInput.id;
      varMap[name] = variableInput.value;
    }
    iframe.contentWindow.less.modifyVars(varMap);
  }
  
});
