import { Server, Model, Factory } from "miragejs";

import isProd from "../../utils/DevDetect";

const createPlace = (name, description, latitude, longitude, images) => {
  return { name, description, latitude, longitude, images };
};

const config = ({ environment = "development" } = {}) => {
  if (isProd()) return;
  return new Server({
    environment,
    models: {
      place: Model,
    },
    routes() {
      this.get("/api/places", (schema, request) => {
        return schema.places.all();
      });
    },
    seeds(server) {
      server.create(
        "place",
        createPlace(
          "name 1",
          "description",
          "-17.7928323",
          "-63.1881709,14.24z",
          []
        )
      );
      server.create(
        "place",
        createPlace(
          "name 2",
          "description 2",
          "-17.7928323",
          "-63.2881259,14.24z",
          []
        )
      );
      server.create(
        "place",
        createPlace(
          "name 3",
          "description 3",
          "-17.7843571",
          "-63.1867896,14.24z",
          []
        )
      );
      server.create(
        "place",
        createPlace(
          "name 4",
          "description 4",
          "-17.7765441",
          "-63.1867896,14.24z",
          []
        )
      );
    },
  });
};

export default config;
