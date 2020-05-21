const range = require("./range")

describe("range", () => {
    it("should return single item when start and end are the same", () => {
        expect(range(0,0)).toEqual([0])
    })
    it("should return an inclusive range", () => {
        expect(range(0,3)).toEqual([0,1,2,3])
    })
    it("should return an inclusive range that starts at any number", () => {
        expect(range(2,10)).toEqual([2,3,4,5,6,7,8,9,10])
    })
})
