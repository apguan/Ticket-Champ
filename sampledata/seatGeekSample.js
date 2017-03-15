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

//https://api.seatgeek.com/2/performers?q=lady+gaga&client_id=NzA2MzY4MnwxNDg5NTE0NDA0Ljc1

{
  "meta": {
    "per_page": 10,
    "total": 6,
    "page": 1,
    "took": 14,
    "geolocation": null
  },
  "performers": [
    {
      "links": [],
      "image": "https://chairnerd.global.ssl.fastly.net/images/performers-landscape/lady-gaga-5a5ffb/1083/huge.jpg",
      "colors": null,
      "images": {
        "huge": "https://chairnerd.global.ssl.fastly.net/images/performers-landscape/lady-gaga-5a5ffb/1083/huge.jpg"
      },
      "has_upcoming_events": true,
      "id": 1083,
      "genres": [
        {
          "id": 452,
          "slug": "pop",
          "name": "Pop",
          "primary": true
        },
        {
          "id": 456,
          "slug": "rock",
          "name": "Rock",
          "primary": false
        }
      ],
      "stats": {
        "event_count": 88
      },
      "image_license": "https://creativecommons.org/licenses/by-nd/2.0/",
      "score": 0.751465,
      "taxonomies": [
        {
          "parent_id": null,
          "id": 2000000,
          "name": "concert"
        }
      ],
      "type": "band",
      "short_name": "Lady Gaga",
      "home_venue_id": null,
      "slug": "lady-gaga",
      "divisions": null,
      "name": "Lady Gaga",
      "url": "https://seatgeek.com/lady-gaga-tickets",
      "image_attribution": "https://www.flickr.com/photos/disneyabc/31127222066/in/photolist-PqB9Ew-PeC7oC-NTPhJU-NdW5zX-Ninrvb-PnRWFV-NintmL-PuLQ7W-PxUTh8-PuLQmJ-PxUTpH-PuLQW1-PxUSu6-PuLR9q-PxUTyk-PxUTH8-PuLQyN-PxUSFt-PxUT7i-PuLRo3-PxUSUe-PsMvHZ-PeC7s5-Ninwmy-PnRXJr-Ninw13-PxUUsz-NinvFf-PxUVyn-NinuCy-PuLRT1-PuLTEs-NinuhJ-PxUV4p-PxUUHV-PuLRA7-NintB5-NinuUq-PnRYox-NintXq-Ninvff-PuLTSS-MBT1Ur-Ni1rht-NeRD8E-NeREv9-MCBtZS-MspA7S-PmGgzh-NanWjS"
    },
    {
      "links": [],
      "image": null,
      "colors": null,
      "images": {},
      "has_upcoming_events": false,
      "id": 305269,
      "stats": {
        "event_count": 0
      },
      "image_license": null,
      "score": 0.663591,
      "taxonomies": [
        {
          "parent_id": null,
          "id": 2000000,
          "name": "concert"
        }
      ],
      "type": "band",
      "short_name": "Tony Bennett & Lady Gaga",
      "home_venue_id": null,
      "slug": "tony-bennett-lady-gaga",
      "divisions": null,
      "name": "Tony Bennett & Lady Gaga",
      "url": "https://seatgeek.com/tony-bennett-lady-gaga-tickets",
      "image_attribution": null
    },
    {
      "links": [],
      "image": "https://chairnerd.global.ssl.fastly.net/images/performers-landscape/the-lady-gaga-experience-b6c155/252111/huge.jpg",
      "colors": null,
      "images": {
        "huge": "https://chairnerd.global.ssl.fastly.net/images/performers-landscape/the-lady-gaga-experience-b6c155/252111/huge.jpg"
      },
      "has_upcoming_events": false,
      "id": 252111,
      "stats": {
        "event_count": 0
      },
      "image_license": null,
      "score": 0,
      "taxonomies": [
        {
          "parent_id": null,
          "id": 2000000,
          "name": "concert"
        }
      ],
      "type": "band",
      "short_name": "The Lady Gaga Experience",
      "home_venue_id": null,
      "slug": "the-lady-gaga-experience",
      "divisions": null,
      "name": "The Lady Gaga Experience",
      "url": "https://seatgeek.com/the-lady-gaga-experience-tickets",
      "image_attribution": "http://www.theladygagaexperience.com/wp-content/flagallery/g/img_1244.jpg"
    },
    {
      "links": [],
      "image": null,
      "colors": null,
      "images": {},
      "has_upcoming_events": false,
      "id": 319663,
      "stats": {
        "event_count": 0
      },
      "image_license": null,
      "score": 0,
      "taxonomies": [
        {
          "parent_id": null,
          "id": 2000000,
          "name": "concert"
        }
      ],
      "type": "band",
      "short_name": "The Fame Monster - Lady Gaga Tribute Band",
      "home_venue_id": null,
      "slug": "the-fame-monster-lady-gaga-tribute-band",
      "divisions": null,
      "name": "The Fame Monster - Lady Gaga Tribute Band",
      "url": "https://seatgeek.com/the-fame-monster-lady-gaga-tribute-band-tickets",
      "image_attribution": null
    },
    {
      "links": [],
      "image": null,
      "colors": null,
      "images": {},
      "has_upcoming_events": false,
      "id": 606279,
      "stats": {
        "event_count": 0
      },
      "image_license": null,
      "score": 0,
      "taxonomies": [
        {
          "parent_id": null,
          "id": 2000000,
          "name": "concert"
        }
      ],
      "type": "band",
      "short_name": "Prince, Lady Gaga & Michael Jackson Tribute",
      "home_venue_id": null,
      "slug": "prince-lady-gaga-michael-jackson-tribute",
      "divisions": null,
      "name": "Prince, Lady Gaga & Michael Jackson Tribute",
      "url": "https://seatgeek.com/prince-lady-gaga-michael-jackson-tribute-tickets",
      "image_attribution": null
    },
    {
      "links": [],
      "image": null,
      "colors": null,
      "images": {},
      "has_upcoming_events": false,
      "id": 145932,
      "stats": {
        "event_count": 0
      },
      "image_license": null,
      "score": 0,
      "taxonomies": [
        {
          "parent_id": null,
          "id": 2000000,
          "name": "concert"
        }
      ],
      "type": "band",
      "short_name": "Lady Gaga Tribute",
      "home_venue_id": null,
      "slug": "lady-gaga-tribute",
      "divisions": null,
      "name": "Lady Gaga Tribute",
      "url": "https://seatgeek.com/lady-gaga-tribute-tickets",
      "image_attribution": null
    }
  ]
}
