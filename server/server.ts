import express from 'express';
import cors from 'cors';
import PORT from './port';

const App = express();
App.use(express.json());
App.use(express.urlencoded({extended: true}));
App.use(cors());

App.get('/', (req, res) => {
  res.sendFile(process.cwd()+'/public/index.html');
});

App.listen(PORT, () => {
  console.log('SERVER START ON PORT', PORT);
});
