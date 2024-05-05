import { loginUser } from "./customer";
import { IToken } from "../models";

const host = 'https://auth.europe-west1.gcp.commercetools.com';
const api = 'https://api.europe-west1.gcp.commercetools.com';
const projectKey = 'rsteam-games-store';
const clientId = 'wgPhvpiwHB8re0G4y3siwiJH';
const clientSecret = 'WdEJqyDjvG6W-RL1o11Meoe16kCmE3kA';

const url = `${host}/oauth/token?grant_type=client_credentials&scope=manage_project:${projectKey}`;

const userEmail = 'sas@test.com';
const userPass = `123`;

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


export async function getCard() {
    let tokenSaved = localStorage.getItem('token');
    let t = null;
    if (tokenSaved) {
        t = JSON.parse(tokenSaved) as IToken;
    } else {
        t = await tokenRequest() as IToken;
        localStorage.setItem('token', JSON.stringify(t))
    }
    const headers = new Headers();
    if (t) {
        headers.append('Authorization', `Bearer ${t.access_token}`);
        headers.append('Content-Type', 'application/json');
    }
    const urlCard = `${api}/${projectKey}/carts`;
    const resp = await fetch(urlCard, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "currency": "USD"
        }),
    });
    const card = await resp.json();
    localStorage.setItem('card', JSON.stringify(card));
    loginUser(userEmail, userPass);
}