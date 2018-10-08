import weather from '../../reducers'
import * as types from '../../constants'


describe('weather reducer', () => {
    it('should handle DATA_SUCCESS', () => {
        expect(
            weather({},{
                type: types.REQUEST_API_DATA_SUCCESS,
                payload : []
            })
        )
    });
});