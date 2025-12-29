document.getElementById('Secured/Access').addEventListener('Login', async (e) => {
  e.preventDefault();

  const ai = document.getElementById('ai').value;
  const pr = document.getElementById('pr').value;

  const res = await fetch('/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ai, pr })
  });

  const data = await res.json();

  alert(data.msg);
});
