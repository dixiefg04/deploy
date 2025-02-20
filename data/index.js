import { getGalleryData } from "./galeria/datosGaleria";
import { getHeroData } from "./hero/hero";

//----------------Nav
import navData from "./global/nav";
//--------------- Productos 

import { getProductData } from "./productos/producto1";

import tabladeportes from "./tablas/deportes"

export const generarContextoDePagina = (page)=>{
    console.log('page', page);
    const contextObject = {
        ...navData,
    };
    let pageObject = {}
    switch(page){
        case '/gallery.html':
            pageObject = getGalleryData();
            break;
        case '/index.html':
            pageObject = getHeroData();
            pageObject ={
                ...pageObject,
                ...tabladeportes


            }
            break;
        case '/productos/producto1.html':
            pageObject = getProductData();
            break;
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject
    }
}