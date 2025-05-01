const BaseUrl = 'http://localhost:5205';

export async function fetchHand() {
    try {
        const response = await fetch(BaseUrl+"/hand");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export async function sendNewCard(word,translated) {
    const url = `${BaseUrl}/makecard/${word}/${translated}`;
    const response = await fetch(url,{
        body: JSON.stringify({word,translated}),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
}