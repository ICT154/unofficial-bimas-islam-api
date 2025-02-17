const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.get("/getShalatbln", async (req, res) => {
    try {
        const { x, y, bln, thn } = req.query;

        if (!x || !y || !bln || !thn) {
            return res.status(400).json({ error: "Missing required query parameters" });
        }

        const mainPageResponse = await axios.get("https://bimasislam.kemenag.go.id/jadwalshalat", {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
            }
        });

        const cookies = mainPageResponse.headers["set-cookie"]
            .map(cookie => cookie.split(";")[0])
            .join("; ");

        const url = "https://bimasislam.kemenag.go.id/ajax/getShalatbln";
        const payload = { x, y, bln, thn };

        const response = await axios.post(url, payload, {
            headers: {
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "id;q=0.7",
                "Connection": "keep-alive",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cookie": cookies,
                "Host": "bimasislam.kemenag.go.id",
                "Origin": "https://bimasislam.kemenag.go.id",
                "Referer": "https://bimasislam.kemenag.go.id/jadwalshalat",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Sec-GPC": "1",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
                "X-Requested-With": "XMLHttpRequest",
                "sec-ch-ua": "\"Not(A:Brand\";v=\"99\",\"Brave\";v=\"133\",\"Chromium\";v=\"133\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "Windows"
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
