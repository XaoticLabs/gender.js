var gender = {};

gender.validGenders = [
    // Gender 0
    {
        identity: "female",
        acronyms: [
            "female",
            "girl",
            "woman"
        ]
    },

    // Gender 1
    {
        identity: "male",
        acronyms: [
            "boy",
            "male",
            "guy",
            "man"
        ]
    }
];

gender.checkGender = function(g) {
	gender.sanityCheck();
    if (typeof g === "string") {
        for (var i = gender.validGenders.length - 1; i >= 0; i--) {
            for (var j = gender.validGenders[i].acronyms.length - 1; j >= 0; j--) {
                if (gender.validGenders[i].acronyms[j] == g.toLowerCase())
                    return gender.validGenders[i].identity;
            }
        }
        throw "Gender does not exist";
    } else if (typeof g === "boolean") {
        return gender.validGenders[+g].identity;
    } else if (typeof g === "number") {
        return gender.validGenders[g].identity;
    }

    throw "Given argument is not valid";
};

gender.sanityCheck = function() {
    if (gender.validGenders.length > 2) {
        gender = null;
        throw "FATAL ERROR: More than two 'valid' genders detected, altough there cannot be more than two genders!";
    }
};

gender.sanityCheck();