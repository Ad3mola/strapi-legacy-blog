module.exports = ({ env }) => ({
  host: env("ADMIN_HOST", "0.0.0.0"),
  port: env('ADMIN_PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
