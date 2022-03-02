/*

{
    notes: [],
    active: null | {
        id: 'uid',
        title: '',
        body: '',
        imageUrl: '',
        date: '1-1-2000'
    }
}

*/

const initialState = {
    notes: [],
    active: null,
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
