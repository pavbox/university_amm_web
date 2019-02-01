
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
- Redux and router
- _bem styles
- webpack 4
- stylus or css

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

Simple task list

- [ ] setup mainpage basic design by react
- [x] moves to stylus or postcss
- [ ] make a plan in the notebook
- [ ] setup webpack production/dev mode

MAYBE MOVE TO NODEJS INSTEAD OF PYTHON?
