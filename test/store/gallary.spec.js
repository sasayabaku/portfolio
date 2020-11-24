import { createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import gallary from '@/store/gallary.js';
import { cloneDeep } from 'lodash';

describe('store/gallary', () => {

    let store
    let localVue

    beforeEach(() => {
        localVue = createLocalVue()
        localVue.use(Vuex)
        store = new Vuex.Store(gallary)
    })
})