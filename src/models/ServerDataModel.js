import * as serviceImp from "../services/ServiceDataService"

export default {

    namespace: 'ServerDataModel',
  
    state: {
        dataSource : []
    },

  
    effects: {
      *queryAllServiceRecord({ payload }, { call, put }) {  
        const response = yield call(serviceImp.api_querySerivceRecord,payload.maxCount)
        if(response.data !== undefined && response.data.status === true){
          const dataSource = response.data.data
          yield put({ type: 'updateDataSource', payload : dataSource });
        }
        else{
          console.error(response.error)
        }
      },
    },
  
    reducers: {
      updateDataSource(state, action) {
        return { dataSource: action.payload };
      },
    },
  
  };
  