"use client"

import {createI18nClient} from 'next-international/client'

export const {
    useI18n, useScopedI18n, I18nProviderClient, useCurrentLocale, useChangeLocale
} = createI18nClient({
    en: () => import('./lang/en'),
    fr: () => import('./lang/fr'),
    es: () => import('./lang/es'),
    de: () => import('./lang/de')
})