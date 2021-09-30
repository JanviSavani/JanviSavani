function freezeObj() {
    const MY_SELF = {
      NAME : "Janvi",
      ROLE : "Learning JS"
    };

    Object.freeze(MY_SELF);
    
    try {
        MY_SELF.NAME = "Savani";
    } catch(ex) {
        console.log(ex);
    }
        return MY_SELF.NAME;
}

const myName = freezeObj();
console.log(myName);