export enum PAGE_KEYS {
    HOME = 'HOME',
    ADD_PORTAL = 'ADD_PORTAL',
    MY_OFFERS = 'MY_OFFERS',
    ADD_OFFER = 'ADD_OFFER',
}

export enum PAGE_NAMES {
    HOME = 'Domů',
    ADD_PORTAL = 'Spárovat portál',
    MY_OFFERS = 'Moje inzeráty',
    ADD_OFFER = 'Přidat inzerát',
}

export enum PAGE_PATHS {
    HOME = '/',
    ADD_PORTAL = '/pridat-portal',
    MY_OFFERS = '/moje-inzeraty',
    ADD_OFFER = '/pridat-inzerat',
}

export const NAV_ITEMS_ALL = [
    {
        key: PAGE_KEYS.HOME,
        name: PAGE_NAMES.HOME,
        path: PAGE_PATHS.HOME
    },
    {
        key: PAGE_KEYS.ADD_PORTAL,
        name: PAGE_NAMES.ADD_PORTAL,
        path: PAGE_PATHS.ADD_PORTAL
    },
    {
        key: PAGE_KEYS.MY_OFFERS,
        name: PAGE_NAMES.MY_OFFERS,
        path: PAGE_PATHS.MY_OFFERS
    },
    {
        key: PAGE_KEYS.ADD_OFFER,
        name: PAGE_NAMES.ADD_OFFER,
        path: PAGE_PATHS.ADD_OFFER
    }
]

export const NAV_ITEMS_FILTERED = [
    {
        key: PAGE_KEYS.HOME,
        name: PAGE_NAMES.HOME,
        path: PAGE_PATHS.HOME
    },
    {
        key: PAGE_KEYS.MY_OFFERS,
        name: PAGE_NAMES.MY_OFFERS,
        path: PAGE_PATHS.MY_OFFERS
    },
    {
        key: PAGE_KEYS.ADD_PORTAL,
        name: PAGE_NAMES.ADD_PORTAL,
        path: PAGE_PATHS.ADD_PORTAL
    }
]