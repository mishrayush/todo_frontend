// pages/api/quotes.js

export default async function handler(req, res) {
    try {
        const response = await fetch("https://dummyjson.com/quotes?limit=500");
        const data = await response.json();
        res.status(200).json(data.quotes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch quotes" });
    }
}
