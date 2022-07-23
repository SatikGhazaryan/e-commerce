const categories = require('../schemas/categories');

async function getCategoriesController(req, res) {
    const categorie = await categories.find();
    res.send([
        {
            data: categorie,
        },
    ]);
}
module.exports = {
    getCategoriesController,
};
