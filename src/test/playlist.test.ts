import app from "../server";
import request from "supertest";

let createdPlaylistId: number;

  describe("GET / playlists", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/playlist").send();
    expect(response.status).toBe(200);
  });

  test("should respond with an array", async () => {
    const response = await request(app).get("/api/playlist").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST / playlists", () => {
  test("should respond with a 201 status code", async () => {
    const uniqueName = `playlistaPop${Math.random()}`;
    const response = await request(app)
      .post('/api/playlist')
      .send({
        "name": uniqueName,
        "imageUrl": "playliastPop",
        "description": "playlisatPop",
        "primaryColor": "playliastPop",
        "userId": 3
      });
    createdPlaylistId = response.body.id;
    expect(response.status).toBe(201);
  });
});

describe("PATCH / playlists/:id", () => {
  test("should respond with a 201 status code", async () => {
    const responsePatch = await request(app)
      .patch(`/api/playlist/${createdPlaylistId}`)
      .send({
        "name": "Updated Playlist Name",
        "imageUrl": "updatedImageUrl",
        "description": "updatedDescription",
        "primaryColor": "updatedPrimaryColor",
        "userId": 3
      });
    expect(responsePatch.status).toBe(201);
  });
});
 
describe("DELETE / playlists/:id", () => {
  test("should respond with a 204 status code", async () => {
    const responseDelete = await request(app)
      .delete(`/api/playlist/${createdPlaylistId}`)
      .send();
    expect(responseDelete.status).toBe(204);
  });
});
