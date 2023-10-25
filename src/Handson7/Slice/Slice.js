import { createSlice } from "@reduxjs/toolkit";

const Studata = [
    { name: "EA25", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "EA25", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "EA25", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "EA25", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "EA25", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "EA25", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "EA25", age : 24 ,course : 'MERN' ,  batch : 'may',  },
    { name: "EA25", age : 24 ,course : 'MERN' ,  batch : 'may',  }
]

const StuSlice = createSlice({
    name : "Student_Data",
    initialState : Studata,
    reducers : {
        editStudent : (state, action ) =>{
            state[action.payload.Index] = action.payload.info
        },
        addStudent : (state, action ) =>{
            state.push(action.payload.tempObj);
        }
    }
})

export const { editStudent , addStudent} = StuSlice.actions
export default StuSlice.reducer;