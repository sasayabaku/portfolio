import { mount } from "@vue/test-utils";
import Logo from '@/components/Logo.vue';
import Skillsets from '@/components/skillsets';

describe('components/Logo', () => {
    test('コンポーネントが存在する', () => {
        const wrapper = mount(Logo)

        expect(wrapper.exists()).toBeTruthy()
    })
})

describe('components/skillset', () => {
    test('コンポーネントが存在する', () => {
        const wrapper = mount(Skillsets)

        expect(wrapper.exists()).toBeTruthy()
    })
})