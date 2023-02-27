import { heroes } from "./data/heroes"

/**
 * 
 * @param {HMTLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }
    
    const renderTwoHeros = ( hero1, hero2 ) => {
        element.innerHTML = `
            <h3>${ hero1.name }</h3>
            <h3>${ hero2.name }</h3>
        `
    } 

    const renderError = ( error ) => {
        element.innerHTML = `
        <h1>Error!</h1>
            <h3>${ error }</h3>
        `;
    }

    const id1 = '5d86371fd55e2e2a30fe1cc4';
    const id2 = '5d86371fd55e2e2a30fe1cc3';
    
    Promise.all( [
        findHero( id1 ),
        findHero( id2 ),
     ])
     .then( ([hero1, hero2]) => renderTwoHeros( hero1, hero2))
     .catch( renderError );
    
    //! forma 2
    // let hero1;
    // findHero( id1 )
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero( id2 );
    //     }).then( hero2 => {
    //         renderTwoHeros( hero1, hero2);
    //     })
    //     .catch( renderError );

    //! forma 1    
    // findHero( id1 )
    //     .catch( ( hero1 ) => {
    //         findHero( id2 )
    //             .then( hero2 => {
    //                 renderTwoHeros( hero1, hero2 )
    //             })
    //             .catch( renderError );
    //     })
    //     .catch( renderError );
    
} 

/**
 * 
 * @param {String} id 
 * @returns {Promise} 
 */
const findHero = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        const hero = heroes.find( hero => hero.id === id );

        if ( hero ) {
            resolve( hero );
            return;
        }

        reject(`Hero with id ${ id } not found`);

    });
}