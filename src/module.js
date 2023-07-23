import ScribbleEditor from "./applications/editor.js";
import ScribbleCore from "./core.js";

const MODULE_ID = 'pf2e-scribble';

Hooks.on('init', () => {
    console.log("Pathfinder 2e Scribble: Initialized");
    // libWrapper.register(
    //     MODULE_ID,
        
    // )

    ScribbleCore.initialize();

})

// Hooks.on('renderActorSheetPF2e', (app, html, options) => {
//     console.log("SCRIBBLE TIME")
//     console.log(app);
// })

Hooks.on('getActorSheetPF2eHeaderButtons', (app, buttons) => {
    buttons.unshift({
        label: "Scribble",
        icon: "fas fa-brush",
        class: "edit-scribble",
        onclick: () => new ScribbleEditor(app.object).render(true),
    })

    return buttons;
})


Hooks.on('getItemSheetPF2eHeaderButtons', (app, buttons) => {
    buttons.unshift({
        label: "Scribble",
        icon: "fas fa-brush",
        class: "edit-scribble",
        onclick: () => new ScribbleEditor(app.object).render(true),
    })

    return buttons;
})