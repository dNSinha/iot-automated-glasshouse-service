import app from '../src';
require('dotenv').config({ silent: true });
app().listen(process.env.PORT, () => {
  console.log(`express ${process.env.NODE_ENV} server is listening on port ${process.env.PORT}`);
});
