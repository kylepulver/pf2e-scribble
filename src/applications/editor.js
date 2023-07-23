import ScribbleCore from "../core.js";

export default class ScribbleEditor extends FormApplication {
    constructor(object={}, options={}) {
        super(object, options);
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            // classes: ["dnd5e"],
            id: 'fsafdf',
            classes:["pf2e-scribble"],
            template: "modules/pf2e-scribble/templates/apps/editor.hbs",
            width: 800,
            height: "auto"
        });
    }

    async getData() {
        const data = {};

        data.json = JSON.stringify(this.object, null, 2)
        data.setup = this.object.getFlag('pf2e-scribble','setup') ?? "setup zone";
        data.play = this.object.getFlag('pf2e-scribble','play') ?? "play zone";

        return data;
    }


    async _updateObject(event, formData) {
        this.object.setFlag('pf2e-scribble', 'setup', formData.setup);
        this.object.setFlag('pf2e-scribble', 'play', formData.play);

        ScribbleCore.parse(formData.setup);
    }

    activateListeners(html) {
        // console.log(html);

        // html.on('click', '[type=submit]', () => {
        //     console.log('submit')
        // })

        html.on('click', '[type=reset]', () => {
            console.log('reset')
        })
    }
}