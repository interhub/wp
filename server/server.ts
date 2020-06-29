import express from 'express';
import cors from 'cors';
import PORT from './port'
const App = express();
App.use(express.json());
App.use(express.urlencode({extended: true}));
App.use(cors());

App.get('/',(req,res)=>{
  res.send('hello server')
})

App.listen(PORT,()=>{
  console.log('SERVER START ON PORT',PORT)
})
