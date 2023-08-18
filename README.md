# FinalAssignment GG 3.0 - Backend

# API Documentation

## Database Structure

### `thumbnail` Collection

- `videoId`: The ID of the video (String, required).
- `videoUrl`: The URL of the embed yt video (String, required).
- `thumbnailUrl`: The URL for thumbnail image (String,required).
- `title`: The title of thumbnail (String,required).
- `category`: The Category of thumbnail (String, required).

### `product` Collection

- `VideoID`: The ID of the video (String, required).
- `ProductID`: The ID of the product (String, required).
- `LinkProduct`: The link to the product page (String, required).
- `Title`: The title of the product (String, required).
- `Price`: The price of the product (Number, required).

### `comment` Collection

- `videoId`: The ID of the video (String, required).
- `username`: The username of the commenter (String, required).
- `comment`: The comment text (String, required).

## API Structure  

### `GET /thumbnail`

Retrieve all thumbnails, including their `videoId` and `url`.

### `GET /thumbnail/:id`

Retrieve the details of a specific thumbnail by `videoId`.

### `POST /thumbnail`

Add a new thumbnail to the database.

### `GET /product/:videoId`

Retrieve all products related to a specific video by `videoId`.

### `POST /comment`

Add a new comment for a video.

### `GET /comment/:videoId`

Retrieve all comments for a specific video by `videoId`.

## List of API Requests and Responses
### `GET /thumbnail`

**Description:** Retrieve all thumbnails, including their `videoId` and `url`.

**URL:** https://backend-tokpedplay-defxzpf2xq-et.a.run.app/thumbnail

**Response:**

Status Code: 200 (OK)

```json
[
  {
        "videoId": "qweasdzxc1",
        "videoUrl": "https://www.youtube.com/embed/0hfCCRFyFgo",
        "thumbnailUrl": "https://storage.googleapis.com/thumbnail_finalassignmentgg3/thumbnail/Frisian%20Flag.jpeg",
        "title": "Frisian Flag UHT PROMO!!",
        "category": 2
    },
  ...
]
```
### `GET /thumbnail/:videoId`

**Description:** Retrieve all products related to a specific video by videoId.

**URL:** https://backend-tokpedplay-defxzpf2xq-et.a.run.app/thumbnail/qweasdzxc2

**Response:**

Status Code: 200 (OK)

```json
[
 {
    "videoId": "qweasdzxc2",
    "videoUrl": "https://www.youtube.com/embed/IC_0qQfjtFg",
    "thumbnailUrl": "https://storage.googleapis.com/thumbnail_finalassignmentgg3/thumbnail/Uniqlo.jpeg",
    "title": "Uniqlo Special PROMO!!",
    "category": 2
},
]
```

### `GET /product/:videoId`

**Description:** Retrieve all products related to a specific video by videoId.

**URL:** https://backendrandiahmad-dsh6vptnuq-et.a.run.app/product/qweasdzxc4

**Response:**

Status Code: 200 (OK)

```json
[
    {
        "_id": "64c2ea2443aba3f9e51b61b6",
        "videoId": "qweasdzxc4",
        "linkProduct": "https://storage.googleapis.com/product_finalasssignmentgg3/product/maybelline%20-%20superstay.jpeg",
        "title": "maybelline Superstay",
        "price": 200000,
        "productId": "71sadasfwesgfsd"
    },
    {
        "_id": "64c2ea4a43aba3f9e51b61b7",
        "videoId": "qweasdzxc4",
        "linkProduct": "https://storage.googleapis.com/product_finalasssignmentgg3/product/maybelline%20-%20superman.jpeg",
        "title": "Maybelline Superman",
        "price": 200000,
        "productId": "72sadasfwesgfsd"
    },
    ...
]
```
### `POST /comment`

**Description:**  Add a new comment for a video.

**URL:** https://backendrandiahmad-dsh6vptnuq-et.a.run.app/comment

**Request:**

```json
{
    "username": "hanief",
    "comment": "test world",
    "videoId": "qweasdzxc1"
}```
**Response:**

Status Code: 200 (OK)

```json
{
    "message": "success"
}
```
### `GET /comment/:videoId`

**Description:** Retrieve all products related to a specific video by videoId.

**URL:** https://backendrandiahmad-dsh6vptnuq-et.a.run.app/comment/qweasdzxc1

**Response:**

Status Code: 200 (OK)

```json
[
    {
        "_id": "64ddd0f77f06dddf4051fc50",
        "videoId": "qweasdzxc1",
        "username": "ran",
        "comment": "saya suka susu",
        "__v": 0
    },
    ...
 ]
```

Status Code: 400 (Error)

```json
{
   message: "fail" 
}
```
