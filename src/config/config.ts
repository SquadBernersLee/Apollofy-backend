import dotenv from "dotenv";

type Tconfig = {
  [key: string]: Environmentconfig;
};

type Environmentconfig = {
  auth0: any;
  app: Appconfig;
  db: DBConfig;
  cloudinary: CloudinaryConfig;
};

type Appconfig = {
  PORT: string | number;
};

type DBConfig = {
  URI: string;
};

type CloudinaryConfig = {
  cloudinary_name: string;
  api_key: string;
  api_secret: string;
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
    db: {
      URI: process.env.DATABASE_URL || "postgresql://apollofy_owner:JoBT9pVZcR1b@ep-gentle-forest-a2spku8x.eu-central-1.aws.neon.tech/apollofy?sslmode=require",
    },
    cloudinary: {
      cloudinary_name: process.env.CLOUDINARY_NAME || "error",
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
    db: {
      URI: process.env.DATABASE_URL || "postgresql://apollofy_owner:JoBT9pVZcR1b@ep-gentle-forest-a2spku8x.eu-central-1.aws.neon.tech/apollofy?sslmode=require",
    },
    cloudinary: {
      cloudinary_name: process.env.CLOUDINARY_NAME || "error",
      api_key: process.env.CLOUDINARY_API_KEY || "error",
      api_secret: process.env.CLOUDINARY_API_SECRET || "error",
    },
  },
};

export default CONFIG[ENV];
