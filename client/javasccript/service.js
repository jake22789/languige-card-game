const url = 'http://localhost:5205';

export async function fetchHand() {
    try {
        const response = await fetch(url+"/hand");
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