// require the Koa server
const server = require("./server");
// require supertest
const request = require("supertest");
// close the server after each test

afterEach(() => {
    server.close();
  });
  

  test("hello method", async () => {
    const response = await request(server).get("/hello");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("text/plain");
    expect(response.text).toBe("hello world again");
  });
  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });
  test("should respond as policy", async () => {
    const response = await request(server).get("/policy/1");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual({"id": 1,
        "name": "helllo world again",
        "document_type": "welcome to world",
        "author_id": null,
        "values": null,
        "is_active": null,
        "updated_by": null,
        "createdAt": "2018-11-07T02:25:55.349Z",
        "updatedAt": "2018-11-07T02:26:29.636Z",
        "revision": "11"
    });
  });
  test("should respond as policy again", async () => {
    const response = await request(server).get("/policies");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual([{"author_id": null, "createdAt": "2018-11-07T02:25:55.349Z", "document_type": "welcome to world", "id": 1, "is_active": null, "name": "helllo world again", "revision": "11", "updatedAt": "2018-11-07T02:26:29.636Z", "updated_by": null, "values": null}]);
  });
  test("should respond as expected", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.data).toEqual("Sending some JSON");
  });