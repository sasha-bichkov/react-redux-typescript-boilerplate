import { convertToSnakeCase } from '../convertSnakeCase'

describe('converToSnakeCase', () => {

  describe('if an object without properties is passed', () => {
    it('returns it', () => {
      const testObject = {}

      const result = convertToSnakeCase(testObject)

      expect(result).toEqual({})
    })
  })

  describe('if an object with a snake case param is passed', () => {
    it('returns the object as it is', () => {
      const testObject = {
        my_param: 'value'
      }

      const result = convertToSnakeCase(testObject)

      expect(result).toEqual(testObject)
    })
  })

  describe('if an object with a camelCase param is passed', () => {
    it('returns an object with snake case params', () => {
      const testObject = {
        myParam: 'value'
      }

      const result = convertToSnakeCase(testObject)

      expect(result).toEqual({
        my_param: 'value'
      })
    })
  })

  describe('if multiple params are passed', () => {
    it('returns an object with snake case params', () => {
      const testObject = {
        myParam: 'value',
        myParam2: 'value',
        myParam3: 'value',
        my_param4: 'value',
      }

      const result = convertToSnakeCase(testObject)

      expect(result).toEqual({
        my_param: 'value',
        my_param_2: 'value',
        my_param_3: 'value',
        my_param_4: 'value',
      })
    })
  })

  describe('if a nested param is passed', () => {
    it('returns an object with snake case params', () => {
      const testObject = {
        myParam: {
          myParam2: 'value'
        }
      }

      const result = convertToSnakeCase(testObject)

      expect(result).toEqual({
        my_param: {
          my_param_2: 'value'
        }
      })
    })
  })

  describe('if there are multiple params', () => {
    it('returns an object with snake case params', () => {
      const testObject = {
        myParam: {
          myParam2: 'value'
        },
        myParam2: 'value2'
      }

      const result = convertToSnakeCase(testObject)

      expect(result).toEqual({
        my_param: {
          my_param_2: 'value'
        },
        my_param_2: 'value2'
      })
    })
  })

  describe('if there is nesting 3 levels in depth', () => {
    it('returns an object with snake case params', () => {
      const testObject = {
        myParam: {
          myParam2: {
            myParam3: 'value'
          }
        }
      }

      const result = convertToSnakeCase(testObject)

      expect(result).toEqual({
        my_param: {
          my_param_2: {
            my_param_3: 'value'
          }
        }
      })
    })
  })

  describe('if there is nesting 11 levels in depth', () => {
    it('returns an object with snake case params', () => {
      const testObject = {
        myParam: {
          myParam2: {
            myParam3: {
              myParam4: {
                myParam5: {
                  myParam6: {
                    myParam7: {
                      myParam8: {
                        myParam9: {
                          myParam10: {
                            myParam11: 'test'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      const result = convertToSnakeCase(testObject)

      expect(result).toEqual({
        my_param: {
          my_param_2: {
            my_param_3: {
              my_param_4: {
                my_param_5: {
                  my_param_6: {
                    my_param_7: {
                      my_param_8: {
                        my_param_9: {
                          my_param_10: {
                            my_param_11: 'test'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })
    })
  })

  describe('if there is an array as a value', () => {
    it('returns an object with snake case params', () => {
      const testObject = {
        test: 'value',
        myParam4: {
          test: 'value'
        },
        my: 'value',
        myArray: [1, 2, 3, 4, 5]
      }

      const result = convertToSnakeCase(testObject)

      expect(result).toEqual({
        test: 'value',
        my_param_4: {
          test: 'value'
        },
        my: 'value',
        my_array: [1, 2, 3, 4, 5]
      })
    })
  })
})
