// Assignment 6: Shallow vs Deep Trap

const state = {
    user: {
        profile: {
            name: "Kishan",
            skills: ["JS", "Node"]
        }
    }
};

const nextState = {
    ...state,
    user: {
        ...state.user
    }
};

nextState.user.profile.skills.push("React");
nextState.user.profile.name = "Dev";

console.log(state.user.profile.skills);
console.log(state.user.profile.name);

// Predict output
// Explain which references are shared and why

/*
    in this code shallow copy of nextState actually do shallow copy of state and user section profile section is being shared between the nextState and State object that's why when we changed the profile section this changes reflect on both of the side 

    state.user.profile.skills -> it prints ['JS', 'Node', 'React'] because it is shared by both the object
    state.user.profile.name -> it prints Dev because it is shared by both the object
*/