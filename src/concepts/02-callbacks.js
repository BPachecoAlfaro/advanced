import { heroes } from "./data/heroes"

/**
 * 
 * @param {HMTLDivElement} element 
 */
export const callbacksComponent = ( element ) => {


    const id = '5d86371fd55e2e2a30fe1ccb1'
    const id2 = '5d86371fd55e2e2a30fe1ccb2'

    findHero( id ,(error, hero1 ) => {

        if ( error ) {
            element.innerHTML = error;
            return;
        }

        findHero( id2 , (error, hero2 ) => {
            if ( error ) {
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${ hero1.name } / ${ hero2.name} `
        })

    });

}


/**
 * 
 * @param {String} id 
 * @param { ( error?:String, hero: Object)=> void } callback 
 */
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id  === id );

    if ( !hero ) {
        callback(`Hero with id ${ id } not found.`);
        return;
    }

    callback( null, hero );
}