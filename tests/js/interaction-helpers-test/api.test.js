import { jest } from "@jest/globals";
import { api } from "../../../src/js/modules/interaction-helpers/api";

describe("api()", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return parsed object when response is ok", async () => {
    const mockData = { foo: "bar" };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => JSON.stringify(mockData),
    });

    const data = await api("https://fake.url");
    expect(data).toEqual(mockData);
  });
});

describe("should be throw error on bad response", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("bad response", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });
    await expect(api("https://fake.url")).rejects.toThrow("HTTP error: 500");
  });
});
