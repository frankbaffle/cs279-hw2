define(["TrialTargetModel"],
    function (TrialTargetModel) {

        home = {
            name: "home",
            boundingBox: {x: 0, y: 0, width: 1, height: 1},
            parent: null,
            children: [],
            type: "tab"
        };

        italics = {
            name: "italics",
            boundingBox: {x: 0, y: 0, width: 1, height: 1},
            parent: home,
            children: [],
            type: "command"
        };

        home.children.push(italics);

        return [home, italics];
});