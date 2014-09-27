this["cs279hw2"] = this["cs279hw2"] || {};
this["cs279hw2"]["templates"] = this["cs279hw2"]["templates"] || {};

this["cs279hw2"]["templates"]["CommandMaps"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div id=\"layoutColumn\" class=\"col-xs-6 col-lg-8\">\n        <img class=\"unselectable img-responsive\" id=\"layoutImg\" src=\"img/tabs/commandmap_layout.png\" />\n    </div>\n    <div class=\"col-xs-6 col-lg-4\">\n        <div id=\"infoColumn\">\n            <div class=\"panel panel-default\">\n                <div id=\"commandDescription\" class=\"panel-heading text-center\"></div>\n                <div class=\"panel-body text-center\">\n                    <img id=\"commandImg\" class=\"unselectable\" src=\"img/icons/bold.png\" />\n                    <br>\n                    <button id=\"next\" type=\"button\" class=\"btn btn-default hidden\">skip</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
  });

this["cs279hw2"]["templates"]["Nasa"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"nasa\" class=\"row\">\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4\">\n        <div class=\"text-left\">\n            <h1>NASA Task Load Index</h1>\n            <!-- Survey content goes here -->\n            <i>\n            Hart and Staveland's NASA Task Load Index (TLX) method assesses work load on a scale ranging from 1 (very low) to 5 (very high). \n            </i>\n            <br>\n            <br>\n              Mental Demand: How mentally demanding was the task?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"mental\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"mental\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"mental\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"mental\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"mental\" value=\"5\"> Very High\n              </form>\n              <br>\n              Physical Demand: How physically demanding was the task?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"physical\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"physical\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"physical\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"physical\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"physical\" value=\"5\"> Very High\n                  </form>\n              <br>\n              Temporal Demand: How hurried or rushed was the pace of the task?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"temporal\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"temporal\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"temporal\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"temporal\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"temporal\" value=\"5\"> Very High\n                  </form>\n              <br>\n              Performance: How successful were you in accomplishing what you were asked to do?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"performance\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"performance\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"performance\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"performance\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"performance\" value=\"5\"> Very High\n                </form>\n              <br>\n              Effort: How hard did you have to work to accomplish your level of performance?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"effort\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"effort\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"effort\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"effort\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"effort\" value=\"5\"> Very High\n                </form>\n              <br>\n              Frustration: How insecure, discouraged, irritated, stressed, and annoyed were you?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"frustration\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"frustration\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"frustration\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"frustration\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"frustration\" value=\"5\"> Very High\n                </form>\n        </div>\n        <div class=\"text-right\">\n            <button id=\"next\" type=\"button\" class=\"btn btn-default\" disabled>Next</button>\n        </div>\n    </div>\n    <div class=\"col-lg-4\"></div>\n</div>\n";
  });

this["cs279hw2"]["templates"]["Ribbons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div id=\"layoutColumn\" class=\"col-xs-6 col-lg-8\">\n        <img class=\"unselectable img-responsive\" id=\"layoutImg\" src=\"img/tabs/home_tab.png\" />\n    </div>\n    <div class=\"col-xs-6 col-lg-4\">\n        <div id=\"infoColumn\">\n            <div class=\"panel panel-default\">\n                <div id=\"commandDescription\" class=\"panel-heading text-center\"></div>\n                <div class=\"panel-body text-center\">\n                    <img id=\"commandImg\" class=\"unselectable\" src=\"img/icons/bold.png\" />\n                    <br>\n                    <button id=\"next\" type=\"button\" class=\"btn btn-default hidden\">skip</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
  });

this["cs279hw2"]["templates"]["Start"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4\">\n        <div class=\"text-center\">\n            <h2>To begin, press the start button below.</h2>\n            <button id=\"next\" type=\"button\" class=\"btn btn-lg btn-default\">Start</button>\n        </div>\n    </div>\n    <div class=\"col-lg-4\"></div>\n</div>";
  });

this["cs279hw2"]["templates"]["Survey"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"survey\" class=\"row\">\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4\">\n        <div class=\"text-left\">\n            <h1>Interface Preference</h1>\n            Which interface do you prefer?\n            <form action=\"\">\n                <div class=\"form-group-lg\">\n                    <input type=\"RADIO\" name=\"preference\" value=\"CommandMaps\"> CommandMaps\n                </div>\n                <div class=\"form-group-lg\">\n                    <input type=\"RADIO\" name=\"preference\" value=\"Ribbons\"> Ribbons\n                </div>\n            </form>\n        </div>\n        <div class=\"text-right\">\n            <button id=\"next\" type=\"button\" class=\"btn btn-default\">Submit</button>\n        </div>\n    </div>\n    <div class=\"col-lg-4\"></div>\n</div>";
  });

this["cs279hw2"]["templates"]["ThankYou"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<row id=\"thankyou\">\n    <div class=\"col-lg-12 vertical-center-item\">\n        <div class=\"text-center\">\n            <h1>Thank You!</h1>\n        </div>\n    </div>\n</row>";
  });