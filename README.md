**GET POSTS:**
CURL request (200)

- curl -i -X GET http://localhost:3000/api/v1/posts

**GET POST:**
CURL request (200, 404, 400)

- curl -i -X GET http://localhost:3000/api/v1/posts/1
- curl -i -X GET http://localhost:3000/api/v1/posts/404
- curl -i -X GET http://localhost:3000/api/v1/posts/string

**INSERT NEW POST:**
CURL requests (201, 400)

- curl -i -X POST \
    -H "Content-Type: application/json" \
    -d '{ "title": "test again", "content": "Lorem Ipsum", "tags": ["tag1", "tag4"] }' \
    http://localhost:3000/api/v1/posts

- curl -i -X POST \
  http://localhost:3000/api/v1/posts

**UPDATE POST:**
CURL requests (200, 404 , 400, 400)

- curl -i -X PUT \
    -H "Content-Type: application/json" \
    -d '{ "title": "The first", "content": "Lorem Ipsum 2", "tags": ["tag1", "tag4"] }' \
    http://localhost:3000/api/v1/posts/1

- curl -i -X PUT \
    -H "Content-Type: application/json" \
    -d '{ "title": "The first", "content": "Lorem Ipsum 2", "tags": ["tag1", "tag4"] }' \
    http://localhost:3000/api/v1/posts/404

- curl -i -X PUT  http://localhost:3000/api/v1/posts/1

- curl -i -X PUT  http://localhost:3000/api/v1/posts/string

**DELETE POST:**
CURL requests (200, 404, 400)

- curl -i -X DELETE http://localhost:3000/api/v1/posts/1
- curl -i -X DELETE http://localhost:3000/api/v1/posts/404
- curl -i -X DELETE http://localhost:3000/api/v1/posts/string