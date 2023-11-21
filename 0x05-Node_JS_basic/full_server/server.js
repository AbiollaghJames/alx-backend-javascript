import express from 'express';
import routeMap from './routes';

const app = express();
const PORT = 1245;

routeMap(app);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
module.exports = app;