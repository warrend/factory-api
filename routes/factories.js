const express = require('express');
const factoryStore = require('json-fs-store')('store/companies');
const router = express.Router();

router.get('/', (req, res) => {
    factoryStore.list((err, factories) => {
        if (err) throw err;

        res.json(factories);
    });
});

router.get('/search', (req, res) => {
    const searchQuery = req.query.q;
     /* Complete this function */

    factoryStore.list((err, factories) => {
        if (err) throw err;

        const isFactory = (factory) => {
            if (factory.name === searchQuery) {
                return res.json(factory)
            }
        }

        factories.find(isFactory) || res.sendStatus(404)
    })
});

router.get('/:id', (req, res) => {
    factoryStore.load(req.params.id, (err, factory) => {
        if (err) throw err;
        res.json(factory);
    });
});

router.get('/:id', (req, res) => {
    factoryStore.remove(req.params.id, (err, factory) => {
      res.send(`${factory} removed`)
      if (err) throw err;
    });
});

router.post('/', (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const newFactory = { name: req.body.name, email: req.body.email, phone_number: req.body.phone_number, city: req.body.city, state: req.body.state, company_type: req.body.company_type };
    factoryStore.add(newFactory, err => {
        if (err) throw err;
        res.json(newFactory);
    });
});

module.exports = router;
