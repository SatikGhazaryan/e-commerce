const categories = require('../schemas/categories-schema');

class CategoriesController {
    static async getCategories(req, res) {
        const Categories = await categories.find();

        res.send([
            {
                data: Categories,
            },
        ]);
    }
}

module.exports = {
    CategoriesController,
};
