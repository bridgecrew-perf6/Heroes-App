import {authReducer} from '../../auth/authReducer';
import { types } from '../../types/types';


describe('Pruebas en authReducer', () => { 
    test('debe de retonar el estado por defecto', () => {
        const state = authReducer({logged: false}, {}); 
        expect(state).toEqual({logged: false});
    })

    test('debe de autenticar y colocar el "name" del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Vicente'
            }
        }
        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            name: 'Vicente',
            logged: true
        });
    })

    test('debe de borrar el "name" del usuario y logged en false', () => {
        const action = {
            type: types.logout,
        }
        const state = authReducer({logged: true, name: 'Vicente'}, action);
        expect(state).toEqual({logged: false});
    })
});