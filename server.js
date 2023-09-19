// Add this code to your server.js file
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body; // Assuming you're using a POST request

  // Validate admin credentials (replace with your authentication logic)
  if (username === 'admin' && password === 'password') {
    // Authentication successful
    res.json({ success: true, message: 'Login successful' });
  } else {
    // Authentication failed
    res.status(401).json({ success: false, message: 'Authentication failed' });
  }
});
