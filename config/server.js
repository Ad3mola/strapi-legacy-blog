module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: 443,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
