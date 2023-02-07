<template>
    <div>
        <h1>App Vue</h1>
        <button @click="addUser">Add user</button>
        <router-view></router-view>
    </div>
</template>
<script>
import store from './store/store';
import { addUser } from './store/slices/userSlice';
import { useSelector, useDispatch } from './helpers';
export default {
    methods: {
        addUser: () => {
            // const useDispatch = () => store.dispatch;
            const dispatch = useDispatch();

            // const useSelector = (state) => store.getState(state);
            // const user = store.getState('user');

            dispatch(addUser({ name: 'Dung', age: 21 }));
            setTimeout(() => {
                const { user } = useSelector((state) => state.user);
                console.log(user);
            }, 2000);
        },
    },
};
</script>
<style></style>
