import { structureArray } from '../../../src/components/Pagination/utils/structureArray';
import { MOCK_ARRAYS } from './mocks/MOCK';

describe('structureArray', () => {
    it('should return an element with changing props', () => {
        expect(structureArray({ count: 0, page: 1 })).toEqual(MOCK_ARRAYS[0]);
        expect(structureArray({ count: 0, page: 10 })).toEqual(MOCK_ARRAYS[0]);
        expect(structureArray({ count: 20, page: 1 })).toEqual(MOCK_ARRAYS[1]);
        expect(structureArray({ count: 20, page: 4 })).toEqual(MOCK_ARRAYS[2]);
        expect(structureArray({ count: 20, page: 5 })).toEqual(MOCK_ARRAYS[3]);
        expect(structureArray({ count: 20, page: 10 })).toEqual(MOCK_ARRAYS[4]);
        expect(structureArray({ count: 20, page: 17 })).toEqual(MOCK_ARRAYS[5]);
        expect(structureArray({ count: 20, page: 18 })).toEqual(MOCK_ARRAYS[6]);
    });
});
