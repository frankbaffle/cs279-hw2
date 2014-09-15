this["cs279hw2"] = this["cs279hw2"] || {};
this["cs279hw2"]["templates"] = this["cs279hw2"]["templates"] || {};

this["cs279hw2"]["templates"]["CommandMaps"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div class=\"col-md-2\">\n        <img id=\"commandImg\" src=\"img/icons/bold.png\" />\n    </div>\n    <div class=\"col-md-2\">\n        <p id=\"commandDescription\">bold</p>\n    </div>\n    <div class=\"col-md-8\">\n        <button id=\"next\" type=\"button\" class=\"btn btn-default\">Skip (testing only)</button>\n    </div>\n</div>\n<div class=\"row\">\n    <img id=\"layoutImg\" src=\"img/tabs/commandmap_layout.png\" />\n</div>";
  });

this["cs279hw2"]["templates"]["Nasa"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"Survey \" class=\"tab-pane\">\n            <h1>NASA Task Load Index</h1>\n            <!-- Survey content goes here -->\n            <i>\n            Hart and Staveland's NASA Task Load Index (TLX) method assesses work load on a scale ranging from 1 (very low) to 5 (very high). \n            </i>\n            <br>\n            <br>\n              Mental Demand: How mentally demanding was the task?\n              <form action=\"\" name=\"orderForm_mental\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n              <br>\n              Physical Demand: How physically demanding was the task?\n              <form action=\"\" name=\"orderForm_physical\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n              <br>\n              Temporal Demand: How hurried or rushed was the pace of the task?\n              <form action=\"\" name=\"orderForm_temporal\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n              <br>\n              Performance: How successful were you in accomplishing what you were asked to do?\n              <form action=\"\" name=\"orderForm_performance\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n              <br>\n              Effort: How hard did you have to work to accomplish your level of performance?\n              <form action=\"\" name=\"orderForm_effort\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n              <br>  \n              Frustration: How insecure, discouraged, irritated, stressed, and annoyed were you?\n              <form action=\"\" name=\"orderForm_frustration\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n              <br>\n              <button id=\"next\" type=\"button\" class=\"btn btn-default\">Next</button>\n\n          </div>   ";
  });

this["cs279hw2"]["templates"]["Ribbons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div class=\"col-md-2\">\n        <img id=\"commandImg\" src=\"img/icons/bold.png\" />\n    </div>\n    <div class=\"col-md-2\">\n        <p id=\"commandDescription\">bold</p>\n    </div>\n    <div class=\"col-md-8\">\n        <button id=\"next\" type=\"button\" class=\"btn btn-default\">Skip (testing only)</button>\n    </div>\n</div>\n<div class=\"row\">\n    <img id=\"layoutImg\" src=\"img/tabs/home_tab.png\" />\n</div>";
  });

this["cs279hw2"]["templates"]["Start"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div style=\"width:200px;height:100px;position:absolute;left:50%;top:50%;\nmargin-left:-50px;margin-top:-50px;text-align:center;\">\n    <h1>Start</h1>\n    <br>\n    <button id=\"next\" type=\"button\" class=\"btn btn-default\">Next</button>\n</div>";
  });

this["cs279hw2"]["templates"]["Survey"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n    <h1>Interface Preference Survey</h1>\n    Which interface do you prefer?\n        <form action=\"\" name=\"preference\">\n        	<input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> CommandMap\n            <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Ribbon\n        </form>\n    <br>    \n    <button id=\"next\" type=\"button\" class=\"btn btn-default\">Next</button>\n</div>";
  });

this["cs279hw2"]["templates"]["ThankYou"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n    <h1>Thank You!</h1>\n</div>";
  });