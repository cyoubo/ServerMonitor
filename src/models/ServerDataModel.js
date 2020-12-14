export default {

    namespace: 'ServerDataModel',
  
    state: {
        dataSource : []
    },

  
    effects: {
      *queryAllServiceRecord({ payload }, { call, put }) {  
        yield put({ type: 'updateDataSource', payload : [1] });
      },
    },
  
    reducers: {
      updateDataSource(state, action) {
        return { dataSource: action.payload };
      },
    },
  
  };
  