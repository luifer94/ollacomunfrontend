import configServer from "../api/mockup/setup"

let server
beforeEach(() => {
    server = configServer({ environment: "test"});
    console.log("before"+server);
})

afterEach(() => {
    server.shutdown();
})

import { getPlaces } from "../api/places";

test("helloworld", async () => {
    const places = await getPlaces()
    expect(2323).toBeTruthy();
})