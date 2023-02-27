import { heroes } from "./data/heroes"

/**
 * 
 * @param {HMTLDivElement} element 
 */
export const asyncComponent = ( element ) => {

    const id1 = '5d86371f233c9f2425f16916';
    console.log( 'Inicio de componente' );

    findHero( id1 )
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error );

}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id );
    if ( !hero)
        throw `Hero with id ${ id } not found`;

    return hero.name;
}