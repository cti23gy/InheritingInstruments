

//Make base class
class instrument {  
    constructor(loudness, family, verb) {   
        this.loudness = loudness;  
        this.family = family;
        this.verb = verb;
    }
    play() {   
        console.log(`Played ${this.family} instrument with ${this.verb} vibrato at ${this.loudness} volume.`);  
    }
}

class woodwinds extends instrument{  
    constructor(loudness) {    
        super(loudness, "woodwinds", "high"); 
    }
}

class strings extends instrument {  
    constructor(loudness) {   
        super(loudness, "strings", "low")
    }
}

class percussion extends instrument {  
    constructor(loudness) {   
        super(loudness, "percussion", "medium")
    }
}

let woo = new woodwinds(30);
let st = new strings(24);
let per = new percussion(16);
woo.play();
st.play();
per.play();

