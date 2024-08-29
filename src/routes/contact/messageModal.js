import {writable} from 'svelte/store';

export const messageModal = writable(false)

export const message = writable('')