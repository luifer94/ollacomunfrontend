import configServer from "../api/mockup/setup";
import { render, screen, waitFor } from "@testing-library/react";

import { getPlaces } from "../api/places";
import Map from "../components/Map/Map";

let server;
beforeEach(() => {
  server = configServer({ environment: "test" });
  console.log("before" + server);
});

afterEach(() => {
  server.shutdown();
});

test("Places are shown in the Map", async () => {
  //const places = await getPlaces();
 // const apiPlacesLength = places.length;

  render(<Map/>);
  //expect(screen.getByText(/Loading/)).toBeInTheDocument();
  //expect(screen.queryByText('DATA!')).toBeNull();

  await waitFor(() => expect(screen.getByText('DATA!')).toBeInTheDocument());
  expect(screen.queryByText(/Loading/)).toBeNull();
  //const placesLength = screen.getAllByTestId("place");
  //console.log("placesLength"+placesLength)
  //expect(placesLength).toBe(apiPlacesLength);
});
