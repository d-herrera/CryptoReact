import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>



