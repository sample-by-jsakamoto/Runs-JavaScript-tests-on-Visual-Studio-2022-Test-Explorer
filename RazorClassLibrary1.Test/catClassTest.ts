import * as assert from "assert";
import { describe } from "mocha";
import { CatClass } from "../RazorClassLibrary1/catClass";

describe('CatClass', function () {

    it('meows', function () {
        const cat = new CatClass();
        assert.equal('Meow!', cat.meows());
    });
});