import { Texts as Text_es_ES } from './VehicleFilter.texts-es_ES';
import { Texts as Texts_es_PER } from './VehicleFilter.texts-es_PER';
import { Texts as Texts_es_PY } from './VehicleFilter.texts-es_PY';
import { Texts as Text_pt_BR } from './VehicleFilter.texts-pt_BR';

export type TextsType = typeof Text_pt_BR

const map = new Map<string, TextsType>()
map.set('es', Text_es_ES)
map.set('es-ES', Text_es_ES)
map.set('es-PER', Texts_es_PER)
map.set('es-PY', Texts_es_PY)

map.set('pt', Text_pt_BR)
map.set('pt-BR', Text_pt_BR)

export const TextsProvider = {
    get(lang = navigator.language) {
        return map.get(lang) ?? map.get(lang.substring(0, 2)) ?? Text_pt_BR
    }
}