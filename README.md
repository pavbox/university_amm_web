
## amm page

```

  Небольшой сайт для группы в универе. Будет содержать расписание, всякие поментки и прочее.
  Банально для удобства. Тут проще хранить важную инфу, чем в чате.

```

## How to install

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

## DOCS for project

[project info](./PROJECT_INFO.md)
[feature list](./FEATURE_LIST.md)
[how to contribute (guide)](./HOW_TO_CONTRIBUTE.md)
[simple todo list (what I'm doing now)](./TODO_LIST.md)

ps: maybe todo will move to issues for project.
