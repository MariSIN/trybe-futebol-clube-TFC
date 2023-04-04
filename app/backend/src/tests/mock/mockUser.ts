type login = {
    email: string,
    password: string,
}

export const theLogin : login = {
    email: 'admin@admin.com',
    password: 'secret_admin',
}

export const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjgwNjIzNTA1LCJleHAiOjE2ODA4ODI3MDV9.lvJzp48iWA575y18FbkKTa3atOTNfjHiRVzhr4KNBro'

type user = {
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


type verify = {
   id: number,
   username: string,
   role: string,
   email: string, 
}

export const verifyToken: verify = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
}