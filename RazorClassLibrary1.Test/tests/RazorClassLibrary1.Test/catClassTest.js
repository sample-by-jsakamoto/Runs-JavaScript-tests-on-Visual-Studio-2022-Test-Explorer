"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const mocha_1 = require("mocha");
const catClass_1 = require("../RazorClassLibrary1/catClass");
(0, mocha_1.describe)('CatClass', function () {
    it('meows', function () {
        const cat = new catClass_1.CatClass();
        assert.equal('Meow!', cat.meows());
    });
});
//# sourceMappingURL=catClassTest.js.map