
/*

const data = require('../data.json')


EXEMPLE A PAS SUPPRIMER SVP 

exports.getSneakers = (req, res) => {
    const sneakers = data.sneakers;
    res.status(200).json({
        message:"Sneaker found",
        sneakers
    });
    }

exports.getSneakersById = (req, res) => {
    const id = parseInt(req.params.id);

    const sneakers = data.sneakers;
    const sneaker = sneakers.find((sneaker) => sneaker.id === id);
    if (!sneaker) {
        res.status(404).json({
            message: "Sneaker not found"
        });
        return;
    }
    res.status(200).json({
        message:"Sneaker found",
        sneaker
    });
    }
    */
   