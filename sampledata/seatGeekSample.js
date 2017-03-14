// Query String
//
// curl https://api.seatgeek.com/2/events?client_id=MYCLIENTID
// curl https://api.seatgeek.com/2/events?client_id=MYCLIENTID&client_secret=MYCLIENTSECRET
//
// Basic Auth
//
// curl https://api.seatgeek.com/2/events -u MYCLIENTID:
// curl https://api.seatgeek.com/2/events -u MYCLIENTID:MYCLIENTSECRET

// Definition
//
// GET https://api.seatgeek.com/2/events/801255
//
// Example Request
//
// $ curl 'https://api.seatgeek.com/2/events/801255'
//
// Example Response Document

{
    "stats": {
        "listing_count": 161,
        "average_price": 97,
        "lowest_price": 62,
        "highest_price": 296
    },
    "title": "Young The Giant with Grouplove",
    "url": "https://seatgeek.com/young-the-giant-with-grouplove-tickets/new-york-new-york-terminal-5-2012-03-09/concert/721901/",
    "datetime_local": "2012-03-09T19:00:00",
    "performers": [
        {
            "name": "Young The Giant",
            "short_name": "Young The Giant",
            "url": "https://seatgeek.com/young-the-giant-tickets/",
            "image": "https://chairnerd.global.ssl.fastly.net/images/bandshuge/band_8741.jpg",
            "images": {
                "large": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/eec61caec82950448b257c5e539147bc/large.jpg",
                "huge": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/555bce1815140ad65ab0b1066467ae7d/huge.jpg",
                "small": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/af7a8925e50bb74315337a9450206a39/small.jpg",
                "medium": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/686f925886504610936135abd240235c/medium.jpg"
            },
            "primary": true,
            "id": 8741,
            "score": 6404,
            "type": "band",
            "slug": "young-the-giant"
        },
        {
            "name": "Grouplove",
            "short_name": "Grouplove",
            "url": "https://seatgeek.com/grouplove-tickets/",
            "image": null,
            "images": null,
            "id": 8987,
            "score": 4486,
            "type": "band",
            "slug": "grouplove"
        }
    ],
    "venue": {
        "city": "New York",
        "name": "Terminal 5",
        "extended_address": null,
        "url": "https://seatgeek.com/terminal-5-tickets/",
        "country": "US",
        "state": "NY",
        "score": 149.259,
        "postal_code": "10019",
        "location": {
            "lat": 40.77167,
            "lon": -73.99277
        },
        "address": null,
        "id": 814
    },
    "short_title": "Young The Giant with Grouplove",
    "datetime_utc": "2012-03-10T00:00:00",
    "score": 116.977,
    "taxonomies": [
        {
            "parent_id": null,
            "id": 2000000,
            "name": "concert"
        }
    ],
    "type": "concert",
    "id": 721901
}
}
