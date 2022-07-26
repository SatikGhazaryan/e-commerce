const Categories = require('../schemas/categories');

async function getCategoriesController(req, res) {
    const categories = await Categories.find();
    res.send([
        {
            data: categories,
        },
    ]);
}
module.exports = {
    getCategoriesController,
};
