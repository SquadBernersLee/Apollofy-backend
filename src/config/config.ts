import dotenv from "dotenv";

type Tconfig = {
  [key: string]: Environmentconfig;
  // cloudinary_cloud_name: string | number
};

type Environmentconfig = {
  cloudinary: any;
  auth0: any;
  app: Appconfig;
  token: any;
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
    },
    token: {
        refresh_token_secret:  process.env.REFRESH_TOKEN_SECRET,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
    },
    cloudinary: {
      cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "error",
      api_key: process.env.CLOUDINARY_API_KEY || "error",
      api_secret: process.env.CLOUDINARY_API_SECRET || "error",
    },
  },
  production: {
    app: {
      PORT: process.env.PORT || 8081,
    },
    auth0: {
        client_origin: process.env.CLIENT_ORIGIN,
        audience: process.env.AUTH0_AUDIENCE,
        issuer: process.env.AUTH0_ISSUER
    },
    token: {
        refresh_token_secret:  process.env.REFRESH_TOKEN_SECRET,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
    },
    cloudinary: {
      cloudinary_cloud_name: process.env.CLAUDINARY_CLOUD_NAME || "error",
      api_key: process.env.CLOUDINARY_API_KEY || "error",
      api_secret: process.env.CLOUDINARY_API_SECRET || "error",
    },
  }
};

export default CONFIG[ENV];
