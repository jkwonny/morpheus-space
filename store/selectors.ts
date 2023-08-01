import { State } from './store';

export const selectCDMId = (state: State) => state.selectedId;
export const selectCDMData = (state: State) => state.CDMData;
