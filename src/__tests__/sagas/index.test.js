import { api, API_URL } from "../../sagas";

describe("API Tests", () => {
  it.skip("should load weather data", async () => {
    expect.assertions(2);
    const result = await api(API_URL);
    expect(result).toBeDefined();
    expect(result.cod).toBe("200");
  });
});
