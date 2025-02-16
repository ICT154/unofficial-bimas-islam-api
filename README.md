# Unofficial API for Bimas Islam Prayer Schedule

This is an **Unofficial API** for retrieving prayer schedules from the official Bimas Islam website: [bimasislam.kemenag.go.id](https://bimasislam.kemenag.go.id/jadwalshalat).

## Features

- Fetches monthly prayer schedules.
- Uses Express.js and Axios to request data from the official website.
- Supports query parameters for dynamic data retrieval.

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

```sh
# Clone this repository
git clone https://github.com/ICT154/unofficial-bimas-islam-api.git
cd unofficial-bimas-islam-api

# Install dependencies
npm install

# Run the server
node index.js
```

## Usage

Start the server and access the API endpoint:

```
GET http://localhost:3000/getShalatbln?x=<your_x_value>&y=<your_y_value>&bln=<month>&thn=<year>
```

### Query Parameters
- `x`: Province code (kode provinsi)
- `y`: City or regency code (kode kota atau kabupaten)
- `bln`: Month (1-12)
- `thn`: Year (e.g., 2025)

### Example Request

```sh
curl "http://localhost:3000/getShalatbln?x=c20ad4d76fe97759aa27a0c99bff6710&y=eecca5b6365d9607ee5a9d336962c534&bln=2&thn=2025"
```

### Example Response

```json
{
  "status": 1,
  "message": "Success",
  "prov": "JAWA BARAT",
  "kabko": "KOTA CIMAHI",
  "data": {
    "2030-02-01": {
      "tanggal": "Jumat, 01/02/2030",
      "imsak": "04:22",
      "subuh": "04:32",
      "terbit": "05:44",
      "dhuha": "06:16",
      "dzuhur": "12:07",
      "ashar": "15:26",
      "maghrib": "18:23",
      "isya": "19:31"
    },
    "2030-02-02": {
      "tanggal": "Sabtu, 02/02/2030",
      "imsak": "04:22",
      "subuh": "04:32",
      "terbit": "05:44",
      "dhuha": "06:16",
      "dzuhur": "12:07",
      "ashar": "15:25",
      "maghrib": "18:23",
      "isya": "19:31"
    }
  }
}
```

## Disclaimer

- This API is **not affiliated** with the official Bimas Islam website.
- Data is scraped from the official source, and any changes on their website may break this API.
- Use this API responsibly.

## License

This project is open-source and free to use. Feel free to modify and contribute!

