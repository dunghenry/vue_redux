import store from '../store/store';

export const useDispatch = () => store.dispatch;

export const useSelector = (state) => store.getState(state);
