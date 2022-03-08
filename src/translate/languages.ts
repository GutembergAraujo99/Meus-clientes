import { es } from './es';
import { esper } from './esper';
import { espy } from './espy';
import { pt } from './pt';

export const languages = {
    'pt-BR': { ...pt },
    es: {
        ...pt,
        ...es
    },
    'es-PY': {
        ...pt,
        ...es,
        ...espy
    },
    'es-PER': {
        ...pt,
        ...es,
        ...espy,
        ...esper
    }
};