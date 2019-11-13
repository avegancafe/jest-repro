import util from './util'

jest.mock('./util')

describe('#util', () => {
  beforeEach(() => {
    util()
  })
  it('util returns 5', () => {
    expect(util).toHaveBeenCalled()
    expect(util()).toEqual(5)
  })
})
