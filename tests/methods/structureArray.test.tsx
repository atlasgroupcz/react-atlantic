import { structureArray } from '../../src/components/Pagination/utils/structureArray';

const MOCK = [
    [0],
    [1, 2, 3, 4, 5, -1, 20],
    [1, 2, 3, 4, 5, 6, -1, 20],
    [1, -1, 3, 4, 5, 6, 7, -1, 20],
    [1, -1, 8, 9, 10, 11, 12, -1, 20],
    [1, -1, 15, 16, 17, 18, 19, 20],
    [1, -1, 16, 17, 18, 19, 20],
];

describe('structureArray', () => {
    it('should return an element with changing props', () => {
        expect(structureArray({ count: 0, page: 1 })).toEqual(MOCK[0]);
        expect(structureArray({ count: 0, page: 10 })).toEqual(MOCK[0]);
        expect(structureArray({ count: 20, page: 1 })).toEqual(MOCK[1]);
        expect(structureArray({ count: 20, page: 4 })).toEqual(MOCK[2]);
        expect(structureArray({ count: 20, page: 5 })).toEqual(MOCK[3]);
        expect(structureArray({ count: 20, page: 10 })).toEqual(MOCK[4]);
        expect(structureArray({ count: 20, page: 17 })).toEqual(MOCK[5]);
        expect(structureArray({ count: 20, page: 18 })).toEqual(MOCK[6]);
    });
});
