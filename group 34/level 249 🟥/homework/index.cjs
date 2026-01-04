const app = require('./src/server.cjs');
const PORT = 1717;

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));