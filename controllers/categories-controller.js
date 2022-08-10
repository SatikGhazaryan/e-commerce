const Categories = require('../schemas/categories-schema.js');

class CategoriesController {
    static async getCategories(req, res) {
        const categories = await Categories.find();

        res.send([
            {
                data: categories,
            },
        ]);
    }
    static async createCategories(req, res) {
        const newCategories = new Categories({
            name: req.body.name,
        });

        console.log(newCategories);
        try {
            const saveCategories = await newCategories.save();
            return res.status(201).send(saveCategories);
        } catch (error) {
            console.log('Categories created error', error);
            return res.status(500).send({ message: 'something went wrong' });
        }
    }
}

module.exports = {
    CategoriesController,
};
