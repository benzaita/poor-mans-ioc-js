// 2. Note that the FeaturesService also has a dependency to another module.
const worldviewService = require('./WorldviewService')

class FeaturesService {
    constructor(worldviewService) {
        this.worldviewService = worldviewService
    }

    list() {
        return ['real', 'list', 'of', 'features']
    }
}

// 1. We register an instance under the name "FeaturesService" in the module system. Just like
// we would have registered an instance in an IOC container.
module.exports = new FeaturesService(worldviewService)
