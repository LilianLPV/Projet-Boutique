const Sneaker = require('../models/sneaker');


/* EXEMPLE A PAS SUPPRIMER SVP */

exports.getSneakers = (req, res) => {
    res.status(200).json({
        message: "Sneaker found",
        sneakers
    });
}

exports.getSneakersById = async (req, res) => {
    console.log("test")
    const id = parseInt(req.params.id);

    const sneaker = await Sneaker.getById(id);
    console.log(sneaker);
    if (!sneaker) {
        res.status(404).json({
            message: "Sneaker not found"
        });
        return;
    }
    res.status(200).json({
        message: "Sneaker found",
        sneaker
    });
}

