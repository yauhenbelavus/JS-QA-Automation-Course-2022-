
import superagent, {Response} from "superagent";
import { errorCatcher } from "../helpers";

const url = "https://reqres.in";
let response: Response;
const newUser = {
   id: 7,
   mail: "yauhenbelavus@gmail.com",
   firstName: "evgenij",
   lastName: "belous",
   avatar: "https://reqres.in/img/faces/1-image.jpg",
}

const body =  { firstName: "evgenij", lastName: "belous" };
const mailPostRequest = {mail: "wowo@gmail.com"};
const errMess = "Not Found";



describe("Test API Perfomance", () => {
    test("Should return GET response with status: 200 ", async () => {
      try {
      response = await superagent.get(`${url}/api/users/1`);
      } catch (error: any) {
        throw new Error(errorCatcher(error));
      }
      expect(response.status).toBe(200);
    });
  
    test("Should return PUT response with status: 200 and correct response body", async () => {
      try {
      response = await superagent.put(`${url}/api/users/7`)
      .set("Content-type", "application/json")
      .send(body);
      } catch (error: any) {
        throw new Error(errorCatcher(error));
      }
      expect(response.body.firstName).toBe(body.firstName);
      expect(response.body.lastName).toBe(body.lastName);
      expect(response.status).toBe(200);
    });
    
    test("Should return POST response with status: 201 and correct POST response body", async () => {
      try {
      response = await superagent.post(`${url}/api/users`)
      .set("Content-type", "application/json")
      .send(newUser);
      } catch (error: any) {
        throw new Error(errorCatcher(error));
      }
      expect(response.status).toBe(201);
      expect(response.body.id).toEqual(newUser.id);
      expect(response.body.mail).toEqual(newUser.mail);
      expect(response.body.firstName).toEqual(newUser.firstName);
      expect(response.body.lastName).toEqual(newUser.lastName);
    });
    
    test("Should return PATCH response with status: 200 ", async () => {
      try {
      response = await superagent.patch(`${url}/api/users/1`)
      .set("Content-type", "application/json")
      .send(mailPostRequest);
      } catch (error: any) {
        throw new Error(errorCatcher(error));
      }
      expect(response.status).toBe(200);
      expect(response.body.mail).toBe(mailPostRequest.mail);
    });

    test("Should return DELETE response with status: 204 and empty response body ", async () => {
      try {
      response = await superagent.delete(`${url}/api/users/5`);
      } catch (error: any) {
        throw new Error(errorCatcher(error));
      }
      expect(response.body).toEqual({});
      expect(response.status).toBe(204);
    });
      
    test("Should return GET response with status: 404 while requesting nonexisting user", async () => {
      try {
      response = await superagent.get(`${url}/api/users/55`);
      } catch (error: any) {
      expect(error.status).toBe(404);
      expect(error.message).toBe(errMess);
      } 
      }); 

    test("Should return 400 Bad Request on POST request due insufficient data to register", async () => {
      try {
      response = await superagent.post(`${url}/api/register`)
      .set("Content-type", "application/json")
      .send({"email": "sydney@fife"})
      } catch (error: any) {
        expect(error.response.status).toBe(400);
        expect(JSON.parse(error.response.text)).toEqual({error: "Missing password"});
      }
      });

    test("Should return 400 Bad Request on invalid user while login", async () => {
      try {
      response = await superagent.post(`${url}/api/login`)
      .set("Content-type", "application/json")
      .send({"email": "eve.holt@reqres.on", "password": "cityslicka"})
      } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(JSON.parse(error.response.text)).toEqual({error: "user not found"});
      }
    });
    
    test("Should return 404 Not Found while requesting nonexisting page", async () => {
      try {
      response = await superagent.get(`${url}/nonexistpage`)
      } catch (error: any) {
      expect(error.response.status).toBe(404);
      expect(error.message).toBe(errMess);
      }
    });
    
    test("Should return 404 Not Found response while DELETE nonexisting page", async () => {
      try {
      response = await superagent.delete(`${url}/ipi`);
      } catch (error: any) {
      expect(error.message).toBe(errMess);
      expect(error.response.status).toBe(404);
      }
    });
})