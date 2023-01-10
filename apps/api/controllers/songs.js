const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  const data = req.db.get('songs');

  console.log(data);
  setTimeout(() => {
    res.json({ data: [...data]})
  }, 2000);
});

router.get('/:id', (req, res) => {
  const data = req.db.get('songs');
  const item = data.find(element => element.id.toString() === req.params.id);
  res.json({ data: {
    ...item,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis congue odio, et blandit ex tempor in. Cras purus lorem, commodo sit amet ipsum sit amet, placerat facilisis nunc. Donec vel fermentum sapien. Cras venenatis velit et augue vestibulum, at molestie ipsum consequat. Donec dui eros, egestas a rutrum quis, interdum eget nibh. Vivamus aliquet finibus ipsum, eu malesuada dolor tincidunt quis. Nulla vel posuere purus, sit amet lobortis felis. Vestibulum massa mi, pellentesque ac tristique ac, imperdiet sit amet tortor.',
    copiesSold: Math.floor(Math.random() * 1000000),
  } })
});

router.get('/search/:title', (req, res) => {
  const data = req.db.get('songs');

  const query = req.query.search;
  const paramTitle = req.params.title;

  const filtered = data.filter(t => t.title.toLowerCase().includes(paramTitle.toLowerCase()));
  res.json({ data: [ ...filtered ] })
});

router.post('/', (req, res) => {
  const data = req.db.get('songs');
  const id = Math.floor(Math.random() * 10000);

  const updatedData = [ 
    ...data, 
    { 
      id,
      title: req.body.title,
      transactionType: req.body.transactionType,
      date: req.body.date,
      currency: req.body.currency,
      value: parseInt(req.body.value, 10),
    }
  ]

  req.db.set('songs', updatedData);

  res.json({ data: updatedData})
});

module.exports = router;
