import { createTheme } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { LocaleProvider } from './utils/views/locale';

let themeRef: Theme | undefined;

export function getOrCreateTheme() {
    if (themeRef) {
        return themeRef;
    } else {
        const locale = LocaleProvider.get();

        themeRef = createTheme({
            palette: {
                primary: {
                    main: '#606060',
                    dark: '#363636',
                    light: '#8D8D8D',
                    contrastText: '#FFFFFF',
                },
                secondary: {
                    main: '#43A047',
                    dark: '#00701A',
                    light: '#76D275',
                    contrastText: '#FFFFFF'
                },
                text: {
                    primary: '#000000DE',
                    secondary: '#0000008A',
                    disabled: '#00000061'
                },
                action: {
                    hover: '#E0E0E0',
                    selected: '#00000014',
                    disabledBackground: '#0000001F'
                },
                info: {
                    main: '#2196F3',
                    dark: '#0B79D0',
                    light: '#64B6F7'
                },
                error: {
                    main: '#F44336',
                    dark: '#E31B0C',
                    light: '#F88078'
                },
                warning: {
                    main: '#FF9800',
                    dark: '#C77700',
                    light: '#FFB547'
                },
                success: {
                    main: '#4CAF50',
                    dark: '#3B873E',
                    light: '#7BC67E'
                },
                divider: '#E0E0E0',
            }
        }, locale);

        return themeRef;
    }
}