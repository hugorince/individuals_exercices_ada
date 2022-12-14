const script = require('../script.js')

describe('Motus', () => {
    // it('should retrieve a sentence', () => {
    //     expect(script.sentence.length).toBeGreaterThan(0)
    // });

    // it('should have a specific length of 11', () => {
    //     expect(script.sentence.length).toEqual(11)
    // });

    it('should return true', () => {
        expect(script.tryWord('coucou', 'cocu')).toEqual({wellPlaced: ['c', 'o'], missPlaced: ['u'], notInWord: []})
    });

    it('should return true', () => {
        expect(script.tryWord('hugo', 'julia')).toEqual({wellPlaced: ['u'], missPlaced: [], notInWord: ['h', 'g', 'o']})
    });

    it('should return true', () => {
        expect(script.tryWord('charles', 'manon')).toEqual({wellPlaced: [], missPlaced: ['a'], notInWord: ['c', 'h', 'r', 'l', 'e', 's']})
    });

})