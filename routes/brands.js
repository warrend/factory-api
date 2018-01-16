const express = require('express');
const brandStore = require('json-fs-store')('store/companies');
const router = express.Router();

router.get('/', (req, res) => {
    brandStore.list((err, brands) => {
        if (err) throw err;

        res.json(brands);
    });
});

router.get('/search', (req, res) => {
    const searchQuery = req.query.q;
     /* Complete this function */
     
    brandStore.list((err, brands) => {
        if (err) throw err;

        const isBrand = (brand) => {
            if (brand.name === searchQuery) {
                return res.json(brand)
            }
        }

        brands.find(isBrand) || res.sendStatus(404)
    })
});

router.get('/:id', (req, res) => {
    brandStore.load(req.params.id, (err, brand) => {
        if (err) throw err;
        res.json(brand);
    });
});

router.get('/:id', (req, res) => {
    brandStore.remove(req.params.id, (err, brand) => {
      res.send(`${brand} removed`)
      if (err) throw err;
    });
});

router.post('/', (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const newBrand = { name: req.body.name, email: req.body.email, phone_number: req.body.phone_number, city: req.body.city, state: req.body.state, company_type: req.body.company_type };
    brandStore.add(newBrand, err => {
        if (err) throw err;
        res.json(newBrand);
    });
});

module.exports = router;