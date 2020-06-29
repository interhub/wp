import express from 'express';
import cors from 'cors';
import PORT from './port';
console.log('START SCRIPT')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
  console.log('start')
  res.sendFile(process.cwd()+'/public/index.html')
});

app.get('*', (req, res) => {
  res.sendFile(process.cwd()+'/public'+req.url)
});

app.listen(PORT, () => {
  console.log('SERVER START ON PORT', PORT);
});
