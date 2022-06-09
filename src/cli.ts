import cac from "cac";

const cli = cac();

cli.command("dev", "Start dev server").action((options) => {
  console.log(options.clearScreen);
  console.log("start dev server");
});
cli.command("build", "build application").action((options) => {
  console.log("start build", options);
  console.log("finish build", options);
});
cli.help();

cli.parse();
