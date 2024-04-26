import dotenv from "dotenv";

type Tconfig = {
  [key: string]: Environmentconfig;
  // cloudinary_cloud_name: string | number
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
  cloudinary_cloud_name: string;
  api_key: string;
  api_secret: string;
};

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const ENV = process.env.NODE_ENV ?? "development";

const {
  PORT,
  DATABASE_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;

const CONFIG: Tconfig = {
  development: {
    app: {
      PORT: PORT || 4001,
    },
    auth0: {
      client_origin: process.env.CLIENT_ORIGIN,
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER,
    },
    db: {
      URI:
        DATABASE_URL ||
        "postgresql://apollofy_owner:JoBT9pVZcR1b@ep-gentle-forest-a2spku8x.eu-central-1.aws.neon.tech/apollofy?sslmode=require",
    },
    cloudinary: {
      cloudinary_cloud_name: CLOUDINARY_CLOUD_NAME || "cloud_name",
      api_key: CLOUDINARY_API_KEY || "api_key",
      api_secret: CLOUDINARY_API_SECRET || "api_secret",
    },
  },
  production: {
    app: {
      PORT: PORT || 8081,
    },
    auth0: {
      client_origin: process.env.CLIENT_ORIGIN,
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER,
    },
    db: {
      URI:
        DATABASE_URL ||
        "postgresql://apollofy_owner:JoBT9pVZcR1b@ep-gentle-forest-a2spku8x.eu-central-1.aws.neon.tech/apollofy?sslmode=require",
    },
    cloudinary: {
      cloudinary_cloud_name: CLOUDINARY_CLOUD_NAME || "cloud_name",
      api_key: CLOUDINARY_API_KEY || "api_key",
      api_secret: CLOUDINARY_API_SECRET || "api_secret",
    },
  },
};

export default CONFIG[ENV];
