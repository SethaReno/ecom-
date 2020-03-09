import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 13.40,
                orderNumber: 'Y0008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Tara Gass',
                    shippingAdress: '1234 East State Street'
                }

            },
            {
                _id: 1,
                total: 19.40,
                orderNumber: 'A0008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAdress: '1234 East State Street'
                }

            },
            {
                _id: 2,
                total: 1.30,
                orderNumber: 'A0008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Seth Bomhoff',
                    shippingAdress: '1234 West State Street'
                }

            },
            {
                _id: 3,
                total: 42.40,
                orderNumber: 'BF0008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Alex Pruett',
                    shippingAdress: '1234 Happy State Street'
                }

            },
            {
                _id: 4,
                total: 15.60,
                orderNumber: 'G190008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'R.J Dawe',
                    shippingAdress: '1234 Wilderness Street'
                }

            },
            {
                _id: 5,
                total: 67.00,
                orderNumber: 'G120008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Jeffery Spooner',
                    shippingAdress: '1234 Pine Street'
                }

            },
            {
                _id: 6,
                total: 12.34,
                orderNumber: 'G130008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Jennifer Stine',
                    shippingAdress: '1234 Here To ThereStreet'
                }

            },
            {
                _id: 7,
                total: 15.50,
                orderNumber: 'F190008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Troy Bomhoff',
                    shippingAdress: '1234 This Is It Street'
                }

            },
            
            

        ]
    })
}