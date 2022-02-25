import { esES, ptBR } from '@material-ui/core/locale';

export type LocaleType = typeof ptBR;

const localeMap = new Map<string, LocaleType>()
localeMap.set('es', esES);
localeMap.set('es-ES', esES);

localeMap.set('pt', ptBR);
localeMap.set('pt-BR', ptBR);

export const LocaleProvider = {
    get(lang = navigator.language) {
        return localeMap.get(lang) ?? localeMap.get(lang.substring(0, 2)) ?? ptBR
    }
}