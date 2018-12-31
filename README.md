
## amm page

```

  Небольшой сайт для группы в универе. Будет содержать расписание, всякие поментки и прочее.
  Банально для удобства. Тут проще хранить важную инфу, чем в чате.

```

Software stack

```

backend:

- Python (Flask framework)
- RESTful API
- Docker

frontend:

- React (native Javascript)

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

```

# create virtual environment for using packages and dependencies locally
$ virtualenv venv

# run virtual environment
$ source venv/bin/activate

# check that's venv is active
$ which python # will be in locally ./venv/bin/python

# deactivate venv if needed
$ deactivate

```

Feature List

[ ] schedule on current semester (automatic highlight if week is even)
[ ] teacher's names
[ ] storage of files
[ ] information for subject's exams
[ ] public polls
