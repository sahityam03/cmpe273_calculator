const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doEval = (payload) =>
    fetch(`${api}/user/doEval`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {

        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
