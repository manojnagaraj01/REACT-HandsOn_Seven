import { createSlice } from "@reduxjs/toolkit";

const Studata = [
    { name: "Dravid", age : 24 ,course : 'MERN' ,  batch : 'EA25',  },
    { name: "Dhoni", age : 25 ,course : 'MEVN' ,  batch : 'EA26',  },
    { name: "Virat", age : 23 ,course : 'MEAN' ,  batch : 'EA24',  },
    { name: "Rahul", age : 24 ,course : 'MERN' ,  batch : 'EA23',  },
    { name: "Gill", age : 21 ,course : 'MEAN' ,  batch : 'EA25',  },
    { name: "Shami", age : 22 ,course : 'MEVN' ,  batch : 'EA26',  },
    { name: "Siraj", age : 23 ,course : 'MEAN' ,  batch : 'ES24',  },
    { name: "Kuldeep", age : 25 ,course : 'MERN' ,  batch : 'EA23',  }
]

const StuSlice = createSlice({
    name : "Student_Data",
    initialState : Studata,
    reducers : {
        editStudent : (state, action ) =>{
            state[action.payload.ParamIndex] = action.payload.info
        },
        addStudent : (state, action ) =>{
            state.push(action.payload); //you can add action.payload.tempObj if you dont add {} in tempObj in line 21
        }
    }
})

export const { editStudent , addStudent} = StuSlice.actions;
export default StuSlice.reducer;