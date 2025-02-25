let translateResources = {
    en: {
        translation: enTranslate  // const enTranslate defend at ./locales/en.js
    },
    ru: {
        translation: ruTranslate  // const ruTranslate defend at ./locales/ru.js
    }
}

i18next.init({
    lng: 'en',
    debug: true,
    saveMissing: true,
    ele: document.body,
    backend: false,
    ignoreWithoutKey: false,
    ignoreTags: ['noTranslate'],
    ignoreIds: [],
    ignoreClasses: ['no-translate'],
    resources: translateResources,
});

window.i18nextify.init({
    i18next,
    lng: 'en',
    keyAttr: 'i18next-key__Disabled',
    backend: false,
    resources: translateResources,
});


window.i18nextify.i18next.on("languageChanged", function (c) {
  console.log("i18next: languageChanged %s", c);
  window.i18nextify.forceRerender();
});

function changeLng (lng) {
    if (window.i18nextify.i18next.language !== lng) {
        window.i18nextify.i18next.changeLanguage(lng);
    }
}
