define(["TrialTargetModel"],
    function (TrialTargetModel) {

        home = {
            name: "home",

            boundingBox: {x: 56, y: 39, width: 59, height: 25} ,
            parent: null,
            children: [],
            type: "tab"
        };
        insert = {
            name: "insert",

            boundingBox: {x: 117, y: 171, width: 60, height: 28} ,
            parent: null,
            children: [],
            type: "tab"
        };
        view = {
            name: "view",

            boundingBox: {x: 537, y: 823, width: 57, height: 23},
            parent: null,
            children: [],
            type: "tab"
        };

        bold = {
            name: "bold",
            boundingBox: {x: 98, y: 112, width: 25, height: 22} ,
            parent: home,
            children: [],
            type: "command"
        };
        sort = {
            name: "sort",
            boundingBox: {x: 562, y: 80, width: 26, height: 23},
            parent: home,
            children: [],
            type: "command"
        };
        borders = {
            name: "borders",
            boundingBox: {x: 578, y: 112, width: 38, height: 24},
            parent: home,
            children: [],
            type: "command"
        };

        picture = {
            name: "picture",
            boundingBox: {x: 178, y: 200, width: 54, height: 79},
            parent: insert,
            children: [],
            type: "command"
        };
        chart = {
            name: "chart",
            boundingBox: {x: 373, y: 202, width: 54, height: 80},
            parent: insert,
            children: [],
            type: "command"
        };

        zoom = {
            name: "zoom",
            boundingBox: {x: 468, y: 851, width: 62, height: 79},
            parent: view,
            children: [],
            type: "command"
        };

        home.children.push(bold);
        home.children.push(sort);
        home.children.push(borders);

        insert.children.push(picture);
        insert.children.push(chart);

        view.children.push(zoom);

        return [home, insert, view, bold, sort, borders, picture, chart, zoom];

});