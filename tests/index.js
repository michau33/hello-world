/* eslint linebreak-style: ["error", "windows"] */
/* global chai */
/* eslint indent: [2, 4] */

import helloWorld from '../src/index';

const expect = chai.expect;

describe( 'hello world', () => {
    it( 'is a function', () => {
        expect( helloWorld ).to.be.a( 'function' );
    } );
    it( 'returns hello world', () => {
        const result = helloWorld();
        expect( result ).to.equal( 'Hello world !' );
    } );
} );

