module.exports = async (req, res) => {
  const response = await fetch(process.env.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_SECRET}`
    },
    body: JSON.stringify(req.body)
  });

  return res.json({ ok: true });
};
