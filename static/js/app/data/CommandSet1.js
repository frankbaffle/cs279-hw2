define(["TrialTargetModel"],
    function (TrialTargetModel) {

        home = new TrialTargetModel({
            name: "home",
            boundingBox: {x: 0, y: 0, width: 1, height: 1},
            parent: null,
            children: [],
            type: "tab"
        });

        bold = new TrialTargetModel({
            name: "bold",
            boundingBox: {x: 0, y: 0, width: 1, height: 1},
            parent: home,
            children: [],
            type: "command"
        });

        home.attributes.children.push(bold);

        return [home, bold];
});