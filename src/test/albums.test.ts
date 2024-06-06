import app from "../server";
import request from "supertest";




let createdTrackId: number;


describe("GET / album", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/api/album").send();
      expect(response.status).toBe(201);
    });
  });



 








  