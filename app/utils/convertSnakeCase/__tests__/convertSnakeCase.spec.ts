import { convertToSnakeCase } from '../convertSnakeCase'

describe('converToSnakeCase', () => {

  it('works [1]', () => {
    const testObject = {}

    const result = convertToSnakeCase(testObject)

    expect(result).toEqual({})
  })

  it('works [2]', () => {
    const testObject = {
      my_param: 'value'
    }

    const result = convertToSnakeCase(testObject)

    expect(result).toEqual(testObject)
  })

  it('works [3]', () => {
    const testObject = {
      myParam: 'value'
    }

    const result = convertToSnakeCase(testObject)

    expect(result).toEqual({
      my_param: 'value'
    })
  })

  it('works [4]', () => {
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

  it('works [5]', () => {
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

  it('works [6]', () => {
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

  it('works [7]', () => {
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

  it('works [8]', () => {
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

  it('works [9]', () => {
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
