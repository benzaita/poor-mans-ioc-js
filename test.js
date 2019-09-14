
it('should work :-P', () => {
    // Note that we require an _instance_, not a class.
    // We let the module system provide us with an instance, just like an IOC container would.
    const featuresService = require('./FeaturesService')

    const list = featuresService.list()
    expect(list).toEqual(['real', 'list', 'of', 'features'])
})

it('should allow mocking', () => {
    const featuresService = jest.genMockFromModule('./FeaturesService')
    featuresService.list.mockReturnValueOnce(['mocked', 'list'])
    const list = featuresService.list()
    expect(list).toEqual(['mocked', 'list'])
})
