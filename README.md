
## amm page

```

  Небольшой сайт для группы в универе. Будет содержать расписание, всякие поментки и прочее.
  Банально для удобства. Тут проще хранить важную инфу, чем в чате.

```

Software stack

```

backend:

- Python (Flask framework)
- Mongo Database
- RESTful API
- Docker

frontend:

- React (native Javascript)
- Redux router

```

Architecture and guides

```

- SOA + MVC
- pep8 style guides

```

Advanced Things

```

- try to use codecov
- try CI/CD (backend experience)
- maybe python hot-reload

```

How to install

```shell

# create virtual environment for using packages and dependencies locally
$ virtualenv venv

# run virtual environment
$ source venv/bin/activate

# check that's venv is active
$ which python # will be in locally ./venv/bin/python

# deactivate venv if needed
$ deactivate

# or use scripts
source scripts/install.sh # for install dependencies

# basically you need to execute this two scripts every terminal session
source scripts/prepare.sh # setup virtual environment and PATHs
sh scripts/run.sh # run app

```

Feature List

- [ ] schedule on current semester (automatic highlight if week is even)
- [ ] teacher's names
- [ ] storage of files
- [ ] information for subject's exams
- [ ] public polls
