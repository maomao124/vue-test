import {createStore} from 'vuex'
import {ADD_COUNT, UPDATE_AGE, UPDATE_NAME} from '@/store/mutation-types'

// 创建一个新的 store 实例
const store = createStore({
    state()
    {
        return {
            count: 0,
            name: '',
            age: 18
        }
    },
    mutations: {
        /*increment(state)
        {
            state.count++
        },
        updateName(state, name)
        {
            state.name = name;
        },
        updateAge(state, age)
        {
            state.age = age;
        }*/
        increment(state)
        {
            state.count++
        },
        updateName(state, payload)
        {
            state.name = payload.name;
        },
        updateAge(state, payload)
        {
            state.age = payload.age;
        },
        [ADD_COUNT](state)
        {
            state.count++
        },
        [UPDATE_NAME](state, payload)
        {
            state.name = payload.name;
        },
        [UPDATE_AGE](state, payload)
        {
            state.age = payload.age;
        },
    },
    getters:
        {
            getCount2(state)
            {
                if (state.count > 10)
                {
                    console.log("大于10，返回10")
                    return 10;
                }
                return state.count;
            },
            getName2(state)
            {
                console.log("取name ：" + state.name)
                return state.name;
            },
            getAge2(state)
            {
                console.log("取age ：" + state.age)
                return state.age;
            },
            getCount3: (state) => (name) =>
            {
                console.log("当前名字：" + name)
                if (state.count > 10)
                {
                    console.log("大于10，返回10")
                    return 10;
                }
                return state.count;
            },
            getName3: (state) => (age) =>
            {
                console.log("当前年龄：" + age)
                console.log("取name ：" + state.name)
                return state.name;
            },
            getAge3: (state) => (count) =>
            {
                console.log("当前计数：" + count)
                console.log("取age ：" + state.age)
                return state.age;
            },
        }
})

export default store;
