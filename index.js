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

        const url = "https://bimasislam.kemenag.go.id/ajax/getShalatbln";
        const payload = { x, y, bln, thn };

        const response = await axios.post(url, payload, {
            headers: {
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "id;q=0.7",
                "Connection": "keep-alive",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cookie": "PHPSESSID=c3ft20bsu1o2htevk46h1n14q4; bimasislam_session=a%3A5%3A%7Bs%3A10%3A%22session_id%22%3Bs%3A32%3A%228749b9f7fab104c340cceef4ab4b1f17%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A13%3A%22103.139.10.98%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A111%3A%22Mozilla%2F5.0+%28Windows+NT+10.0%3B+Win64%3B+x64%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F133.0.0.0+Safari%2F537.36%22%3Bs%3A13%3A%22last_activity%22%3Bi%3A1739708601%3Bs%3A9%3A%22user_data%22%3Bs%3A0%3A%22%22%3B%7Dc871a990361e49bf46d9679b0254c01c",
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
