this["cs279hw2"] = this["cs279hw2"] || {};
this["cs279hw2"]["templates"] = this["cs279hw2"]["templates"] || {};

this["cs279hw2"]["templates"]["CommandMaps"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div class=\"col-lg-10\" id=\"layoutColumn\">\n        <img class=\"unselectable img-responsive\" id=\"layoutImg\" src=\"img/tabs/commandmap_layout.png\" />\n    </div>\n    <div class=\"col-lg-2 text-center\" id=\"infoColumn\">\n        <div class=\"text-center\">\n            <img id=\"commandImg\" class=\"unselectable\" src=\"img/icons/bold.png\" />\n        </div>\n        <p id=\"commandDescription\">bold</p>\n        <button id=\"next\" type=\"button\" class=\"btn btn-default\">Skip (testing only)</button>\n    </div>\n</div>";
  });

this["cs279hw2"]["templates"]["Nasa"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"nasa\" class=\"row\">\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4\">\n        <div class=\"text-left\">\n            <h1>NASA-TLX Survey</h1>\n            <!-- Survey content goes here -->\n              Mental Demand: How mentally demanding was the task?\n              <form action=\"\" name=\"orderForm_mental\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n              <br>\n              Physical Demand: How physically demanding was the task?\n              <form action=\"\" name=\"orderForm_physical\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n              <br>\n              Temporal Demand: How hurried or rushed was the pace of the task?\n              <form action=\"\" name=\"orderForm_temporal\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n              <br>\n              Performance: How successful were you in accomplishing what you were asked to do?\n              <form action=\"\" name=\"orderForm_performance\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n              <br>\n              Effort: How hard did you have to work to accomplish your level of performance?\n              <form action=\"\" name=\"orderForm_effort\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n              <br>  \n              Frustration: How insecure, discouraged, irritated, stressed, and annoyed were you?\n              <form action=\"\" name=\"orderForm_frustration\">\n                <input type=\"RADIO\" name=\"myColor\" value=\"1\" checked> Very Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"myColor\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"myColor\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"myColor\" value=\"5\"> Very High\n              </form>\n        </div>\n        <div class=\"text-right\">\n            <button id=\"next\" type=\"button\" class=\"btn btn-default\">Next</button>\n        </div>\n    </div>\n    <div class=\"col-lg-4\"></div>\n</div>";
  });

this["cs279hw2"]["templates"]["Ribbons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div class=\"col-md-2\">\n        <img id=\"commandImg\" src=\"img/icons/bold.png\" />\n    </div>\n    <div class=\"col-md-2\">\n        <p id=\"commandDescription\">bold</p>\n    </div>\n    <div class=\"col-md-8\">\n        <button id=\"next\" type=\"button\" class=\"btn btn-default\">Skip (testing only)</button>\n    </div>\n</div>\n<div class=\"row\">\n    <img id=\"layoutImg\" src=\"img/tabs/home_tab.png\" />\n</div>";
  });

this["cs279hw2"]["templates"]["Start"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4\">\n        <div class=\"text-center\">\n            <h2>To begin, press the start button below.</h2>\n            <button id=\"next\" type=\"button\" class=\"btn btn-lg btn-default\">Start</button>\n        </div>\n    </div>\n    <div class=\"col-lg-4\"></div>\n</div>";
  });

this["cs279hw2"]["templates"]["Survey"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"survey\" class=\"row\">\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4\">\n        <div class=\"text-left\">\n            <h1>Interface Preference</h1>\n            Which interface do you prefer?\n            <form action=\"\" name=\"preference\">\n                <div class=\"form-group-lg\">\n                    <input type=\"RADIO\" name=\"myColor\" value=\"1\" > CommandMap\n                </div>\n                <div class=\"form-group-lg\">\n                    <input type=\"RADIO\" name=\"myColor\" value=\"2\"> Ribbon\n                </div>\n            </form>\n        </div>\n        <div class=\"text-right\">\n            <button id=\"next\" type=\"button\" class=\"btn btn-default\">Submit</button>\n        </div>\n    </div>\n    <div class=\"col-lg-4\"></div>\n</div>";
  });

this["cs279hw2"]["templates"]["ThankYou"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n    <h1>Thank You!</h1>\n</div>";
  });