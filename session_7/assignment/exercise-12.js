// Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

/*
    Output: 101 undefined
    showId.call, apply both use for explicitly binding the object to the method so when showId.call(agent) it passed agent as a this so in the showId this.id print the 101 and apply work same but it take a array of arguments in this case it passed with null so it print the undefined.
*/
