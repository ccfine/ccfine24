module.exports = {
  deploy: {
    production: {
      user: "root",
      host: "129.204.68.85",
      ref: "origin/master",
      repo: "https://github.com/ccfine/ccfine24.git",
      path: "/ccfine/project",
      "post-deploy": "cd /ccfine/deployment/ccfine24 && rm -f index.html"
    }
  }
}