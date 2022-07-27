const categories = require('../schemas/categories-schema');

async function getCategoriesController(req, res) {
    const Categories = await categories.find();
    res.send([
        {
            data: Categories,
        },
    ]);
}
module.exports = {
    getCategoriesController,
};
