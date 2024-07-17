const fsPromises = require('fs/promises');
const path = require('path');

const characteristicsFilePath = path.resolve(
  __dirname,
  '../data/characteristics.json'
);

const characteristicsController = {};

characteristicsController.getCharacteristics = async (req, res) => {
  try {
    const characteristicsData = await fsPromises.readFile(
      characteristicsFilePath
    );
    const characteristics = JSON.parse(characteristicsData);
    res.send(characteristics);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching characteristics');
  }
};

characteristicsController.updateCharacteristics = async (req, res) => {
  const { userId } = req.params;
  const updatedCharacteristics = req.body.characteristics;

  try {
    const characteristicsData = await fsPromises.readFile(
      characteristicsFilePath
    );
    let characteristics = JSON.parse(characteristicsData);

    const index = characteristics.findIndex(char => char.userId === userId);

    if (index !== -1) {
      characteristics[index].characteristics = updatedCharacteristics;
      await fsPromises.writeFile(
        characteristicsFilePath,
        JSON.stringify(characteristics)
      );
      res.send(characteristics[index]);
    } else {
      res.status(404).send('Characteristics not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating characteristics');
  }
};

module.exports = characteristicsController;
