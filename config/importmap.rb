# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"

pin "htm", to: "https://ga.jspm.io/npm:htm@3.1.0/dist/htm.module.js"
pin "react", to: "https://ga.jspm.io/npm:react@17.0.2/index.js"
pin "react-dom", to: "https://ga.jspm.io/npm:react-dom@17.0.2/index.js"
pin "object-assign", to: "https://ga.jspm.io/npm:object-assign@4.1.1/index.js"
pin "scheduler", to: "https://ga.jspm.io/npm:scheduler@0.20.2/index.js"
pin "react-clock", to: "https://ga.jspm.io/npm:react-clock@3.0.0/dist/umd/index.js"
pin "@wojtekmaj/date-utils", to: "https://ga.jspm.io/npm:@wojtekmaj/date-utils@1.0.3/dist/umd/index.js"
pin "merge-class-names", to: "https://ga.jspm.io/npm:merge-class-names@1.4.2/dist/esm/index.js"
pin "prop-types", to: "https://ga.jspm.io/npm:prop-types@15.8.0/index.js"
pin "react-live-clock", to: "https://ga.jspm.io/npm:react-live-clock@5.6.1/lib/index.js"
pin "moment", to: "https://ga.jspm.io/npm:moment@2.29.1/moment.js"
pin "moment-timezone", to: "https://ga.jspm.io/npm:moment-timezone@0.5.34/index.js"
pin "react-moment", to: "https://ga.jspm.io/npm:react-moment@1.1.1/dist/index.js"
pin_all_from "app/javascript/components", under: "components"
