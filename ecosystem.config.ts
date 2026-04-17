module.exports = {
  apps: [
    {
      name: "business-stream",
      script: "npm",
      args: "start",
      watch: true,
      ignore_watch: ["node_modules", ".next", ".git", "logs"],
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
