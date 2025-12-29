// script.js

async function sendData(ai, pr) {
  if (!ai || !pr) {
    console.log("Please fill in all the fields.");
    return;
  }

  try {
    const response = await fetch("/api/sumit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ai: ai.trim(),
        pr: pr.trim(),
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.signal === "ok") {
      // optional redirect
      // window.location.href = data.redirect_link;
    } else {
      console.log(data.msg);
    }
  } catch (err) {
    console.error("Request failed:", err);
  }
}
