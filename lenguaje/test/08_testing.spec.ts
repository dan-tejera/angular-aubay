import { factorial } from "./08_testing";

// Suite
fdescribe('Cálculo del factorial', () => {
    
    // Espectativa
    it('4 should be 4', () => {
        
        let x = 4
        expect(x).toBe(4)
        
    });

    // Espectativa
    it('5 not should be 4', () => {
        
        let x = 5
        expect(x).not.toBe(4)
        
    });

    // Espectativa
    it('0! should be 1', () => {
        
        let x = 0
        expect(factorial(x)).toBe(1)
        
    });

    // Espectativa
    it('1! should be 1', () => {
        
        let x = 1
        expect(factorial(x)).toBe(1)
        
    });

    // Espectativa
    it('5! should be 120', () => {
        
        let x = 5
        expect(factorial(x)).toBe(120)
        
    });

    // Espectativa
    it('-5! should be throw error', () => {
        
        let x = -5
        expect(() => factorial(x)).toThrowError('Número negativo')
        
    });

    // Espectativa
    it('5.5 should be throw error', () => {
        
        let x = 5.5
        expect(() => factorial(x)).toThrowError(/con decimales/) // con / admite parte del texto
        
    });

});