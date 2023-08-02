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

/*

notes

possible syntax

#level 8
#elite

#melee finesse 20ft fire
#piercing 3d12 + 9
#cold 3d8
#negative 2d10 persistent
#attack 37
#name Beak
#actions 1

#str 8
#ability 8 2 4 0 0 1
#save 32 22 11


#athletics @extreme
#something-lore ok

#perception 40

#occult innate

#divine innate
#spell-dc 40
#spell-attack 30

*/