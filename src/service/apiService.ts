export const postJson = async(url: string, body: any) => {
    const response = await window.fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(body),
    });
    return response.json();
}