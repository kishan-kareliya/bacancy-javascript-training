/*
  JS: Transform Array of Objects into Tag-Based Mapping
  
  const input = [
    { id: 3, tags: ["a", "b"] },
    { id: 1, tags: ["b", "c"] },
    { id: 2, tags: ["a", "c", "d"] },
    { id: 2, tags: ["d", "e"] }, // duplicate id
  ];
 
  const output = {
    a: [2, 3],
    b: [1, 3],
    c: [1, 2],
    d: [2],
    e: [2]
  };
*/

const inputs = [
    { id: 3, tags: ["a", "b"] },
    { id: 1, tags: ["b", "c"] },
    { id: 2, tags: ["a", "c", "d"] },
    { id: 2, tags: ["d", "e"] },
];

const output = inputs.reduce((acc, input) => {
    input.tags.forEach((tag) => {
        if (acc[tag]) {
            if (!acc[tag].includes(input.id)) {
                acc[tag].push(input.id);
                acc[tag].sort();
            }
        }
        else {
            acc[tag] = [input.id]
        }
    })
    return acc;
}, {})

console.log(output);