export interface IProduct {
    id?: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export interface ICard {

    "type": string,
    "id": string,
    "version": number,
    "versionModifiedAt": string,
    "lastMessageSequenceNumber": number,
    "createdAt": string,
    "lastModifiedAt": string,
    "lastModifiedBy": {
        "clientId": string,
        "isPlatformClient": boolean
    },
    "createdBy": {
        "clientId": string,
        "isPlatformClient": boolean
    },
    "lineItems": Array<string>,
    "cartState": string,
    "totalPrice": {
        "type": string,
        "currencyCode": string,
        "centAmount": number,
        "fractionDigits": number
    },
    "shippingMode": string,
    "shipping": Array<string>,
    "customLineItems": Array<string>,
    "discountCodes": Array<string>,
    "directDiscounts": Array<string>,
    "inventoryMode": string,
    "taxMode": string,
    "taxRoundingMode": string,
    "taxCalculationMode": string,
    "deleteDaysAfterLastModification": number,
    "refusedGifts": Array<string>,
    "origin": string,
    "itemShippingAddresses": Array<string>

}

export interface IToken {
    "access_token": string,
    "token_type": string,
    "expires_in": number,
    "scope": string,
}