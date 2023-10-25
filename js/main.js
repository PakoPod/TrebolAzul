(()=>{
    const e = {
        analyticsCookies: ["_ga", "_gid"],
        adsAndTargetingCookies: ["_fbp", "_uetsid", "_uetvid"],
        privacyLink: {
            en: "privacy-policy.php",
            es: "es/politica-de-privacidad.html",
            ru: "ru/privacy-policy.html",
            de: "de/datenschutz.html",
            pl: "pl/polityka-prywatnosci.html",
            it: "it/privacy-policy.html",
            tr: "tr/gizlilik-politikasi.html",
            fr: "fr/regles-de-confidentialite.html",
            "pt-br": "pt-br/politica-de-privacidade.html",
            nl: "nl/privacy-policy.html",
            cn: "cn/privacy-policy.html",
            cz: "cz/privacy-policy.html",
            ua: "ua/privacy-policy.html",
            hu: "hu/adatvedelmi-iranyelvek.html",
            sv: "sv/privacy-policy.php"
        },
        setSettings: {
            tm: "setUserSettingsFunc",
            one: "setUserSettingsONEFunc"
        }
    };
    function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        i(e)
    }
    function o(e, i) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e);
            i && (t = t.filter((function(i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable
            }
            ))),
            o.push.apply(o, t)
        }
        return o
    }
    function t(e) {
        for (var i = 1; i < arguments.length; i++) {
            var t = null != arguments[i] ? arguments[i] : {};
            i % 2 ? o(Object(t), !0).forEach((function(i) {
                n(e, i, t[i])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(i) {
                Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
            }
            ))
        }
        return e
    }
    function n(e, o, t) {
        return (o = function(e) {
            var o = function(e, o) {
                if ("object" !== i(e) || null === e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, o || "default");
                    if ("object" !== i(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === o ? String : Number)(e)
            }(e, "string");
            return "symbol" === i(o) ? o : String(o)
        }(o))in e ? Object.defineProperty(e, o, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[o] = t,
        e
    }
    const a = t(t({}, e), {}, {
        siteUrl: "https://www.templatemonster.com/",
        settings: {
            tm: {
                cookieDomain: ".templatemonster.com",
                setSettingsFunc: e.setSettings.tm
            },
            blog: {
                cookieDomain: ".monsterspost.com",
                setSettingsFunc: e.setSettings.tm
            },
            one: {
                cookieDomain: ".monsterone.com",
                setSettingsFunc: e.setSettings.one
            }
        },
        serviceUsers: "//users.templatemonster.com/api/v1/"
    });
    var s, r, l, c = function(e, i) {
        return "<a href=".concat(function(e) {
            return "".concat(a.siteUrl).concat(a.privacyLink[e] || a.privacyLink.en)
        }(e), ' class="CookiePolicy__link CookiePolicy__text" target="_blank">').concat(i, "</a>")
    }, p = {
        en: {
            popupTitle: "We use cookie files",
            popupDescription: "We activate all cookies by default to ensure the proper functioning of our website, advertisement, and analytics according to the ".concat(c("en", "Privacy Policy"), "."),
            settings: "Settings",
            acceptAll: "Accept All",
            cookieTitle: "Cookie Files Settings",
            cookieSubTitle: "About cookie files",
            cookieDescription: "We use cookies to provide you with access to all website features as well as to analyze, personalize, and improve user experience. In this block, you can change the cookie files settings or accept all of them by default. In order to get a better understanding of what cookie files are and how they are used on our website, please read our ".concat(c("en", "privacy policy"), "."),
            firstOptionTitle: "Necessary cookie files",
            firstOptionDescription: "The purpose of these cookies is to deliver the requested service, application, or resource. Any of your requests cannot be done properly without these cookies. In general, their purpose is to manage the actions you perform on our website, e.g., they help you get visual elements, use page resources, sign in to your account. In addition to setting up essential functions, with these cookies, we can ensure the security and efficiency of our website.",
            secondOptionTitle: "Analytical cookie files",
            secondOptionDescription: "The purpose of these cookies is to provide quantitative data on user interactions with our website. Also, these cookie files collect information that is used to track website performance. Usually, they do not collect sensitive information and provide us only with general statistics, like the number of visitors to different pages, traffic sources, and conversion rate to help us improve website performance. By disabling these cookies, we will not be able to identify you as a visitor.",
            thirdOptionTitle: "Advertising cookie files",
            thirdOptionDescription: "These cookies are set by our advertising partners in order to provide behavioral advertising and remarketing analytics. They collect browsing information to build user profiles and run personalized advertising. When you visit other websites, you will see customized ads based on your profile created according to your interests and behavior.",
            saveSettings: "Save Settings"
        },
        ua: {
            popupTitle: "Ми використовуємо файли cookie",
            popupDescription: "Ми активуємо всі файли cookie за замовчуванням, щоб забезпечити належне функціонування нашого веб -сайту, реклами та аналітики відповідно до ".concat(c("ua", "політики конфіденційності"), "."),
            settings: "Налаштування",
            acceptAll: "Прийняти все",
            cookieTitle: "Налаштування файлів cookie",
            cookieSubTitle: "Про файли cookie",
            cookieDescription: "Ми використовуємо файли cookie, щоб надати вам доступ до всіх функцій веб -сайту, а також для аналізу, персоналізації та вдосконалення досвіду користувачів. У цьому блоці ви можете змінити налаштування файлів cookie або прийняти їх за замовчуванням. Для того, щоб краще зрозуміти, що таке файли cookie та як вони використовуються на нашому веб -сайті, прочитайте нашу ".concat(c("ua", "Політику конфіденційності"), "."),
            firstOptionTitle: "Необхідні файли cookie",
            firstOptionDescription: "Мета цих файлів cookie - надання запитуваної послуги, програми чи ресурсу. Будь -який із ваших запитів не може бути зроблено належним чином без цих файлів cookie. Загалом, їх мета - керувати діями, які ви виконуєте на нашому веб -сайті, наприклад, вони допомагають вам отримати візуальні елементи, використовувати ресурси сторінки, увійти до свого облікового запису. Окрім налаштування основних функцій, за допомогою цих файлів cookie ми можемо забезпечити безпеку та ефективність нашого веб -сайту.",
            secondOptionTitle: "Аналітичні файли cookie",
            secondOptionDescription: "Мета цих файлів cookie - надання кількісних даних про взаємодію користувачів з нашим веб -сайтом. Також ці файли cookie збирають інформацію, яка використовується для відстеження продуктивності веб -сайту. Зазвичай вони не збирають конфіденційну інформацію та надають нам лише загальну статистику, як, наприклад, кількість відвідувачів різних сторінок, джерел трафіку та коефіцієнт конверсії, щоб допомогти нам підвищити продуктивність веб -сайту. Відключивши ці файли cookie, ми не зможемо ідентифікувати вас як відвідувача.",
            thirdOptionTitle: "Рекламні файли cookie",
            thirdOptionDescription: "Ці файли cookie встановлені нашими рекламними партнерами, щоб забезпечити поведінкову рекламу та аналітику ремаркетингу. Вони збирають інформацію про перегляд для створення профілів користувачів та запуску персоналізованої реклами. Під час відвідування інших веб -сайтів ви побачите індивідуальні оголошення на основі вашого профілю, створеного відповідно до ваших інтересів та поведінки.",
            saveSettings: "Зберегти налаштування"
        },
        ru: {
            popupTitle: "Мы используем файлы cookie",
            popupDescription: "Мы активируем все файлы cookie по умолчанию, чтобы обеспечить правильное функционирование нашего веб -сайта, рекламы и аналитики в соответствии с ".concat(c("ru", "политикой конфиденциальности"), "."),
            settings: "Настройки",
            acceptAll: "Принять все",
            cookieTitle: "Настройки файлов cookie",
            cookieSubTitle: "О файлах cookie",
            cookieDescription: "Мы используем файлы cookie, чтобы предоставить вам доступ ко всем функциям веб -сайта, а также для анализа, персонализации и улучшения пользовательского опыта. В этом блоке вы можете изменить настройки файлов cookie или принять их все по умолчанию. Чтобы лучше понять, что такое файлы cookie и как они используются на нашем веб -сайте, прочитайте нашу ".concat(c("ru", "политику конфиденциальности"), "."),
            firstOptionTitle: "Необходимые файлы cookie",
            firstOptionDescription: "Целью этих файлов cookie является предоставление запрошенной услуги, приложения или ресурса. Любой из ваших запросов не может быть сделан должным образом без этих файлов cookie. В целом, их цель состоит в том, чтобы управлять действиями, которые вы выполняете на нашем веб -сайте, например, они помогают вам получить визуальные элементы, использовать ресурсы страниц, войти в свою учетную запись. В дополнение к настройке основных функций, с этими файлами cookie, мы можем обеспечить безопасность и эффективность нашего веб -сайта.",
            secondOptionTitle: "Аналитические файлы cookie",
            secondOptionDescription: "Целью этих файлов cookie является предоставление количественных данных о взаимодействии пользователей с нашим веб -сайтом. Кроме того, эти файлы cookie собирают информацию, которая используется для отслеживания производительности веб -сайта. Обычно они не собирают конфиденциальную информацию и предоставляют нам только общую статистику, например, количество посетителей разных страниц, источников трафика и коэффициента конверсии, чтобы помочь нам повысить производительность веб -сайта. Отключив эти файлы cookie, мы не сможем идентифицировать вас как посетителя.",
            thirdOptionTitle: "Рекламные файлы cookie",
            thirdOptionDescription: "Эти файлы cookie устанавливаются нашими рекламными партнерами, чтобы обеспечить поведенческую рекламу и аналитику ремаркетинга. Они собирают информацию о просмотре для создания профилей пользователей и запускают персонализированную рекламу. Когда вы посещаете другие веб -сайты, вы увидите индивидуальные объявления на основе вашего профиля, созданного в соответствии с вашими интересами и поведением.",
            saveSettings: "Сохранить настройки"
        },
        pl: {
            popupTitle: "Używamy plików cookie",
            popupDescription: "Domyślnie aktywujemy wszystkie pliki cookie, aby zapewnić właściwe funkcjonowanie naszej witryny, reklamy i analizy zgodnie z ".concat(c("pl", "Polityką prywatności"), "."),
            settings: "Ustawienia",
            acceptAll: "Akceptuj wszystkie",
            cookieTitle: "Ustawienia plików cookie",
            cookieSubTitle: "O plikach cookie",
            cookieDescription: "Używamy plików cookie, aby zapewnić dostęp do wszystkich funkcji witryny, a także do analizy, personalizacji i poprawy wrażeń użytkowników. W tym bloku możesz domyślnie zmienić ustawienia  plików cookie lub domyślnie zaakceptować je wszystkie. Aby lepiej zrozumieć, czym są pliki plików cookie i jak są one używane na naszej stronie internetowej, przeczytaj naszą ".concat(c("pl", "politykę prywatności"), "."),
            firstOptionTitle: "Niezbędne pliki cookie",
            firstOptionDescription: "Celem tych plików cookie jest dostarczenie żądanej usługi, aplikacji lub zasobów. Żadnej z twoich żądań nie można wykonać poprawnie bez tych plików cookie. Ogólnie rzecz biorąc, ich celem jest zarządzanie działaniami, które wykonujesz na naszej stronie internetowej, np. Pomagają one uzyskać elementy wizualne, korzystać z zasobów stron, zalogowanie się na swoje konto. Oprócz konfigurowania niezbędnych funkcji, za pomocą tych plików cookie, możemy zapewnić bezpieczeństwo i wydajność naszej strony internetowej.",
            secondOptionTitle: "Analityczne pliki cookies",
            secondOptionDescription: "Celem tych plików cookie jest dostarczenie danych ilościowych na temat interakcji użytkowników z naszą witryną. Ponadto te pliki plików cookie gromadzą informacje, które służą do śledzenia wydajności witryny. Zwykle nie zbierają poufnych informacji i dostarczają nam tylko ogólnych statystyk, takich jak liczba odwiedzających na różnych stronach, źródłach ruchu i współczynnika konwersji, aby pomóc nam poprawić wydajność strony internetowej. Wyłączając te pliki cookie, nie będziemy w stanie zidentyfikować Cię jako gościa.",
            thirdOptionTitle: "Reklamowe pliki cookies",
            thirdOptionDescription: "Te pliki cookie są ustalane przez naszych partnerów reklamowych w celu zapewnienia analizy reklamowej i remarketingowej. Zbierają informacje o przeglądaniu w celu budowania profili użytkowników i uruchamiania spersonalizowanych reklam. Podczas wizyty w innych stronach internetowych zobaczysz niestandardowe reklamy na podstawie Twojego profilu utworzonego zgodnie z Twoimi zainteresowaniami i zachowaniem.",
            saveSettings: "Zapisz ustawienia"
        },
        de: {
            popupTitle: "Wir verwenden Cookie -Dateien",
            popupDescription: "Wir aktivieren standardmäßig alle Cookies, um die ordnungsgemäße Funktionsweise unserer Website, Werbung und Analyse gemäß den ".concat(c("de", "Datenschutzrichtlinien"), " zu gewährleisten."),
            settings: "Einstellungen",
            acceptAll: "Akzeptiere alle",
            cookieTitle: "Cookie -Dateien Einstellungen",
            cookieSubTitle: "Über Cookie -Dateien",
            cookieDescription: "Wir verwenden Cookies, um Ihnen Zugriff auf alle Website -Funktionen zu gewähren sowie die Benutzererfahrung zu analysieren, zu personalisieren und zu verbessern. In diesem Block können Sie die Einstellungen von Cookie -Dateien ändern oder alle standardmäßig akzeptieren. Um besser zu verstehen, welche Cookie -Dateien sind und wie sie auf unserer Website verwendet werden, lesen Sie bitte unsere ".concat(c("de", "Datenschutzrichtlinien"), "."),
            firstOptionTitle: "Notwendige Cookie -Dateien",
            firstOptionDescription: "Der Zweck dieser Cookies besteht darin, den angeforderten Service, die Anwendung oder den angeforderten Ressource zu liefern. Ohne diese Cookies kann eine Ihrer Anfragen nicht ordnungsgemäß erfolgen. Im Allgemeinen ist es ihr Ziel, die von Ihnen auf unserer Website auszuführenden Aktionen zu verwalten, z. B. können Sie visuelle Elemente erhalten, Seitenressourcen verwenden und sich in Ihrem Konto anmelden. Zusätzlich zum Einrichten von wesentlichen Funktionen mit diesen Cookies können wir die Sicherheit und Effizienz unserer Website gewährleisten.",
            secondOptionTitle: "Analytische Cookie -Dateien",
            secondOptionDescription: "Der Zweck dieser Cookies ist es, quantitative Daten zu Benutzerinteraktionen mit unserer Website bereitzustellen. Außerdem sammeln diese Cookie -Dateien Informationen, die zur Verfolgung der Website -Leistung verwendet werden. Normalerweise sammeln sie keine vertraulichen Informationen und bieten uns nur allgemeine Statistiken, wie die Anzahl der Besucher auf verschiedene Seiten, Verkehrsquellen und Conversion -Rate, um uns bei der Verbesserung der Website zu verbessern. Durch die Deaktivierung dieser Cookies können wir Sie nicht als Besucher identifizieren.",
            thirdOptionTitle: "Werbe -Cookie -Dateien",
            thirdOptionDescription: "Diese Cookies werden von unseren Werbepartnern festgelegt, um Verhaltenswerbung und Remarketing -Analysen bereitzustellen. Sie sammeln Browsinginformationen, um Benutzerprofile zu erstellen und personalisierte Werbung auszuführen. Wenn Sie andere Websites besuchen, sehen Sie angepasste Anzeigen basierend auf Ihrem Profil, das nach Ihren Interessen und Ihrem Verhalten erstellt wurde.",
            saveSettings: "Einstellungen speichern"
        },
        es: {
            popupTitle: "Usamos archivos de cookies",
            popupDescription: "Activamos todas las cookies por defecto para garantizar el funcionamiento adecuado de nuestro sitio web, publicidad y análisis de acuerdo con la ".concat(c("es", "Política de privacidad"), "."),
            settings: "Ajustes",
            acceptAll: "Aceptar todo",
            cookieTitle: "Configuración de archivos de cookie",
            cookieSubTitle: "Acerca de los archivos de cookies",
            cookieDescription: "Utilizamos cookies para proporcionarle acceso a todas las funciones del sitio web, así como para analizar, personalizar y mejorar la experiencia del usuario. En este bloque, puede cambiar la configuración de archivos de cookies o aceptarlos todos de forma predeterminada. Para comprender mejor qué son los archivos de cookies y cómo se usan en nuestro sitio web, lea nuestra ".concat(c("es", "Política de privacidad"), "."),
            firstOptionTitle: "Archivos de cookie necesarios",
            firstOptionDescription: "El propósito de estas cookies es entregar el servicio, la aplicación o el recurso solicitados. Cualquiera de sus solicitudes no se puede hacer correctamente sin estas cookies. En general, su propósito es administrar las acciones que realiza en nuestro sitio web, por ejemplo, lo ayudan a obtener elementos visuales, usar recursos de página, iniciar sesión en su cuenta. Además de establecer funciones esenciales, con estas cookies, podemos garantizar la seguridad y la eficiencia de nuestro sitio web.",
            secondOptionTitle: "Archivos de cookies analíticos",
            secondOptionDescription: "El propósito de estas cookies es proporcionar datos cuantitativos sobre las interacciones del usuario con nuestro sitio web. Además, estos archivos de cookies recopilan información que se utiliza para rastrear el rendimiento del sitio web. Por lo general, no recopilan información confidencial y solo nos proporcionan estadísticas generales, como el número de visitantes a diferentes páginas, fuentes de tráfico y tasa de conversión para ayudarnos a mejorar el rendimiento del sitio web. Al deshabilitar estas cookies, no podremos identificarlo como visitante.",
            thirdOptionTitle: "Archivos de cookies publicitarios",
            thirdOptionDescription: "Estas cookies son establecidas por nuestros socios publicitarios para proporcionar publicidad de comportamiento y análisis de remarketing. Recopilan información de navegación para crear perfiles de usuario y ejecutar publicidad personalizada. Cuando visite otros sitios web, verá anuncios personalizados basados ​​en su perfil creados de acuerdo con sus intereses y comportamientos.",
            saveSettings: "Guardar ajustes"
        },
        it: {
            popupTitle: "Usiamo i file dei cookie",
            popupDescription: "Attiviamo tutti i cookie per impostazione predefinita per garantire il corretto funzionamento del nostro sito Web, della pubblicità e dell'analisi in base alla ".concat(c("it", "politica sulla privacy"), "."),
            settings: "Impostazioni",
            acceptAll: "Accettare tutti",
            cookieTitle: "Impostazioni dei file di cookie",
            cookieSubTitle: "Sui file dei cookie",
            cookieDescription: "Usiamo i cookie per fornirti l'accesso a tutte le funzionalità del sito Web e per analizzare, personalizzare e migliorare l'esperienza dell'utente. In questo blocco, è possibile modificare le impostazioni dei file di cookie o accettarle tutte per impostazione predefinita. Al fine di comprendere meglio quali sono i file di cookie e di come vengono utilizzati sul nostro sito Web, leggi la nostra ".concat(c("it", "politica sulla privacy"), "."),
            firstOptionTitle: "File di cookie necessari",
            firstOptionDescription: "Lo scopo di questi cookie è fornire il servizio, l'applicazione o la risorsa richiesti. Una delle tue richieste non può essere eseguita correttamente senza questi cookie. In generale, il loro scopo è gestire le azioni eseguite sul nostro sito Web, ad esempio, ti aiutano a ottenere elementi visivi, utilizzano risorse di pagina, accedi al tuo account. Oltre a impostare funzioni essenziali, con questi cookie, possiamo garantire la sicurezza e l'efficienza del nostro sito Web.",
            secondOptionTitle: "File di cookie analitici",
            secondOptionDescription: "Lo scopo di questi cookie è fornire dati quantitativi sulle interazioni degli utenti con il nostro sito Web. Inoltre, questi file di cookie raccolgono informazioni utilizzate per tenere traccia delle prestazioni del sito Web. Di solito, non raccolgono informazioni sensibili e ci forniscono solo statistiche generali, come il numero di visitatori a pagine, fonti di traffico e tasso di conversione per aiutarci a migliorare le prestazioni del sito Web. Disabilitando questi cookie, non saremo in grado di identificarti come visitatore.",
            thirdOptionTitle: "File di cookie pubblicitari",
            thirdOptionDescription: "Questi cookie sono impostati dai nostri partner pubblicitari al fine di fornire analisi comportamentali e di remarketing. Raccolgono informazioni di navigazione per creare profili degli utenti ed eseguire pubblicità personalizzate. Quando visiti altri siti Web, vedrai annunci personalizzati in base al tuo profilo creato in base ai tuoi interessi e comportamenti.",
            saveSettings: "Salva le impostazioni"
        },
        "pt-br": {
            popupTitle: "Usamos arquivos de cookie",
            popupDescription: "Ativamos todos os cookies por padrão para garantir o funcionamento adequado de nosso site, anúncio e análise de acordo com a ".concat(c("pt-br", "Política de Privacidade"), "."),
            settings: "Configurações",
            acceptAll: "Aceitar tudo",
            cookieTitle: "Configurações de arquivos de cookie",
            cookieSubTitle: "Sobre arquivos de cookie",
            cookieDescription: "Usamos cookies para fornecer acesso a todos os recursos do site, bem como para analisar, personalizar e melhorar a experiência do usuário. Neste bloco, você pode alterar as configurações dos arquivos de cookie ou aceitar todos eles por padrão. Para entender melhor o que são os arquivos de cookie e como eles são usados ​​em nosso site, leia nossa ".concat(c("pt-br", "política de privacidade"), "."),
            firstOptionTitle: "Arquivos de cookies necessários",
            firstOptionDescription: "O objetivo desses cookies é fornecer o serviço, aplicativo ou recurso solicitado. Qualquer um de seus pedidos não pode ser feito corretamente sem esses cookies. Em geral, o objetivo deles é gerenciar as ações que você executa em nosso site, por exemplo, elas ajudam a obter elementos visuais, usar recursos da página, fazer login na sua conta. Além de configurar funções essenciais, com esses cookies, podemos garantir a segurança e a eficiência do nosso site.",
            secondOptionTitle: "Arquivos de cookies analíticos",
            secondOptionDescription: "O objetivo desses cookies é fornecer dados quantitativos sobre as interações do usuário com nosso site. Além disso, esses arquivos de cookie coletam informações usadas para rastrear o desempenho do site. Geralmente, eles não coletam informações confidenciais e nos fornecem apenas estatísticas gerais, como o número de visitantes para diferentes páginas, fontes de tráfego e taxa de conversão para nos ajudar a melhorar o desempenho do site. Ao desativar esses cookies, não poderemos identificá -lo como um visitante.",
            thirdOptionTitle: "Arquivos de cookies publicitários",
            thirdOptionDescription: "Esses cookies são definidos por nossos parceiros de publicidade para fornecer análises de publicidade e remarketing comportamentais. Eles coletam informações de navegação para criar perfis de usuário e executar publicidade personalizada. Ao visitar outros sites, você verá anúncios personalizados com base no seu perfil criados de acordo com seus interesses e comportamento.",
            saveSettings: "Salvar configurações"
        },
        fr: {
            popupTitle: "Nous utilisons des fichiers cookies",
            popupDescription: "Nous activons tous les cookies par défaut pour assurer le bon fonctionnement de notre site Web, de notre publicité et de notre analyse en fonction de la ".concat(c("fr", "politique de confidentialité"), "."),
            settings: "Paramètres",
            acceptAll: "Accepter tout",
            cookieTitle: "Paramètres de fichiers de cookie",
            cookieSubTitle: "À propos des fichiers cookies",
            cookieDescription: "Nous utilisons des cookies pour vous donner accès à toutes les fonctionnalités du site Web ainsi que pour analyser, personnaliser et améliorer l'expérience utilisateur. Dans ce bloc, vous pouvez modifier les paramètres des fichiers cookies ou les accepter tous par défaut. Afin de mieux comprendre les fichiers de cookies et comment ils sont utilisés sur notre site Web, veuillez lire notre ".concat(c("fr", "politique de confidentialité"), "."),
            firstOptionTitle: "Fichiers de cookie nécessaires",
            firstOptionDescription: "Le but de ces cookies est de fournir le service, l'application ou la ressource demandée. Toute de vos demandes ne peut être effectuée correctement sans ces cookies. En général, leur objectif est de gérer les actions que vous effectuez sur notre site Web, par exemple, ils vous aident à obtenir des éléments visuels, à utiliser les ressources de la page, à vous connecter à votre compte. En plus de mettre en place des fonctions essentielles, avec ces cookies, nous pouvons assurer la sécurité et l'efficacité de notre site Web.",
            secondOptionTitle: "Fichiers de cookies analytiques",
            secondOptionDescription: "Le but de ces cookies est de fournir des données quantitatives sur les interactions utilisateur avec notre site Web. De plus, ces fichiers de cookies collectent des informations utilisées pour suivre les performances du site Web. Habituellement, ils ne collectent pas d'informations sensibles et ne nous fournissent que des statistiques générales, comme le nombre de visiteurs à différentes pages, sources de trafic et taux de conversion pour nous aider à améliorer les performances du site Web. En désactivant ces cookies, nous ne pourrons pas vous identifier en tant que visiteur.",
            thirdOptionTitle: "Fichiers de cookies publicitaires",
            thirdOptionDescription: "Ces cookies sont fixés par nos partenaires publicitaires afin de fournir une publicité comportementale et un remarketing Analytics. Ils collectent des informations de navigation pour créer des profils d'utilisateurs et exécuter la publicité personnalisée. Lorsque vous visitez d'autres sites Web, vous verrez des annonces personnalisées en fonction de votre profil créé en fonction de vos intérêts et comportements.",
            saveSettings: "Enregistrer les paramètres"
        },
        tr: {
            popupTitle: "Çerez dosyaları kullanıyoruz",
            popupDescription: "".concat(c("tr", "Gizlilik politikasına"), " göre web sitemizin, reklamımızın ve analitiklerimizin uygun şekilde işleyişini sağlamak için tüm çerezleri varsayılan olarak etkinleştiririz."),
            settings: "Ayarlar",
            acceptAll: "Hepsini kabul et",
            cookieTitle: "Çerez Dosyaları Ayarları",
            cookieSubTitle: "Çerez dosyaları hakkında",
            cookieDescription: "Çerezleri, tüm web sitesi özelliklerine erişim sağlamak ve kullanıcı deneyimini analiz etmek, kişiselleştirmek ve geliştirmek için kullanırız. Bu blokta, çerez dosyaları ayarlarını değiştirebilir veya varsayılan olarak hepsini kabul edebilirsiniz. Çerez dosyalarının ne olduğunu ve web sitemizde nasıl kullanıldıklarını daha iyi anlamak için lütfen ".concat(c("tr", "Gizlilik Politikamızı"), " okuyun."),
            firstOptionTitle: "Gerekli çerez dosyaları",
            firstOptionDescription: "Bu çerezlerin amacı, istenen hizmeti, başvuruyu veya kaynağı sunmaktır. Bu çerezler olmadan isteklerinizden herhangi biri düzgün yapılamaz. Genel olarak, amaçları web sitemizde gerçekleştirdiğiniz işlemleri yönetmektir, örneğin görsel öğeler almanıza, sayfa kaynaklarını kullanmanıza, hesabınızda oturum açmanıza yardımcı olurlar. Temel işlevleri ayarlamanın yanı sıra, bu çerezlerle, web sitemizin güvenliğini ve verimliliğini sağlayabiliriz.",
            secondOptionTitle: "Analitik çerez dosyaları",
            secondOptionDescription: "Bu çerezlerin amacı, web sitemizle kullanıcı etkileşimleri hakkında nicel veriler sağlamaktır. Ayrıca, bu çerez dosyaları web sitesi performansını izlemek için kullanılan bilgileri toplar. Genellikle, hassas bilgileri toplamazlar ve bize web sitesi performansını iyileştirmemize yardımcı olmak için farklı sayfalara, trafik kaynaklarına ve dönüşüm oranı ziyaretçilerinin sayısı gibi genel istatistikler sağlamazlar. Bu çerezleri devre dışı bırakarak sizi ziyaretçi olarak tanımlayamayacağız.",
            thirdOptionTitle: "Reklam çerez dosyaları",
            thirdOptionDescription: "Bu çerezler, davranışsal reklamcılık ve yeniden pazarlama analizi sağlamak için reklam ortaklarımız tarafından belirlenir. Kullanıcı profilleri oluşturmak ve kişiselleştirilmiş reklamcılık yapmak için tarama bilgileri toplarlar. Diğer web sitelerini ziyaret ettiğinizde, ilgi alanlarınıza ve davranışlarınıza göre oluşturulan profilinize göre özelleştirilmiş reklamlar göreceksiniz.",
            saveSettings: "Ayarları kaydet"
        },
        nl: {
            popupTitle: "We gebruiken cookiebestanden",
            popupDescription: "We activeren standaard alle cookies om te zorgen voor de goede werking van onze website, advertentie en analyses volgens het ".concat(c("nl", "privacybeleid"), "."),
            settings: "Instellingen",
            acceptAll: "Accepteer alles",
            cookieTitle: "Cookie Files -instellingen",
            cookieSubTitle: "Over cookiebestanden",
            cookieDescription: "We gebruiken cookies om u toegang te geven tot alle websitefuncties en om gebruikerservaring te analyseren, te personaliseren en te verbeteren. In dit blok kunt u de instellingen van de cookiebestanden wijzigen of ze standaard allemaal accepteren. Lees ons ".concat(c("nl", "privacybeleid"), " om een ​​beter inzicht te krijgen in wat cookiebestanden zijn en hoe ze op onze website worden gebruikt."),
            firstOptionTitle: "Noodzakelijke cookiebestanden",
            firstOptionDescription: "Het doel van deze cookies is het leveren van de gevraagde service, applicatie of bron. Elk van uw verzoeken kan niet correct worden gedaan zonder deze cookies. Over het algemeen is het hun doel om de acties die u op onze website uitvoert te beheren, bijvoorbeeld, ze helpen u om visuele elementen te krijgen, paginabronnen te gebruiken, u aan te melden bij uw account. Naast het opzetten van essentiële functies, met deze cookies, kunnen we zorgen voor de beveiliging en efficiëntie van onze website.",
            secondOptionTitle: "Analytische cookiebestanden",
            secondOptionDescription: "Het doel van deze cookies is om kwantitatieve gegevens te verstrekken over gebruikersinteracties met onze website. Ook verzamelen deze cookiebestanden informatie die wordt gebruikt om de prestaties van de websites bij te houden. Meestal verzamelen ze geen gevoelige informatie en bieden ze ons alleen algemene statistieken, zoals het aantal bezoekers van verschillende pagina's, verkeersbronnen en conversieratio om ons te helpen de website -prestaties te verbeteren. Door deze cookies uit te schakelen, kunnen we u niet als bezoeker identificeren.",
            thirdOptionTitle: "Reclame cookiebestanden",
            thirdOptionDescription: "Deze cookies worden vastgesteld door onze advertentiepartners om gedragsadvertenties en remarketinganalyses te bieden. Ze verzamelen browsingsinformatie om gebruikersprofielen te bouwen en gepersonaliseerde advertenties uit te voeren. Wanneer u andere websites bezoekt, ziet u aangepaste advertenties op basis van uw profiel dat is gemaakt volgens uw interesses en gedrag.",
            saveSettings: "Instellingen opslaan"
        },
        cz: {
            popupTitle: "Používáme soubory cookie",
            popupDescription: "Ve výchozím nastavení aktivujeme všechny soubory cookie, abychom zajistili správné fungování našich webových stránek, reklamy a analytiků podle ".concat(c("cz", "zásad ochrany osobních údajů"), "."),
            settings: "Nastavení",
            acceptAll: "Přijmout vše",
            cookieTitle: "Nastavení souborů souborů cookie",
            cookieSubTitle: "O souborech cookie",
            cookieDescription: "Používáme soubory cookie, abychom vám poskytli přístup ke všem funkcím webových stránek a také k analýze, personalizaci a zlepšování uživatelských zkušeností. V tomto bloku můžete ve výchozím nastavení změnit nastavení souborů souborů cookie nebo je všechny přijmout. Abychom lépe porozuměli tomu, co jsou soubory cookie a jak se používají na našich webových stránkách, přečtěte si prosím naše ".concat(c("cz", "zásady ochrany osobních údajů"), "."),
            firstOptionTitle: "Nezbytné soubory cookie",
            firstOptionDescription: "Účelem těchto souborů cookie je dodat požadovanou službu, aplikaci nebo zdroj. Bez těchto souborů cookie nelze správně provádět některá z vašich požadavků. Obecně je jejich účelem spravovat akce, které provádíte na našem webu, např. Pomáhají vám získat vizuální prvky, používat zdroje stránky, přihlásit se ke svému účtu. Kromě nastavení základních funkcí, s těmito soubory cookie, můžeme zajistit zabezpečení a efektivitu našeho webu.",
            secondOptionTitle: "Analytické soubory cookie",
            secondOptionDescription: "Účelem těchto souborů cookie je poskytnout kvantitativní údaje o uživatelských interakcích s naším webem. Tyto soubory cookie také shromažďují informace, které se používají ke sledování výkonu webových stránek. Obvykle neshromažďují citlivé informace a neposkytují nám pouze obecné statistiky, jako je počet návštěvníků různých stránek, zdroje provozu a míru konverze, aby nám pomohl zlepšit výkon webových stránek. Zakázáním těchto cookies vás nebudeme moci identifikovat jako návštěvníka.",
            thirdOptionTitle: "Reklamní soubory cookie",
            thirdOptionDescription: "Tyto soubory cookie jsou stanoveny našimi reklamními partnery, aby poskytovali behaviorální reklamu a remarketingovou analýzu. Shromažďují informace o procházení pro vytváření uživatelských profilů a provozování personalizované reklamy. Když navštívíte jiné webové stránky, uvidíte přizpůsobené reklamy na základě vašeho profilu vytvořeného podle vašich zájmů a chování.",
            saveSettings: "Uložit nastavení"
        },
        hu: {
            popupTitle: "Cookie fájlokat használunk",
            popupDescription: "Alapértelmezés szerint aktiváljuk az összes sütit, hogy biztosítsuk weboldalunk, a hirdetés és az elemzés megfelelő működését az ".concat(c("hu", "adatvédelmi irányelvek"), " szerint."),
            settings: "Beállítások",
            acceptAll: "Mindent elfogad",
            cookieTitle: "Cookie fájlok beállításai",
            cookieSubTitle: "A süti fájlokról",
            cookieDescription: "A sütik segítségével hozzáférést biztosítunk az összes weboldal funkcióhoz, valamint a felhasználói élmény elemzéséhez, személyre szabásához és javításához. Ebben a blokkban megváltoztathatja a Cookie -fájlok beállításait, vagy alapértelmezés szerint elfogadhatja azokat. Annak érdekében, hogy jobban megértsük, mi a cookie fájlok és hogyan használják fel a weboldalunkon, kérjük, olvassa el az ".concat(c("hu", "adatvédelmi irányelveinket"), "."),
            firstOptionTitle: "Szükséges cookie-fájlok",
            firstOptionDescription: "Ezeknek a sütiknek a célja a kért szolgáltatás, alkalmazás vagy erőforrás nyújtása. Bármelyik kérését nem lehet megfelelően megtenni ezen sütik nélkül. Általánosságban elmondható, hogy célja a weboldalunkon végrehajtott műveletek kezelése, például segítenek a vizuális elemek beszerzésében, az oldali erőforrások felhasználásában, bejelentkezni a fiókjába. Az alapvető funkciók beállítása mellett ezekkel a sütikkel biztosíthatjuk weboldalunk biztonságát és hatékonyságát.",
            secondOptionTitle: "Analitikai cookie-fájlok",
            secondOptionDescription: "Ezeknek a sütiknek a célja, hogy mennyiségi adatokat szolgáltatjon a weboldalunkkal való felhasználói interakciókról. Ezenkívül ezek a süti fájlok olyan információkat gyűjtenek, amelyeket a webhely teljesítményének nyomon követésére használnak. Általában nem gyűjtenek érzékeny információkat, és csak általános statisztikákat szolgáltatnak nekünk, például a különböző oldalak, forgalmi források és konverziós arány látogatói számát, hogy javítsák a webhely teljesítményét. Ezeknek a sütiknek a letiltásával nem tudjuk azonosítani Önt látogatóként.",
            thirdOptionTitle: "Reklám cookie-fájlok",
            thirdOptionDescription: "Ezeket a sütiket hirdetési partnereink állítják be, hogy viselkedési hirdetési és remarketing elemzéseket biztosítsanak. Összegyűjtik a böngészési információkat a felhasználói profilok felépítéséhez és a személyre szabott hirdetések futtatásához. Ha más webhelyeket látogat meg, akkor testreszabott hirdetéseket fog látni az Ön érdekeinek és viselkedésének megfelelően létrehozott profilja alapján.",
            saveSettings: "Beállítások mentése"
        },
        sv: {
            popupTitle: "Vi använder cookie -filer",
            popupDescription: "Vi aktiverar alla cookies som standard för att säkerställa korrekt funktion på vår webbplats, annons och analys enligt ".concat(c("sv", "sekretesspolicyn"), "."),
            settings: "inställningar",
            acceptAll: "Acceptera alla",
            cookieTitle: "Inställningar för cookie -filer",
            cookieSubTitle: "Om cookie -filer",
            cookieDescription: "Vi använder cookies för att ge dig tillgång till alla webbplatsfunktioner samt för att analysera, anpassa och förbättra användarupplevelsen. I det här blocket kan du ändra inställningarna för cookie -filer eller acceptera dem alla som standard. För att få en bättre förståelse för vad cookie -filer är och hur de används på vår webbplats, läs vår ".concat(c("sv", "integritetspolicy"), "."),
            firstOptionTitle: "Nödvändiga kakfiler",
            firstOptionDescription: "Syftet med dessa kakor är att leverera den begärda tjänsten, applikationen eller resursen. Någon av dina förfrågningar kan inte göras ordentligt utan dessa kakor. I allmänhet är deras syfte att hantera de åtgärder du utför på vår webbplats, till exempel hjälper de dig att få visuella element, använda sidresurser, logga in på ditt konto. Förutom att ställa in viktiga funktioner, med dessa kakor, kan vi säkerställa säkerheten och effektiviteten på vår webbplats.",
            secondOptionTitle: "Analytiska kakfiler",
            secondOptionDescription: "Syftet med dessa cookies är att tillhandahålla kvantitativa data om användarinteraktioner med vår webbplats. Dessa cookie -filer samlar också in information som används för att spåra webbplatsprestanda. Vanligtvis samlar de inte in känslig information och ger oss endast allmän statistik, som antalet besökare på olika sidor, trafikkällor och konverteringsfrekvens för att hjälpa oss att förbättra webbplatsens prestanda. Genom att inaktivera dessa kakor kommer vi inte att kunna identifiera dig som besökare.",
            thirdOptionTitle: "Reklamkakfiler",
            thirdOptionDescription: "Dessa kakor ställs in av våra reklampartners för att tillhandahålla beteendemässig reklam och ommarknadsföringsanalys. De samlar in surfningsinformation för att bygga användarprofiler och köra personlig reklam. När du besöker andra webbplatser ser du anpassade annonser baserat på din profil skapad enligt dina intressen och beteende.",
            saveSettings: "Spara inställningar"
        },
        cn: {
            popupTitle: "我们使用cookie文件",
            popupDescription: "默认情况下，我们激活所有Cookie，以确保根据".concat(c("cn", "隐私政策"), "的网站，广告和分析的正确运行。"),
            privacyText: "",
            settings: "设置",
            acceptAll: "全都接受",
            cookieTitle: "cookie文件设置",
            cookieSubTitle: "关于cookie文件",
            cookieDescription: "我们使用cookie为您提供所有网站功能的访问权限以及分析，个性化和改善用户体验。在此块中，您可以更改cookie文件设置或默认情况下接受所有内容。为了更好地了解cookie文件是什么以及它们在我们的网站上的使用方式，请阅读我们的".concat(c("cn", "隐私政策"), "。"),
            firstOptionTitle: "必要的cookie文件",
            firstOptionDescription: "这些cookie的目的是提供请求的服务，应用程序或资源。没有这些cookie，您的任何请求都无法正确完成。通常，它们的目的是管理您在我们网站上执行的操作，例如，它们帮助您获得视觉元素，使用页面资源，登录到您的帐户。除了设置基本功能外，使用这些cookie，我们还可以确保我们网站的安全性和效率。",
            secondOptionTitle: "分析cookie文件",
            secondOptionDescription: "这些cookie的目的是提供有关用户与我们网站交互的定量数据。另外，这些cookie文件收集用于跟踪网站性能的信息。通常，它们不会收集敏感信息，并仅向我们提供一般统计数据，例如不同页面，流量源和转换率的访问者数量，以帮助我们提高网站性能。通过禁用这些cookie，我们将无法将您识别为访客。",
            thirdOptionTitle: "广告cookie文件",
            thirdOptionDescription: "这些cookie是由我们的广告合作伙伴设定的，以提供行为广告和再营销分析。他们收集浏览信息以构建用户资料并运行个性化的广告。当您访问其他网站时，您会根据根据您的兴趣和行为创建的个人资料看到自定义的广告。",
            saveSettings: "保存设置"
        }
    }, u = function(e) {
        for (var i = e + "=", o = document.cookie.split(";"), t = 0; t < o.length; t++) {
            for (var n = o[t]; " " == n.charAt(0); )
                n = n.substring(1);
            if (0 == n.indexOf(i))
                return n.substring(i.length, n.length)
        }
        return ""
    }, d = ["en", "es", "ru", "de", "pl", "it", "tr", "fr", "pt-br", "nl", "cn", "cz", "ua", "hu", "sv"];
    function k(e) {
        return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        k(e)
    }
    function m(e, i) {
        for (var o = 0; o < i.length; o++) {
            var t = i[o];
            t.enumerable = t.enumerable || !1,
            t.configurable = !0,
            "value"in t && (t.writable = !0),
            Object.defineProperty(e, (n = t.key,
            a = void 0,
            a = function(e, i) {
                if ("object" !== k(e) || null === e)
                    return e;
                var o = e[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var t = o.call(e, i || "default");
                    if ("object" !== k(t))
                        return t;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === i ? String : Number)(e)
            }(n, "string"),
            "symbol" === k(a) ? a : String(a)), t)
        }
        var n, a
    }
    var v = (null === (s = document.getElementById("cookiePolicyModal")) || void 0 === s ? void 0 : s.getAttribute("data-project")) || "tm"
      , f = a.settings[v] || a.settings.tm
      , b = f.cookieDomain
      , h = f.setSettingsFunc
      , y = function() {
        function e() {
            !function(e, i) {
                if (!(e instanceof i))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var i, o, t;
        return i = e,
        (o = [{
            key: "setUserSettingsFunc",
            value: function(e) {
                var i, o, t;
                i = e,
                o = "".concat(a.serviceUsers, "users/profile?expand=settings"),
                (t = []).push("settings[cookieNecessary]=".concat(null == i ? void 0 : i.n)),
                t.push("settings[cookieAnalytics]=".concat(null == i ? void 0 : i.a)),
                t.push("settings[cookieTargeting]=".concat(null == i ? void 0 : i.t)),
                t = t.join("&"),
                fetch(o, {
                    method: "PUT",
                    headers: new Headers({
                        Authorization: u("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded"
                    }),
                    body: t
                }).then((function(e) {
                    return e.json()
                }
                )).then((function(e) {
                    return e
                }
                ))
            }
        }, {
            key: "setUserSettingsONEFunc",
            value: function(e) {}
        }]) && m(i.prototype, o),
        t && m(i, t),
        Object.defineProperty(i, "prototype", {
            writable: !1
        }),
        e
    }()
      , g = u("cp")
      , z = window.location.pathname || ""
      , C = null == z ? void 0 : z.split("/")
      , w = null == C ? void 0 : C.find((function(e) {
        return d.find((function(i) {
            return i === e
        }
        ))
    }
    ))
      , _ = null === (r = new URL(document.location)) || void 0 === r ? void 0 : r.searchParams
      , j = null == _ ? void 0 : _.get("lang")
      , D = p[function(e) {
        switch (e) {
        case "en":
        default:
            return "en";
        case "es":
            return "es";
        case "ru":
            return "ru";
        case "de":
            return "de";
        case "pl":
            return "pl";
        case "it":
            return "it";
        case "tr":
            return "tr";
        case "fr":
            return "fr";
        case "pt-br":
            return "pt-br";
        case "nl":
            return "nl";
        case "cn":
            return "cn";
        case "cz":
            return "cz";
        case "ua":
            return "ua";
        case "hu":
            return "hu";
        case "sv":
        case "se":
            return "sv"
        }
    }((null === (l = document.getElementById("cookiePolicyModal")) || void 0 === l ? void 0 : l.getAttribute("data-locale")) || j || w)] || p.en
      , O = '\n    <div id="CookiePolicy" class="CookiePolicy CookiePolicyModal">\n        <div class="CookiePolicy__info">\n            <p class="CookiePolicy__title CookiePolicy__text">\n                <svg class="CookiePolicy__image" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <g clip-path="url(#clip0_595_3947)">\n                    <path d="M29.0786 9.76219C27.9963 10.326 26.9158 9.94319 26.3793 9.15812C26.3209 9.07263 26.2238 9.02419 26.1204 9.02913C26.0909 9.0305 26.0611 9.03125 26.0312 9.03125C25.3446 9.03125 24.7392 8.685 24.3791 8.15781C24.3208 8.07244 24.2238 8.02425 24.1205 8.02913C24.0909 8.0305 24.0612 8.03125 24.0312 8.03125C22.9267 8.03125 22.0312 7.13581 22.0312 6.03125C22.0312 6.00131 22.032 5.97156 22.0334 5.94194C22.0382 5.83869 21.9901 5.74169 21.9047 5.68337C21.3775 5.32331 21.0312 4.71788 21.0312 4.03125C21.0312 4.00131 21.032 3.97162 21.0334 3.94206C21.0382 3.83862 20.9899 3.74156 20.9044 3.68319C20.1194 3.14675 19.7366 2.06619 20.3004 0.983938C18.6609 0.368625 16.8856 0.03125 15.0312 0.03125C6.747 0.03125 0.03125 6.747 0.03125 15.0312C0.03125 23.3155 6.747 30.0312 15.0312 30.0312C23.3155 30.0312 30.0312 23.3155 30.0312 15.0312C30.0312 13.1769 29.6939 11.4016 29.0786 9.76219Z" fill="#F28A39"/>\n                    <path d="M15.0312 30.0312C11.0246 30.0312 7.25781 28.471 4.42462 25.6379C1.59144 22.8047 0.03125 19.0379 0.03125 15.0312C0.03125 14.4789 0.479 14.0312 1.03125 14.0312C1.5835 14.0312 2.03125 14.4789 2.03125 15.0312C2.03125 22.1994 7.86306 28.0312 15.0312 28.0312C22.1994 28.0312 28.0312 22.1994 28.0312 15.0312C28.0312 14.4789 28.479 14.0312 29.0312 14.0312C29.5835 14.0312 30.0312 14.4789 30.0312 15.0312C30.0312 19.0379 28.471 22.8047 25.6379 25.6379C22.8047 28.471 19.0379 30.0312 15.0312 30.0312Z" fill="#D26E28"/>\n                    <path d="M1.03125 16.0312C0.479 16.0312 0.03125 15.5836 0.03125 15.0312C0.03125 11.0246 1.5915 7.25775 4.42462 4.42462C7.25775 1.5915 11.0246 0.03125 15.0312 0.03125C15.5835 0.03125 16.0312 0.478938 16.0312 1.03125C16.0312 1.58356 15.5835 2.03125 15.0312 2.03125C7.86306 2.03125 2.03125 7.86306 2.03125 15.0312C2.03125 15.5836 1.5835 16.0312 1.03125 16.0312Z" fill="#FFAA5A"/>\n                    <path d="M27.0312 8.03125C27.5835 8.03125 28.0312 7.58353 28.0312 7.03125C28.0312 6.47897 27.5835 6.03125 27.0312 6.03125C26.479 6.03125 26.0312 6.47897 26.0312 7.03125C26.0312 7.58353 26.479 8.03125 27.0312 8.03125Z" fill="#F28A39"/>\n                    <path d="M11.0312 13.0312C12.1358 13.0312 13.0312 12.1358 13.0312 11.0312C13.0312 9.92668 12.1358 9.03125 11.0312 9.03125C9.92668 9.03125 9.03125 9.92668 9.03125 11.0312C9.03125 12.1358 9.92668 13.0312 11.0312 13.0312Z" fill="#A55023"/>\n                    <path d="M10.2812 11.0312C10.6955 11.0312 11.0312 10.6955 11.0312 10.2812C11.0312 9.86704 10.6955 9.53125 10.2812 9.53125C9.86704 9.53125 9.53125 9.86704 9.53125 10.2812C9.53125 10.6955 9.86704 11.0312 10.2812 11.0312Z" fill="#D26E28"/>\n                    <path d="M20.0312 23.0312C21.1358 23.0312 22.0312 22.1358 22.0312 21.0312C22.0312 19.9267 21.1358 19.0312 20.0312 19.0312C18.9267 19.0312 18.0312 19.9267 18.0312 21.0312C18.0312 22.1358 18.9267 23.0312 20.0312 23.0312Z" fill="#A55023"/>\n                    <path d="M19.2812 21.0312C19.6955 21.0312 20.0312 20.6955 20.0312 20.2812C20.0312 19.867 19.6955 19.5312 19.2812 19.5312C18.867 19.5312 18.5312 19.867 18.5312 20.2812C18.5312 20.6955 18.867 21.0312 19.2812 21.0312Z" fill="#D26E28"/>\n                    <path d="M25.0312 18.0312C26.1358 18.0312 27.0312 17.1358 27.0312 16.0312C27.0312 14.9267 26.1358 14.0312 25.0312 14.0312C23.9267 14.0312 23.0312 14.9267 23.0312 16.0312C23.0312 17.1358 23.9267 18.0312 25.0312 18.0312Z" fill="#A55023"/>\n                    <path d="M24.2812 16.0312C24.6955 16.0312 25.0312 15.6955 25.0312 15.2812C25.0312 14.867 24.6955 14.5312 24.2812 14.5312C23.867 14.5312 23.5312 14.867 23.5312 15.2812C23.5312 15.6955 23.867 16.0312 24.2812 16.0312Z" fill="#D26E28"/>\n                    <path d="M23.5312 4.03125C23.8074 4.03125 24.0312 3.80739 24.0312 3.53125C24.0312 3.25511 23.8074 3.03125 23.5312 3.03125C23.2551 3.03125 23.0312 3.25511 23.0312 3.53125C23.0312 3.80739 23.2551 4.03125 23.5312 4.03125Z" fill="#F28A39"/>\n                    <path d="M28.5312 5.03125C28.8074 5.03125 29.0312 4.80739 29.0312 4.53125C29.0312 4.25511 28.8074 4.03125 28.5312 4.03125C28.2551 4.03125 28.0312 4.25511 28.0312 4.53125C28.0312 4.80739 28.2551 5.03125 28.5312 5.03125Z" fill="#F28A39"/>\n                    <path d="M20.0312 14.0312C20.5835 14.0312 21.0312 13.5835 21.0312 13.0312C21.0312 12.479 20.5835 12.0312 20.0312 12.0312C19.479 12.0312 19.0312 12.479 19.0312 13.0312C19.0312 13.5835 19.479 14.0312 20.0312 14.0312Z" fill="#A55023"/>\n                    <path d="M13.198 29.1978C13.7503 29.1978 14.198 28.75 14.198 28.1978C14.198 27.6455 13.7503 27.1978 13.198 27.1978C12.6457 27.1978 12.198 27.6455 12.198 28.1978C12.198 28.75 12.6457 29.1978 13.198 29.1978Z" fill="#A55023"/>\n                    <path d="M7.03125 21.0312C7.58353 21.0312 8.03125 20.5835 8.03125 20.0312C8.03125 19.479 7.58353 19.0312 7.03125 19.0312C6.47897 19.0312 6.03125 19.479 6.03125 20.0312C6.03125 20.5835 6.47897 21.0312 7.03125 21.0312Z" fill="#A55023"/>\n                    <path d="M15.5312 8.86475C16.0835 8.86475 16.5312 8.41703 16.5312 7.86475C16.5312 7.31246 16.0835 6.86475 15.5312 6.86475C14.979 6.86475 14.5312 7.31246 14.5312 7.86475C14.5312 8.41703 14.979 8.86475 15.5312 8.86475Z" fill="#D26E28"/>\n                    <path d="M17.198 15.3647C17.7503 15.3647 18.198 14.917 18.198 14.3647C18.198 13.8125 17.7503 13.3647 17.198 13.3647C16.6457 13.3647 16.198 13.8125 16.198 14.3647C16.198 14.917 16.6457 15.3647 17.198 15.3647Z" fill="#D26E28"/>\n                    <path d="M2.53125 20.0312C3.08353 20.0312 3.53125 19.5835 3.53125 19.0312C3.53125 18.479 3.08353 18.0312 2.53125 18.0312C1.97897 18.0312 1.53125 18.479 1.53125 19.0312C1.53125 19.5835 1.97897 20.0312 2.53125 20.0312Z" fill="#A55023"/>\n                    <path d="M13.5312 18.0312C13.8074 18.0312 14.0312 17.8074 14.0312 17.5312C14.0312 17.2551 13.8074 17.0312 13.5312 17.0312C13.2551 17.0312 13.0312 17.2551 13.0312 17.5312C13.0312 17.8074 13.2551 18.0312 13.5312 18.0312Z" fill="#A55023"/>\n                    <path d="M18.5312 25.0312C18.8074 25.0312 19.0312 24.8074 19.0312 24.5312C19.0312 24.2551 18.8074 24.0312 18.5312 24.0312C18.2551 24.0312 18.0312 24.2551 18.0312 24.5312C18.0312 24.8074 18.2551 25.0312 18.5312 25.0312Z" fill="#A55023"/>\n                    <path d="M18.5312 11.0312C18.8074 11.0312 19.0312 10.8074 19.0312 10.5312C19.0312 10.2551 18.8074 10.0312 18.5312 10.0312C18.2551 10.0312 18.0312 10.2551 18.0312 10.5312C18.0312 10.8074 18.2551 11.0312 18.5312 11.0312Z" fill="#A55023"/>\n                    <path d="M6.198 14.0312C6.47414 14.0312 6.698 13.8074 6.698 13.5312C6.698 13.2551 6.47414 13.0312 6.198 13.0312C5.92186 13.0312 5.698 13.2551 5.698 13.5312C5.698 13.8074 5.92186 14.0312 6.198 14.0312Z" fill="#D26E28"/>\n                    <path d="M15.3645 23.5312C15.6406 23.5312 15.8645 23.3074 15.8645 23.0312C15.8645 22.7551 15.6406 22.5312 15.3645 22.5312C15.0884 22.5312 14.8645 22.7551 14.8645 23.0312C14.8645 23.3074 15.0884 23.5312 15.3645 23.5312Z" fill="#D26E28"/>\n                    <path d="M9.698 25.5312C9.97414 25.5312 10.198 25.3074 10.198 25.0312C10.198 24.7551 9.97414 24.5312 9.698 24.5312C9.42186 24.5312 9.198 24.7551 9.198 25.0312C9.198 25.3074 9.42186 25.5312 9.698 25.5312Z" fill="#D26E28"/>\n                    <path d="M14.3645 2.69775C14.6406 2.69775 14.8645 2.4739 14.8645 2.19775C14.8645 1.92161 14.6406 1.69775 14.3645 1.69775C14.0884 1.69775 13.8645 1.92161 13.8645 2.19775C13.8645 2.4739 14.0884 2.69775 14.3645 2.69775Z" fill="#A55023"/>\n                    <path d="M9.53125 7.03125C9.80739 7.03125 10.0312 6.80739 10.0312 6.53125C10.0312 6.25511 9.80739 6.03125 9.53125 6.03125C9.25511 6.03125 9.03125 6.25511 9.03125 6.53125C9.03125 6.80739 9.25511 7.03125 9.53125 7.03125Z" fill="#A55023"/>\n                    </g>\n                    <defs>\n                    <clipPath id="clip0_595_3947">\n                    <rect width="30" height="30" fill="white" transform="translate(0.03125 0.03125)"/>\n                    </clipPath>\n                    </defs>\n                </svg>\n                '.concat(D.popupTitle, '\n            </p>\n            <p class="CookiePolicy__describe CookiePolicy__text">\n                ').concat(D.popupDescription, '\n            </p>\n        </div>\n        <div class="CookiePolicy__actions">\n            <button\n                id="CookiePopupSettings"\n                class="CookiePolicy__button CookiePolicy__button--grey CookiePolicy__text"\n            >\n                ').concat(D.settings, '\n            </button>\n            <button\n                class="CookiePolicy__button CookiePolicy__button--blue AcceptAllCookie CookiePolicy__text"\n            >\n                ').concat(D.acceptAll, "\n            </button>\n        </div>\n    </div>\n")
      , P = '\n    <div id="CookieSettings" class="CookiePopup CookiePolicyModal CookiePolicyModal--hide">\n        <div class="CookiePopup__inner">\n            <span class="CookiePopup__close CookieModalClose"></span>\n            <div class="CookiePopup__info">\n                <div  class="CookiePopup__infoInner">\n                    <p class="CookiePopup__title CookiePolicy__text">'.concat(D.cookieTitle, '</p>\n                    <p class="CookiePopup__subtitle CookiePolicy__text">').concat(D.cookieSubTitle, '</p>\n                    <p class="CookiePopup__describe CookiePolicy__text">\n                        ').concat(D.cookieDescription, '\n                    </p>\n                </div>\n                <div class="CookiePopup__options">\n                    <div id="option1" class="CookiePopup__option">\n                        <p class="CookiePopup__optionTitle CookiePolicy__text">\n                            <i id="optionArrow1" class="CookiePopup__arrow CookiePopup__arrow--down"></i>\n                            ').concat(D.firstOptionTitle, '\n                        </p>\n                        <label role="checkbox" aria-checked="true">\n                            <input\n                                class="CookiePopup__checkboxDefault"\n                                disabled="true"\n                                checked="true"\n                                type="checkbox"\n                                id="check1"\n                            ></input>\n                            <i id="visualCheck1" class="CookiePopup__checkbox CookiePopup__checkbox--disabled"></i>\n                        </label>\n                        <p id="description1" class="CookiePopup__optionDescribe CookiePopup__optionDescribe--hide CookiePolicy__text">\n                            ').concat(D.firstOptionDescription, '\n                        </p>\n                    </div>\n\n                    <div id="option2" class="CookiePopup__option">\n                        <p class="CookiePopup__optionTitle CookiePolicy__text">\n                            <i id="optionArrow2" class="CookiePopup__arrow CookiePopup__arrow--down"></i>\n                            ').concat(D.secondOptionTitle, '\n                        </p>\n                        <label role="checkbox" aria-checked="true">\n                            <input\n                                class="CookiePopup__checkboxDefault"\n                                type="checkbox"\n                                id="check2"\n                                checked="true"\n                            ></input>\n                            <i class="CookiePopup__checkbox CookiePopup__checkbox--clickable"></i>\n                        </label>\n                        <p id="description2" class="CookiePopup__optionDescribe CookiePopup__optionDescribe--hide CookiePolicy__text">\n                            ').concat(D.secondOptionDescription, '\n                        </p>\n                    </div>\n\n                    <div id="option3" class="CookiePopup__option">\n                        <p class="CookiePopup__optionTitle CookiePolicy__text">\n                            <i id="optionArrow3" class="CookiePopup__arrow CookiePopup__arrow--down"></i>\n                            ').concat(D.thirdOptionTitle, '\n                        </p>\n                        <label role="checkbox" aria-checked="true">\n                            <input\n                                class="CookiePopup__checkboxDefault"\n                                type="checkbox"\n                                id="check3"\n                                checked="true"\n                            ></input>\n                            <i class="CookiePopup__checkbox CookiePopup__checkbox--clickable"></i>\n                        </label>\n                        <p id="description3" class="CookiePopup__optionDescribe CookiePopup__optionDescribe--hide CookiePolicy__text">\n                            ').concat(D.thirdOptionDescription, '\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class="CookiePopup__actions">\n                <button\n                    class="CookiePolicy__button CookiePolicy__button--grey AcceptCookie CookiePolicy__text"\n                >\n                    ').concat(D.saveSettings, '\n                </button>\n                <button\n                    class="CookiePolicy__button CookiePolicy__button--blue AcceptAllCookie CookiePolicy__text"\n                >\n                    <i class="CookiePopup__iconCheck"></i>\n                    ').concat(D.acceptAll, '\n                </button>\n            </div>\n        </div>\n        <div class="CookiePopup__overlay CookieModalClose"></div>\n    </div>\n');
    if (!g) {
        var T = function() {
            var e = document.getElementById("CookiePolicy")
              , i = document.getElementById("CookieSettings");
            e.classList.toggle("CookiePolicyModal--hide"),
            i.classList.toggle("CookiePolicyModal--hide")
        }
          , A = function(e) {
            null == e || e.forEach((function(e) {
                var i, o, t;
                o = b,
                t = "/",
                u(i = e) && (document.cookie = "".concat(i, "=; expires=Thu, 01 Jan 1970 00:00:00 GMT").concat(o ? "; domain=".concat(o) : "").concat(t ? "; path=".concat(t) : ""))
            }
            ))
        }
          , S = function() {
            var e = [];
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? e = [1, 1, 1] : document.querySelectorAll(".CookiePopup__checkboxDefault").forEach((function(i) {
                e.push(i.checked ? 1 : 0)
            }
            ));
            var i = {
                n: 1,
                a: e[1],
                t: e[2]
            };
            if (function(e, i, o, t) {
                var n = new Date;
                n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3);
                var a = "expires=" + n.toUTCString();
                document.cookie = "".concat(e, "=").concat(i, ";").concat(a, ";path=/;domain=").concat(t)
            }("cp", JSON.stringify(i), 14, b),
            !e[1]) {
                var o;
                A(a.analyticsCookies);
                var t = function() {
                    for (var e = document.cookie.split(";"), i = {}, o = 0; o < e.length; o++) {
                        var t = e[o].split("=");
                        i[(t[0] + "").trim()] = unescape(t.slice(1).join("="))
                    }
                    return i
                }()
                  , n = null === (o = Object.keys(t)) || void 0 === o ? void 0 : o.filter((function(e) {
                    return /_ga_/.test(e)
                }
                ));
                A(n)
            }
            (new y)[h](i),
            document.querySelectorAll(".CookiePolicyModal").forEach((function(e) {
                e.classList.add("CookiePolicyModal--hide")
            }
            ))
        }
          , E = O + P
          , x = document.createElement("div");
        x.setAttribute("id", "cookie-policy-modal"),
        x.innerHTML = E,
        document.getElementsByTagName("body")[0].appendChild(x),
        document.getElementById("CookiePopupSettings").addEventListener("click", T, !1),
        document.querySelectorAll(".CookieModalClose").forEach((function(e) {
            e.addEventListener("click", (function() {
                return T()
            }
            ), !1)
        }
        )),
        document.querySelectorAll(".CookiePopup__option").forEach((function(e) {
            e.addEventListener("click", (function() {
                return function(e) {
                    var i = e.querySelector(".CookiePopup__optionDescribe")
                      , o = e.querySelector(".CookiePopup__arrow");
                    i.classList.toggle("CookiePopup__optionDescribe--hide"),
                    o.classList.toggle("CookiePopup__arrow--down"),
                    o.classList.toggle("CookiePopup__arrow--up")
                }(e)
            }
            ), !1)
        }
        )),
        document.getElementById("visualCheck1").addEventListener("click", (function(e) {
            e.stopPropagation()
        }
        ), !1),
        document.querySelectorAll(".CookiePopup__checkbox--clickable").forEach((function(e) {
            e.addEventListener("click", (function() {
                var i;
                (i = e).checked = !i.checked
            }
            ), !1)
        }
        )),
        document.querySelectorAll(".AcceptCookie").forEach((function(e) {
            e.addEventListener("click", (function() {
                return S()
            }
            ), !1)
        }
        )),
        document.querySelectorAll(".AcceptAllCookie").forEach((function(e) {
            e.addEventListener("click", (function() {
                return S(!0)
            }
            ), !1)
        }
        ))
    }
}
)();
