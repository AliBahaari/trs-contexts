module.exports = class TrsContexts {

    /*
        TrsContexts Class for Translating
     */

    constructor(config) {

        // `config` => Contexts Object

        this.config = config;
    }

    do(context) {

        // `context` => The Phrase Should Be Translated

        return this.config[context];
    }

}