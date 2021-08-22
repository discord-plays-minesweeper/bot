// ======================================================
// This is the entry point for Discord Plays: Minesweeper
// ======================================================

// The following code just sets up a listener for SIGINT
// and gracefully shuts down the bot

console.log("Beginning Discord Plays: Minesweeper entry point...");
const bot = require('./bot');
bot.execute();

// I guess stackoverflow is the best?
// https://stackoverflow.com/a/14861513/10719432
if (process.platform === "win32") {
  var rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("SIGINT", function () {
    process.emit("SIGINT");
  });
}

process.on("SIGINT", function () {
  console.log("\nDetected SIGINT...");
  console.log("Gracefully shutting down");
  bot.shutdown();

  console.log("Entry point finished, goodbye!!");
  process.exit();
});
