import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS
} from './types';



export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            },
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'The 50 Best Jazz Drummers Of All Time. 8: Gene Krupa (1909-1973) 7: Buddy Rich (1917-1987) 6: Roy Haynes (born 1925) 5: Elvin Jones (1927-2004) 4: Kenny Clarke (1914-1985) 3: Tony Williams (1945-1997) 2: Max Roach (1924-2007) 1: Art Blakey (1919-1990)',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'The 50 Best Jazz Drummers Of All Time. 8: Gene Krupa (1909-1973) 7: Buddy Rich (1917-1987) 6: Roy Haynes (born 1925) 5: Elvin Jones (1927-2004) 4: Kenny Clarke (1914-1985) 3: Tony Williams (1945-1997) 2: Max Roach (1924-2007) 1: Art Blakey (1919-1990)',
                price: 1.99,
                belongsTo: [0, 6]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'The 50 Best Jazz Drummers Of All Time. 8: Gene Krupa (1909-1973) 7: Buddy Rich (1917-1987) 6: Roy Haynes (born 1925) 5: Elvin Jones (1927-2004) 4: Kenny Clarke (1914-1985) 3: Tony Williams (1945-1997) 2: Max Roach (1924-2007) 1: Art Blakey (1919-1990)',
                price: 1.99,
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'The 50 Best Jazz Drummers Of All Time. 8: Gene Krupa (1909-1973) 7: Buddy Rich (1917-1987) 6: Roy Haynes (born 1925) 5: Elvin Jones (1927-2004) 4: Kenny Clarke (1914-1985) 3: Tony Williams (1945-1997) 2: Max Roach (1924-2007) 1: Art Blakey (1919-1990)',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 4,
                title: 'JavaScript Development',
                description: 'The 50 Best Jazz Drummers Of All Time. 8: Gene Krupa (1909-1973) 7: Buddy Rich (1917-1987) 6: Roy Haynes (born 1925) 5: Elvin Jones (1927-2004) 4: Kenny Clarke (1914-1985) 3: Tony Williams (1945-1997) 2: Max Roach (1924-2007) 1: Art Blakey (1919-1990)',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 5,
                title: 'User Experiance Design',
                description: 'The 50 Best Jazz Drummers Of All Time. 8: Gene Krupa (1909-1973) 7: Buddy Rich (1917-1987) 6: Roy Haynes (born 1925) 5: Elvin Jones (1927-2004) 4: Kenny Clarke (1914-1985) 3: Tony Williams (1945-1997) 2: Max Roach (1924-2007) 1: Art Blakey (1919-1990)',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 6,
                title: 'Advanced OOP',
                description: 'The 50 Best Jazz Drummers Of All Time. 8: Gene Krupa (1909-1973) 7: Buddy Rich (1917-1987) 6: Roy Haynes (born 1925) 5: Elvin Jones (1927-2004) 4: Kenny Clarke (1914-1985) 3: Tony Williams (1945-1997) 2: Max Roach (1924-2007) 1: Art Blakey (1919-1990)',
                price: 1.99,
                belongsTo: [0, 6]
            },
        ]
    })
}