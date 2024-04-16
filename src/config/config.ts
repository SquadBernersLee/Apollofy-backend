import dotenv from "dotenv";

type Tconfig = {
  [key: string]: Environmentconfig;
};

type Environmentconfig = {
  auth0: any;
  app: Appconfig;
};

type Appconfig = {
  PORT: string | number;
};

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const ENV = process.env.NODE_ENV ?? "development";

const CONFIG: Tconfig = {
  development: {
    app: {
      PORT: process.env.PORT || 4001,
    },
    auth0: {
        client_origin: process.env.CLIENT_ORIGIN,
        audience: process.env.AUTH0_AUDIENCE,
        issuer: process.env.AUTH0_ISSUER
    }
  },
  production: {
    app: {
      PORT: process.env.PORT || 8081,
    },
    auth0: {
        client_origin: process.env.CLIENT_ORIGIN,
        audience: process.env.AUTH0_AUDIENCE,
        issuer: process.env.AUTH0_ISSUER
    }
  },
};

export default CONFIG[ENV];
