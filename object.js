// Making environment object 

var environment = {
    colors : ['white', 'black', 'green', 'blue'],
    tree: true,
    animals: true,
    treeName: {
        neem: {
            wood: [true, "We use the wood of neem tree"],
            fruit: [false, "We do not eat fruits of neem tree"],
            leaf: [true, "We use the leaves of neem tree"]
        },
        mango:{
            wood: [true, "We use the wood of mango tree"],
            fruit: [false, "We eat fruits of mango tree"],
            leaf: [true, "We use the leaves of mango tree"]
        },
        banana: {
            wood: [false, "We do not use the wood of banana tree"],
            fruit: [false, "We eat fruits of banana tree"],
            leaf: [true, "We do not use the leaves of banana tree"]
        }
    }
}

// Accesing the values of the environment obj 

var el = document.getElementById('firstBox4');
el.textContent = environment.animals;

var el2 = document.getElementById('secondBox4');
el2.textContent = environment.treeName.banana.wood;
