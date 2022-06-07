import cac from "cac";

const cli = cac();

cli.command("dev", "Start dev server").action((options) => {
  console.log(options.clearScreen);
  console.log("start dev server");
});
cli.help();

cli.parse();
