export type login = {
    email: string,
    password: string,
}

export const theLogin : login = {
    email: 'admin@admin.com',
    password: 'secret_admin',
}

export type user = {
    id: 1,
    username: string,
    role: string,
    email: string,
    password: string,
}

export const theUser: user = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}