export default class ScribbleCore {
    static parse(str) {
        console.log('parsing')
        console.log(str);
    }

    static rules = [];

    static addRule(rule={}) {
        ScribbleCore.rules.push(rule);
    }

    static initialize() {
        ScribbleCore.addRule({
            name: "this is a rule"
        })
    }
}