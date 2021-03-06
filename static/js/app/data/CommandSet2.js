define(["TrialTargetModel"],
    function (TrialTargetModel) {

        home = {
            name: "home",
            boundingBox: {x: 73, y: 51, width: 77, height: 31},
            parent: null,
            children: [],
            type: "tab"
        };
        insert = {
            name: "insert",
            boundingBox: {x: 159, y: 50, width: 77, height: 34},
            parent: null,
            children: [],
            type: "tab"
        };
        
        pagelayout = {
            name: "pagelayout",
            boundingBox: {x: 246, y: 50, width: 122, height: 32},
            parent: null,
            children: [],
            type: "tab"
        };
        references = {
            name: "references",
            boundingBox: {x: 377, y: 52, width: 118, height: 31},
            parent: null,
            children: [],
            type: "tab"
        };
        mailing = {
            name: "mailing",
            boundingBox: {x: 501, y: 51, width: 97, height: 32},
            parent: null,
            children: [],
            type: "tab"
        };
        review = {
            name: "review",
            boundingBox: {x: 606, y: 52, width: 88, height: 30},
            parent: null,
            children: [],
            type: "tab"
        };
        view = {
            name: "view",
            boundingBox: {x: 700, y: 50, width: 72, height: 34},
            parent: null,
            children: [],
            type: "tab"
        };

        italics = {
            name: "italics",
            boundingBox: {x: 160, y: 147, width: 36, height: 31},
            parent: home,
            children: [],
            type: "command"
        };
        highlight = {
            name: "highlight",
            boundingBox: {x: 400, y: 146, width: 49, height: 31},
            parent: home,
            children: [],
            type: "command"
        };
        superscript = {
            name: "superscript",
            boundingBox: {x: 315, y: 146, width: 36, height: 32},
            parent: home,
            children: [],
            type: "command"
        };

        hyperlink = {
            name: "hyperlink",
            boundingBox: {x: 570, y: 88, width: 163, height: 34},
            parent: insert,
            children: [],
            type: "command"
        };
        table = {
            name: "table",
            boundingBox: {x: 160, y: 87, width: 71, height: 104},
            parent: insert,
            children: [],
            type: "command"
        };

        macros = {
            name: "macros",
            boundingBox: {x: 1355, y: 88, width: 72, height: 103},
            parent: view,
            children: [],
            type: "command"
        };

        home.children.push(italics);
        home.children.push(highlight);
        home.children.push(superscript);
        insert.children.push(hyperlink);
        insert.children.push(table);
        view.children.push(macros);

        return [home, insert, pagelayout, references, mailing, review, view, italics, highlight, superscript, hyperlink, table, macros];
        //return [home, insert, view, italics, highlight, superscript, hyperlink, table, macros];


});