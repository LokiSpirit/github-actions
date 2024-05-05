import { ICard, IToken } from "../models";

const host = 'https://auth.europe-west1.gcp.commercetools.com';
const api = 'https://api.europe-west1.gcp.commercetools.com';
const projectKey = 'rsteam-games-store';
const clientId = 'wgPhvpiwHB8re0G4y3siwiJH';
const clientSecret = 'WdEJqyDjvG6W-RL1o11Meoe16kCmE3kA';

const url = `${host}/oauth/token?grant_type=client_credentials&scope=manage_project:${projectKey}`;

async function tokenRequest() {
    const headers = new Headers();

    headers.append('Authorization', 'Basic ' + btoa(`${clientId}:${clientSecret}`));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const resp = await fetch(url, {
        method: 'POST',
        headers: headers
    });

    const data = resp.json();

    return data;
}

export async function loginUser(email: string, password: string) {
    const apiUrl = `https://api.europe-west1.gcp.commercetools.com/${projectKey}/login`;

    let tokenSaved = localStorage.getItem('token');
    let t = null;

    if (tokenSaved) {
        t = JSON.parse(tokenSaved) as IToken;
    } else {
        t = await tokenRequest() as IToken;
        localStorage.setItem('token', JSON.stringify(t))
    }

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${t.access_token}`);
    headers.append('Content-Type', 'application/json');

    const card = localStorage.getItem('card');
    if (card) {
        const cardParsed: ICard = JSON.parse(card);
        const requestBody = {
            email: email,
            password: password,
            anonymousCart: {
                id: `${cardParsed.id}`,
                typeId: "cart"
            }
        }
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody)
        });

        const responseData = await response.json();
        console.log(responseData);
    }
}