import Vue from 'vue';
export const EVENT_ADD_CUSTOMER = 'add-customer';
export const EVENT_TOGGLE_REG_MENU = 'toggle-reg-menu';
export const EVENT_SELECTED_CMP = 'selected-cmp';
export const EVENT_OPEN_EDITOR_WORKING_HOURS = 'edit-working-hours'

export const eventBus = new Vue();