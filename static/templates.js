this["cs279hw2"] = this["cs279hw2"] || {};
this["cs279hw2"]["templates"] = this["cs279hw2"]["templates"] || {};

this["cs279hw2"]["templates"]["CommandMaps"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div id=\"layoutColumn\" class=\"col-xs-6 col-lg-8\">\n        <img class=\"unselectable img-responsive\" id=\"layoutImg\" src=\"img/tabs/commandmap_layout.png\" />\n    </div>\n    <div class=\"col-xs-6 col-lg-4\">\n        <div id=\"infoColumn\">\n            <div class=\"panel panel-default\">\n                <div id=\"commandDescription\" class=\"panel-heading text-center\"></div>\n                <div class=\"panel-body text-center\">\n                    <p>Find the button below on the interface to the left and click on it.</p>\n                    <br>\n                    <img id=\"commandImg\" class=\"unselectable\" src=\"img/icons/bold.png\" />\n                    <br>\n                    <button id=\"next\" type=\"button\" class=\"btn btn-default hidden\">skip</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
  });

this["cs279hw2"]["templates"]["Nasa"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"nasa\" class=\"row\">\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4\">\n        <div class=\"text-left\">\n            <h1>NASA Task Load Index</h1>\n            <!-- Survey content goes here -->\n            <i>\n            Hart and Staveland's NASA Task Load Index (TLX) method assesses work load on a scale ranging from 1 (very low) to 5 (very high). \n            </i>\n            <br>\n            <br>\n              Mental Demand: How mentally demanding was the task?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"mental\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"mental\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"mental\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"mental\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"mental\" value=\"5\"> Very High\n              </form>\n              <br>\n              Physical Demand: How physically demanding was the task?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"physical\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"physical\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"physical\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"physical\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"physical\" value=\"5\"> Very High\n                  </form>\n              <br>\n              Temporal Demand: How hurried or rushed was the pace of the task?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"temporal\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"temporal\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"temporal\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"temporal\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"temporal\" value=\"5\"> Very High\n                  </form>\n              <br>\n              Performance: How successful were you in accomplishing what you were asked to do?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"performance\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"performance\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"performance\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"performance\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"performance\" value=\"5\"> Very High\n                </form>\n              <br>\n              Effort: How hard did you have to work to accomplish your level of performance?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"effort\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"effort\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"effort\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"effort\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"effort\" value=\"5\"> Very High\n                </form>\n              <br>\n              Frustration: How insecure, discouraged, irritated, stressed, and annoyed were you?\n            <form action=\"\">\n                <input type=\"RADIO\" name=\"frustration\" value=\"1\"> Very Low\n                <input type=\"RADIO\" name=\"frustration\" value=\"2\"> Low\n                <input type=\"RADIO\" name=\"frustration\" value=\"3\"> Moderate\n                <input type=\"RADIO\" name=\"frustration\" value=\"4\"> High\n                <input type=\"RADIO\" name=\"frustration\" value=\"5\"> Very High\n                </form>\n        </div>\n        <div class=\"text-right\">\n            <button id=\"next\" type=\"button\" class=\"btn btn-default\" disabled>Next</button>\n        </div>\n    </div>\n    <div class=\"col-lg-4\"></div>\n</div>\n";
  });

this["cs279hw2"]["templates"]["Ribbons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div id=\"layoutColumn\" class=\"col-xs-6 col-lg-8\">\n        <img class=\"unselectable img-responsive\" id=\"layoutImg\" src=\"img/tabs/home_tab.png\" />\n    </div>\n    <div class=\"col-xs-6 col-lg-4\">\n        <div id=\"infoColumn\">\n            <div class=\"panel panel-default\">\n                <div id=\"commandDescription\" class=\"panel-heading text-center\"></div>\n                <div class=\"panel-body text-center\">\n                  <p>Find the button below on the interface to the left and click on it.\n                     You may have to switch tabs to find the button, just as you would\n                     in Microsoft Word.</p>\n                    <br>\n                    <img id=\"commandImg\" class=\"unselectable\" src=\"img/icons/bold.png\" />\n                    <br>\n                    <button id=\"next\" type=\"button\" class=\"btn btn-default hidden\">skip</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
  });

this["cs279hw2"]["templates"]["Start"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n            <h2>Thank you</h2>\n            <p>You have already contributed to this study. The study only requires\n            participants to complete the test once. Due to the nature of the study,\n            if you started (by pressing the start button)\n            and abandoned the test, then you are no longer eligible to take the test.</p>\n        ";
  }

function program3(depth0,data) {
  
  
  return "\n            <div class=\"alert alert-warning\" role=\"alert\">\n                <b>Notice</b> Once you click start, you <b>must</b> complete the study without interruption.\n                If you close this window <b>after</b> pressing start, then you will be unable to take the test again.\n                Please carefully read the instruction below.</p>\n            </div>\n            <h2>Instructions</h2>\n            <p>Please open this url in a browser other than IE and maximize your screen.\n                You will be given further instructions upon clicking the start button below.</p>\n            <button id=\"next\" type=\"button\" class=\"btn btn-lg btn-default\">Start</button>\n        ";
  }

  buffer += "<div class=\"row\">\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4\">\n        <div class=\"text-center\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.started), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    <div class=\"col-lg-4\"></div>\n</div>";
  return buffer;
  });

this["cs279hw2"]["templates"]["Survey"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n                <div class=\"row\">\n                    <div id=\"commandmaps-choice\" class=\"col-xs-6 col-lg-6 addPadding\">\n                        <img class=\"img-responsive\" src=\"img/commandmaps_thumbnail.png\" />\n                    </div>\n                    <div id=\"ribbons-choice\" class=\"col-xs-6 col-lg-6 addPadding\">\n                        <img class=\"img-responsive\" src=\"img/ribbons_thumbnail.png\" style=\"padding-top: 56px\" />\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-6 col-lg-6 addPadding\">\n                        <input type=\"RADIO\" name=\"preference\" value=\"CommandMaps\"> CommandMaps (no tabs)\n                    </div>\n                    <div class=\"col-xs-6 col-lg-6 addPadding\">\n                        <input type=\"RADIO\" name=\"preference\" value=\"Ribbons\"> Ribbons (tabs)\n                    </div>\n                </div>\n            ";
  }

function program3(depth0,data) {
  
  
  return "\n                <div class=\"row\">\n                    <div id=\"ribbons-choice\" class=\"col-xs-6 col-lg-6 addPadding\">\n                        <img class=\"img-responsive\" src=\"img/ribbons_thumbnail.png\" style=\"padding-top: 56px\" />\n                    </div>\n                    <div id=\"commandmaps-choice\" class=\"col-xs-6 col-lg-6 addPadding\">\n                        <img class=\"img-responsive\" src=\"img/commandmaps_thumbnail.png\" />\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-6 col-lg-6 addPadding\">\n                        <input type=\"RADIO\" name=\"preference\" value=\"Ribbons\"> Ribbons (tabs)\n                    </div>\n                    <div class=\"col-xs-6 col-lg-6 addPadding\">\n                        <input type=\"RADIO\" name=\"preference\" value=\"CommandMaps\"> CommandMaps (no tabs)\n                    </div>\n                </div>\n            ";
  }

  buffer += "<div id=\"survey\" class=\"row\">\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4\">\n        <div class=\"text-center\">\n            <h1>Interface Preference</h1>\n            Which interface do you prefer?\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isGroup0), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"text-right\">\n            <button id=\"next\" type=\"button\" class=\"btn btn-default\" disabled>Submit</button>\n        </div>\n    </div>\n    <div class=\"col-lg-4\"></div>\n</div>";
  return buffer;
  });

this["cs279hw2"]["templates"]["ThankYou"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<row id=\"thankyou\">\n    <div class=\"col-lg-12\">\n        <div class=\"text-center\">\n            <div class=\"row\">\n                <h1>Thank You!</h1>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-4\"></div>\n                    <div class=\"col-xs-4\">\n                        <div class=\" addPadding\">\n                            <div class=\"panel panel-success\">\n                            <div id=\"commandDescription\" class=\"panel-heading text-center\">Survey Completion Code</div>\n                            <div class=\"panel-body text-center\">\n                                <b>";
  if (helper = helpers.session) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.session); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-4\"></div>\n            </div>\n\n        </div>\n    </div>\n</row>";
  return buffer;
  });