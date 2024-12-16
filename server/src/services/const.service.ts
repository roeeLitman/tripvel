import { Const, ConstsModel } from "../models/constModel";



export const getConstsList = async () => {
    try {
      return await ConstsModel.find({}).lean();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  
  export const addConstExpense = async (data: Const) => {
    try {
      const constExpense = new ConstsModel(data);
      return await constExpense.save();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };