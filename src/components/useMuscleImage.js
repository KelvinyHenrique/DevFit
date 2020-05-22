
export default (muscle) => {
    let muscleImage = null;

    switch (muscle) {
        case 'abs':
            muscleImage = require('../assets/muscles/abs.png');
            break;

        case 'back':
            muscleImage = require('../assets/muscles/back.png');
            break;

        case 'biceps':
            muscleImage = require('../assets/muscles/biceps.png');
            break;

        case 'chest':
            muscleImage = require('../assets/muscles/chest.png');
            break;

        case 'gluteos':
            muscleImage = require('../assets/muscles/gluteos.png');
            break;

        case 'legs':
            muscleImage = require('../assets/muscles/legs.png');
            break;


        case 'shoulders':
            muscleImage = require('../assets/muscles/shoulders.png');
            break;


        case 'triceps':
            muscleImage = require('../assets/muscles/triceps.png');
            break;
            
        default:
            break;
    }

    return muscleImage;
}