const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "eanesparrago",
        mongodb_password: "re1MpLjjzwyFPH2w",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog-app-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "eanesparrago",
      mongodb_password: "re1MpLjjzwyFPH2w",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog-app",
    },
  };
};
