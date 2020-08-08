import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    items: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            // console.log('Items Gotten');
            let temp = {...state}
            temp.state.items = action.payload;
            temp.state.loading = false;
            return temp;

        case DELETE_ITEM:
            let ret = {...state}
            ret.state.items = state.state.items.filter(item => item._id !== action.payload)
            return ret;

        case ADD_ITEM:
            // console.log('Item Added');
                let add = {...state}
                add.state.items = [action.payload, ...state.state.items]
                console.log(add.state.items);
                return add;

        case ITEMS_LOADING:
                let load = {...state}
                load.state.loading = true;
                // console.log("LOAD", load)
                return load;

        default:
            // console.log("DEFAULT")
            return {
                state
            };
    }
}



// import uuid from 'react-uuid';
// import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

// const initialState = {
//     items: [
//         {id: uuid(), name: 'Eggs'},
//         {id: uuid(), name: 'Milk'},
//         {id: uuid(), name: 'Wheat'},
//         {id: uuid(), name: 'Lemon'}
//     ]
// }

// export default function(state = initialState, action) {
//     switch(action.type) {
//         case GET_ITEMS:
//             console.log()
//             return {
//                 ...state
//             };
//         case DELETE_ITEM:
//             let ret = {...state}
//             ret.state.items = state.state.items.filter(item => item.id !== action.payload)
//             return ret;

//         case ADD_ITEM:
//             console.log('Item Added');
//                 let add = {...state}
//                 add.state.items = [action.payload, ...state.state.items]
//                 console.log(add.state.items);
//                 return add;

//         default:
//             console.log("DEFAULT")
//             return {
//                 state
//             };
//     }
// }


