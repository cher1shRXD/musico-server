const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MUSICO SERVER",
      version: "1.0.0",
      description: "무료 음악 스트리밍 서비스 '뮤지코' API 서버",
    },
    servers: [
      {
        url: "https://musicoapi.cher1shrxd.me",
        description: "production server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
