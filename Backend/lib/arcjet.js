// const arcjet = require("@arcjet/node").default;
// const { shield, detectBot, tokenBucket } = require("@arcjet/node");
// const { isSpoofedBot } = require("@arcjet/inspect");



// const aj = arcjet({
//     // Get your site key from https://app.arcjet.com and set it as an environment
//     // variable rather than hard coding.
//     key: process.env.ARCJET_KEY,
//     characteristics: ["ip.src"], // Track requests by IP
//     rules: [
//         // Shield protects your app from common attacks e.g. SQL injection
//         shield({ mode: "LIVE" }),
//         // Create a bot detection rule
//         detectBot({
//             mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
//             // Block all bots except the following
//             allow: [
//                 "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
//                 // Uncomment to allow these other common bot categories
//                 // See the full list at https://arcjet.com/bot-list
//                 //"CATEGORY:MONITOR", // Uptime monitoring services
//                 //"CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
//             ],
//         }),
//         // Create a token bucket rate limit. Other algorithms are supported.
//         tokenBucket({
//             mode: "LIVE",
//             refillRate: 30, // Refill 5 tokens per interval
//             interval: 60, // Refill every 10 seconds
//             capacity: 30, // Bucket capacity of 10 tokens
//         }),
//     ],
// });


// const requestController = async (req, res) => {

//     const decision = await aj.protect(req, { requested: 1 }); // Deduct 1 tokens from the bucket
//     console.log("Arcjet decision", decision);

//     if (decision.isDenied()) {
//         if (decision.reason.isRateLimit()) {
//             const {remaining,reset} = decision.reason;
//             res.writeHead(429, { "Content-Type": "application/json" });
//             res.end(JSON.stringify({ error: "Too Many Requests",details:{remaining,reset} }));
//         } else if (decision.reason.isBot()) {
//             res.writeHead(403, { "Content-Type": "application/json" });
//             res.end(JSON.stringify({ error: "No bots allowed" }));
//         } else {
//             res.writeHead(403, { "Content-Type": "application/json" });
//             res.end(JSON.stringify({ error: "Forbidden" }));
//         }
//     } else if (decision.results.some(isSpoofedBot)) {
//         // Arcjet Pro plan verifies the authenticity of common bots using IP data.
//         // Verification isn't always possible, so we recommend checking the decision
//         // separately.
//         // https://docs.arcjet.com/bot-protection/reference#bot-verification
//         res.writeHead(403, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Forbidden" }));
//     } else {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Hello World" }));
//     }
// }

// module.exports = { requestController }
