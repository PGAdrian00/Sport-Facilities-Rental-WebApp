const crypto = require("crypto");
const COOKIE_KEY_LENGTH =32;

const cookieKey = crypto.randomBytes(COOKIE_KEY_LENGTH).toString("hex");


module.exports = {
    google: {
      clientID:
        "945644915610-uj2m2q40pdhq1av3h6ruccvhac533s79.apps.googleusercontent.com",
      clientSecret: "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",
    },
    session: {
      cookieKey: cookieKey,
    },
  };