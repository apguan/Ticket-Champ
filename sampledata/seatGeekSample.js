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
  "links": [],
  "id": 3740162,
  "stats": {
    "listing_count": 7090,
    "average_price": 238,
    "lowest_price_good_deals": 77,
    "lowest_price": 77,
    "highest_price": 5743
  },
  "title": "Lady Gaga",
  "announce_date": "2017-02-06T00:00:00",
  "score": 0.889969,
  "date_tbd": false,
  "type": "concert",
  "datetime_local": "2017-08-13T19:00:00",
  "visible_until_utc": "2017-08-14T06:00:00",
  "time_tbd": false,
  "taxonomies": [
    {
      "parent_id": null,
      "id": 2000000,
      "name": "concert"
    }
  ],
  "performers": [
    {
      "image": "https://chairnerd.global.ssl.fastly.net/images/performers-landscape/lady-gaga-5a5ffb/1083/huge.jpg",
      "primary": true,
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
        "event_count": 54
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
      "num_upcoming_events": 54,
      "short_name": "Lady Gaga",
      "home_venue_id": null,
      "slug": "lady-gaga",
      "divisions": null,
      "name": "Lady Gaga",
      "url": "https://seatgeek.com/lady-gaga-tickets",
      "image_attribution": "https://www.flickr.com/photos/disneyabc/31127222066/in/photolist-PqB9Ew-PeC7oC-NTPhJU-NdW5zX-Ninrvb-PnRWFV-NintmL-PuLQ7W-PxUTh8-PuLQmJ-PxUTpH-PuLQW1-PxUSu6-PuLR9q-PxUTyk-PxUTH8-PuLQyN-PxUSFt-PxUT7i-PuLRo3-PxUSUe-PsMvHZ-PeC7s5-Ninwmy-PnRXJr-Ninw13-PxUUsz-NinvFf-PxUVyn-NinuCy-PuLRT1-PuLTEs-NinuhJ-PxUV4p-PxUUHV-PuLRA7-NintB5-NinuUq-PnRYox-NintXq-Ninvff-PuLTSS-MBT1Ur-Ni1rht-NeRD8E-NeREv9-MCBtZS-MspA7S-PmGgzh-NanWjS"
    }
  ],
  "url": "https://seatgeek.com/lady-gaga-tickets/san-francisco-california-at-t-park-2017-08-13-7-pm/concert/3740162",
  "created_at": "2017-02-06T00:00:00",
  "venue": {
    "city": "San Francisco",
    "num_upcoming_events": 85,
    "name": "AT&T Park",
    "extended_address": "San Francisco, CA 94107",
    "url": "https://seatgeek.com/venues/at-t-park/tickets",
    "country": "US",
    "display_location": "San Francisco, CA",
    "links": [],
    "slug": "at-t-park",
    "state": "CA",
    "name_v2": "AT&T Park",
    "postal_code": "94107",
    "location": {
      "lat": 37.7782,
      "lon": -122.391
    },
    "address": "24 Willie Mays Plaza",
    "timezone": "America/Los_Angeles",
    "score": 0.923568,
    "has_upcoming_events": true,
    "id": 22
  },
  "short_title": "Lady Gaga",
  "datetime_utc": "2017-08-14T02:00:00",
  "datetime_tbd": false
}


