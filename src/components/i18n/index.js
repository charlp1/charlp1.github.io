import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import en from './en';
import ja from './ja';

i18next
    .use(reactI18nextModule)
    .init(
        {
            interpolcation: {
                escapeValue: false,
            },
            lng: 'en',
            resources: {
                en,
                ja,
            },
        },
        (err, t) => {
            if (err) {
                return console.error(err);
            }
        },
    );

export default i18next;
