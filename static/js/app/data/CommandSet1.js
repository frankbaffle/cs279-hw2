define(["TrialTargetModel"],
    function (TrialTargetModel) {

        home = {
            name: "home",
            boundingBox: {x: 75, y: 52, width: 76, height: 31},
            parent: null,
            children: [],
            type: "tab"
        };

        bold = {
            name: "bold",
            boundingBox: {x: 130, y: 146, width: 30, height: 30},
            parent: home,
            children: [],
            type: "command"
        };

        home.children.push(bold);

        return [home, bold];
});