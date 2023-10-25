import { createSlice } from "@reduxjs/toolkit";

const Studata = [
    { name: "hello", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "hello", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "hello", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "hello", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "hello", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "hello", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "hello", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "hello", age : 24 ,course : 'MERN' ,  batch : 'may',  }
]

const StuSlice = createSlice({
    name : "Student_Data",
    initialState : Studata,
    reducers : {
        editStudent : (state, action ) =>{
            state[action.payload.ParamIndex] = action.payload.info
        },
        addStudent : (state, action ) =>{
            state.push(action.payload);
        }
    }
})

export const { editStudent , addStudent} = StuSlice.actions;
export default StuSlice.reducer;