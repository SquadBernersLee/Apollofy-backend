import app from "../server";
import request from "supertest";




let createdTrackId: number;


describe("GET / track", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/api/track").send();
      expect(response.status).toBe(200);
    });
  
    test("should respond with an array", async () => {
      const response = await request(app).get("/api/track").send();
      expect(response.body).toBeInstanceOf(Array);
    });
  });



 








  