const request = require("supertest");
const app = require("../app");
const mockData = require("./mock.data");

describe("server", () => {
  test("should return posts", async () => {
    const response = await request(app).get("/api/v1/posts");
    expect(response.statusCode).toBe(200);
    expect(response.body[0]).toHaveProperty('id');
  });

  test("should return post by id", async () => {
    const response = await request(app).get("/api/v1/posts/1");
    const firstPostId = mockData[0].id;
    expect(response.body.id).toBe(firstPostId);
  });

  test("should return status code 404 when post id doesn't exist", async () => {
    const response = await request(app).get("/api/v1/posts/404");
    expect(response.statusCode).toBe(404);
  });

  test("should return status code 400 when post id is not a number", async () => {
    const response = await request(app).get("/api/v1/posts/string");
    expect(response.statusCode).toBe(400);
  });

  test("should create new post", async () => {
    const newPost = { 
      title: "test again", 
      content: "Lorem Ipsum", 
      tags: ["tag1", "tag4"] 
    };
    const response = await (await request(app).post("/api/v1/posts").send(newPost));
    expect(response.statusCode).toBe(201);
  });

  test("should not create post and return status code 400 when field in new post are not good", async () => {
    const newPost = {};
    const response = await (await request(app).post("/api/v1/posts").send(newPost));
    expect(response.statusCode).toBe(400);
  });

  test("should update post by id", async () => {
    const updatedPost = { 
      title: "The first", 
      content: "Lorem Ipsum 2", 
      tags: ["tag1", "tag4"] 
    };
    const response = await (await request(app).put("/api/v1/posts/1").send(updatedPost));
    expect(response.statusCode).toBe(200);
  });

  test("should delete post by id", async () => {
    const response = await (await request(app).delete("/api/v1/posts/1"));
    expect(response.statusCode).toBe(200);
  });
});