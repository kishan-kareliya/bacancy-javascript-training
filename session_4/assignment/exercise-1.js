// 1. Predict the output and explain the memory state.
const registry = {
    active: [{ id: 1, name: "Alpha" }],
    archived: []
};

function cloneAndModify(data) {
    // Goal: Create a copy so the original registry isn't changed
    const copy = { ...data };

    copy.active.push({ id: 2, name: "Beta" });
    copy.active[0].name = "Gamma";
    copy.version = 2.0;

    return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // ?
console.log(registry.active[0].name); // ?
console.log(registry.version);       // ?

/*

 1. registry.active.length -> 2 shows the length of 2 because cloneAndModify function actually do shallow copy of registry function where nested array or object is being shared between registry and newRegistry object that's why both have same changed.

 2. registry.active[0].name -> Gamma it display the gamma because the same reason as i mentioned above where both
 have shared the object that's why changing the newRegistry object changed the registry and vice versa.

 3. registy.version -> undefined because the primitive datatype is independent it is shallow copy so primitive is different only nested object and array being shared that's why when we add newRegistry/copy.version it had saperate space with registry actual object.

*/
