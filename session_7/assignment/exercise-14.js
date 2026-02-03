// Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function () {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();

/*
    Output: undefined
    player.updateScore() invoked the function and implicitly bind player obj to this method but inside that setTimeout is being called that take anonamous function as a argument so for this function doesn't inherit this from the updateScore() so it considered global this scope which is window.score = undefined.
*/
