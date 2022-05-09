import { RootState } from 'services/store';

export const selectCurrentUser = (state: RootState) => state.profile.user;
